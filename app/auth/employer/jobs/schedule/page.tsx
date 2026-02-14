"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

export default function ScheduleForm() {
  const router = useRouter();
  return (
    <div className="max-w-2xl mx-auto p-10 space-y-8">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => router.back()} className="rounded-full border">
          <ArrowLeft size={18} />
        </Button>
        <h1 className="text-2xl font-bold">Schedule Interview</h1>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Interview Setup</label>
          <p className="text-xs text-gray-400">Interview type</p>
          <Input placeholder="Video (Zoom)" className="h-12 bg-gray-50/50" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2 relative">
            <label className="text-xs text-gray-400">Interview Date</label>
            <Input type="date" className="h-12 bg-gray-50/50 pr-10" />
            <Calendar size={18} className="absolute right-3 bottom-3 text-gray-400" />
          </div>
          <div className="space-y-2 relative">
            <label className="text-xs text-gray-400">Interview Time</label>
            <Input type="time" className="h-12 bg-gray-50/50 pr-10" />
            <Clock size={18} className="absolute right-3 bottom-3 text-gray-400" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs text-gray-400">Interview Duration</label>
          <Input placeholder="Set interview duration" className="h-12 bg-gray-50/50" />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Video Call Link</label>
          <p className="text-xs text-gray-400">Interview type</p>
          <Input placeholder="Paste Zoom meeting link" className="h-12 bg-gray-50/50" />
        </div>

        <Button onClick={() => router.push('/auth/employer/jobs/details')} className="w-full bg-[#3FAE2A] hover:bg-green-700 py-7 text-lg rounded-2xl font-bold mt-4 shadow-lg shadow-green-100">
          Confirm Schedule
        </Button>
      </div>
    </div>
  );
}