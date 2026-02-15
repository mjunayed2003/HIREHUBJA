"use client";

import Image from "next/image";
import Link from "next/link";
import { Bookmark, MapPin, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface JobProps {
  id: string;
  title: string;
  company: string;
  logo: string;
  date: string;
  salary: string;
  location: string;
  type: string[];
  status?: "Submitted" | "Interview Scheduled" | "Hired" | null | string;
  isBookmarked?: boolean;
}

export default function JobCard({ job }: { job: JobProps }) {
  const targetLink =
    job.status === "Interview Scheduled"
      ? `/auth/jobseaker/jobs/interview/${job.id}`
      : `/auth/jobseaker/jobs/${job.id}`;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Submitted":
        return "bg-blue-100 text-blue-600 border-blue-200";
      case "Interview Scheduled":
        return "bg-orange-100 text-orange-600 border-orange-200";
      case "Hired":
        return "bg-green-100 text-green-600 border-green-200";
      default:
        return "bg-gray-100 text-gray-600 border-gray-200";
    }
  };

  return (
    <div className="w-full sm:w-[260px] flex flex-col h-full bg-white rounded-2xl border border-[#E5E7EB] shadow-[0px_0px_10px_2px_#3FAE2A1A] p-5 transition-all hover:shadow-md">

      {/* Top Header */}
      <div>
        <div className="flex justify-between items-start mb-1">
          {/* Company Info */}
          <div className="flex items-center gap-3 ">
            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center overflow-hidden border border-gray-100">
              <Image
                src={job.logo}
                alt={job.company}
                width={40}
                height={40}
                className="rounded-full object-contain scale-150"
              />
            </div>

          </div>
          <div className="flex items-center gap-1 text-[11px] font-medium mt-3 text-gray-500 bg-gray-50  rounded-md border border-gray-100">
            <Calendar size={12} /> {job.date}
          </div>
          <button className="text-gray-400 hover:text-[#3FAE2A] transition-colors mt-3">
            <Bookmark
              size={18}
              className={job.isBookmarked ? "fill-[#3FAE2A] text-[#3FAE2A]" : ""}
            />
          </button>
        </div>
        <span className="text-xs font-semibold text-gray-500 truncate">{job.company}</span>
      </div>



      {/* Job Title */}
      <Link href={targetLink} className="block mb-2">
        <h3 className="text-lg font-bold text-gray-800 hover:text-[#3FAE2A] transition-colors line-clamp-2">
          {job.title}
        </h3>
      </Link>

      {/* Status Badge */}
      {job.status && (
        <div className="mb-3">
          <span
            className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold border ${getStatusColor(
              job.status
            )}`}
          >
            {job.status}
          </span>
        </div>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {job.type.map((tag, index) => (
          <Badge
            key={index}
            variant="outline"
            className="text-gray-600 border-gray-300 bg-white text-[10px] px-2 py-0.5 rounded-full hover:bg-gray-50 font-normal"
          >
            {tag}
          </Badge>
        ))}
      </div>

      {/* Bottom Info */}
      <div className="mt-auto items-center justify-between pt-4 border-t border-gray-50">
        <p className="text-[#3FAE2A] font-bold text-sm truncate">{job.salary}</p>
        <div className="flex items-center gap-1 mt-1 text-gray-400 text-xs">
          <MapPin size={12} />
          <span className="truncate max-w-[120px]">{job.location}</span>
        </div>
      </div>
    </div>
  );
}
