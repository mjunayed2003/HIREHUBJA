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
    logo: "/mercedes-logo.png", // Replace with your actual path
  },
  {
    id: 2,
    message: "Your application for Senior Sales Executive at Mercedes-Benz has been submitted successfully.",
    time: "10:00 AM",
    date: "10.01.2026",
    isRead: false,
    logo: "/mercedes-logo.png",
  },
  {
    id: 3,
    message: "Your application for Senior Sales Executive at Mercedes-Benz has been submitted successfully.",
    time: "10:00 AM",
    date: "10.01.2026",
    isRead: true,
    logo: "/mercedes-logo.png",
  },
  {
    id: 4,
    message: "Your application for Senior Sales Executive at Mercedes-Benz has been submitted successfully.",
    time: "10:00 AM",
    date: "10.01.2026",
    isRead: true,
    logo: "/mercedes-logo.png",
  },
  {
    id: 5,
    message: "Your application for Senior Sales Executive at Mercedes-Benz has been submitted successfully.",
    time: "10:00 AM",
    date: "10.01.2026",
    isRead: true,
    logo: "/mercedes-logo.png",
  },
  {
    id: 6,
    message: "Your application for Senior Sales Executive at Mercedes-Benz has been submitted successfully.",
    time: "10:00 AM",
    date: "10.01.2026",
    isRead: true,
    logo: "/mercedes-logo.png",
  },
];

export default function NotificationPage() {
  const router = useRouter();

  return (
    <div className="max-w-5xl mx-auto p-8 min-h-screen bg-white">
      {/* Header Section */}
      <div className="flex items-center gap-24 mb-10">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => router.back()}
          className="rounded-full border border-gray-200 h-10 w-10 shrink-0"
        >
          <ArrowLeft className="h-5 w-5 text-gray-700" />
        </Button>
        <h1 className="text-2xl font-bold text-gray-800">Notification</h1>
      </div>

      {/* Notifications List */}
      <div className="max-w-3xl mx-auto space-y-4">
        {notifications.map((notif) => (
          <Card
            key={notif.id}
            className={`p-4 flex gap-4 transition-all duration-200 border border-gray-100 shadow-sm rounded-2xl ${
              !notif.isRead ? "bg-[#EAF6EA] border-none" : "bg-white"
            }`}
          >
            {/* Avatar / Logo */}
            <Avatar className="h-12 w-12 border bg-white shrink-0">
              <AvatarImage src={notif.logo} alt="Company Logo" className="p-1" />
              <AvatarFallback className="bg-gray-800 text-white">MB</AvatarFallback>
            </Avatar>

            {/* Content Area */}
            <div className="flex flex-col justify-between flex-1 gap-2">
              <p className="text-sm text-gray-700 font-medium leading-tight">
                {notif.message}
              </p>
              
              {/* Timestamp */}
              <div className="text-[10px] text-gray-400 self-end font-medium">
                {notif.time} {notif.date}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}