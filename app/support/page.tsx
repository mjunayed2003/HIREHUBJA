"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function SupportPage() {
  const router = useRouter();

  return (
    <div className="max-w-[1393px] mx-auto p-4 md:p-10 pb-20">
      {/* Header Section */}
      <div className="relative flex items-center justify-center md:justify-start mb-10 md:mb-20">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => router.back()}
          className="absolute left-0 rounded-full border border-gray-200"
        >
          <ArrowLeft size={18} />
        </Button>
        {/* Centered title on mobile, left aligned with spacing on desktop */}
        <h1 className="text-xl md:text-2xl font-bold md:ml-20">Support</h1>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Illustration */}
        <div className="flex flex-col items-center space-y-4">
          <div className="relative w-full max-w-[400px]">
            <Image
              src="/image/support-image.svg"
              alt="Support Illustration"
              width={400}
              height={300}
              className="object-contain w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="w-full max-w-[500px] mx-auto md:ml-auto">
          <form className="space-y-6">
            
            {/* Title Input */}
            <div className="space-y-2">
              <label 
                htmlFor="title" 
                className="block text-sm font-bold text-gray-900"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                className="w-full bg-gray-50 border-transparent focus:border-[#3FAE2A] focus:bg-white focus:ring-0 rounded-lg px-4 py-3 text-sm placeholder:text-gray-400 transition-all duration-200"
                placeholder="Enter a title"
              />
            </div>

            {/* Message Textarea */}
            <div className="space-y-2">
              <label 
                htmlFor="message" 
                className="block text-sm font-bold text-gray-900"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full bg-gray-50 border-transparent focus:border-[#3FAE2A] focus:bg-white focus:ring-0 rounded-lg px-4 py-3 text-sm placeholder:text-gray-400 resize-none transition-all duration-200"
                placeholder="Write here..."
              />
            </div>

            {/* Submit Button */}
            <Button 
              className="w-full bg-[#3FAE2A] hover:bg-green-700 text-white font-bold h-12 rounded-lg text-base shadow-none"
            >
              Send
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}