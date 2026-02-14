"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft, 
  User, 
  MapPin, 
  ChevronDown, 
  Check,
  Upload, 
  X, 
  Camera, 
  Eye, 
  EyeOff 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

type Step = 1 | 2 | 3 | 4 | 5;

export default function JobSeekerRegistration() {
  const [step, setStep] = useState<Step>(1);

  const nextStep = () => setStep((prev) => (prev < 5 ? (prev + 1) as Step : prev));
  const prevStep = () => setStep((prev) => (prev > 1 ? (prev - 1) as Step : prev));

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 font-sans">
      <div className="w-full max-w-[1393px] bg-white rounded-[30px] shadow-xl overflow-hidden flex flex-col md:flex-row min-h-[700px]">
        
        {/* LEFT SIDE: Static Image Section */}
        <div className="relative w-full md:w-1/2 hidden md:block">
          <Image
            src="/image/login-page-image.jpg"
            alt="Office"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[80%] bg-white/30 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-center text-white shadow-lg">
            <h3 className="text-lg font-bold">Welcome to the <span className="underline decoration-2 underline-offset-4">HireHubJA</span></h3>
            <p className="text-sm opacity-90 mt-1">Login to explore more</p>
            <div className="flex justify-center gap-2 mt-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <span 
                  key={i} 
                  className={`w-2 h-2 rounded-full ${step === i ? "bg-[#3FAE2A] ring-2 ring-green-900/50" : "bg-white/50"}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Dynamic Form Content */}
        <div className="w-full md:w-1/2 bg-[#EAF6EA] flex flex-col justify-center p-8 md:px-16 py-12 relative overflow-y-auto max-h-[900px]">
          
          {step > 1 && (
            <button 
              onClick={prevStep} 
              className="absolute top-8 left-8 p-2 bg-white rounded-full shadow-sm hover:bg-gray-50 transition"
            >
              <ArrowLeft size={20} className="text-gray-600" />
            </button>
          )}

          {step === 1 && <Step1BasicInfo onNext={nextStep} />}
          {step === 2 && <Step2ProfileInfo onNext={nextStep} />}
          {step === 3 && <Step3Education onNext={nextStep} />}
          {step === 4 && <Step4Professional onNext={nextStep} />}
          {step === 5 && <Step5Verification />}

        </div>
      </div>
    </div>
  );
}

// --- STEP 1: BASIC INFORMATION ---
function Step1BasicInfo({ onNext }: { onNext: () => void }) {
  const [showPass, setShowPass] = useState(false);
  
  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto animate-in fade-in slide-in-from-right-4">
       <div className="flex flex-col items-center mb-6">
        <Image src="/image/logo.svg" alt="LOGO" width={150} height={150} />
      </div>

      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-[#3FAE2A]">Create An Account as<br />Job Seeker</h1>
        <p className="text-gray-500 text-sm mt-2">Fill in your information.</p>
      </div>

      <div className="w-full space-y-5">
        <div className="space-y-1">
          <Label className="text-xs font-medium text-gray-700">Full Name</Label>
          <Input placeholder="Enter your full name" className="rounded-xl bg-white border-none py-6 shadow-sm focus-visible:ring-[#3FAE2A]" />
        </div>
        <div className="space-y-1">
          <Label className="text-xs font-medium text-gray-700">Email</Label>
          <Input placeholder="Enter your Email" className="rounded-xl bg-white border-none py-6 shadow-sm focus-visible:ring-[#3FAE2A]" />
        </div>
        <div className="space-y-1">
          <Label className="text-xs font-medium text-gray-700">Password</Label>
          <div className="relative">
            <Input type={showPass ? "text" : "password"} placeholder="Enter your Password" className="rounded-xl bg-white border-none py-6 pr-10 shadow-sm focus-visible:ring-[#3FAE2A]" />
            <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
              {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>
        <div className="space-y-1">
          <Label className="text-xs font-medium text-gray-700">Confirm Password</Label>
          <Input type="password" placeholder="Enter your Password" className="rounded-xl bg-white border-none py-6 shadow-sm focus-visible:ring-[#3FAE2A]" />
        </div>

        <div className="flex items-center space-x-2 mt-2">
            <Checkbox id="terms" className="data-[state=checked]:bg-[#3FAE2A] border-gray-400" />
            <label htmlFor="terms" className="text-xs text-gray-500">
              I agree with this <span className="text-[#3FAE2A] cursor-pointer">Terms of Use</span> and <span className="text-[#3FAE2A] cursor-pointer">Privacy Policy</span>.
            </label>
        </div>

        <Button onClick={onNext} className="w-full bg-[#3FAE2A] hover:bg-[#359624] text-white font-bold rounded-full py-6 mt-4 shadow-lg shadow-green-100">
          Sign In
        </Button>
        
        <div className="text-center text-sm text-gray-500 mt-4">
          Already have an account? <Link href="/auth/signin" className="text-[#3FAE2A] font-semibold">Sign In</Link>
        </div>
      </div>
    </div>
  );
}

// --- STEP 2: PROFILE INFORMATION ---
function Step2ProfileInfo({ onNext }: { onNext: () => void }) {
  // Categories
  const JOB_CATEGORIES = [
    "Accounting & Finance",
    "Administrative Support",
    "Customer Service",
    "Education",
    "Engineering",
    "Healthcare",
    "Hospitality & Tourism",
    "IT & Tech",
    "Marketing & Sales",
    "Operations",
    "Skilled Trades"
  ];

  const [selectedCategories, setSelectedCategories] = useState<string[]>(["Administrative Support", "Education"]);
  // State for Modal Popup
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="w-full max-w-md mx-auto animate-in fade-in slide-in-from-right-4 font-sans">
      <h2 className="text-xl font-bold text-center text-gray-800 mb-8">Profile Information</h2>

      <div className="w-full space-y-5">
        
        {/* Photo Upload */}
        <div className="mb-4">
          <Label className="text-xs font-medium text-gray-700 block mb-2">Upload Picture</Label>
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center border border-gray-200">
              <User className="text-gray-300 w-10 h-10" />
            </div>
            <button className="bg-white border border-gray-200 text-xs text-gray-600 px-4 py-2 rounded-md shadow-sm hover:bg-gray-50 transition">
              Choose Picture
            </button>
          </div>
        </div>

        <div className="space-y-1">
          <Label className="text-xs font-medium text-gray-700">Phone Number</Label>
          <Input placeholder="Enter your Phone number" className="rounded-xl bg-white border-none py-6 shadow-sm focus-visible:ring-[#3FAE2A]" />
        </div>

        <div className="space-y-1">
          <Label className="text-xs font-medium text-gray-700">Overview (About yourself)</Label>
          <div className="relative">
            <textarea 
              placeholder="About yourself" 
              className="w-full min-h-[100px] rounded-xl bg-white border-none p-4 text-sm shadow-sm resize-none focus:ring-2 focus:ring-[#3FAE2A] focus:outline-none"
            />
            <span className="absolute bottom-2 right-4 text-[10px] text-gray-400">0/150</span>
          </div>
        </div>

        <div className="space-y-1">
          <Label className="text-xs font-medium text-gray-700">Location (Town, Parish)</Label>
          <div className="relative">
             <Input placeholder="Add Address" className="rounded-xl bg-white border-none py-6 pr-10 shadow-sm focus-visible:ring-[#3FAE2A]" />
             <MapPin className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          </div>
        </div>

        {/* --- MODAL TRIGGER INPUT --- */}
        <div className="space-y-1">
          <Label className="text-xs font-medium text-gray-700">Preferred Job Categories</Label>
          
          <div 
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-white rounded-xl shadow-sm min-h-[56px] p-3 flex items-center justify-between cursor-pointer border-2 border-transparent hover:border-gray-100"
          >
            <div className="flex flex-wrap gap-2">
              {selectedCategories.length === 0 ? (
                <span className="text-gray-400 text-sm pl-1">Select Categories</span>
              ) : (
                <>
                  {selectedCategories.slice(0, 2).map((cat) => (
                    <span key={cat} className="bg-white border border-gray-200 text-gray-600 text-[10px] md:text-xs px-3 py-1 rounded-full whitespace-nowrap">
                      {cat}
                    </span>
                  ))}
                  {selectedCategories.length > 2 && (
                    <span className="bg-white border border-gray-200 text-gray-600 text-[10px] md:text-xs px-2 py-1 rounded-full">
                      +{selectedCategories.length - 2}
                    </span>
                  )}
                </>
              )}
            </div>
            <ChevronDown className="text-gray-500 w-5 h-5 flex-shrink-0 ml-2" />
          </div>
        </div>

        {/* --- MODAL POPUP OVERLAY --- */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
            <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden scale-100 animate-in zoom-in-95 duration-200">
              
              {/* Modal Header */}
              <div className="p-5 border-b flex justify-between items-center bg-gray-50">
                <h3 className="font-bold text-gray-800">Select Job Categories</h3>
                <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                  <X size={20} />
                </button>
              </div>

              {/* Modal Body (Scrollable) */}
              <div className="p-2 max-h-[60vh] overflow-y-auto">
                {JOB_CATEGORIES.map((category) => {
                  const isSelected = selectedCategories.includes(category);
                  return (
                    <div 
                      key={category} 
                      onClick={() => toggleCategory(category)}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors border-b border-gray-50 last:border-0"
                    >
                      <span className="text-sm text-gray-700 font-medium">{category}</span>
                      
                      {/* Checkbox Design */}
                      <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${isSelected ? "bg-[#3FAE2A] border-[#3FAE2A]" : "bg-white border-gray-400"}`}>
                        {isSelected && <Check size={14} className="text-white" />}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Modal Footer (Done Button) */}
              <div className="p-4 border-t bg-gray-50">
                <Button 
                  onClick={() => setIsModalOpen(false)} 
                  className="w-full bg-[#3FAE2A] hover:bg-[#359624] text-white font-bold rounded-xl py-3"
                >
                  Done
                </Button>
              </div>

            </div>
          </div>
        )}
        {/* --- END MODAL --- */}

        <div className="space-y-2 pt-2">
            <Label className="text-xs font-medium text-gray-700">Employment Type:</Label>
            <div className="flex gap-3">
                {['Full-time', 'Part-time', 'Contract'].map((type) => (
                    <label key={type} className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg cursor-pointer border border-transparent hover:border-[#3FAE2A] transition-all">
                        <div className={`w-4 h-4 rounded-full border ${type === 'Part-time' ? 'bg-gray-600 border-gray-600' : 'border-gray-400'}`}></div>
                        <span className="text-xs text-gray-600">{type}</span>
                    </label>
                ))}
            </div>
        </div>

        <Button onClick={onNext} className="w-full bg-[#3FAE2A] hover:bg-[#359624] text-white font-bold rounded-full py-6 mt-6 shadow-lg shadow-green-100">
          Next
        </Button>
      </div>
    </div>
  );
}

