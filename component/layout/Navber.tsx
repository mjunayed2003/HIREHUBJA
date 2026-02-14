"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { Bell, ChevronDown, LogOut, User, Settings } from "lucide-react";

import { RootState } from "@/redux/store";
import { logout } from "@/redux/authSlice";
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
  { label: "How It Works", href: "/how-it-works" },
  { label: "Support", href: "/support" },
];

const COMPANY_LINKS = [
  { label: "Home", href: "/" },
  { label: "Jobs", href: "/auth/company/jobs" },
  { label: "Inbox", href: "/auth/inbox" },
  { label: "How It Works", href: "/auth/company/how-it-works" },
  { label: "Support", href: "/auth/company/support" },
];

const EMPLOYER_LINKS = [
  { label: "Home", href: "/" },
  { label: "Jobs", href: "/auth/employer/jobs" },
  { label: "Inbox", href: "/auth/inbox" },
  { label: "How It Works", href: "/auth/employer/how-it-works" },
  { label: "Support", href: "/auth/employer/support" },
];

const JOB_SEEKER_LINKS = [
  { label: "Home", href: "/" },
  { label: "Jobs", href: "/auth/jobseaker/jobs" },
  { label: "Inbox", href: "/auth/inbox" },
  { label: "How It Works", href: "/auth/jobseaker/how-it-works" },
  { label: "Support", href: "/auth/jobseaker/support" },
];

export default function Navbar() {
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();

  // Get Auth State
  const { user, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );

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

  // --- Handle Logout ---
  const handleLogout = () => {
    dispatch(logout());
    router.push("/signin"); // Redirect to login page
  };

  return (
    <header className="w-full bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="mx-auto flex h-[90px] w-full max-w-[1393px] items-center justify-between px-4 md:px-6">

        {/* Left: Logo */}
        <div className="flex-shrink-0 cursor-pointer">
          <Link href="/">
            <Image
              src="/image/logo.svg"
              alt="HireHubJA Logo"
              width={150}
              height={90}
              className="object-contain h-[70px] w-auto"
              priority
            />
          </Link>
        </div>

        {/* Center: Dynamic Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-12">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base font-medium transition-all duration-200 ${isActive
                    ? "text-[#3FAE2A] border-b-2 border-[#3FAE2A] pb-1"
                    : "text-gray-600 hover:text-[#3FAE2A]"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Auth Actions */}
        <div className="flex-shrink-0">
          {!isAuthenticated ? (
            // GUEST VIEW
            <div className="flex items-center gap-4">
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
          ) : (
            // LOGGED IN VIEW
            <div className="flex items-center gap-4 md:gap-6">

              {/* Notification Bell */}
              <Link href="/auth/notifications">
                <Button
                variant="ghost"
                size="icon"
                className="relative rounded-full bg-gray-50 text-gray-500 hover:text-[#3FAE2A] hover:bg-green-50 h-10 w-10 transition"
              >
                <Bell className="h-5 w-5" />
                <span className="sr-only">Notifications</span>
                {/* Red Dot Indicator */}
                <span className="absolute top-2.5 right-2.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
              </Button>

              </Link>
              {/* User Dropdown Profile */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="flex items-center gap-3 cursor-pointer group p-1 rounded-full hover:bg-gray-50 transition">
                    <Avatar className="h-10 w-10 border-2 border-transparent group-hover:border-[#3FAE2A] transition">
                      <AvatarImage src={user?.avatar || "https://github.com/shadcn.png"} alt={user?.name} />
                      <AvatarFallback className="bg-green-100 text-green-700 font-bold">
                        {user?.name?.[0]?.toUpperCase() || "U"}
                      </AvatarFallback>
                    </Avatar>

                    {/* Name & Role (Hidden on small screens) */}
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

                  <DropdownMenuItem className="cursor-pointer">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>

                  <DropdownMenuItem className="cursor-pointer">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>

                  <DropdownMenuSeparator />

                  <DropdownMenuItem
                    className="text-red-600 focus:text-red-600 focus:bg-red-50 cursor-pointer"
                    onClick={handleLogout}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}