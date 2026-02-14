"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  Eye, 
  EyeOff, 
  ArrowLeft, 
  MapPin, 
  Upload, 
  Camera, 
  User 
} from "lucide-react";
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
        
        {/* LEFT SIDE: Image Section (Static) */}
        <div className="relative w-full md:w-1/2 hidden md:block">
          <Image
            src="/image/login-page-image.jpg" // Replace with your image path
            alt="Business Meeting"
            fill
            className="object-cover"
            priority
          />
          {/* Glassmorphism Overlay */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[80%] bg-white/30 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-center text-white shadow-lg">
            <h3 className="text-lg font-bold">Welcome to the HireHubJA</h3>
            <p className="text-sm opacity-90 mt-1">Login to explore more</p>
            {/* Pagination dots simulation */}
            <div className="flex justify-center gap-2 mt-3">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span className="w-2 h-2 bg-white/50 rounded-full"></span>
              <span className="w-2 h-2 bg-white/50 rounded-full"></span>
              <span className="w-2 h-2 bg-white/50 rounded-full"></span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Dynamic Form Section */}
        <div className="w-full md:w-1/2 bg-[#EAF6EA] flex flex-col relative p-6 md:p-12 overflow-y-auto">
          
          {/* Back Button (Only for Step 2 & 3) */}
          {step > 1 && (
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setStep(step - 1)}
              className="absolute top-6 left-6 bg-white hover:bg-gray-100 rounded-full shadow-sm w-10 h-10"
            >
              <ArrowLeft className="w-5 h-5 text-gray-700" />
            </Button>
          )}

          {/* Form Container centering */}
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

