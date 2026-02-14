"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  const router = useRouter();
  return (
    <div className="max-w-5xl mx-auto p-10">
      <div className="flex items-center gap-6 mb-12">
        <Button variant="ghost" size="icon" onClick={() => router.back()} className="rounded-full border">
          <ArrowLeft size={18} />
        </Button>
        <h1 className="text-2xl font-bold">Privacy Policy</h1>
      </div>

      <div className="max-w-3xl mx-auto bg-white border border-gray-100 rounded-3xl p-10 shadow-sm min-h-[600px]">
        <div className="text-xs text-gray-500 space-y-6 leading-relaxed">
          <p>Our services. If you do not agree to these terms, please do not use our app.</p>
          <section>
            <h3 className="font-bold text-gray-700 mb-2 uppercase">1. Acceptance of Terms</h3>
            <p>By downloading, installing, or using Fab & Fit (the "App"), you agree to comply with and be bound by these Terms and Conditions...</p>
          </section>
          <section>
            <h3 className="font-bold text-gray-700 mb-2 uppercase">2. Account Registration</h3>
            <p>To use certain features of the App, you may be required to create an account. You agree to provide accurate, current, and complete information...</p>
          </section>
          {/* Add more sections as per image */}
        </div>
      </div>
    </div>
  );
}