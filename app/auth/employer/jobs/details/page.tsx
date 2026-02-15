"use client";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function InterviewListPage() {
  const router = useRouter();
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="flex items-center gap-4">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => router.back()} 
          className="rounded-full border bg-white hover:bg-gray-100"
        >
          <ArrowLeft size={18} />
        </Button>
        <div>
          <h1 className="text-xl font-bold text-gray-900">Interview Scheduled</h1>
          <p className="text-sm text-gray-500">Total Interview Scheduled: 08</p>
        </div>
      </div>

      {/* Grid Layout */}
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
    <Card className="p-2 border border-gray-100 shadow-sm rounded-2xl bg-white hover:shadow-md transition-shadow">
      
      {/* Profile Header */}
      <div className="flex gap-4">
        {/* Avatar */}
        <div className="max-w-14 rounded-full border-2 border-white shadow-sm overflow-hidden shrink-0">
          <Image 
            src="https://github.com/shadcn.png" 
            alt="profile" 
            width={56} 
            height={56}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Name & Badge */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-bold text-base text-gray-900 leading-tight">Sowrove Bepary</h4>
              <p className="text-sm text-gray-500 mt-1">Senior Sales Executive</p>
            </div>
            <Badge className="bg-[#FFF4E5] text-[#FF9500] hover:bg-[#FFF4E5] border border-[#FFE4C4] text-[10px] px-2 font-medium rounded-md shadow-none">
              Interview Scheduled
            </Badge>
          </div>
        </div>
      </div>

      {/* Dashed Divider */}
      <div className="border-t border-dashed border-gray-200 w-full" />

      {/* Details Info */}
      <div className="text-sm">
        <div className="flex items-center gap-2">
          <span className="text-gray-500 min-w-[110px]">Experience level:</span>
          <span className="text-gray-900 font-semibold">Senior level</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-500 min-w-[110px]">Applied Date:</span>
          <span className="text-gray-900 font-semibold">05.01.2026</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-500 min-w-[110px]">Interview Schedule:</span>
          <span className="text-gray-900 font-semibold">12:00 PM <span className="ml-1">15.01.2026</span></span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 ">
        <Button 
          onClick={() => router.push('/auth/employer/jobs/1')} 
          className="flex-1 bg-[#47B649] hover:bg-[#3da13e] text-white text-sm font-medium h-10 rounded-lg shadow-none"
        >
          Details
        </Button>
        <Button 
          variant="outline" 
          className="flex-1 bg-[#E9F7E9] hover:bg-[#dff3df] border-transparent text-[#47B649] text-sm font-semibold h-10 rounded-lg shadow-none"
        >
          Message
        </Button>
      </div>

    </Card>
  );
}