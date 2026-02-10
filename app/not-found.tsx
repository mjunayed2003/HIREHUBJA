"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-white overflow-hidden">
      
      <div className="absolute inset-0 z-0 flex items-center justify-between px-10 md:px-20 opacity-[0.4]">
        <div className="relative w-1/3 h-2/3 grayscale opacity-30 pointer-events-none">
             <div className="absolute top-10 left-0 w-32 h-64 bg-slate-100 rounded-full blur-2xl" />
             <div className="absolute bottom-20 left-20 w-40 h-40 bg-slate-100 rounded-full blur-xl" />
        </div>
        
        {/* Right Side Figures */}
        <div className="relative w-1/3 h-2/3 grayscale opacity-30 pointer-events-none">
             <div className="absolute top-20 right-0 w-32 h-64 bg-slate-100 rounded-full blur-2xl" />
             <div className="absolute bottom-10 right-20 w-40 h-40 bg-slate-100 rounded-full blur-xl" />
        </div>
      </div>
      <div 
        className="absolute bottom-0 w-full h-[40vh] bg-[#f2f9f5] z-0" 
        style={{ clipPath: 'polygon(0 100%, 0 30%, 50% 10%, 100% 30%, 100% 100%)' }}
      />

      <main className="relative z-10 flex flex-col items-center max-w-4xl w-full">
        <h1 className="text-[150px] md:text-[220px] font-black text-[#43a047] leading-none select-none">
          404
        </h1>

        {/* Message */}
        <div className="text-center mb-4">
          <p className="text-xl md:text-2xl font-bold text-gray-800">
            Oops! <span className="font-medium text-gray-500">it seems you follow backlink</span>
          </p>
        </div>

        {/* The Animated Character GIF */}
        <div className="relative w-full max-w-[500px] aspect-square flex justify-center items-center">
          <div className="absolute bottom-[18%] w-[180px] h-[10px] bg-yellow-400 rounded-full opacity-70 blur-sm" />
          
          <Image
            src="/image/errorImage.gif" 
            alt="404 Illustration"
            width={450}
            height={450}
            className="object-contain relative z-10"
            priority
          />
        </div>

        <div className="mt-6">
          <Button 
            asChild
            size="lg"
            className="bg-[#43a047] hover:bg-[#388e3c] text-white font-bold px-12 py-7 rounded-md text-lg transition-transform active:scale-95 shadow-xl shadow-green-100"
          >
            <Link href="/">
              BACK TO HOME
            </Link>
          </Button>
        </div>
      </main>

      {/* Background Graphics (Simplified version of the people in screenshot) */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
         <svg className="w-full h-full" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="400" r="50" fill="gray" />
            <rect x="50" y="460" width="100" height="200" rx="20" fill="gray" />
            <circle cx="900" cy="450" r="50" fill="gray" />
            <rect x="850" y="510" width="100" height="200" rx="20" fill="gray" />
         </svg>
      </div>

    </div>
  );
}