// ==========================================
// STEP 1: BASIC INFORMATION
// ==========================================
function StepOne({ onNext }: { onNext: () => void }) {
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  return (
    <div className="w-full animate-in fade-in slide-in-from-right-8 duration-500">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="flex justify-center mb-2">
            {/* Replace with your Logo path */}
            <Image src="/image/logo.svg" alt="Logo" width={100} height={100} /> 
        </div>
        <h2 className="text-2xl font-bold text-[#3FAE2A]">Create An Account as <br/> Employer</h2>
        <p className="text-gray-500 text-sm mt-1">Fill in your information.</p>
      </div>

      <div className="space-y-4">
        {/* Basic Information Label */}
        <p className="text-sm font-bold text-gray-700">Basic Information</p>

        {/* Full Name */}
        <div className="space-y-1">
            <Label htmlFor="name" className="text-xs font-semibold text-gray-600">Full Name</Label>
            <Input id="name" placeholder="Enter your full name" className="bg-white border-none h-12 rounded-xl focus-visible:ring-[#3FAE2A]" />
        </div>

        {/* Email */}
        <div className="space-y-1">
            <Label htmlFor="email" className="text-xs font-semibold text-gray-600">Email</Label>
            <Input id="email" type="email" placeholder="Enter your Email" className="bg-white border-none h-12 rounded-xl focus-visible:ring-[#3FAE2A]" />
        </div>

        {/* Password */}
        <div className="space-y-1">
            <Label htmlFor="pass" className="text-xs font-semibold text-gray-600">Password</Label>
            <div className="relative">
                <Input 
                    id="pass" 
                    type={showPass ? "text" : "password"} 
                    placeholder="Enter your Password" 
                    className="bg-white border-none h-12 rounded-xl pr-10 focus-visible:ring-[#3FAE2A]" 
                />
                <button 
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                >
                    {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
            </div>
        </div>

        {/* Confirm Password */}
        <div className="space-y-1">
            <Label htmlFor="cpass" className="text-xs font-semibold text-gray-600">Confirm Password</Label>
            <div className="relative">
                <Input 
                    id="cpass" 
                    type={showConfirmPass ? "text" : "password"} 
                    placeholder="Enter your Password" 
                    className="bg-white border-none h-12 rounded-xl pr-10 focus-visible:ring-[#3FAE2A]" 
                />
                <button 
                    onClick={() => setShowConfirmPass(!showConfirmPass)}
                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                >
                    {showConfirmPass ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
            </div>
        </div>

        {/* Terms */}
        <div className="flex items-center gap-2 pt-2">
            <Checkbox id="terms" className="data-[state=checked]:bg-[#3FAE2A] data-[state=checked]:border-[#3FAE2A]" />
            <label htmlFor="terms" className="text-[10px] md:text-xs text-gray-500 leading-none">
                I agree with this <span className="text-[#3FAE2A]">Terms of Use</span> and <span className="text-[#3FAE2A]">Privacy Policy</span>.
            </label>
        </div>

        {/* Button */}
        <Button 
            onClick={onNext} 
            className="w-full h-12 rounded-full bg-[#3FAE2A] hover:bg-[#359624] text-md font-bold shadow-lg shadow-green-200"
        >
            Sign In
        </Button>

        <p className="text-center text-xs text-gray-500 mt-2">
            Already have an account? <span className="text-[#3FAE2A] font-bold cursor-pointer">Sign In</span>
        </p>
      </div>
    </div>
  );
}

// ==========================================
// STEP 2: PROFILE INFORMATION
// ==========================================
function StepTwo({ onNext }: { onNext: () => void }) {
  return (
    <div className="w-full animate-in fade-in slide-in-from-right-8 duration-500">
      <h2 className="text-xl font-bold text-gray-800 text-center mb-8">Profile Information</h2>

      <div className="space-y-5">
        
        {/* Profile Picture Upload */}
        <div className="space-y-2">
            <Label className="text-xs font-semibold text-gray-600">Upload Picture</Label>
            <div className="flex items-center gap-4">
                <div className="w-24 h-24 rounded-full bg-white border-2 border-dashed border-gray-200 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-gray-50 flex items-center justify-center text-gray-300">
                        <User size={40} strokeWidth={1} />
                    </div>
                </div>
                <Button variant="outline" className="bg-white text-xs text-gray-600 border-gray-200 shadow-sm h-8">
                    Choose Picture
                </Button>
            </div>
        </div>

        {/* Phone Number */}
        <div className="space-y-1">
            <Label className="text-xs font-semibold text-gray-600">Phone Number</Label>
            <Input placeholder="Enter your Phone number" className="bg-white border-none h-12 rounded-xl focus-visible:ring-[#3FAE2A]" />
        </div>

        {/* Location */}
        <div className="space-y-1">
            <Label className="text-xs font-semibold text-gray-600">Location (Town, Parish)</Label>
            <div className="relative">
                <Input placeholder="Add Address" className="bg-white border-none h-12 rounded-xl pr-10 focus-visible:ring-[#3FAE2A]" />
                <MapPin className="absolute right-3 top-3 text-gray-400 w-5 h-5" />
            </div>
        </div>

        {/* Overview */}
        <div className="space-y-1 relative">
            <Label className="text-xs font-semibold text-gray-600">Overview (About yourself)</Label>
            <Textarea 
                placeholder="About yourself" 
                className="bg-white border-none rounded-xl resize-none min-h-[120px] focus-visible:ring-[#3FAE2A]" 
            />
            <span className="absolute bottom-3 right-3 text-[10px] text-gray-400">0/150</span>
        </div>

        {/* Button */}
        <div className="pt-4">
            <Button 
                onClick={onNext} 
                className="w-full h-12 rounded-full bg-[#3FAE2A] hover:bg-[#359624] text-md font-bold shadow-lg"
            >
                Next
            </Button>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// STEP 3: VERIFICATION
// ==========================================
function StepThree() {
  return (
    <div className="w-full animate-in fade-in slide-in-from-right-8 duration-500">
      <h2 className="text-xl font-bold text-gray-800 text-center mb-8">Verification</h2>

      <div className="space-y-6">
        <p className="text-sm font-semibold text-gray-600">Verification (Mandatory)</p>

        {/* ID Upload */}
        <div className="space-y-2">
            <Label className="text-xs text-gray-500">ID Verification</Label>
            <div className="flex items-center justify-between px-4 py-3 bg-white rounded-xl cursor-pointer hover:bg-gray-50 transition shadow-sm group">
                <span className="text-sm text-gray-400 group-hover:text-gray-600">Upload Government ID</span>
                <Upload className="w-5 h-5 text-gray-400 group-hover:text-[#3FAE2A]" />
            </div>
        </div>

        {/* Selfie Upload */}
        <div className="space-y-2">
            <Label className="text-xs text-gray-500">Capture selfie to verify yourself</Label>
            <div className="flex items-center justify-between px-4 py-3 bg-white rounded-xl cursor-pointer hover:bg-gray-50 transition shadow-sm group">
                <span className="text-sm text-gray-400 group-hover:text-gray-600">Capture selfie</span>
                <Camera className="w-5 h-5 text-gray-400 group-hover:text-[#3FAE2A]" />
            </div>
        </div>

        {/* Button */}
        <div className="pt-20">
            <Button 
                className="w-full h-12 rounded-full bg-[#3FAE2A] hover:bg-[#359624] text-md font-bold shadow-lg"
            >
                Next
            </Button>
        </div>
      </div>
    </div>
  );
}