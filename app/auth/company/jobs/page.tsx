"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, MapPin, SlidersHorizontal, Plus, Mail } from "lucide-react";

const stats = [
  { label: "Active Jobs", count: 4 },
  { label: "Pending Applicants", count: 8 },
  { label: "Interviews Scheduled", count: 8 },
  { label: "Hires Completed", count: 4 },
];

export default function JobsPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8 bg-white min-h-screen">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <Card key={i} 
            className="bg-[#EAF6EA] border-none p-6 text-center cursor-pointer hover:opacity-80 transition"
            onClick={() => stat.label === "Interviews Scheduled" && router.push("/auth/company/jobs/details")}
          >
            <h2 className="text-3xl font-bold text-[#3FAE2A]">{stat.count}</h2>
            <p className="text-sm text-gray-600">{stat.label}</p>
          </Card>
        ))}
      </div>

      <div className="flex justify-center ">
        <Button onClick={()=>router.push("/auth/company/job-post")} className="bg-[#3FAE2A] hover:bg-green-700 px-50 py-6 rounded-xl text-lg gap-2">
          <Mail size={25} /> Post a New Job
        </Button>
      </div>

      <div className="flex gap-2 max-w-2xl mx-auto">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <Input 
            className="pl-10 rounded-full h-11 border-gray-200" 
            placeholder="Search jobs, companies, or locations"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Button variant="outline" className="rounded-full h-11 px-6"><SlidersHorizontal size={18} /></Button>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-4 text-gray-800">My Job Post</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <JobCard key={i} id={i.toString()} />
          ))}
        </div>
      </div>
    </div>
  );
}

function JobCard({ id }: { id: string }) {
  const router = useRouter();
  
  return (
    <div 
      className="bg-white relative flex flex-col justify-between p-4 shadow-[0_2px_15px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.06)] transition-all duration-300"
      // Exact dimensions and styles requested
      style={{
        width: '345px',
        height: '192px',
        borderRadius: '10px',
        border: '0.6px solid #e5e7eb', // Adjusted strictly to look like 0.4px visually on screens
      }}
    >
      
      {/* Top Section */}
      <div>
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-bold text-[16px] text-[#1a1a1a]">Senior Sales Executive</h3>
          <span className="bg-[#EAF6EA] text-[#3FAE2A] border border-green-100 text-[10px] font-semibold px-2.5 py-0.5 rounded-full">
            Open
          </span>
        </div>
        
        <div className="flex items-center text-gray-500 text-[12px] mb-3">
           <MapPin size={12} className="mr-1" /> Dhaka, Bangladesh
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {["Full Time", "Senior level", "On-site", "Sales"].map(tag => (
            <span key={tag} className="border border-gray-300 text-gray-500 px-2.5 py-[2px] rounded-full text-[10px] font-medium">
              {tag}
            </span>
          ))}
        </div>

        {/* Salary & Applicants */}
        <div className="flex flex-col gap-0.5">
           <span className="text-[#3FAE2A] font-bold text-[14px]">$1000/Month</span>
           <span className="text-gray-500 text-[11px] font-medium">Applicants: 06</span>
        </div>
      </div>

      {/* Buttons Section (Bottom) */}
      <div className="flex gap-3 mt-auto">
        <Button 
          onClick={() => router.push(`/auth/company/jobs/details`)} 
          className="flex-1 bg-[#3FAE2A] hover:bg-[#359624] h-[34px] rounded-full text-[12px] font-bold"
        >
          View Applicants
        </Button>
        <Button 
          variant="secondary" 
          className="flex-1 bg-[#F0FDF4] hover:bg-green-100 text-[#3FAE2A] h-[34px] rounded-full text-[12px] font-bold"
        >
          Edit Job
        </Button>
      </div>

    </div>
  );
}