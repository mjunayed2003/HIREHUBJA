"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Share2, Flag, Bookmark, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import ReportModal from "@/component/card/ReportModal"; // Keeping your existing modal

export default function JobDetailsPage() {
   return (
      <div className="min-h-screen bg-white font-sans text-[#1a1a1a]">
         <div className="max-w-[1000px] mx-auto px-6 py-8">

            {/* ---------------- HEADER ---------------- */}
            <div className="flex items-center gap-4 mb-8">
               <Link
                  href="/auth/jobseaker/jobs"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
               >
                  <ArrowLeft size={20} className="text-gray-600" />
               </Link>
               <h1 className="text-xl font-bold text-gray-900">Job Details</h1>
            </div>

            {/* ---------------- JOB TITLE & META ---------------- */}
            <div className="mb-8">
               <h2 className="text-[28px] font-bold text-gray-900 leading-tight">
                  Senior Sales Executive (Senior Level)
               </h2>

               <div className="flex items-center gap-3 mt-4">
                  {/* Mercedes Logo Placeholder */}
                  <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center overflow-hidden flex-shrink-0">
                     <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg"
                        alt="Mercedes Benz"
                        width={40}
                        height={40}
                        className="object-cover p-1"
                     />
                  </div>
                  <div>
                     <p className="font-bold text-gray-900 text-sm">Mercedes Benz</p>
                     <p className="text-xs text-gray-500 mt-0.5">
                        Dhaka, Bangladesh • Posted 2 days ago
                     </p>
                  </div>
               </div>

               {/* Tags */}
               <div className="flex flex-wrap gap-2.5 mt-5">
                  {["Marketing & Sales", "Senior level", "On-site", "Full Time"].map((tag) => (
                     <span
                        key={tag}
                        className="px-3 py-1.5 bg-white border border-gray-200 text-gray-500 rounded-full text-[11px] font-medium uppercase tracking-wide"
                     >
                        {tag}
                     </span>
                  ))}
               </div>
            </div>

            {/* ---------------- ACTION BUTTONS ---------------- */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
               <div className="flex gap-4 w-full md:w-auto">
                  <Link href="/auth/jobseaker/jobs/1/apply" className="w-40">
                     <Button className="w-full bg-[#3FAE2A] hover:bg-[#359624] text-white rounded-full">Apply Now</Button>
                  </Link>
                  <Button className="bg-[#F0FDF4] w-40 hover:bg-green-100 text-[#3FAE2A] border border-green-100 rounded-full font-bold  text-sm flex-1 md:flex-none">
                     Bookmark
                  </Button>
               </div>

               <div className="flex gap-3 ml-auto">
                  <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-all">
                     <Bookmark size={20} />
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-all">
                     <Share2 size={20} />
                  </button>
                  {/* Report Button styling wrapped around your modal or direct button */}
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-red-50 text-red-400 hover:bg-red-100 transition-all cursor-pointer">
                     <ReportModal />
                     {/* Note: Ensure ReportModal triggers via a button inside, usually a Flag icon */}
                  </div>
               </div>
            </div>

            {/* ---------------- CONTENT SECTIONS ---------------- */}
            <div className="space-y-8 text-[14px] text-gray-600 leading-[1.8]">

               {/* About This Job */}
               <div>
                  <h3 className="text-gray-900 font-bold text-base mb-3">About This Job</h3>
                  <div className="space-y-2">
                     <div className="flex gap-2">
                        <span className="font-semibold text-gray-900 w-24">Position:</span>
                        <span>Senior Sales Executive</span>
                     </div>
                     <div className="flex gap-2">
                        <span className="font-semibold text-gray-900 w-24">Company:</span>
                        <span>Mercedes-Benz</span>
                     </div>
                     <div className="flex items-center gap-2 mt-1">
                        <span className="font-semibold text-gray-900 w-24 text-[#3FAE2A]">Salary Range</span>
                        <span className="bg-[#F0FDF4] text-[#3FAE2A] px-3 py-0.5 rounded-full text-xs font-semibold border border-green-100">
                           $1000-$1200
                        </span>
                     </div>
                  </div>
               </div>

               {/* Job Overview */}
               <div>
                  <h3 className="text-gray-900 font-bold text-base mb-2">Job Overview</h3>
                  <p>
                     Mercedes-Benz is seeking an experienced and results-driven Senior Sales Executive to join our premium automotive sales team. The ideal candidate will be responsible for managing high-value client relationships, driving vehicle sales, and delivering a world-class customer experience aligned with the Mercedes-Benz brand standards.
                     <br className="mb-2" />
                     This role requires strong sales expertise, excellent communication skills, and a deep understanding of customer needs within the luxury automotive market.
                  </p>
               </div>

               {/* Responsibilities */}
               <div>
                  <h3 className="text-gray-900 font-bold text-base mb-2">Responsibilities</h3>
                  <ul className="list-disc pl-5 space-y-1 marker:text-gray-400">
                     <li>Manage and grow relationships with high-net-worth and corporate clients</li>
                     <li>Identify customer needs and recommend suitable Mercedes-Benz vehicles</li>
                     <li>Conduct product presentations, test drives, and consultations</li>
                     <li>Achieve and exceed monthly and annual sales targets</li>
                     <li>Handle end-to-end sales process, including documentation and handover</li>
                  </ul>
               </div>

               {/* Skills Needed */}
               <div>
                  <h3 className="text-gray-900 font-bold text-base mb-2">Skills Needed</h3>
                  <ul className="list-disc pl-5 space-y-1 marker:text-gray-400">
                     <li>Luxury sales expertise</li>
                     <li>Relationship management</li>
                     <li>Negotiation & persuasion</li>
                     <li>Customer experience management</li>
                  </ul>
               </div>

               {/* Benefits */}
               <div>
                  <h3 className="text-gray-900 font-bold text-base mb-2">Benefits</h3>
                  <ul className="list-disc pl-5 space-y-1 marker:text-gray-400">
                     <li>Competitive salary + high commission structure</li>
                     <li>Performance-based incentives and bonuses</li>
                     <li>Company-sponsored training and certifications</li>
                     <li>Career growth opportunities within Mercedes-Benz</li>
                  </ul>
               </div>

               {/* Education & Experience */}
               <div>
                  <h3 className="text-gray-900 font-bold text-base mb-2">Education Level</h3>
                  <ul className="list-disc pl-5 marker:text-gray-400">
                     <li>Diploma</li>
                  </ul>
               </div>

               <div>
                  <h3 className="text-gray-900 font-bold text-base mb-2">Minimum Experience</h3>
                  <ul className="list-disc pl-5 marker:text-gray-400">
                     <li>2 Years</li>
                  </ul>
               </div>

               {/* Company Info Card */}
               <div>
                  <h3 className="text-gray-900 font-bold text-base mb-4">Company Info</h3>
                  <div className="flex items-center justify-between mb-3">
                     <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center">
                           <Image
                              src="https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg"
                              alt="Mercedes Benz"
                              width={40}
                              height={40}
                              className="object-cover p-1"
                           />
                        </div>
                        <div>
                           <p className="font-bold text-gray-900">Mercedes Benz</p>
                           <div className="flex items-center gap-1 text-xs text-yellow-500 font-semibold">
                              <Star size={12} fill="currentColor" />
                              <span>4.8 / 5</span>
                           </div>
                        </div>
                     </div>
                     <Button className="bg-[#EBFDF2] hover:bg-green-100 text-[#3FAE2A] rounded-full h-8 px-5 text-xs font-bold shadow-none border border-green-50">
                        Visit
                     </Button>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">
                     Mercedes-Benz is a global leader in luxury automotive innovation, renowned for engineering excellence, premium quality, and cutting-edge technology. With a legacy of over a century, Mercedes-Benz continues to set benchmarks in performance, safety, and customer experience worldwide.
                  </p>
               </div>

            </div>
         </div>
      </div>
   );
}