"use client";

import Link from "next/link";
import { ArrowLeft, CheckCircle2, Video, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function InterviewPage() {
  return (
    <div className="max-w-[1000px] mx-auto p-6 min-h-screen">
      
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link href="/auth/jobseaker/jobs" className="p-2 bg-gray-100 rounded-full">
          <ArrowLeft size={20} />
        </Link>
        <h1 className="text-xl font-bold">Interview Details</h1>
      </div>

      {/* Green Banner */}
      <div className="bg-[#EAF6EA] border border-green-100 rounded-xl p-6 mb-8 text-center">
         <div className="inline-flex items-center gap-2 bg-[#3FAE2A] text-white px-4 py-1 rounded-full text-sm font-semibold mb-3">
            <CheckCircle2 size={16} /> Interview Scheduled
         </div>
         <p className="text-green-800 font-medium">Starts in: <span className="font-bold text-[#3FAE2A]">01h 31m 18s</span></p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         
         {/* Left Side: Details */}
         <div className="md:col-span-2 space-y-6">
            <div>
               <h3 className="font-bold text-gray-800 mb-3">Interview Overview</h3>
               <div className="space-y-2 text-sm text-gray-600">
                  <p><span className="font-semibold text-gray-700 w-24 inline-block">Position:</span> Senior Sales Executive</p>
                  <p><span className="font-semibold text-gray-700 w-24 inline-block">Company:</span> Mercedes-Benz</p>
                  <p><span className="font-semibold text-gray-700 w-24 inline-block">Type:</span> Video Interview (Zoom)</p>
                  <p><span className="font-semibold text-gray-700 w-24 inline-block">Date:</span> Wednesday, 22 January 2026</p>
                  <p><span className="font-semibold text-gray-700 w-24 inline-block">Time:</span> 11:00AM - 11:30AM (GMT+6)</p>
               </div>
            </div>

            <div>
               <h3 className="font-bold text-gray-800 mb-3">Join Interview</h3>
               <div className="flex items-center gap-2 mb-4">
                  <input type="radio" checked readOnly className="accent-[#3FAE2A] w-4 h-4"/>
                  <span className="text-sm font-medium">Zoom Video Call</span>
               </div>
               
               <Button className="w-full md:w-auto bg-[#3FAE2A] hover:bg-[#359624] text-white rounded-full px-8 mb-4">
                  Join Interview
               </Button>

               <div className="flex items-center gap-2 text-xs text-gray-500 bg-gray-50 p-2 rounded border">
                  <span>Meeting Link: zoom.us/j/874382XXXX</span>
                  <Copy size={12} className="cursor-pointer hover:text-green-600"/>
               </div>
            </div>
         </div>

         {/* Right Side: Help */}
         <div className="space-y-6">
            <div>
               <h3 className="font-bold text-gray-800 mb-3">Need Help?</h3>
               <div className="flex gap-3">
                  <Button className="bg-[#3FAE2A] hover:bg-[#359624] text-white rounded-full flex-1">Support</Button>
                  <Button variant="outline" className="border-gray-200 rounded-full flex-1 bg-gray-50">Message</Button>
               </div>
            </div>

            <div>
               <h3 className="font-bold text-gray-800 mb-2">Instructions</h3>
               <p className="text-xs text-gray-500 leading-relaxed">
                  Please ensure you have a stable internet connection, a quiet environment, and join the interview at least 5 minutes before the scheduled time.
               </p>
            </div>
         </div>

      </div>
    </div>
  );
}