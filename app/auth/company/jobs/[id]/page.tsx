"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export default function CandidateProfile() {
  const router = useRouter();
  return (
    <div className="max-w-6xl mx-auto p-8 space-y-10">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-6">
          <Button variant="ghost" size="icon" onClick={() => router.back()} className="rounded-full border self-start">
            <ArrowLeft size={18} />
          </Button>
          <div className="w-24 h-24 rounded-2xl bg-gray-200 overflow-hidden shadow-sm">
            <img src="https://github.com/shadcn.png" alt="candidate" />
          </div>
          <div className="space-y-1">
            <h1 className="text-2xl font-bold">Sowrove Bepary</h1>
            <p className="text-gray-500 text-sm font-medium">Senior Sales Executive</p>
            <p className="text-xs text-gray-400">Experience level: Senior level</p>
            <p className="text-xs text-gray-400">Location: Dhaka, Bangladesh</p>
            <div className="flex gap-2 pt-2">
              <Badge className="bg-blue-50 text-blue-500 border-none flex gap-1 font-normal"><CheckCircle2 size={12}/> Id Verified</Badge>
              <Badge className="bg-blue-50 text-blue-500 border-none flex gap-1 font-normal"><CheckCircle2 size={12}/> Face Verified</Badge>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <Button onClick={() => router.push('/auth/company/jobs/schedule')} className="bg-[#3FAE2A] hover:bg-green-700 px-8 py-6 rounded-xl font-bold">Schedule Interview</Button>
          <Button variant="ghost" className="text-red-500 font-bold">Reject Applicants</Button>
        </div>
      </div>

      <div className="flex gap-3">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-[#3FAE2A] px-12 h-11 font-bold">Resume</Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl p-0 overflow-hidden bg-transparent border-none">
             <div className="bg-white p-6 rounded-xl">
                <img src="/image/resume.png" className="w-full h-auto" alt="Resume View" />
                <div className="flex gap-3 mt-4">
                  <Button className="flex-1 bg-[#3FAE2A]">Download</Button>
                  <Button variant="outline" className="flex-1 bg-green-50 border-none text-[#3FAE2A]">Close</Button>
                </div>
             </div>
          </DialogContent>
        </Dialog>
        <Button variant="outline" className="bg-green-50 border-none text-[#3FAE2A] px-12 h-11 font-bold">Message</Button>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-bold">Overview</h2>
        <p className="text-gray-600 leading-relaxed text-sm">
          Experienced and results-driven professional with a strong background in customer engagement, sales operations, and relationship management...
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold">Experience</h2>
        <div className="space-y-6">
          <div>
            <h4 className="font-bold">Senior Sales Executive</h4>
            <p className="text-sm text-gray-500">ABC Solutions Ltd.</p>
            <p className="text-xs text-gray-400 font-medium">Jan 2021 – Present</p>
          </div>
          <div>
            <h4 className="font-bold">Sales Executive</h4>
            <p className="text-sm text-gray-500">XYZ Corporation</p>
            <p className="text-xs text-gray-400 font-medium">Jun 2018 – Dec 2020</p>
          </div>
        </div>
      </section>
    </div>
  );
}