// --- STEP 3: EDUCATIONAL DETAILS ---
function Step3Education({ onNext }: { onNext: () => void }) {
  return (
    <div className="w-full max-w-md mx-auto animate-in fade-in slide-in-from-right-4">
      <h2 className="text-xl font-bold text-center text-gray-800 mb-8">Educational Details</h2>

      <div className="mb-2">
         <span className="text-sm font-semibold text-gray-700">Educational Details</span>
         <span className="text-sm text-gray-500 ml-1">(If Any)</span>
      </div>

      <div className="bg-white p-5 rounded-xl shadow-sm mb-6">
         <div className="flex justify-between items-center mb-4">
            <span className="text-xs font-bold text-gray-700">Education</span>
            <span className="text-xs text-red-500 cursor-pointer">Remove</span>
         </div>
         
         <div className="space-y-3">
            <Input placeholder="Name Of School/College/University" className="bg-gray-50 border border-gray-100 text-xs h-10 rounded-lg focus-visible:ring-[#3FAE2A]" />
            <Input placeholder="e.g - Graduation/Post-Graduation" className="bg-gray-50 border border-gray-100 text-xs h-10 rounded-lg focus-visible:ring-[#3FAE2A]" />
            <div className="flex gap-3">
                <Input placeholder="Start Date" className="bg-gray-50 border border-gray-100 text-xs h-10 rounded-lg focus-visible:ring-[#3FAE2A]" />
                <Input placeholder="End Date" className="bg-gray-50 border border-gray-100 text-xs h-10 rounded-lg focus-visible:ring-[#3FAE2A]" />
            </div>
            <Button className="w-full bg-[#64748B] hover:bg-[#475569] text-white text-xs h-9 rounded-lg mt-2">
                Done
            </Button>
         </div>
      </div>

      <button className="w-full py-3 border border-dashed border-[#3FAE2A] bg-[#3FAE2A]/5 text-[#3FAE2A] text-sm font-medium rounded-xl mb-8 hover:bg-[#3FAE2A]/10">
        Add Education
      </button>

      <Button onClick={onNext} className="w-full bg-[#3FAE2A] hover:bg-[#359624] text-white font-bold rounded-full py-6">
        Next
      </Button>
    </div>
  );
}

