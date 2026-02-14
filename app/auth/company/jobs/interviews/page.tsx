"use client";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";

export default function InterviewListPage() {
  const router = useRouter();
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => router.back()} className="rounded-full border">
          <ArrowLeft size={18} />
        </Button>
        <div>
          <h1 className="text-xl font-bold">Interview Scheduled</h1>
          <p className="text-xs text-gray-500">Total Interview Scheduled: 08</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <InterviewCandidateCard key={i} />
        ))}
      </div>
    </div>
  );
}

function InterviewCandidateCard() {
  const router = useRouter();
  return (
    <Card className="p-4 space-y-4 border-gray-100">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
          <img src="https://github.com/shadcn.png" alt="profile" />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <h4 className="font-bold text-sm">Sowrove Bepary</h4>
            <Badge className="bg-orange-50 text-orange-400 text-[9px] font-normal border-orange-100">Interview Scheduled</Badge>
          </div>
          <p className="text-[11px] text-gray-500">Senior Sales Executive</p>
        </div>
      </div>
      <div className="text-[11px] text-gray-600 space-y-1 border-t border-dashed pt-3 font-medium">
        <p>Experience level: <span className="text-black font-semibold">Senior level</span></p>
        <p>Applied Date: <span className="text-black font-semibold">05.01.2026</span></p>
        <p>Interview Schedule: <span className="text-black font-semibold">12:00 PM 15.01.2026</span></p>
      </div>
      <div className="flex gap-2">
        <Button onClick={() => router.push('/auth/company/jobs/1')} className="flex-1 bg-[#3FAE2A] text-xs h-8">Details</Button>
        <Button variant="outline" className="flex-1 bg-green-50 border-none text-[#3FAE2A] text-xs h-8 font-semibold">Message</Button>
      </div>
    </Card>
  );
}