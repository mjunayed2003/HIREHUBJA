"use client";

import Link from "next/link";
import { ArrowLeft, CheckCircle2, Copy, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function InterviewPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#1a1a1a]">
      <div className="max-w-[1100px] mx-auto px-6 py-8">
        
        {/* ---------------- HEADER ---------------- */}
        <div className="flex items-center gap-4 mb-10">
          <Link 
            href="/auth/jobseaker/jobs" 
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft size={20} className="text-gray-600" />
          </Link>
          <h1 className="text-xl font-bold text-gray-900">Interview Details</h1>
        </div>

        {/* ---------------- STATUS CARD (CENTERED) ---------------- */}
        <div className="flex justify-center mb-12">
            <div className="w-[380px] rounded-xl overflow-hidden shadow-sm">
                {/* Top Green Part */}
                <div className="bg-[#3FAE2A] text-white py-2.5 px-4 flex items-center justify-center gap-2">
                    <CheckCircle2 size={18} fill="white" className="text-[#3FAE2A]" />
                    <span className="font-semibold text-sm">Interview Scheduled</span>
                </div>
                {/* Bottom Light Green Part */}
                <div className="bg-[#EAF6EA] py-3 text-center">
                    <p className="text-gray-600 font-medium text-sm">
                        Starts in: <span className="text-[#3FAE2A] font-bold text-base ml-1">01h 31m 18s</span>
                    </p>
                </div>
            </div>
        </div>

        {/* ---------------- MAIN CONTENT GRID ---------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
           
           {/* LEFT SIDE (DETAILS) - Spans 7 cols */}
           <div className="lg:col-span-7 space-y-10">
              
              {/* Interview Overview */}
              <div>
                 <h3 className="font-bold text-gray-900 text-base mb-5">Interview Overview</h3>
                 <div className="space-y-3 text-[14px]">
                    <div className="flex">
                        <span className="text-gray-400 font-semibold w-32 shrink-0">Position:</span>
                        <span className="text-gray-700 font-medium">Senior Sales Executive</span>
                    </div>
                    <div className="flex">
                        <span className="text-gray-400 font-semibold w-32 shrink-0">Company:</span>
                        <span className="text-gray-700 font-medium">Mercedes-Benz</span>
                    </div>
                    <div className="flex">
                        <span className="text-gray-400 font-semibold w-32 shrink-0">Interview Type:</span>
                        <span className="text-gray-700 font-medium">Video Interview (Zoom)</span>
                    </div>
                    <div className="flex">
                        <span className="text-gray-400 font-semibold w-32 shrink-0">Interview Date:</span>
                        <span className="text-gray-700 font-medium">Wednesday, 22 January 2026</span>
                    </div>
                    <div className="flex">
                        <span className="text-gray-400 font-semibold w-32 shrink-0">Interview Time:</span>
                        <span className="text-gray-700 font-medium">11:00AM-11:30AM (GMT6+)</span>
                    </div>
                    <div className="flex">
                        <span className="text-gray-400 font-semibold w-32 shrink-0">Duration:</span>
                        <span className="text-gray-700 font-medium">30 minutes</span>
                    </div>
                 </div>
              </div>

              {/* Join Interview */}
              <div>
                 <h3 className="font-bold text-gray-900 text-base mb-5">Join Interview</h3>
                 
                 {/* Radio Selection */}
                 <div className="flex items-center gap-3 mb-6">
                    <div className="w-5 h-5 rounded-full border-[5px] border-[#3FAE2A] bg-white"></div>
                    <div className="flex items-center gap-2">
                        <Video size={20} className="text-blue-500 fill-blue-500" />
                        <span className="text-gray-900 font-medium text-sm">Zoom Video Call</span>
                    </div>
                 </div>
                 
                 {/* Join Button */}
                 <Button className="bg-[#3FAE2A] hover:bg-[#359624] text-white rounded-full px-10 py-6 text-sm font-bold shadow-green-100 shadow-lg mb-4 w-auto min-w-[180px]">
                    Join Interview
                 </Button>

                 {/* Meeting Link */}
                 <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
                    <span className="font-medium text-gray-400">Meeting Link:</span>
                    <span className="text-gray-800">zoom.us/j/874392XXXX</span>
                    <Copy size={16} className="text-gray-400 cursor-pointer hover:text-[#3FAE2A] transition-colors ml-1"/>
                 </div>
              </div>
           </div>

           {/* RIGHT SIDE (HELP & INSTRUCTIONS) - Spans 5 cols */}
           <div className="lg:col-span-5 space-y-10">
              
              {/* Need Help? */}
              <div>
                 <h3 className="font-bold text-gray-900 text-base mb-5">Need Help?</h3>
                 <div className="flex gap-4">
                    <Button className="bg-[#3FAE2A] hover:bg-[#359624] text-white rounded-full h-12 flex-1 font-bold text-sm shadow-md shadow-green-100">
                        Support
                    </Button>
                    <Button className="bg-[#EAF6EA] hover:bg-green-100 text-[#3FAE2A] rounded-full h-12 flex-1 font-bold text-sm border-none shadow-none">
                        Message
                    </Button>
                 </div>
              </div>

              {/* Instructions */}
              <div>
                 <h3 className="font-bold text-gray-900 text-base mb-3">Instructions</h3>
                 <p className="text-[13px] text-gray-500 leading-[1.6]">
                    Please ensure you have a stable internet connection, a quiet environment, and join the interview at least 5 minutes before the scheduled time.
                 </p>
              </div>

              {/* Reminders */}
              <div>
                 <h3 className="font-bold text-gray-900 text-base mb-3">Reminders</h3>
                 <p className="text-[13px] text-gray-500 leading-[1.6]">
                    You will receive reminders 30 minutes and 5 minutes before the interview starts.
                 </p>
              </div>

           </div>

        </div>
      </div>
    </div>
  );
}