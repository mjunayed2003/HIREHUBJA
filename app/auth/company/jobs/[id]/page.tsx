"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger, DialogClose } from "@/components/ui/dialog";

export default function CandidateProfilePage() {
  const router = useRouter();

  return (
    <div className="max-w-7xl mx-auto p-8 bg-white min-h-screen font-sans">
      
      {/* Header: Back Button & Title */}
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={() => router.back()}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
        >
          <ArrowLeft size={20} className="text-gray-600" />
        </button>
        <h1 className="text-2xl font-bold text-gray-900">Candidate Profile</h1>
      </div>

      <div className="pl-2">
        
        {/* Top Section: Profile Info + Schedule Interview Button */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
          
          {/* Left: Avatar & Info */}
          <div className="flex gap-6">
            <div className="w-24 h-24 relative rounded-full overflow-hidden border border-gray-100 shrink-0">
              <Image
                src="https://github.com/shadcn.png" 
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-1">
              <h2 className="text-xl font-bold text-gray-900">Sowrove Bepary</h2>
              <p className="text-gray-500 text-sm font-medium">Senior Sales Executive</p>
              
              <div className="text-xs text-gray-500 space-y-1 pt-1">
                <p>Experience level: <span className="font-bold text-gray-800">Senior level</span></p>
                <p>Location: <span className="font-bold text-gray-800">Dhaka, Banagladesh</span></p>
              </div>

              {/* Verified Badges */}
              <div className="flex gap-3 mt-3">
                <div className="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded-md">
                  <CheckCircle2 size={12} className="text-white fill-blue-500" /> 
                  <span className="text-[10px] font-semibold text-blue-500">Id Verified</span>
                </div>
                <div className="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded-md">
                  <CheckCircle2 size={12} className="text-white fill-blue-500" /> 
                  <span className="text-[10px] font-semibold text-blue-500">Face Verified</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Schedule Interview & Reject Buttons */}
          <div className="flex items-center gap-6 mt-2 lg:mt-0">
             {/* Main Green Button - Boxy Rounded */}
            <Button onClick={()=>router.push('/auth/company/jobs/schedule')} className="bg-[#47B649] hover:bg-[#3da13e] text-white px-3 py-2 h-auto rounded-3xl text-base font-semibold shadow-md min-w-[180px]">
              Schedule Interview
            </Button>
            {/* Reject Link */}
            <button className="text-[#FF4D4F] text-sm font-medium hover:underline whitespace-nowrap">
              Reject Applicants
            </button>
          </div>
        </div>

        {/* Resume & Message Buttons (Fixed Design + Functionality) */}
        <div className="flex gap-4 mt-8 mb-10 border-b border-gray-100 pb-8">
          
          {/* Resume Button with Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-[#47B649] hover:bg-[#3da13e] text-white rounded-full px-12 h-11 text-sm font-bold shadow-sm min-w-[140px]">
                Resume
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl p-0 overflow-hidden bg-transparent border-none shadow-none">
               <div className="bg-white p-6 rounded-xl shadow-2xl">
                  {/* Replace source with actual resume image */}
                  <img src="/image/resume.png" className="w-full h-auto rounded-md border" alt="Resume View" />
                  <div className="flex gap-3 mt-4">
                    <Button className="flex-1 bg-[#47B649] hover:bg-[#3da13e] h-10">Download</Button>
                    <DialogClose asChild>
                      <Button variant="outline" className="flex-1 bg-green-50 border-none text-[#47B649] hover:bg-green-100 h-10 font-bold">
                        Close
                      </Button>
                    </DialogClose>
                  </div>
               </div>
            </DialogContent>
          </Dialog>

          {/* Message Button */}
          <Button className="bg-[#EFF9EF] hover:bg-[#dff3df] text-[#47B649] rounded-full px-12 h-11 text-sm font-bold shadow-none min-w-[140px] border-none">
            Message
          </Button>
        </div>

        {/* Content Details Sections */}
        <div className="space-y-8 max-w-5xl">
          
          {/* Overview */}
          <section>
            <h3 className="font-bold text-gray-900 mb-3 text-base">Overview</h3>
            <p className="text-sm leading-relaxed text-gray-500 text-justify">
              Experienced and results-driven professional with a strong background in customer engagement, sales operations, and relationship management. Demonstrated ability to meet targets, communicate effectively with diverse clients, and adapt quickly in fast-paced environments. Committed to delivering high-quality service while contributing to team and organizational growth.
            </p>
          </section>

          {/* Experience */}
          <section>
            <h3 className="font-bold text-gray-900 mb-4 text-base">Experience</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-gray-800 text-sm">Senior Sales Executive</h4>
                <p className="text-gray-500 text-xs mt-1">ABC Solutions Ltd.</p>
                <p className="text-gray-400 text-xs mt-1">Jan 2021 – Present</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 text-sm">Sales Executive</h4>
                <p className="text-gray-500 text-xs mt-1">XYZ Corporation</p>
                <p className="text-gray-400 text-xs mt-1">Jun 2018 – Dec 2020</p>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section>
            <h3 className="font-bold text-gray-900 mb-3 text-base">Skills</h3>
            <ul className="list-disc list-inside text-sm text-gray-500 space-y-2 marker:text-gray-300 ml-1">
              <li>Sales & Negotiation</li>
              <li>Customer Relationship Management (CRM)</li>
              <li>Communication & Presentation</li>
              <li>Lead Generation</li>
              <li>Market Research</li>
              <li>Time Management</li>
              <li>Team Collaboration</li>
              <li>Problem Solving</li>
            </ul>
          </section>

          {/* Educations */}
          <section>
            <h3 className="font-bold text-gray-900 mb-4 text-base">Educations</h3>
            <div>
              <h4 className="font-bold text-gray-800 text-sm">Bachelor of Business Administration (BBA)</h4>
              <p className="text-gray-500 text-xs mt-1">University of Dhaka</p>
              <p className="text-gray-400 text-xs mt-1">2014 – 2018</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}