// --- STEP 4: PROFESSIONAL DETAILS ---
function Step4Professional({ onNext }: { onNext: () => void }) {
  return (
    <div className="w-full max-w-md mx-auto animate-in fade-in slide-in-from-right-4">
      <h2 className="text-xl font-bold text-center text-gray-800 mb-8">Professional Details</h2>

      <div className="space-y-6">
        
        <div>
            <div className="mb-1">
                <span className="text-sm font-bold text-gray-700">Professional Details</span>
                <span className="text-sm text-gray-500 ml-1">(Mandatory)</span>
            </div>
            <Label className="text-xs text-gray-500 block mb-1">Upload CV / Resume</Label>
            <div className="bg-white rounded-xl p-4 flex justify-between items-center shadow-sm cursor-pointer hover:bg-gray-50">
                <span className="text-xs text-gray-400">Upload CV / Resume</span>
                <Upload size={16} className="text-gray-400" />
            </div>
        </div>

        <div>
            <Label className="text-xs text-gray-500 block mb-1">Experience (If Any)</Label>
            <div className="bg-white p-5 rounded-xl shadow-sm mb-3">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-bold text-gray-700">Experience</span>
                    <span className="text-xs text-red-500 cursor-pointer">Remove</span>
                </div>
                <div className="space-y-3">
                    <Input placeholder="Designation" className="bg-gray-50 border border-gray-100 text-xs h-10 rounded-lg focus-visible:ring-[#3FAE2A]" />
                    <Input placeholder="Company" className="bg-gray-50 border border-gray-100 text-xs h-10 rounded-lg focus-visible:ring-[#3FAE2A]" />
                    <div className="flex gap-3">
                        <Input placeholder="Start Date" className="bg-gray-50 border border-gray-100 text-xs h-10 rounded-lg focus-visible:ring-[#3FAE2A]" />
                        <Input placeholder="End Date" className="bg-gray-50 border border-gray-100 text-xs h-10 rounded-lg focus-visible:ring-[#3FAE2A]" />
                    </div>
                    <Button className="w-full bg-[#64748B] hover:bg-[#475569] text-white text-xs h-9 rounded-lg mt-2">
                        Done
                    </Button>
                </div>
            </div>
            <div className="flex justify-end">
                <Button className="bg-[#3FAE2A] hover:bg-[#359624] text-white text-xs h-8 px-4 rounded-md">
                    Add Experiences
                </Button>
            </div>
        </div>

        <div>
            <Label className="text-xs font-bold text-gray-700 block mb-2">Experience Level:</Label>
            <div className="flex gap-3">
                 <div className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-xs text-gray-500 cursor-pointer">Entry</div>
                 <div className="bg-white px-4 py-2 rounded-lg border border-[#3FAE2A] text-xs text-gray-800 cursor-pointer flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gray-600"></span> Mid
                 </div>
                 <div className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-xs text-gray-500 cursor-pointer">Senior</div>
            </div>
        </div>

        <div>
            <Label className="text-xs font-bold text-gray-700 block mb-2">Work Skills</Label>
            <div className="flex gap-2 mb-3">
                <Input placeholder="Add a skill (e.g Python)" className="rounded-xl bg-white border-none shadow-sm text-sm h-10" />
                <Button className="bg-[#64748B] text-white h-10 rounded-xl px-4 text-xs">Add</Button>
            </div>
            <div className="flex flex-wrap gap-2">
                {['Python', 'C++', 'Javaa'].map(skill => (
                    <div key={skill} className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg text-xs font-medium text-gray-700 border border-gray-100 shadow-sm">
                        {skill} <X size={12} className="cursor-pointer text-gray-400 hover:text-red-500" />
                    </div>
                ))}
            </div>
        </div>

        <Button onClick={onNext} className="w-full bg-[#3FAE2A] hover:bg-[#359624] text-white font-bold rounded-full py-6 mt-4">
          Next
        </Button>
      </div>
    </div>
  );
}

