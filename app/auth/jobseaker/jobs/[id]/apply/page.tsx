"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // রিডাইরেক্ট করার জন্য
import { ArrowLeft, Upload, FileText, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ApplyPage() {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [resumeName, setResumeName] = useState("");
  
  // Character Limit for Message
  const MAX_CHARS = 150;

  // Resume Upload Handler
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeName(e.target.files[0].name);
    }
  };

  // Form Submit Handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Application Submitted Successfully!");
    setTimeout(() => {
        router.push("/auth/jobseaker/jobs");
    }, 1000);
  };

  return (
    <div className="max-w-[800px] mx-auto p-6 bg-white min-h-screen font-sans">
      
      {/* --- Header --- */}
      <div className="flex items-center gap-4 mb-8">
        <Link href="/auth/jobseaker/jobs" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition">
          <ArrowLeft size={20} className="text-gray-600" />
        </Link>
        <h1 className="text-xl font-bold text-gray-800">Apply Details</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        
        {/* --- Resume Upload --- */}
        <div className="space-y-3">
            <Label className="text-sm font-semibold text-gray-600">Resume Preview</Label>
            <div className="relative">
                <div className="flex items-center justify-between w-full p-4 bg-white border border-gray-200 rounded-xl shadow-sm">
                    <div className="flex items-center gap-3 text-gray-400">
                        <FileText size={20} />
                        <span className="text-sm text-gray-500">
                            {resumeName || "Upload Resume (PDF/Doc)"}
                        </span>
                    </div>
                    
                    {/* Hidden Input Trigger */}
                    <label htmlFor="resume-upload" className="cursor-pointer p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                        <Upload size={18} className="text-gray-500" />
                    </label>
                    <input 
                        id="resume-upload" 
                        type="file" 
                        accept=".pdf,.doc,.docx"
                        className="hidden" 
                        onChange={handleFileChange}
                    />
                </div>
            </div>
        </div>

        {/* --- Availability Date --- */}
        <div className="space-y-3">
            <Label className="text-sm font-semibold text-gray-600">Availability / Start Date <span className="text-gray-400 font-normal">(Optional)</span></Label>
            <div className="relative">
                <Input 
                    type="date" 
                    className="w-full p-4 h-14 bg-white border-gray-200 rounded-xl focus:ring-[#3FAE2A] focus:border-[#3FAE2A]" 
                />
                {/* Custom Calendar Icon positioning if needed, browser default usually suffices */}
            </div>
        </div>

        {/* --- Short Message --- */}
        <div className="space-y-3">
            <Label className="text-sm font-semibold text-gray-600">Short Message <span className="text-gray-400 font-normal">(If Any)</span></Label>
            <div className="relative">
                <Textarea 
                    placeholder="Enter your Short note" 
                    className="min-h-[150px] p-4 bg-white border-gray-200 rounded-xl resize-none focus:ring-[#3FAE2A] focus:border-[#3FAE2A]"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    maxLength={MAX_CHARS}
                />
                <span className="absolute bottom-4 right-4 text-xs text-gray-400">
                    {message.length}/{MAX_CHARS}
                </span>
            </div>
        </div>

        {/* --- Submit Button --- */}
        <div className="pt-10 flex justify-center">
            <Button 
                type="submit" 
                className="w-full max-w-sm bg-[#3FAE2A] hover:bg-[#359624] text-white font-bold py-6 rounded-full text-lg shadow-lg transition-transform hover:scale-[1.02]"
            >
                Submit Application
            </Button>
        </div>

      </form>
    </div>
  );
}