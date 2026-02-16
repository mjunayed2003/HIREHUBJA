"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import JobCard from "@/component/card/JobCard";

// --- MOCK DATA ---
const JOBS = [
    {
        id: "1",
        title: "Senior Sales Executive",
        company: "Mercedes Benz",
        logo: "/image/jobOpportunities.jpg",
        date: "20 Dec 2026",
        salary: "$1000/Month",
        location: "Dhaka, Bangladesh",
        type: ["Full Time", "Senior level", "On-site", "Sales"],
        status: null,
    },
    {
        id: "2",
        title: "UI/UX Designer",
        company: "Google",
        logo: "/image/jobOpportunities.jpg",
        date: "21 Dec 2026",
        salary: "$2000/Month",
        location: "Remote",
        type: ["Full Time", "Mid level", "Remote", "Sales"],
        status: "Submitted",
    },
    {
        id: "3",
        title: "Software Engineer",
        company: "Tesla",
        logo: "/image/jobOpportunities.jpg",
        date: "22 Jan 2026",
        salary: "$3000/Month",
        location: "California, USA",
        type: ["Contract", "Senior level", "Hybrid", "Sales"],
        status: "Interview Scheduled",
    },
    {
        id: "4",
        title: "Product Manager",
        company: "Amazon",
        logo: "/image/jobOpportunities.jpg",
        date: "25 Dec 2026",
        salary: "$4000/Month",
        location: "London, UK",
        type: ["Full Time", "Lead-Manage", "On-site", "Sales"],
        status: "Hired",
    },
    {
        id: "5",
        title: "Product Manager",
        company: "Amazon",
        logo: "/image/jobOpportunities.jpg",
        date: "25 Dec 2026",
        salary: "$4000/Month",
        location: "London, UK",
        type: ["Full Time", "Lead-Manage", "On-site", "Sales"],
        status: "Hired",
    },
];

const CATEGORIES = [
    { name: "Education", img: "/image/education.jpg" },
    { name: "Healthcare", img: "/image/healthcare.jpg" },
    { name: "Engineering", img: "/image/engineering.jpg" },
    { name: "IT & Tech", img: "/image/itandtech.jpg" },
    { name: "Marketing", img: "/image/marketing.jpg" },
    { name: "Customer Service", img: "/image/customer.jpg" },
    { name: "Accounting", img: "/image/accounting.jpg" },
    { name: "Administration", img: "/image/administration.jpg" },
];

