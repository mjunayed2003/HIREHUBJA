"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ForgotPasswordFlow() {
  const router = useRouter();
  
  // State to manage steps: 1 = Email, 2 = OTP, 3 = Reset Password
  const [step, setStep] = useState<1 | 2 | 3>(1);
  
  // Form States
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPass1, setShowPass1] = useState(false);
  const [showPass2, setShowPass2] = useState(false);

  // Refs for OTP inputs to handle focus
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

  // ---- HANDLERS ----

  // Step 1: Submit Email
  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // API Call simulation here...
    setStep(2);
  };

  // Step 2: Handle OTP Input
  const handleOtpChange = (value: string, index: number) => {
    if (isNaN(Number(value))) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  // Step 2: Submit OTP
  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Verify OTP logic...
    setStep(3);
  };

  // Step 3: Reset Password
  const handleResetSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Reset password logic...
    console.log("Password Reset Successful");
    router.push("/auth/signin"); // Redirect to login
  };

  // Back Button Logic
  const handleBack = () => {
    if (step === 1) router.push("/auth/signin");
    if (step === 2) setStep(1);
    if (step === 3) setStep(2);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      {/* Main Container - Max Width 1393px */}
      <div className="w-full max-w-[1393px] bg-white rounded-[30px] shadow-xl overflow-hidden flex flex-col md:flex-row min-h-[700px]">

        {/* LEFT SIDE (Static Image) */}
        <div className="relative w-full md:w-1/2 hidden md:block">
          <Image
            src="/image/login-page-image.jpg"
            alt="Office meeting"
            fill
            className="object-cover"
            priority
          />
          {/* Glass Overlay */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[80%] bg-white/30 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-center text-white shadow-lg">
            <h3 className="text-lg font-bold">Welcome to the HireHubJA</h3>
            <p className="text-sm opacity-90 mt-1">Login to explore more</p>
            <div className="flex justify-center gap-2 mt-3">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span className="w-2 h-2 bg-white/50 rounded-full"></span>
              <span className="w-2 h-2 bg-white/50 rounded-full"></span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE (Dynamic Content based on Step) */}
        <div className="w-full md:w-1/2 bg-[#EBFDF2] flex flex-col items-center justify-center p-8 md:p-12 relative transition-all duration-300">
          
          {/* Back Button */}
          <button 
            onClick={handleBack}
            className="absolute top-8 left-8 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors z-10"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>

          {/* Logo (Visible on Step 2 & 3 as per screenshots) */}
          {step !== 1 && (
             <div className="mb-6">
                <Image 
                    src="/image/logo.svg" 
                    alt="Logo" 
                    width={140} 
                    height={80} 
                    className="object-contain"
                />
            </div>
          )}

          {/* ---------------- STEP 1: FORGOT PASSWORD ---------------- */}
          {step === 1 && (
            <div className="w-full max-w-md text-center animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-[#3FAE2A] mb-2">Forgot Password</h1>
                <p className="text-gray-500 text-sm">
                  Please enter your email to reset your password.
                </p>
              </div>

              <form onSubmit={handleEmailSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-xs font-medium text-gray-600 ml-1">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="rounded-xl bg-white border-transparent focus:ring-[#3FAE2A] py-6"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#3FAE2A] hover:bg-[#369624] text-white font-bold rounded-full py-6 text-lg shadow-lg mt-4"
                >
                  Get Code
                </Button>
              </form>
            </div>
          )}

          {/* ---------------- STEP 2: VERIFY OTP ---------------- */}
          {step === 2 && (
            <div className="w-full max-w-md text-center animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="mb-8">
                <h1 className="text-2xl font-bold text-[#3FAE2A] mb-2">Verify</h1>
                <p className="text-gray-500 text-sm">
                  Enter the verification code we've just sent to your email to continue
                </p>
              </div>

              <form onSubmit={handleOtpSubmit} className="space-y-8">
                <div className="flex justify-center gap-2 sm:gap-4">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => { otpRefs.current[index] = el }}
                      type="text"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(e.target.value, index)}
                      onKeyDown={(e) => handleOtpKeyDown(e, index)}
                      className="w-10 h-10 sm:w-12 sm:h-12 text-center border border-gray-300 rounded-lg sm:rounded-xl focus:border-[#3FAE2A] focus:ring-2 focus:ring-[#3FAE2A]/20 outline-none text-lg font-bold bg-white transition-all"
                    />
                  ))}
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#3FAE2A] hover:bg-[#369624] text-white font-bold rounded-full py-6 text-lg shadow-lg"
                >
                  Verify
                </Button>
              </form>
            </div>
          )}

          {/* ---------------- STEP 3: RESET PASSWORD ---------------- */}
          {step === 3 && (
            <div className="w-full max-w-sm animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="text-center mb-6">
                <h1 className="text-2xl font-bold text-[#3FAE2A] mb-2">Reset Password</h1>
                <p className="text-gray-500 text-xs">
                   Password must have 6-8 characters.
                </p>
              </div>

              <form onSubmit={handleResetSubmit} className="space-y-5">
                {/* New Password */}
                <div className="space-y-1 relative">
                    <Label className="text-xs font-medium text-gray-600 ml-1">Create New Password</Label>
                    <div className="relative">
                        <Input
                            type={showPass1 ? "text" : "password"}
                            placeholder="Enter your Password"
                            className="rounded-xl bg-white border-transparent focus:ring-[#3FAE2A] py-6 pr-10"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPass1(!showPass1)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                        >
                            {showPass1 ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                </div>

                {/* Confirm Password */}
                <div className="space-y-1 relative">
                    <Label className="text-xs font-medium text-gray-600 ml-1">Enter Password Again</Label>
                    <div className="relative">
                        <Input
                            type={showPass2 ? "text" : "password"}
                            placeholder="Enter your Password"
                            className="rounded-xl bg-white border-transparent focus:ring-[#3FAE2A] py-6 pr-10"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPass2(!showPass2)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                        >
                            {showPass2 ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#3FAE2A] hover:bg-[#369624] text-white font-bold rounded-full py-6 text-lg shadow-lg mt-6"
                >
                  Reset
                </Button>
              </form>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}