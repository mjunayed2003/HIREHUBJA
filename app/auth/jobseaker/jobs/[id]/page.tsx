
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Share2, Flag, Bookmark, Briefcase, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import ReportModal from "@/component/card/ReportModal";

export default function JobDetailsPage() {
  return (
    <div className="max-w-[1000px] mx-auto p-6 bg-white min-h-screen">
      
      {/* Header Back */}
      <div className="flex items-center gap-4 mb-8">
        <Link href="/auth/jobseaker/jobs" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
          <ArrowLeft size={20} />
        </Link>
        <h1 className="text-xl font-bold">Job Details</h1>
      </div>

      {/* Title Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Senior Sales Executive (Senior Level)</h2>
        
        <div className="flex items-center gap-3 mt-4">
          <div className="w-12 h-12 rounded-full bg-gray-100 relative overflow-hidden">
             {/* Logo */}
          </div>
          <div>
             <p className="font-bold text-gray-800">Mercedes Benz</p>
             <p className="text-xs text-gray-500">Dhaka, Bangladesh • Posted 2 days ago</p>
          </div>
        </div>

        {/* Tags */}
        <div className="flex gap-2 mt-4">
           {["Marketing & Sales", "Senior Level", "On-site", "Full Time"].map(tag => (
             <span key={tag} className="px-3 py-1 bg-white border border-green-200 text-gray-600 rounded-full text-xs">
               {tag}
             </span>
           ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-4 mb-8 border-b pb-8">
         <Link href="/auth/jobseaker/jobs/1/apply" className="w-40">
            <Button className="w-full bg-[#3FAE2A] hover:bg-[#359624] text-white rounded-full">Apply Now</Button>
         </Link>
         <Button variant="secondary" className="bg-green-50 text-[#3FAE2A] hover:bg-green-100 rounded-full w-32">Bookmark</Button>
         
         <div className="flex gap-2 ml-auto">
            <button className="p-2 bg-gray-50 rounded-full text-gray-400 hover:text-gray-600"><Bookmark size={20}/></button>
            <button className="p-2 bg-gray-50 rounded-full text-gray-400 hover:text-gray-600"><Share2 size={20}/></button>
            <ReportModal />
         </div>
      </div>

      {/* Details Content */}
      <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
         <div>
            <h3 className="text-gray-900 font-bold mb-2">Job Overview</h3>
            <p>Mercedes-Benz is seeking an experienced and results-driven Senior Sales Executive...</p>
         </div>

         <div>
            <h3 className="text-gray-900 font-bold mb-2">Responsibilities</h3>
            <ul className="list-disc pl-5 space-y-1">
               <li>Manage and grow relationships with high-net-worth clients.</li>
               <li>Identify customer needs and recommend suitable vehicles.</li>
               <li>Conduct product presentations, test drives.</li>
            </ul>
         </div>

         <div>
            <h3 className="text-gray-900 font-bold mb-2">Company Info</h3>
             <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-white rounded-full"></div>
                   <div>
                      <p className="font-bold text-gray-800">Mercedes Benz</p>
                      <p className="text-xs text-yellow-500">★ 4.8 / 5</p>
                   </div>
                </div>
                <Button variant="outline" className="text-[#3FAE2A] border-green-200 h-8 text-xs rounded-full">Visit</Button>
             </div>
         </div>
      </div>

    </div>
  );
}