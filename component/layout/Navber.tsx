"use client";

import Link from "next/link";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { Bell, ChevronDown } from "lucide-react";

import { RootState } from "@/redux/store";
import { login, logout } from "@/redux/authSlice";
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

// Navigation Links Data
const NAV_LINKS = [
  { label: "Home", href: "/", active: true },
  { label: "Jobs", href: "/jobs", active: false },
  { label: "Inbox", href: "/inbox", active: false },
  { label: "How It Works", href: "/how-it-works", active: false },
  { label: "Support", href: "/support", active: false },
];

export default function Navbar() {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );

  return (
    // Figma: Top 62px (Optional margin-top if needed, otherwise removed for standard nav)
    // Height: 90px handled in inner container
    <header className="w-full bg-white border-b">
      <div 
        className="mx-auto flex h-[90px] w-full max-w-[1393px] items-center justify-between px-4 md:px-0"
      >

        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/image/logo.jpg"
              alt="HireHubJA Logo"
              width={109}
              height={90}
              className="object-contain h-[90px] w-auto" // Ensures height fits container
              priority
            />
          </Link>
        </div>

        {/* Center: Navigation Links */}
        {/* Figma Gap: 178px logic applied visually via justify-between or specific margins if strictly needed */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-12">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-base font-medium transition-colors hover:text-green-600 ${
                link.active
                  ? "text-green-600 border-b-2 border-green-600 pb-1"
                  : "text-gray-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="flex-shrink-0">
          {!isAuthenticated ? (
            <Link href="/auth/signin">
              <Button className="bg-[#3FAE2A] hover:bg-[#3ecf72] text-white font-semibold rounded-full px-8 h-12 text-base">
                Get Started
              </Button>
            </Link>
          ) : (
            // LOGGED IN VIEW
            <div className="flex items-center gap-6">
              {/* Notification Bell */}
              <Button
                variant="ghost"
                size="icon"
                className="relative rounded-full bg-gray-50 text-gray-500 hover:text-green-600 h-10 w-10"
              >
                <Bell className="h-6 w-6" />
                <span className="sr-only">Notifications</span>
                <span className="absolute top-2 right-2 h-2.5 w-2.5 rounded-full bg-red-500 border-2 border-white" />
              </Button>

              {/* User Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
                    <Avatar className="h-11 w-11 border border-green-500/20">
                      <AvatarImage src={user?.avatar} alt={user?.name} />
                      <AvatarFallback className="bg-green-100 text-green-700">
                        {user?.name?.[0]}
                      </AvatarFallback>
                    </Avatar>
                    <div className="hidden sm:flex items-center gap-2">
                      <span className="text-base font-semibold text-gray-800">
                        {user?.name}
                      </span>
                      <ChevronDown className="h-4 w-4 text-gray-500" />
                    </div>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="text-red-600 cursor-pointer"
                    onClick={() => dispatch(logout())}
                  >
                    Logout
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