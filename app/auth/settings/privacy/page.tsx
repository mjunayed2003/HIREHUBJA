"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function AboutUsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white font-sans text-[#1a1a1a] p-6 md:p-10">
      
      {/* ---------------- HEADER ---------------- */}
      <div className="max-w-[1200px] mx-auto flex items-center gap-4 mb-8">
        <button 
          onClick={() => router.back()} 
          className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all"
        >
          <ArrowLeft size={20} className="text-gray-700" />
        </button>
        <h1 className="text-2xl font-bold text-black">Privacy Policy</h1>
      </div>

      {/* ---------------- CONTENT CARD ---------------- */}
      <div className="max-w-[819px] mx-auto">
        <div className="w-full bg-white border border-gray-100 rounded-[24px] p-8 md:p-12 shadow-[0_2px_15px_rgba(0,0,0,0.02)]">
          
          <div className="text-gray-500 text-sm leading-[1.8] space-y-6">
            
            <p>
              our services. If you do not agree to these terms, please do not use our app.
            </p>

            <div>
              <h3 className="text-gray-800 font-semibold mb-2">1. Acceptance of Terms</h3>
              <p>
                By downloading, installing, or using HireHubJA (the "App"), you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, you should immediately discontinue using the App.
              </p>
            </div>

            <div>
              <h3 className="text-gray-800 font-semibold mb-2">2. Account Registration</h3>
              <p className="mb-2">
                To use certain features of the App, you may be required to create an account. You agree to:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Provide accurate, current, and complete information during the registration process.</li>
                <li>Maintain the confidentiality of your account and password.</li>
                <li>Notify us immediately of any unauthorized use of your account.</li>
                <li>You are responsible for all activities that occur under your account.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-gray-800 font-semibold mb-2">3. Use of the App</h3>
              <p className="mb-2">
                You agree to use the App only for lawful purposes and in accordance with these Terms. You agree not to:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Violate any applicable laws or regulations.</li>
                <li>Engage in any conduct that could damage, disable, or interfere with the App's functionality.</li>
                <li>Upload or transmit any viruses, malware, or harmful code through the App.</li>
                <li>Attempt to reverse engineer, decompile, or otherwise manipulate the App's code or functionality.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-gray-800 font-semibold mb-2">4. Privacy and Data Collection</h3>
              <p>
                By using the App, you consent to our Privacy Policy, which outlines how we collect, use, and protect your personal data. Please review our Privacy Policy to understand our practices.
              </p>
            </div>

            <div>
              <h3 className="text-gray-800 font-semibold mb-2">5. Subscription and Payments</h3>
              <p>
                If you are using a subscription service provided by HireHubJA (such as premium features), you agree to pay the fees as specified. All subscription payments are non-refundable, except as required by law. Prices and availability are subject to change.
              </p>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}