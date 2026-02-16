"use client";

import React, { useState } from "react";
import { ArrowLeft, CheckCircle, Plus, Trash2, Upload, MapPin, BadgeCheck, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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

// --- Main Component ---
export default function ProfessionalDetails() {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);

  // --- State for all data ---
  const [profile, setProfile] = useState({
    name: "Sowrove Bepary",
    phone: "47928682462973",
    experienceLevel: "Senior level",
    location: "Dhaka, Bangladesh",
    image: "/image/profile-placeholder.jpg", // Replace with your actual image path
    overview:
      "Experienced and results-driven professional with a strong background in customer engagement, sales operations, and relationship management. Demonstrated ability to meet targets, communicate effectively with diverse clients, and adapt quickly in fast-paced environments.",
    
    experiences: [
      { id: 1, title: "Senior Sales Executive", company: "ABC Solutions Ltd.", duration: "Jan 2021 – Present" },
      { id: 2, title: "Sales Executive", company: "XYZ Corporation", duration: "Jun 2018 – Dec 2020" },
    ] as Experience[],

    jobCategories: ["Administrative Support", "Marketing & Sales", "Customer Service"],
    employmentType: ["Part-time"],
    
    skills: [
      "Sales & Negotiation",
      "Customer Relationship Management (CRM)",
      "Communication & Presentation",
      "Lead Generation",
      "Market Research",
      "Time Management",
      "Team Collaboration",
      "Problem Solving"
    ],

    educations: [
      { id: 1, degree: "Bachelor of Business Administration (BBA)", university: "University of Dhaka", year: "2014 – 2018" }
    ] as Education[]
  });

  // --- Handlers ---
  const handleChange = (field: string, value: any) => {
    setProfile({ ...profile, [field]: value });
  };

  // Generic array update (for simple strings like categories/skills)
  const handleArrayUpdate = (field: "jobCategories" | "employmentType" | "skills", index: number, value: string) => {
    const newArray = [...profile[field]];
    newArray[index] = value;
    setProfile({ ...profile, [field]: newArray });
  };

  const addItem = (field: "jobCategories" | "employmentType" | "skills") => {
    setProfile({ ...profile, [field]: [...profile[field], ""] });
  };

  const removeItem = (field: "jobCategories" | "employmentType" | "skills", index: number) => {
    const newArray = profile[field].filter((_, i) => i !== index);
    setProfile({ ...profile, [field]: newArray });
  };

  // Complex array handlers (Experience/Education)
  const updateComplexItem = (
    arrayName: "experiences" | "educations",
    id: number,
    field: string,
    value: string
  ) => {
    const updatedList = profile[arrayName].map((item: any) =>
      item.id === id ? { ...item, [field]: value } : item
    );
    // @ts-ignore
    setProfile({ ...profile, [arrayName]: updatedList });
  };

  const addComplexItem = (arrayName: "experiences" | "educations") => {
    const newItem = arrayName === "experiences" 
      ? { id: Date.now(), title: "", company: "", duration: "" }
      : { id: Date.now(), degree: "", university: "", year: "" };
    
    // @ts-ignore
    setProfile({ ...profile, [arrayName]: [...profile[arrayName], newItem] });
  };

  const removeComplexItem = (arrayName: "experiences" | "educations", id: number) => {
    // @ts-ignore
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
        
        {/* === LEFT COLUMN === */}
        <div className="space-y-8 pr-0 lg:pr-10 lg:border-r border-gray-200">
          
          {/* Profile Header */}
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
                  <p className="text-gray-500">Phone Number: <span className="text-gray-800">{profile.phone}</span></p>
                  <p className="text-gray-500">Experience level: <span className="text-gray-800 font-medium">{profile.experienceLevel}</span></p>
                  <p className="text-gray-500 flex items-center justify-center sm:justify-start gap-1">
                    Location: <span className="text-gray-800 font-medium">{profile.location}</span>
                  </p>
                  
                  {/* Verification Badges */}
                  <div className="flex items-center justify-center sm:justify-start gap-3 mt-2">
                    <span className="flex items-center gap-1 bg-blue-50 text-blue-500 text-xs px-2 py-1 rounded-full font-medium">
                      <ShieldCheck size={14} /> Id Verified
                    </span>
                    <span className="flex items-center gap-1 bg-blue-50 text-blue-500 text-xs px-2 py-1 rounded-full font-medium">
                      <BadgeCheck size={14} /> Face Verified
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Overview */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Overview</h3>
            {isEditing ? (
              <Textarea 
                value={profile.overview} 
                onChange={(e) => handleChange("overview", e.target.value)} 
                className="h-32"
              />
            ) : (
              <p className="text-gray-600 text-sm leading-relaxed text-justify">
                {profile.overview}
              </p>
            )}
          </div>

          {/* Experience */}
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
                       <Input value={exp.company} onChange={(e) => updateComplexItem("experiences", exp.id, "company", e.target.value)} placeholder="Company Name" />
                       <Input value={exp.duration} onChange={(e) => updateComplexItem("experiences", exp.id, "duration", e.target.value)} placeholder="Duration" />
                       <Button size="icon" variant="destructive" className="absolute -top-2 -right-2 h-6 w-6 rounded-full" onClick={() => removeComplexItem("experiences", exp.id)}>
                          <Trash2 size={12} />
                       </Button>
                    </div>
                  ) : (
                    <div>
                      <h4 className="text-base font-bold text-gray-900">{exp.title}</h4>
                      <p className="text-sm text-gray-600">{exp.company}</p>
                      <p className="text-xs text-gray-400 mt-1">{exp.duration}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Job Categories */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-bold text-gray-900">Preferred Job Categories</h3>
              {isEditing && <Button size="sm" variant="ghost" onClick={() => addItem("jobCategories")}><Plus size={16}/></Button>}
            </div>
            <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
              {profile.jobCategories.map((cat, idx) => (
                isEditing ? (
                  <div key={idx} className="flex gap-2 mb-2">
                    <Input value={cat} onChange={(e) => handleArrayUpdate("jobCategories", idx, e.target.value)} />
                    <Button size="icon" variant="ghost" onClick={() => removeItem("jobCategories", idx)}><Trash2 size={16} className="text-red-500"/></Button>
                  </div>
                ) : (
                  <li key={idx}>{cat}</li>
                )
              ))}
            </ul>
          </div>

          {/* Employment Type */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Employment Type</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
              {profile.employmentType.map((type, idx) => (
                isEditing ? (
                   <div key={idx} className="flex gap-2 mb-2">
                     <select 
                       className="w-full border rounded px-3 py-2 text-sm bg-white"
                       value={type} 
                       onChange={(e) => handleArrayUpdate("employmentType", idx, e.target.value)}
                     >
                        <option value="Full Time">Full Time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Contract">Contract</option>
                     </select>
                   </div>
                ) : (
                  <li key={idx}>{type}</li>
                )
              ))}
            </ul>
          </div>

        </div>

        {/* === RIGHT COLUMN === */}
        <div className="space-y-8">
          
          {/* CV / Resume */}
          <div className="flex items-center justify-between">
            <span className="text-gray-600 font-medium">Upload CV / Resume:</span>
            {isEditing ? (
               <div className="flex items-center gap-2">
                 <Input type="file" className="w-[200px] text-xs" />
               </div>
            ) : (
               <Button variant="outline" className="rounded-lg border-gray-200 text-gray-700 hover:bg-gray-50">
                  View Resume
               </Button>
            )}
          </div>

          {/* Skills */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-bold text-gray-900">Skills</h3>
              {isEditing && <Button size="sm" variant="ghost" onClick={() => addItem("skills")}><Plus size={16}/></Button>}
            </div>
            <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
              {profile.skills.map((skill, idx) => (
                isEditing ? (
                  <div key={idx} className="flex gap-2 mb-2">
                    <Input value={skill} onChange={(e) => handleArrayUpdate("skills", idx, e.target.value)} />
                    <Button size="icon" variant="ghost" onClick={() => removeItem("skills", idx)}><Trash2 size={16} className="text-red-500"/></Button>
                  </div>
                ) : (
                  <li key={idx}>{skill}</li>
                )
              ))}
            </ul>
          </div>

          {/* Education */}
          <div>
            <div className="flex justify-between items-center mb-4">
               <h3 className="text-lg font-bold text-gray-900">Educations</h3>
               {isEditing && <Button size="sm" variant="outline" onClick={() => addComplexItem("educations")}><Plus size={14}/> Add</Button>}
            </div>
            
            <div className="space-y-6">
              {profile.educations.map((edu) => (
                <div key={edu.id} className="relative group">
                  {isEditing ? (
                    <div className="p-4 border rounded-lg space-y-3 bg-gray-50">
                       <Input value={edu.degree} onChange={(e) => updateComplexItem("educations", edu.id, "degree", e.target.value)} placeholder="Degree" />
                       <Input value={edu.university} onChange={(e) => updateComplexItem("educations", edu.id, "university", e.target.value)} placeholder="University" />
                       <Input value={edu.year} onChange={(e) => updateComplexItem("educations", edu.id, "year", e.target.value)} placeholder="Year" />
                       <Button size="icon" variant="destructive" className="absolute -top-2 -right-2 h-6 w-6 rounded-full" onClick={() => removeComplexItem("educations", edu.id)}>
                          <Trash2 size={12} />
                       </Button>
                    </div>
                  ) : (
                    <div>
                      <h4 className="text-base font-bold text-gray-900">{edu.degree}</h4>
                      <p className="text-sm text-gray-600">{edu.university}</p>
                      <p className="text-xs text-gray-400 mt-1">{edu.year}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Edit/Save Button (Sticky on mobile, static on desktop) */}
          <div className="pt-10">
            <Button 
              onClick={() => setIsEditing(!isEditing)} 
              className={`w-full md:w-auto h-12 px-8 rounded-full font-bold text-base shadow-lg transition-all ${
                isEditing ? "bg-blue-600 hover:bg-blue-700" : "bg-[#3FAE2A] hover:bg-green-700"
              }`}
            >
              {isEditing ? "Save Changes" : "Edit Professional Details"}
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
}