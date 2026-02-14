"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, MapPin, SlidersHorizontal, Plus } from "lucide-react";

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
            onClick={() => stat.label === "Interviews Scheduled" && router.push("/auth/company/jobs/interviews")}
          >
            <h2 className="text-3xl font-bold text-[#3FAE2A]">{stat.count}</h2>
            <p className="text-sm text-gray-600">{stat.label}</p>
          </Card>
        ))}
      </div>

      <div className="flex justify-center">
        <Button className="bg-[#3FAE2A] hover:bg-green-700 px-10 py-6 rounded-xl text-lg gap-2">
          <Plus size={20} /> Post a New Job
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
    <Card className="p-5 space-y-4 border-gray-100 bg-[#F9FAFB]">
      <div className="flex justify-between items-start">
        <h3 className="font-bold text-gray-800">Senior Sales Executive</h3>
        <Badge className="bg-green-100 text-[#3FAE2A] hover:bg-green-100 border-none font-normal">Open</Badge>
      </div>
      <div className="flex items-center text-gray-400 text-xs">
        <MapPin size={14} className="mr-1" /> Dhaka, Bangladesh
      </div>
      <div className="flex flex-wrap gap-2">
        {["Full Time", "Senior level", "On-site", "Sales"].map(tag => (
          <Badge key={tag} variant="outline" className="text-[10px] text-gray-500 font-normal py-0">
            {tag}
          </Badge>
        ))}
      </div>
      <div className="text-[#3FAE2A] font-extrabold text-xl">$1000/Month</div>
      <div className="text-xs text-gray-500 font-medium">Applicants: 08</div>
      <div className="flex gap-3 pt-2">
        <Button onClick={() => router.push(`/auth/company/jobs/interviews`)} className="flex-1 bg-[#3FAE2A] hover:bg-green-700 h-9 text-xs">
          View Applicants
        </Button>
        <Button variant="outline" className="flex-1 h-9 bg-green-50 border-none text-[#3FAE2A] text-xs">
          Edit Job
        </Button>
      </div>
    </Card>
  );
}