export default function JobSeekerDashboard() {
    const [activeTab, setActiveTab] = useState("find");
    const [showAllRecommended, setShowAllRecommended] = useState(false);
    const [showAllOthers, setShowAllOthers] = useState(false);

    const recommendedJobs = showAllRecommended ? JOBS : JOBS.slice(0, 5);
    const otherJobsToShow = showAllOthers ? JOBS : JOBS.slice(0, 5);

    return (
        <div className="min-h-screen bg-white md:bg-gray-50 pb-20 font-sans">
            <div className="max-w-[1393px] mx-auto px-4 pt-4 md:pt-8">

                {/* --- TABS --- */}
                <div className="flex justify-between md:justify-center border-b border-gray-200 mb-6 md:mb-10 bg-white md:bg-transparent sticky top-0 z-10 md:static overflow-x-auto scrollbar-hide">
                    {[
                        { label: "Find Track Job", value: "find" },
                        { label: "Track My Job", value: "track" },
                        { label: "Bookmark", value: "bookmark" }
                    ].map((tab) => {
                        const isActive = activeTab === tab.value;
                        return (
                            <button
                                key={tab.value}
                                onClick={() => setActiveTab(tab.value)}
                                className={`flex-1 md:flex-none px-2 md:px-10 py-3 md:py-4 text-xs md:text-sm font-semibold transition-all relative whitespace-nowrap ${isActive ? "text-gray-900" : "text-gray-400 hover:text-gray-600"
                                    }`}
                            >
                                {tab.label}
                                {isActive && (
                                    <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#3FAE2A] rounded-t-full transition-all"></span>
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* --- FIND JOB CONTENT --- */}
                {activeTab === "find" && (
                    <div className="space-y-8 md:space-y-10 animate-in fade-in slide-in-from-bottom-2 duration-500">

                        {/* Search Bar */}
                        <div className="flex items-center gap-2 bg-white p-1.5 md:p-2 rounded-full shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] max-w-2xl mx-auto border border-gray-100">
                            <Search className="text-gray-400 ml-3 w-4 h-4 md:w-5 md:h-5" />
                            <Input
                                placeholder="Search jobs..."
                                className="border-none shadow-none focus-visible:ring-0 text-sm md:text-base h-10"
                            />
                            <button className="p-2.5 md:p-3 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition">
                                <SlidersHorizontal size={16} className="text-gray-600 md:w-[18px] md:h-[18px]" />
                            </button>
                        </div>

                        {/* Categories */}
                        <div>
                            <h3 className="font-bold text-gray-800 mb-4 md:mb-5 ml-1 text-lg">Job Categories</h3>
                            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x px-1">
                                {CATEGORIES.map((cat, idx) => (
                                    <div key={idx} className="flex-shrink-0 flex flex-col items-center gap-2 md:gap-3 cursor-pointer group snap-start">
                                        <div className="w-[120px] h-[80px] md:w-[140px] md:h-[90px] relative rounded-xl overflow-hidden border border-transparent group-hover:border-[#3FAE2A] transition-all shadow-sm">
                                            <div className="bg-gray-100 w-full h-full relative">
                                                <Image src={cat.img} alt={cat.name} fill className="object-cover" />
                                            </div>
                                        </div>
                                        <span className="text-xs font-semibold text-gray-600 group-hover:text-[#3FAE2A] transition-colors text-center">
                                            {cat.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Recommended Jobs */}
                        <div>
                            <div className="flex justify-between items-center mb-5 px-1">
                                <h3 className="font-bold text-gray-800 text-lg">Recommended Jobs For You</h3>
                            </div>
                            {/* Changed to grid-cols-1 for small devices */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 md:gap-6">
                                {recommendedJobs.map((job) => (
                                    <div key={job.id} className="flex justify-center">
                                        <JobCard job={{ ...job, status: null }} />
                                    </div>
                                ))}
                            </div>
                            <div className="text-center mt-8">
                                <button
                                    onClick={() => setShowAllRecommended((prev) => !prev)}
                                    className="text-sm text-[#3FAE2A] font-bold underline hover:text-green-700 transition"
                                >
                                    {showAllRecommended ? "Close" : "See All"}
                                </button>
                            </div>
                        </div>

                        {/* Other Jobs */}
                        <div>
                            <h3 className="font-bold text-gray-800 mb-5 px-1 text-lg">Others Jobs</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 md:gap-6">
                                {otherJobsToShow.map((job, index) => (
                                    <div key={`other-${job.id}-${index}`} className="flex justify-center">
                                        <JobCard job={{ ...job, status: null }} />
                                    </div>
                                ))}
                            </div>
                            <div className="text-center mt-8">
                                <button
                                    onClick={() => setShowAllOthers((prev) => !prev)}
                                    className="text-sm text-[#3FAE2A] font-bold underline hover:text-green-700 transition"
                                >
                                    {showAllOthers ? "Close" : "See All"}
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* --- TRACK MY JOB CONTENT --- */}
                {activeTab === "track" && (
                    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="font-bold text-gray-800 text-lg">My Applied Job</h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 md:gap-6">
                            {JOBS.map((job, i) => (
                                <div key={i} className="flex justify-center">
                                    <JobCard
                                        job={{
                                            ...job,
                                            status: i === 0 ? "Submitted" : i === 2 ? "Interview Scheduled" : i === 3 ? "Hired" : "Submitted"
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* --- BOOKMARK CONTENT --- */}
                {activeTab === "bookmark" && (
                    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="font-bold text-gray-800 text-lg">Bookmarked Jobs</h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 md:gap-6">
                            {JOBS.slice(0, 4).map((job) => (
                                <div key={job.id} className="flex justify-center">
                                    <JobCard job={{ ...job, isBookmarked: true, status: null }} />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}