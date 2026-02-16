"use client";

import React, { useState } from "react";
import { ArrowLeft, Plus, Trash2, Upload, BadgeCheck, ShieldCheck, FileText, Download, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

// --- Types ---
interface Experience {
  id: number;
  title: string;
  company: string;
  duration: string;
}

interface Education {
  id: number;
  degree: string;
  university: string;
  year: string;
}

export default function ProfessionalDetails() {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);


  const [resumeUrl, setResumeUrl] = useState("/image/resume.png");
  const [resumeType, setResumeType] = useState<"image" | "pdf">("image");

  const [profile, setProfile] = useState({
    name: "Sowrove Bepary",
    phone: "47928682462973",
    experienceLevel: "Senior level",
    location: "Dhaka, Bangladesh",
    image: "/image/profile-picture.png",
    overview: "Experienced and results-driven professional...",
    experiences: [
      { id: 1, title: "Senior Sales Executive", company: "ABC Solutions Ltd.", duration: "Jan 2021 – Present" },
      { id: 2, title: "Sales Executive", company: "XYZ Corporation", duration: "Jun 2018 – Dec 2020" },
    ] as Experience[],
    jobCategories: ["Administrative Support", "Marketing & Sales", "Customer Service"],
    employmentType: ["Part-time"],
    skills: ["Sales & Negotiation", "CRM", "Communication"],
    educations: [
      { id: 1, degree: "Bachelor of Business Administration (BBA)", university: "University of Dhaka", year: "2014 – 2018" }
    ] as Education[]
  });

  // --- Helpers (Same as before) ---
  const handleChange = (field: string, value: any) => setProfile({ ...profile, [field]: value });
  const handleArrayUpdate = (field: "jobCategories" | "employmentType" | "skills", index: number, value: string) => {
    const newArray = [...profile[field]];
    newArray[index] = value;
    setProfile({ ...profile, [field]: newArray });
  };
  const addItem = (field: "jobCategories" | "employmentType" | "skills") => setProfile({ ...profile, [field]: [...profile[field], ""] });
  const removeItem = (field: "jobCategories" | "employmentType" | "skills", index: number) => {
    const newArray = profile[field].filter((_, i) => i !== index);
    setProfile({ ...profile, [field]: newArray });
  };
  // Complex items helpers omitted for brevity but should be same as previous code...
    const updateComplexItem = (arrayName: "experiences" | "educations", id: number, field: string, value: string) => {
    const updatedList = profile[arrayName].map((item: any) => item.id === id ? { ...item, [field]: value } : item);
    setProfile({ ...profile, [arrayName]: updatedList });
  };
  const addComplexItem = (arrayName: "experiences" | "educations") => {
    const newItem = arrayName === "experiences" ? { id: Date.now(), title: "", company: "", duration: "" } : { id: Date.now(), degree: "", university: "", year: "" };
    setProfile({ ...profile, [arrayName]: [...profile[arrayName], newItem] });
  };
  const removeComplexItem = (arrayName: "experiences" | "educations", id: number) => {
    setProfile({ ...profile, [arrayName]: profile[arrayName].filter((i: any) => i.id !== id) });
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 font-sans animate-in fade-in slide-in-from-bottom-4">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Button variant="ghost" size="icon" className="rounded-full border" onClick={() => router.back()}>
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h1 className="text-2xl font-bold text-gray-900">Professional Details</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT COLUMN (Profile Info) */}
        <div className="space-y-8 pr-0 lg:pr-10 lg:border-r border-gray-200">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="relative">
              <Avatar className="w-32 h-32 border-4 border-gray-100 shadow-sm">
                <AvatarImage src={profile.image} className="object-cover" />
                <AvatarFallback>SB</AvatarFallback>
              </Avatar>
              {isEditing && (
                <div className="absolute bottom-0 right-0 bg-[#3FAE2A] p-2 rounded-full cursor-pointer text-white shadow-md">
                   <Upload size={16} />
                </div>
              )}
            </div>
            <div className="flex-1 space-y-2 text-center sm:text-left w-full">
              {isEditing ? (
                <>
                  <Input value={profile.name} onChange={(e) => handleChange("name", e.target.value)} placeholder="Full Name" className="font-bold" />
                  <Input value={profile.phone} onChange={(e) => handleChange("phone", e.target.value)} placeholder="Phone" />
                  <Input value={profile.experienceLevel} onChange={(e) => handleChange("experienceLevel", e.target.value)} placeholder="Level" />
                  <Input value={profile.location} onChange={(e) => handleChange("location", e.target.value)} placeholder="Location" />
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-gray-900">{profile.name}</h2>
                  <p className="text-gray-500">Phone: <span className="text-gray-800">{profile.phone}</span></p>
                  <p className="text-gray-500">Level: <span className="text-gray-800 font-medium">{profile.experienceLevel}</span></p>
                  <p className="text-gray-500">Location: <span className="text-gray-800 font-medium">{profile.location}</span></p>
                  <div className="flex items-center justify-center sm:justify-start gap-3 mt-2">
                    <span className="flex items-center gap-1 bg-blue-50 text-blue-500 text-xs px-2 py-1 rounded-full font-medium"><ShieldCheck size={14} /> Id Verified</span>
                    <span className="flex items-center gap-1 bg-blue-50 text-blue-500 text-xs px-2 py-1 rounded-full font-medium"><BadgeCheck size={14} /> Face Verified</span>
                  </div>
                </>
              )}
            </div>
          </div>
          
          {/* Overview */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Overview</h3>
            {isEditing ? <Textarea value={profile.overview} onChange={(e) => handleChange("overview", e.target.value)} className="h-32"/> : <p className="text-gray-600 text-sm leading-relaxed text-justify">{profile.overview}</p>}
          </div>

          {/* Experience List (Simplified for brevity) */}
          <div>
             <div className="flex justify-between items-center mb-4">
               <h3 className="text-lg font-bold text-gray-900">Experience</h3>
               {isEditing && <Button size="sm" variant="outline" onClick={() => addComplexItem("experiences")}><Plus size={14}/> Add</Button>}
             </div>
             <div className="space-y-6">
              {profile.experiences.map((exp) => (
                <div key={exp.id} className="relative group">
                  {isEditing ? (
                    <div className="p-4 border rounded-lg space-y-3 bg-gray-50">
                       <Input value={exp.title} onChange={(e) => updateComplexItem("experiences", exp.id, "title", e.target.value)} placeholder="Job Title" />
                       <Input value={exp.company} onChange={(e) => updateComplexItem("experiences", exp.id, "company", e.target.value)} placeholder="Company" />
                       <Input value={exp.duration} onChange={(e) => updateComplexItem("experiences", exp.id, "duration", e.target.value)} placeholder="Duration" />
                       <Button size="icon" variant="destructive" className="absolute -top-2 -right-2 h-6 w-6 rounded-full" onClick={() => removeComplexItem("experiences", exp.id)}><Trash2 size={12} /></Button>
                    </div>
                  ) : (
                    <div><h4 className="text-base font-bold text-gray-900">{exp.title}</h4><p className="text-sm text-gray-600">{exp.company}</p><p className="text-xs text-gray-400 mt-1">{exp.duration}</p></div>
                  )}
                </div>
              ))}
             </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-8">
          
          {/* === RESUME MODAL SECTION === */}
          <div className="flex items-center justify-between">
            <span className="text-gray-600 font-medium">Upload CV / Resume:</span>
            {isEditing ? (
               <div className="flex items-center gap-2">
                 <Input type="file" className="w-[200px] text-xs" />
               </div>
            ) : (
               <Dialog>
                 <DialogTrigger asChild>
                    <Button variant="outline" className="rounded-lg border-gray-200 text-gray-700 hover:bg-gray-50 flex items-center gap-2">
                      <FileText size={16} /> View Resume
                    </Button>
                 </DialogTrigger>
                 <DialogContent className="max-w-4xl w-[90%] h-[85vh] flex flex-col p-0 overflow-hidden">
                    <DialogHeader className="px-6 py-4 border-b flex flex-row items-center justify-between">
                      <DialogTitle>Resume Preview</DialogTitle>
                      <a href={resumeUrl} download="Resume" target="_blank" rel="noreferrer">
                        <Button size="sm" className="bg-[#3FAE2A] hover:bg-green-700 mr-8">
                          <Download size={16} className="mr-2"/> Download
                        </Button>
                      </a>
                    </DialogHeader>
                    
                    {/* Preview Area */}
                    <div className="flex-1 bg-gray-100 overflow-y-auto flex items-center justify-center p-4">
                        {resumeType === "pdf" ? (
                          <iframe 
                            src={`${resumeUrl}#toolbar=0`} 
                            className="w-full h-full rounded shadow-lg bg-white" 
                            title="Resume PDF"
                          />
                        ) : (
                          <img 
                            src={resumeUrl} 
                            alt="Resume Preview" 
                            className="max-w-full h-auto object-contain shadow-lg rounded"
                          />
                        )}
                    </div>
                 </DialogContent>
               </Dialog>
            )}
          </div>

          {/* Skills (Simplified) */}
          <div>
             <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-bold text-gray-900">Skills</h3>
              {isEditing && <Button size="sm" variant="ghost" onClick={() => addItem("skills")}><Plus size={16}/></Button>}
            </div>
            <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
              {profile.skills.map((skill, idx) => (
                isEditing ? <div key={idx} className="flex gap-2 mb-2"><Input value={skill} onChange={(e) => handleArrayUpdate("skills", idx, e.target.value)} /><Button size="icon" variant="ghost" onClick={() => removeItem("skills", idx)}><Trash2 size={16} className="text-red-500"/></Button></div> : <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>

           {/* Education (Simplified) */}
           <div>
            <div className="flex justify-between items-center mb-4"><h3 className="text-lg font-bold text-gray-900">Educations</h3>{isEditing && <Button size="sm" variant="outline" onClick={() => addComplexItem("educations")}><Plus size={14}/> Add</Button>}</div>
            <div className="space-y-6">
              {profile.educations.map((edu) => (
                <div key={edu.id} className="relative group">
                  {isEditing ? (
                    <div className="p-4 border rounded-lg space-y-3 bg-gray-50"><Input value={edu.degree} onChange={(e) => updateComplexItem("educations", edu.id, "degree", e.target.value)} /><Input value={edu.university} onChange={(e) => updateComplexItem("educations", edu.id, "university", e.target.value)} /><Input value={edu.year} onChange={(e) => updateComplexItem("educations", edu.id, "year", e.target.value)} /><Button size="icon" variant="destructive" className="absolute -top-2 -right-2 h-6 w-6 rounded-full" onClick={() => removeComplexItem("educations", edu.id)}><Trash2 size={12} /></Button></div>
                  ) : (
                    <div><h4 className="text-base font-bold text-gray-900">{edu.degree}</h4><p className="text-sm text-gray-600">{edu.university}</p><p className="text-xs text-gray-400 mt-1">{edu.year}</p></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="pt-10">
            <Button onClick={() => setIsEditing(!isEditing)} className={`w-full md:w-auto h-12 px-8 rounded-full font-bold text-base shadow-lg transition-all ${isEditing ? "bg-blue-600 hover:bg-blue-700" : "bg-[#3FAE2A] hover:bg-green-700"}`}>
              {isEditing ? "Save Changes" : "Edit Professional Details"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}