"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowLeft } from "lucide-react";

interface NotificationItem {
  id: number;
  message: string;
  time: string;
  date: string;
  isRead: boolean;
  logo: string;
}

const notifications: NotificationItem[] = [
  {
    id: 1,
    message: "Your application for Senior Sales Executive at Mercedes-Benz has been submitted successfully.",
    time: "10:00 AM",
    date: "10.01.2026",
    isRead: false,
    logo: "/image/logo.svg",
  },
  {
    id: 2,
    message: "Your application for Senior Sales Executive at Mercedes-Benz has been submitted successfully.",
    time: "10:00 AM",
    date: "10.01.2026",
    isRead: false,
    logo: "/image/logo.svg",
  },
  {
    id: 3,
    message: "Your application for Senior Sales Executive at Mercedes-Benz has been submitted successfully.",
    time: "10:00 AM",
    date: "10.01.2026",
    isRead: true,
    logo: "/image/logo.svg",
  },
  {
    id: 4,
    message: "Your application for Senior Sales Executive at Mercedes-Benz has been submitted successfully.",
    time: "10:00 AM",
    date: "10.01.2026",
    isRead: true,
    logo: "/image/logo.svg",
  },
  {
    id: 5,
    message: "Your application for Senior Sales Executive at Mercedes-Benz has been submitted successfully.",
    time: "10:00 AM",
    date: "10.01.2026",
    isRead: true,
    logo: "/image/logo.svg",
  },
  {
    id: 6,
    message: "Your application for Senior Sales Executive at Mercedes-Benz has been submitted successfully.",
    time: "10:00 AM",
    date: "10.01.2026",
    isRead: true,
    logo: "/image/logo.svg",
  },
];

export default function NotificationPage() {
  const router = useRouter();

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 md:p-8 min-h-screen bg-white">
      {/* Header Section */}
      <div className="flex items-center gap-4 md:gap-24 mb-6 md:mb-10">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => router.back()}
          className="rounded-full border border-gray-200 h-8 w-8 md:h-10 md:w-10 shrink-0"
        >
          <ArrowLeft className="h-4 w-4 md:h-5 md:w-5 text-gray-700" />
        </Button>
        <h1 className="text-xl md:text-2xl font-bold text-gray-800">Notification</h1>
      </div>

      {/* Notifications List */}
      <div className="max-w-3xl mx-auto space-y-3 md:space-y-4">
        {notifications.map((notif) => (
          <Card
            key={notif.id}
            className={`p-3 md:p-4 flex gap-3 md:gap-4 transition-all duration-200 border border-gray-100 shadow-sm rounded-xl md:rounded-2xl ${!notif.isRead ? "bg-[#EAF6EA] border-none" : "bg-white"
              }`}
          >
            {/* Avatar / Logo */}
            <Avatar className="h-10 w-10 md:h-12 md:w-12 border bg-white shrink-0">
              <AvatarImage
                src={notif.logo}
                alt="Company Logo"
                className="p-1 object-contain"
              />
            </Avatar>


            {/* Content Area */}
            <div className="flex flex-col justify-between flex-1 gap-1 md:gap-2">
              <p className="text-xs md:text-sm text-gray-700 font-medium leading-snug md:leading-tight">
                {notif.message}
              </p>

              {/* Timestamp */}
              <div className="text-[9px] md:text-[10px] text-gray-400 self-end font-medium">
                {notif.time} {notif.date}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}