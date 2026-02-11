"use client";

import { useState } from "react";
import Image from "next/image";
import { Eye, EyeOff, ArrowLeft, MapPin, Upload, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";

export default function EmployerSignupPage() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 font-sans">
      <div className="w-full max-w-[1393px] bg-white rounded-[30px] shadow-xl overflow-hidden flex flex-col md:flex-row min-h-[750px]">
        
        {/* Left Side: Image */}
        <div className="relative w-full md:w-1/2 hidden md:block">
          <Image src="/image/login-page-image.jpg" alt="Meeting" fill className="object-cover" priority />
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[80%] bg-white/30 backdrop-blur-md p-6 rounded-2xl text-center text-white shadow-lg">
            <h3 className="text-lg font-bold">Welcome to HireHubJA</h3>
            <p className="text-sm opacity-90 mt-1">Login to explore more</p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-1/2 bg-[#EAF6EA] flex flex-col p-8 md:p-12 relative overflow-y-auto">
          {step > 1 && (
            <Button variant="ghost" size="icon" className="absolute top-8 left-8 rounded-full bg-white shadow-sm hover:bg-gray-100" onClick={() => setStep(step - 1)}>
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </Button>
          )}

          <div className="flex-1 flex flex-col items-center justify-center w-full max-w-md mx-auto">
            {step === 1 && <StepOne onNext={() => setStep(2)} />}
            {step === 2 && <StepTwo onNext={() => setStep(3)} />}
            {step === 3 && <StepThree />}
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Step 1: Basic Info ---
function StepOne({ onNext }: { onNext: () => void }) {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="w-full space-y-6 animate-in fade-in slide-in-from-right-4">
      <div className="text-center">
        <Image src="/image/logo.svg" alt="Logo" width={120} height={120} className="mx-auto mb-2" />
        <h2 className="text-2xl font-bold text-[#3FAE2A]">Create Account</h2>
        <p className="text-gray-500 text-sm">Fill in your information.</p>
      </div>

      <div className="space-y-4">
        <div className="space-y-1"><Label>Full Name</Label><Input placeholder="Enter your full name" className="h-12 border-none shadow-sm" /></div>
        <div className="space-y-1"><Label>Email</Label><Input type="email" placeholder="Enter your Email" className="h-12 border-none shadow-sm" /></div>
        
        {/* Password Field */}
        <div className="space-y-1">
          <Label>Password</Label>
          <div className="relative">
            <Input type={showPass ? "text" : "password"} placeholder="Enter Password" className="h-12 border-none shadow-sm pr-10" />
            <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-3 text-gray-400">
              {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="terms" className="data-[state=checked]:bg-[#3FAE2A] data-[state=checked]:border-[#3FAE2A]" />
          <label htmlFor="terms" className="text-xs text-gray-500">I agree to <span className="text-[#3FAE2A]">Terms</span> & <span className="text-[#3FAE2A]">Privacy</span></label>
        </div>

        <Button onClick={onNext} className="w-full h-12 bg-[#3FAE2A] hover:bg-[#359624] rounded-full text-lg shadow-lg shadow-green-200/50">Sign In</Button>
      </div>
    </div>
  );
}

// --- Step 2: Profile Info ---
function StepTwo({ onNext }: { onNext: () => void }) {
  return (
    <div className="w-full space-y-6 animate-in fade-in slide-in-from-right-4">
      <h2 className="text-xl font-bold text-gray-800 text-center">Profile Information</h2>

      <div className="flex items-center gap-4">
        <div className="w-20 h-20 rounded-full bg-white border-dashed border-2 flex items-center justify-center text-3xl">👤</div>
        <Button variant="outline" className="text-xs">Choose Picture</Button>
      </div>

      <div className="space-y-4">
        <div className="space-y-1"><Label>Phone Number</Label><Input type="tel" placeholder="Enter Phone number" className="h-12 border-none shadow-sm" /></div>
        
        <div className="space-y-1">
          <Label>Location</Label>
          <div className="relative">
            <Input placeholder="Add Address" className="h-12 border-none shadow-sm pr-10" />
            <MapPin className="absolute right-3 top-3 text-gray-400 w-5 h-5" />
          </div>
        </div>

        <div className="space-y-1 relative">
          <Label>Overview</Label>
          <Textarea placeholder="About yourself" className="border-none shadow-sm resize-none min-h-[120px]" />
          <span className="absolute bottom-2 right-2 text-xs text-gray-400">0/150</span>
        </div>

        <Button onClick={onNext} className="w-full h-12 bg-[#3FAE2A] hover:bg-[#359624] rounded-full text-lg shadow-lg">Next</Button>
      </div>
    </div>
  );
}

// --- Step 3: Verification ---
function StepThree() {
  return (
    <div className="w-full space-y-6 animate-in fade-in slide-in-from-right-4">
      <h2 className="text-xl font-bold text-gray-800 text-center">Verification</h2>
      
      <div className="space-y-4">
        <Label className="text-gray-500">ID Verification</Label>
        <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm cursor-pointer hover:bg-gray-50">
          <span className="text-sm text-gray-400">Upload Government ID</span>
          <Upload className="w-5 h-5 text-gray-400" />
        </div>

        <Label className="text-gray-500">Selfie Verification</Label>
        <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm cursor-pointer hover:bg-gray-50">
          <span className="text-sm text-gray-400">Capture selfie</span>
          <Camera className="w-5 h-5 text-gray-400" />
        </div>
      </div>

      <div className="pt-10">
        <Button className="w-full h-12 bg-[#3FAE2A] hover:bg-[#359624] rounded-full text-lg shadow-lg">Submit</Button>
      </div>
    </div>
  );
}