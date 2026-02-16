"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { Bell, ChevronDown, Menu, X, User, Settings } from "lucide-react";

import { RootState } from "@/redux/store";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// --- Link Configurations ---
const GUEST_LINKS = [
  { label: "Home", href: "/" },
  { label: "Jobs", href: "/jobs" },
  { label: "Inbox ", href: "/inbox" },
  { label: "How It Works", href: "/#how-it-works" }, // ID Link
  { label: "Support", href: "/support" },
];

const COMPANY_LINKS = [
  { label: "Home", href: "/" },
  { label: "Jobs", href: "/auth/company/jobs" },
  { label: "Inbox", href: "/auth/inbox" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Support", href: "/support" },
];

const EMPLOYER_LINKS = [
  { label: "Home", href: "/" },
  { label: "Jobs", href: "/auth/employer/jobs" },
  { label: "Inbox", href: "/auth/inbox" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Support", href: "/support" },
];

const JOB_SEEKER_LINKS = [
  { label: "Home", href: "/" },
  { label: "Jobs", href: "/auth/jobseaker/jobs" },
  { label: "Inbox", href: "/auth/inbox" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Support", href: "/support" },
];

export default function Navbar() {
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hash, setHash] = useState("");

  // Get Auth State
  const { user, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );
  useEffect(() => {

    setHash(window.location.hash);

    const handleHashChange = () => {
      setHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("popstate", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("popstate", handleHashChange);
    };
  }, []);

  // --- Determine Links based on Role ---
  let navLinks = GUEST_LINKS;

  if (isAuthenticated && user?.role) {
    switch (user.role) {
      case "company":
        navLinks = COMPANY_LINKS;
        break;
      case "employer":
        navLinks = EMPLOYER_LINKS;
        break;
      case "job-seeker":
        navLinks = JOB_SEEKER_LINKS;
        break;
      default:
        navLinks = GUEST_LINKS;
    }
  }

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  
  // Link click handler to update hash immediately and close menu
  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    
    if (href.includes("#")) {
      const newHash = href.substring(href.indexOf("#"));
      setHash(newHash);
    } else {
      setHash("");
    }
  };

  return (
    <header className="w-full bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="mx-auto flex h-[90px] w-full max-w-[1393px] items-center justify-between px-4 md:px-6">

        {/* Left: Logo */}
        <div className="flex-shrink-0 cursor-pointer z-50">
          <Link href="/" onClick={() => handleLinkClick("/")}>
            <Image
              src="/image/logo.svg"
              alt="HireHubJA Logo"
              width={150}
              height={90}
              className="object-contain h-[60px] md:h-[70px] w-auto"
              priority
            />
          </Link>
        </div>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-12">
          {navLinks.map((link) => {
            let isActive = false;

            if (link.href === "/") {
              isActive = pathname === "/" && !hash;
            } else if (link.href.includes("#")) {
              const targetHash = link.href.substring(link.href.indexOf("#"));
              isActive = pathname === "/" && hash === targetHash;
            } else {
              isActive = pathname === link.href;
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`text-base font-medium transition-all duration-200 ${
                  isActive
                    ? "text-[#3FAE2A] border-b-2 border-[#3FAE2A] pb-1"
                    : "text-gray-600 hover:text-[#3FAE2A]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Auth Actions & Mobile Toggle */}
        <div className="flex items-center gap-3">
          {!isAuthenticated ? (
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-4">
                <Link href="/signin">
                  <Button variant="ghost" className="text-gray-600 hover:text-[#3FAE2A] font-semibold text-base">
                    Sign In
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button className="bg-[#3FAE2A] hover:bg-[#359624] text-white font-semibold rounded-full px-6 h-11 text-base shadow-md">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3 md:gap-6">
              <Link href="/auth/notifications">
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative rounded-full bg-gray-50 text-gray-500 hover:text-[#3FAE2A] hover:bg-green-50 h-9 w-9 md:h-10 md:w-10 transition"
                >
                  <Bell className="h-5 w-5" />
                </Button>
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="flex items-center gap-3 cursor-pointer group p-1 rounded-full hover:bg-gray-50 transition">
                    <Avatar className="h-9 w-9 md:h-10 md:w-10 border-2 border-transparent group-hover:border-[#3FAE2A] transition">
                      <AvatarImage src={user?.avatar || "https://github.com/shadcn.png"} alt={user?.name} />
                      <AvatarFallback className="bg-green-100 text-green-700 font-bold">
                        {user?.name?.[0]?.toUpperCase() || "U"}
                      </AvatarFallback>
                    </Avatar>
                    <div className="hidden sm:flex flex-col items-start">
                      <span className="text-sm font-bold text-gray-800 leading-tight">
                        {user?.name}
                      </span>
                      <span className="text-[10px] uppercase font-semibold text-[#3FAE2A] tracking-wide">
                        {user?.role?.replace("-", " ")}
                      </span>
                    </div>
                    <ChevronDown className="h-4 w-4 text-gray-400 group-hover:text-gray-600 hidden sm:block" />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 mt-2">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer" onClick={() => router.push(`/auth/profile`)}>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer" onClick={() => router.push(`/auth/settings`)}>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-gray-600"
            onClick={toggleMenu}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-[90px] left-0 w-full bg-white border-b shadow-lg p-4 flex flex-col gap-4 z-40">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => {
               let isActive = false;
               if (link.href === "/") {
                 isActive = pathname === "/" && !hash;
               } else if (link.href.includes("#")) {
                 const targetHash = link.href.substring(link.href.indexOf("#"));
                 isActive = pathname === "/" && hash === targetHash;
               } else {
                 isActive = pathname === link.href;
               }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className={`text-base font-medium transition-all duration-200 ${isActive
                    ? "text-[#3FAE2A] pl-2 border-l-4 border-[#3FAE2A]"
                    : "text-gray-600 hover:text-[#3FAE2A] pl-2"
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {!isAuthenticated && (
            <div className="flex flex-col gap-3 mt-4 border-t pt-4">
              <Link href="/signin" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full text-gray-600 hover:text-[#3FAE2A] font-semibold">
                  Sign In
                </Button>
              </Link>
              <Link href="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-[#3FAE2A] hover:bg-[#359624] text-white font-semibold">
                  Get Started
                </Button>
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
}