// --- STEP 5: VERIFICATION ---
function Step5Verification() {
  return (
    <div className="w-full max-w-md mx-auto animate-in fade-in slide-in-from-right-4">
      <h2 className="text-xl font-bold text-center text-gray-800 mb-8">Verification</h2>

      <div className="space-y-6 mt-12">
        <div>
            <div className="mb-2">
                <span className="text-sm font-bold text-gray-700">Verification</span>
                <span className="text-sm text-gray-500 ml-1">(Mandatory)</span>
            </div>
            
            <div className="space-y-4">
                <div>
                    <Label className="text-xs text-gray-500 block mb-1">ID Verification</Label>
                    <div className="bg-white rounded-xl p-4 flex justify-between items-center shadow-sm cursor-pointer hover:bg-gray-50 transition">
                        <span className="text-xs text-gray-400">Upload Government ID</span>
                        <Upload size={18} className="text-gray-400" />
                    </div>
                </div>

                <div>
                    <Label className="text-xs text-gray-500 block mb-1">Capture selfie to verify yourself</Label>
                    <div className="bg-white rounded-xl p-4 flex justify-between items-center shadow-sm cursor-pointer hover:bg-gray-50 transition">
                        <span className="text-xs text-gray-400">Capture selfie</span>
                        <Camera size={18} className="text-gray-400" />
                    </div>
                </div>
            </div>
        </div>

        <div className="pt-12">
            <Button className="w-full bg-[#3FAE2A] hover:bg-[#359624] text-white font-bold rounded-full py-6">
            Next
            </Button>
        </div>
      </div>
    </div>
  );
}