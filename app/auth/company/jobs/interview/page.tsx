"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, Copy } from "lucide-react";

export default function InterviewDetails() {
  const router = useRouter();
  
  return (
    <div className="max-w-4xl mx-auto p-4 md:p-10 space-y-6 md:space-y-8 pb-20">
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={() => router.back()} 
        className="rounded-full border mb-2"
      >
          <ArrowLeft size={18} />
      </Button>

      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
         <h1 className="text-xl md:text-2xl font-bold">Interview Details</h1>
         
         <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto items-start sm:items-center">
            <p className="text-sm font-bold hidden sm:block">Need Help?</p>
            <div className="flex gap-3 w-full sm:w-auto">
                <Button className="bg-[#3FAE2A] flex-1 sm:flex-none sm:px-10 rounded-xl h-11 font-bold">
                    Support
                </Button>
                <Button variant="outline" className="bg-green-50 border-none text-[#3FAE2A] flex-1 sm:flex-none sm:px-10 rounded-xl h-11 font-bold">
                    Message
                </Button>
            </div>
         </div>
      </div>

      {/* Status Box */}
      <div className="w-full max-w-sm">
        <div className="bg-[#3FAE2A] text-white p-2 text-center rounded-t-xl text-sm flex items-center justify-center gap-2">
            <CheckCircle2 size={16}/> Interview Scheduled
        </div>
        <div className="bg-[#EAF6EA] text-[#3FAE2A] p-3 text-center rounded-b-xl text-lg font-bold">
            Starts in: 01h 31m 18s
        </div>
      </div>

      {/* Overview */}
      <div className="space-y-4 pt-4">
        <h3 className="font-bold text-lg">Interview Overview</h3>
        <div className="space-y-3 text-sm text-gray-600 font-medium">
            <div className="grid grid-cols-1 gap-2">
                <p>Position: <span className="text-black block sm:inline sm:ml-1">Senior Sales Executive</span></p>
                <p>Company: <span className="text-black block sm:inline sm:ml-1">Mercedes-Benz</span></p>
                <p>Interview Type: <span className="text-black block sm:inline sm:ml-1">Video Interview (Zoom)</span></p>
                <p>Interview Date: <span className="text-black block sm:inline sm:ml-1">Wednesday, 22 January 2026</span></p>
                <p>Interview Time: <span className="text-black block sm:inline sm:ml-1">11:00AM-11:30AM (GMT6+)</span></p>
                <p>Duration: <span className="text-black block sm:inline sm:ml-1">30 minutes</span></p>
            </div>
        </div>
      </div>

      {/* Join Section */}
      <div className="space-y-4">
        <h3 className="font-bold">Join Interview</h3>
        <div className="flex items-center gap-2 text-blue-500 font-semibold text-sm md:text-base">
           <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center shrink-0">
              <div className="w-2 h-2 bg-white rounded-full"></div>
           </div>
           Zoom Video Call
        </div>
        
        <Button className="bg-[#3FAE2A] hover:bg-green-700 w-full sm:w-auto px-10 h-11 font-bold rounded-xl">
            Join Interview
        </Button>
        
        <div className="flex flex-wrap items-center gap-2 text-xs text-gray-400">
            <span>Meeting Link:</span>
            <span className="text-gray-800 font-bold underline break-all">zoom.us/j/874392XXXX</span> 
            <Copy size={12} className="cursor-pointer shrink-0" />
        </div>
      </div>
    </div>
  );
}