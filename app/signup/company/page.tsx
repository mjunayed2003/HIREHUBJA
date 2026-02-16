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
  CloudUpload, 
  Check, 
  Clock 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";

export default function EmployerSignupPage() {
  const [step, setStep] = useState(1);

  // Function to handle moving to the next step
  const nextStep = () => setStep((prev) => prev + 1);
  
  // Function to handle moving back
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 font-sans">
      <div className="w-full max-w-[1393px] bg-white rounded-[30px] shadow-xl overflow-hidden flex flex-col md:flex-row min-h-[800px]">
        
        {/* Left Side: Image (Visible on Desktop) */}
        <div className="relative w-full md:w-1/2 hidden md:block">
          <Image 
            src="/image/login-page-image.jpg" 
            alt="Meeting" 
            fill 
            className="object-cover" 
            priority 
          />
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[80%] bg-white/30 backdrop-blur-md p-6 rounded-2xl text-center text-white shadow-lg">
            <h3 className="text-2xl font-bold">Welcome to HireHubJA</h3>
            <p className="text-sm opacity-90 mt-1">Login to explore more</p>
          </div>
        </div>

        {/* Right Side: Form Container */}
        <div className="w-full md:w-1/2 bg-[#EAF6EA] flex flex-col p-6 md:p-12 relative overflow-y-auto">
          
          {/* Back Button (Visible only on Steps 2 & 3) */}
          {step > 1 && step < 5 && (
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute top-8 left-8 rounded-full bg-white shadow-sm hover:bg-gray-100 z-10" 
              onClick={prevStep}
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </Button>
          )}

          <div className="flex-1 flex flex-col items-center justify-center w-full max-w-md mx-auto">
            {step === 1 && <StepOne onNext={nextStep} />}
            {step === 2 && <StepTwo onNext={nextStep} />}
            {step === 3 && <StepThree onNext={nextStep} />}
            {step === 4 && <StepFour />}
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Step 1: Basic Information ---
function StepOne({ onNext }: { onNext: () => void }) {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="w-full space-y-6 animate-in fade-in slide-in-from-right-4">
      <div className="text-left mb-6">
        <h2 className="text-xl font-bold text-gray-900">Basic Information</h2>
      </div>

      <div className="space-y-4">
        <div className="space-y-1">
          <Label className="text-gray-600 font-medium">Full Name</Label>
          <Input placeholder="Enter your full name" className="h-12 bg-white border-none shadow-sm rounded-xl focus-visible:ring-[#3FAE2A]" />
        </div>
        
        <div className="space-y-1">
          <Label className="text-gray-600 font-medium">Email</Label>
          <Input type="email" placeholder="Enter your Email" className="h-12 bg-white border-none shadow-sm rounded-xl focus-visible:ring-[#3FAE2A]" />
        </div>
        
        {/* Password */}
        <div className="space-y-1">
          <Label className="text-gray-600 font-medium">Password</Label>
          <div className="relative">
            <Input 
              type={showPass ? "text" : "password"} 
              placeholder="Enter your Password" 
              className="h-12 bg-white border-none shadow-sm pr-10 rounded-xl focus-visible:ring-[#3FAE2A]" 
            />
            <button 
              type="button" 
              onClick={() => setShowPass(!showPass)} 
              className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
            >
              {showPass ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div className="space-y-1">
          <Label className="text-gray-600 font-medium">Confirm Password</Label>
          <div className="relative">
            <Input 
              type={showPass ? "text" : "password"} 
              placeholder="Enter your Password" 
              className="h-12 bg-white border-none shadow-sm pr-10 rounded-xl focus-visible:ring-[#3FAE2A]" 
            />
            <button 
              type="button" 
              onClick={() => setShowPass(!showPass)} 
              className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
            >
              {showPass ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        {/* Terms */}
        <div className="flex items-center space-x-2 py-2">
          <Checkbox id="terms" className="data-[state=checked]:bg-[#3FAE2A] data-[state=checked]:border-[#3FAE2A] border-gray-400" />
          <label htmlFor="terms" className="text-xs text-gray-500 font-medium cursor-pointer">
            I agree with this <span className="text-[#3FAE2A] font-bold">Terms of Use</span> and <span className="text-[#3FAE2A] font-bold">Privacy Policy</span>.
          </label>
        </div>

        {/* Button */}
        <Button 
          onClick={onNext} 
          className="w-full h-12 bg-[#3FAE2A] hover:bg-[#359624] rounded-full text-lg font-bold shadow-lg shadow-green-200/50 mt-4"
        >
          Sign In
        </Button>
        
        <p className="text-center text-sm text-gray-500 font-medium mt-4">
          Already have an account? <span className="text-[#3FAE2A] cursor-pointer hover:underline">Sign In</span>
        </p>
      </div>
    </div>
  );
}

// --- Step 2: Profile Info ---
function StepTwo({ onNext }: { onNext: () => void }) {
  return (
    <div className="w-full space-y-6 animate-in fade-in slide-in-from-right-4">
      
      {/* Profile Picture Upload */}
      <div className="flex flex-col gap-2">
        <Label className="text-gray-600 font-medium">Upload Picture</Label>
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-sm">
             <div className="w-20 h-20 rounded-full border-2 border-gray-100 flex items-center justify-center">
                <span className="text-4xl text-gray-200">👤</span>
             </div>
          </div>
          <Button variant="outline" className="bg-white border-none shadow-sm text-gray-500 rounded-xl h-10 text-xs font-medium hover:bg-gray-50">
            Choose Picture
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <div className="space-y-1">
          <Label className="text-gray-600 font-medium">Phone Number</Label>
          <Input type="tel" placeholder="Enter your Phone number" className="h-12 bg-white border-none shadow-sm rounded-xl focus-visible:ring-[#3FAE2A]" />
        </div>
        
        <div className="space-y-1">
          <Label className="text-gray-600 font-medium">Location (Town, Parish)</Label>
          <div className="relative">
            <Input placeholder="Add Address" className="h-12 bg-white border-none shadow-sm pr-10 rounded-xl focus-visible:ring-[#3FAE2A]" />
            <MapPin className="absolute right-4 top-3.5 text-gray-400 w-5 h-5" />
          </div>
        </div>

        <div className="space-y-1 relative">
          <Label className="text-gray-600 font-medium">Overview (About yourself)</Label>
          <Textarea 
            placeholder="About yourself" 
            className="border-none shadow-sm resize-none min-h-[140px] bg-white rounded-xl focus-visible:ring-[#3FAE2A] p-4" 
          />
          <span className="absolute bottom-3 right-3 text-xs text-gray-400 font-medium">0/150</span>
        </div>

        <Button onClick={onNext} className="w-full h-12 bg-[#3FAE2A] hover:bg-[#359624] rounded-full text-lg font-bold shadow-lg shadow-green-200/50">
          Next
        </Button>
      </div>
    </div>
  );
}

// --- Step 3: Verification ---
function StepThree({ onNext }: { onNext: () => void }) {
  return (
    <div className="w-full space-y-6 animate-in fade-in slide-in-from-right-4">
      <div className="mb-2">
        <h2 className="text-base font-bold text-gray-800">Verification <span className="text-gray-400 font-normal">(Mandatory)</span></h2>
      </div>
      
      <div className="space-y-5">
        
        {/* Government ID Front */}
        <div className="space-y-2">
          <Label className="text-gray-600 text-sm font-medium">Government Id card(Front)</Label>
          <div className="w-full bg-white rounded-xl border-2 border-dashed border-blue-100 p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50 transition-colors">
            <CloudUpload className="w-8 h-8 text-gray-500 mb-2" />
            <p className="text-sm font-bold text-gray-700">Choose a file</p>
            <p className="text-xs text-gray-400 mt-1">PNG, JPG & JPEG formats, up to 50MB</p>
            <div className="mt-3 px-4 py-1.5 border border-gray-200 rounded-md text-xs text-gray-500 font-medium">
              Browse File
            </div>
          </div>
        </div>

        {/* Government ID Back */}
        <div className="space-y-2">
          <Label className="text-gray-600 text-sm font-medium">Government Id card(Back)</Label>
          <div className="w-full bg-white rounded-xl border-2 border-dashed border-blue-100 p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50 transition-colors">
            <CloudUpload className="w-8 h-8 text-gray-500 mb-2" />
            <p className="text-sm font-bold text-gray-700">Choose a file</p>
            <p className="text-xs text-gray-400 mt-1">PNG, JPG & JPEG formats, up to 50MB</p>
            <div className="mt-3 px-4 py-1.5 border border-gray-200 rounded-md text-xs text-gray-500 font-medium">
              Browse File
            </div>
          </div>
        </div>

        {/* Selfie Capture */}
        <div className="space-y-2">
          <Label className="text-gray-600 text-sm font-medium">Capture selfie to verify yourself</Label>
          <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm cursor-pointer hover:bg-gray-50 h-14 border border-transparent hover:border-[#3FAE2A] transition-all">
            <span className="text-sm text-gray-400">Capture selfie</span>
            <Camera className="w-6 h-6 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="pt-6">
        <Button 
          onClick={onNext} 
          className="w-full h-12 bg-[#3FAE2A] hover:bg-[#359624] rounded-full text-lg font-bold shadow-lg shadow-green-200/50"
        >
          Next
        </Button>
      </div>
    </div>
  );
}

// --- Step 4: Account Pending Approval (New Step) ---
function StepFour() {
  const router = useRouter();
  
  return (
    <div className="w-full flex flex-col items-center justify-center text-center animate-in fade-in slide-in-from-right-4 py-10">
      
      <div className="mb-8 relative">
        {/* Custom Clock Icon Wrapper */}
        <div className="w-24 h-24 rounded-full border-4 border-[#3FAE2A] flex items-center justify-center">
           <Clock className="w-12 h-12 text-[#3FAE2A]" />
        </div>
        {/* Animated Arrow element to mimic the design */}
        <div className="absolute -top-1 -right-1">
            <div className="w-6 h-6 bg-[#3FAE2A] text-white rounded-full flex items-center justify-center text-xs font-bold">
               ➜
            </div>
        </div>
      </div>

      <h2 className="text-xl font-bold text-gray-900 mb-3">Account Pending Approval</h2>
      
      <p className="text-xs text-gray-500 mb-1">
        Your account is currently under review by the admin.
      </p>
      <p className="text-xs text-gray-500 max-w-xs leading-relaxed">
        You will be able to access your dashboard once your account is approved.
      </p>

      <div className="pt-12 w-full max-w-xs">
        <Button 
          className="w-full h-12 bg-[#3FAE2A] hover:bg-[#359624] rounded-full text-base font-bold shadow-lg shadow-green-200/50"
          onClick={() =>router.push("/signin")}
        >
          Okay
        </Button>
      </div>
    </div>
  );
}