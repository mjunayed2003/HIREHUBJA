"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import JobCard from "@/component/card/JobCard";

// --- MOCK DATA (Fixed IDs) ---
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
        type: ["Full Time", "Lead", "On-site", "Sales"],
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
        type: ["Full Time", "Lead", "On-site", "Sales"],
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
            <div className="max-w-[1393px] mx-auto px-4 pt-8">

                {/* --- TABS --- */}
                <div className="flex justify-center border-b border-gray-200 mb-10 bg-white md:bg-transparent sticky top-0 z-10 md:static">
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
                                className={`px-4 md:px-10 py-4 text-sm font-semibold transition-all relative ${isActive ? "text-gray-900" : "text-gray-400 hover:text-gray-600"
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
                    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-2 duration-500">

                        {/* Search Bar */}
                        <div className="flex items-center gap-2 bg-white p-2 rounded-full shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] max-w-2xl mx-auto border border-gray-100">
                            <Search className="text-gray-400 ml-4 w-5 h-5" />
                            <Input
                                placeholder="Search jobs, companies, or locations"
                                className="border-none shadow-none focus-visible:ring-0 text-base h-10"
                            />
                            <button className="p-3 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition">
                                <SlidersHorizontal size={18} className="text-gray-600" />
                            </button>
                        </div>

                        {/* Categories */}
                        <div>
                            <h3 className="font-bold text-gray-800 mb-5 ml-1">Job Categories</h3>
                            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x">
                                {CATEGORIES.map((cat, idx) => (
                                    <div key={idx} className="flex-shrink-0 flex flex-col items-center gap-3 cursor-pointer group snap-start">
                                        <div className="w-[140px] h-[90px] relative rounded-xl overflow-hidden border border-transparent group-hover:border-[#3FAE2A] transition-all shadow-sm">
                                            {/* Replace div with actual Image component when ready */}
                                            <div className="bg-gray-200 w-full h-full flex items-center justify-center text-gray-400">
                                                <Image src={cat.img} alt={cat.name} fill className="object-cover"/>
                                             
                                            </div>
                                        </div>
                                        <span className="text-xs font-semibold text-gray-600 group-hover:text-[#3FAE2A] transition-colors">
                                            {cat.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Recommended Jobs */}
                        <div>
                            <div className="flex justify-between items-center mb-5 px-1">
                                <h3 className="font-bold text-gray-800">Recommended Jobs For You</h3>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                                {recommendedJobs.map((job) => <JobCard key={job.id} job={{ ...job, status: null }} />)}
                            </div>
                        </div>
                        <div className="text-center mt-10">
                            <button
                                onClick={() => setShowAllRecommended((prev) => !prev)}
                                className="text-sm text-[#3FAE2A] font-bold underline hover:text-green-700 transition"
                            >
                                {showAllRecommended ? "Close" : "See All"}
                            </button>
                        </div>


                        {/* Other Jobs */}
                        <div>
                            <h3 className="font-bold text-gray-800 mb-5 px-1">Others Jobs</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                                {/* Repeating JOBS for demo purposes - ensure keys are unique */}
                                {otherJobsToShow.map((job, index) => (
                                    <JobCard key={`other-${job.id}-${index}`} job={{ ...job, status: null }} />
                                ))}
                            </div>
                            <div className="text-center mt-10">
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
                            <h3 className="font-bold text-gray-800">My Applied Job</h3>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                            {/* Demo logic to show different statuses */}
                            {JOBS.map((job, i) => (
                                <JobCard
                                    key={i}
                                    job={{
                                        ...job,
                                        // Just for demo visualization
                                        status: i === 0 ? "Submitted" : i === 2 ? "Interview Scheduled" : i === 3 ? "Hired" : "Submitted"
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {/* --- BOOKMARK CONTENT --- */}
                {activeTab === "bookmark" && (
                    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="font-bold text-gray-800">Bookmarked Jobs</h3>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                            {JOBS.slice(0, 4).map((job) => (
                                <JobCard key={job.id} job={{ ...job, isBookmarked: true, status: null }} />
                            ))}
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}