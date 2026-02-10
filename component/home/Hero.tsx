"use client";

import Image from "next/image";
import { Check, Search, Bell, SlidersHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#1a1a1a] overflow-x-hidden">

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="relative pt-10 pb-20 lg:pt-[60px]">
        <div className="w-full mx-auto px-4 max-w-[1393px]">
          
          <div className="flex flex-col xl:flex-row justify-center items-start gap-10 xl:gap-[80px]">
            
            {/* ---------------- LEFT SIDE ---------------- */}
            <div className="flex flex-col gap-[36px] w-full max-w-[822px] relative z-20 mt-10">
              
              {/* HEADLINE */}
              <div className="w-full">
                <h1 className="text-5xl md:text-[80px] font-bold leading-[120%] tracking-tight text-gray-900">
                  <span className="text-[#3FAE2A]">Hire</span> Smarter. <span className="text-[#3FAE2A]">Find</span> <br />
                  Jobs Faster.
                </h1>
                
                <p className="text-gray-500 text-lg mt-6 max-w-[600px] leading-relaxed">
                  A trusted job marketplace that connects verified employers with skilled professionals — securely, efficiently, and transparently.
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-5 mt-8">
                  <Button className="bg-[#3FAE2A] hover:bg-[#369624] text-white font-bold rounded-full h-[60px] px-10 text-lg shadow-lg shadow-green-100 w-[200px]">
                    Find a Job
                  </Button>
                  <Button className="bg-white hover:bg-green-50 text-[#3FAE2A] border border-[#3FAE2A] font-bold rounded-full h-[60px] px-10 text-lg w-[200px]">
                    Post a Job
                  </Button>
                </div>
              </div>

              {/* TRUST SECTION WITH CURLY ARROW */}
              <div className="relative w-full max-w-[500px] mt-8">
                <div className="flex items-end gap-4 mb-5 relative">
                    <h3 className="text-[#3FAE2A] font-bold text-xl">Why People Trust Us</h3>
                    
                    {/* CUSTOM CURLY ARROW (Exactly matching your image) */}
                    <div className="absolute left-[360px] -top-[35px] w-[100px] h-[120px] hidden md:block pointer-events-none">
                        <svg viewBox="0 0 115 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full transform rotate-12">
                            {/* The Loop Path */}
                            <path 
                                d="M80 10 C 110 5, 120 40, 90 55 C 60 70, 40 30, 70 20 C 100 10, 110 90, 20 120" 
                                stroke="#74D665" 
                                strokeWidth="2.5" 
                                strokeLinecap="round"
                                className="opacity-80"
                            />
                            {/* The Arrow Head */}
                            <path d="M20 120 L 32 115 M20 120 L 28 108" stroke="#74D665" strokeWidth="2.5" strokeLinecap="round"/>
                        </svg>
                    </div>
                </div>

                <ul className="flex flex-col gap-[18px]">
                  {[
                    "Verified Employers & Job Seekers",
                    "Secure Document Uploads",
                    "Transparent Hiring Flow",
                    "Real-Time Status Tracking"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-4">
                      <div className="flex-shrink-0">
                         <Check strokeWidth={4} className="w-6 h-6 text-[#3FAE2A]" />
                      </div>
                      <span className="text-gray-600 font-semibold text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ---------------- RIGHT SIDE (PHONE & STATS) ---------------- */}
            <div className="relative w-full lg:w-auto flex flex-col items-center">
              
              {/* 1. TOP STATS (Fixed position above phone) */}
              <div className="flex justify-between w-full max-w-[350px] mb-8 relative z-20">
                 <div className="text-center">
                    <h4 className="text-[#3FAE2A] font-bold text-4xl">500+</h4>
                    <p className="text-gray-600 font-bold text-sm">Jobs</p>
                 </div>
                 <div className="text-center">
                    <h4 className="text-[#3FAE2A] font-bold text-4xl">500+</h4>
                    <p className="text-gray-600 font-bold text-sm">Companies</p>
                 </div>
              </div>

              {/* 2. BACKGROUND GLOW (Behind Phone Bottom) */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[535px] h-[400px] rounded-full bg-gradient-to-t from-[#EBFDF2] to-transparent blur-3xl opacity-80 pointer-events-none -z-10"></div>

              {/* 3. PHONE MOCKUP (iPhone 14/15/16 Style) */}
              <div className="relative z-10">
                <div 
                  className="bg-white rounded-[55px] shadow-2xl border-[9px] border-[#121212] overflow-hidden relative"
                  style={{ width: '330px', height: '685px' }}
                >
                  {/* Dynamic Island */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[110px] h-[30px] bg-black rounded-full z-50 flex justify-end pr-2 items-center">
                      <div className="w-2 h-2 rounded-full bg-[#1a1a1a] border border-[#333]"></div>
                  </div>
                  
                  {/* Status Bar */}
                  <div className="flex justify-between px-7 pt-4 text-[11px] font-bold text-black select-none">
                     <span>5:13</span>
                     <div className="flex gap-1.5">
                        <span className="h-3 w-3 bg-black mask-icon-signal"></span>
                        <span>LTE</span>
                        <span>🔋</span>
                     </div>
                  </div>

                  {/* SCREEN CONTENT */}
                  <div className="pt-6 px-5 pb-5 h-full bg-white flex flex-col">
                    
                    {/* Header */}
                    <div className="flex justify-between items-center mb-6 mt-4">
                       <div className="flex flex-col">
                          <div className="w-11 h-11 rounded-full overflow-hidden border border-gray-100 mb-1">
                             <Image src="https://github.com/shadcn.png" width={44} height={44} alt="user" className="object-cover" />
                          </div>
                          <span className="text-[#3FAE2A] text-xl font-bold tracking-tight">Hello John,</span>
                       </div>
                       <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center shadow-sm">
                          <Bell className="w-5 h-5 text-gray-400" />
                          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full hidden"></span>
                       </div>
                    </div>

                    {/* Search Bar */}
                    <div className="relative mb-8">
                       <Search className="w-4 h-4 text-gray-400 absolute left-4 top-3.5" />
                       <input 
                          placeholder="Search jobs, companies..." 
                          className="w-full bg-white border border-gray-100 rounded-2xl py-3 pl-10 pr-10 text-xs shadow-[0_2px_10px_rgba(0,0,0,0.03)] outline-none text-gray-600 placeholder:text-gray-400"
                       />
                       <SlidersHorizontal className="w-4 h-4 text-gray-400 absolute right-4 top-3.5" />
                    </div>

                    {/* Job Categories */}
                    <div className="flex justify-between items-center mb-4 px-1">
                       <h5 className="text-sm font-bold text-gray-900">Job Categories</h5>
                       <span className="text-[10px] font-bold text-[#3FAE2A] cursor-pointer">See All</span>
                    </div>
                    <div className="flex gap-3 overflow-hidden mb-8">
                       {[
                         { name: 'Education', img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=150&q=80' }, 
                         { name: 'Healthcare', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=150&q=80' }, 
                         { name: 'Engineering', img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=150&q=80' }
                       ].map((cat, i) => (
                          <div key={i} className="flex-shrink-0 w-[88px] flex flex-col items-center gap-2">
                             <div className="w-full h-[75px] rounded-2xl overflow-hidden relative shadow-sm">
                                <Image src={cat.img} alt={cat.name} fill className="object-cover" />
                             </div>
                             <span className="text-[10px] font-bold text-gray-800">{cat.name}</span>
                          </div>
                       ))}
                       <div className="w-10"></div> {/* Spacer */}
                    </div>

                    {/* Recommended Jobs */}
                    <div className="flex justify-between items-center mb-4 px-1">
                       <h5 className="text-sm font-bold text-gray-900">Recommended Jobs For You</h5>
                       <span className="text-[10px] font-bold text-[#3FAE2A] cursor-pointer">See All</span>
                    </div>

                    {/* MERCEDES CARD (Exact Match) */}
                    <div className="relative">
                        <Card className="p-4 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-50 bg-white rounded-[24px]">
                            <div className="flex justify-between items-start mb-3">
                                <div className="flex gap-3">
                                    <div className="w-11 h-11 rounded-full bg-[#2c2c2c] text-white flex items-center justify-center shadow-md">
                                        {/* Simple Mercedes Logo Mock */}
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path d="M12 2L14.5 10H19.5L15.5 13L17 21L12 17L7 21L8.5 13L4.5 10H9.5L12 2Z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-semibold text-gray-400 mb-0.5">Mercedes Benz</p>
                                        <h6 className="text-[15px] font-bold text-gray-900 leading-tight">Senior Sales <br/> Executive</h6>
                                    </div>
                                </div>
                                <div className="p-1">
                                    <svg width="12" height="14" viewBox="0 0 12 14" fill="none" className="text-gray-400">
                                        <path d="M1 13V2C1 1.44772 1.44772 1 2 1H10C10.5523 1 11 1.44772 11 2V13L6 10L1 13Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-2 mb-3 px-1">
                                <span className="text-[10px] text-gray-400 font-medium">20 Dec 2026</span>
                            </div>

                            <div className="flex gap-2">
                                <span className="bg-gray-50 border border-gray-100 text-[10px] px-3 py-1.5 rounded-full text-gray-500 font-semibold">Full Time</span>
                                <span className="bg-gray-50 border border-gray-100 text-[10px] px-3 py-1.5 rounded-full text-gray-500 font-semibold">Senior level</span>
                                <span className="bg-gray-50 border border-gray-100 text-[10px] px-3 py-1.5 rounded-full text-gray-500 font-semibold">On-site</span>
                            </div>
                        </Card>
                        
                        {/* Partially visible card below */}
                        <div className="absolute top-[85%] left-0 w-full opacity-40 -z-10 scale-[0.95]">
                             <Card className="p-4 bg-white border border-gray-100 rounded-[24px] h-32"></Card>
                        </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------- BOTTOM BANNER SECTION ---------------- */}
      <section className="pb-20 flex justify-center w-full px-4">
        <div className="relative w-full max-w-[1621px] h-[312px] rounded-[18px] overflow-hidden shadow-2xl group">
             {/* Image & Overlay */}
             <Image src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070" alt="Meeting" fill className="object-cover group-hover:scale-105 transition-transform duration-700"/>
             <div className="absolute inset-0 bg-linear-to-r from-[#1a3d16]/80 via-[#2d5c26]/80 to-[#3FAE2A]/40 mix-blend-multiply"></div>
             
             {/* Stats */}
             <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-evenly text-center text-white">
                <div className="flex flex-col items-center">
                   <h2 className="text-5xl md:text-[64px] font-bold mb-2">10K+</h2>
                   <p className="text-xl md:text-2xl font-semibold opacity-90">Jobs Posted</p>
                </div>
                <div className="hidden md:block w-px h-24 bg-white/40"></div>
                <div className="flex flex-col items-center">
                   <h2 className="text-5xl md:text-[64px] font-bold mb-2">50K+</h2>
                   <p className="text-xl md:text-2xl font-semibold opacity-90">Job Seekers</p>
                </div>
                <div className="hidden md:block w-px h-24 bg-white/40"></div>
                <div className="flex flex-col items-center">
                   <h2 className="text-5xl md:text-[64px] font-bold mb-2">95%</h2>
                   <p className="text-xl md:text-2xl font-semibold opacity-90">Verified Employers</p>
                </div>
             </div>
        </div>
      </section>
    </div>
  );
}