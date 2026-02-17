"use client";

import React, { useState } from "react";
import { ArrowLeft, Upload, BadgeCheck, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

export default function CompanyProfessionalDetails() {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);

  // Initial Data based on screenshot
  const [profile, setProfile] = useState({
    name: "Mercedes Benz",
    phone: "47928682462973",
    location: "Dhaka, Bangladesh",
    image: "/image/profile-picture.png", // Replace with actual logo path
    businessRegId: "06348162198789461+897",
    taxId: "6516549649646546",
    authRepId: "6541565549",
    overview: "Experienced and results-driven professional with a strong background in customer engagement, sales operations, and relationship management. Demonstrated ability to meet targets, communicate effectively with diverse clients, and adapt quickly in fast-paced environments. Committed to delivering high-quality service while contributing to team and organizational growth.",
    certificateUrl: "",
  });

  const handleChange = (field: string, value: string) => {
    setProfile({ ...profile, [field]: value });
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 font-sans">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Button variant="ghost" size="icon" className="rounded-full border" onClick={() => router.back()}>
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h1 className="text-2xl font-bold text-gray-900">Professional Details</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12 min-h-[600px]">
        
        {/* LEFT COLUMN: Company Info */}
        <div className="space-y-8 lg:pr-12 lg:border-r border-gray-200">
          
          {/* Header Block */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="relative group">
              <Avatar className="w-32 h-32 border-4 border-gray-50 shadow-sm bg-white">
                {/* Using a placeholder or the actual image source */}
                <AvatarImage src={profile.image} className="object-contain " />
                <AvatarFallback className="bg-gray-100 text-2xl font-bold text-gray-400">MB</AvatarFallback>
              </Avatar>
              {isEditing && (
                <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center cursor-pointer text-white">
                   <Upload size={20} />
                </div>
              )}
            </div>
            
            <div className="flex-1 space-y-2 text-center md:text-left w-full">
              {isEditing ? (
                <div className="space-y-3">
                  <Input 
                    value={profile.name} 
                    onChange={(e) => handleChange("name", e.target.value)} 
                    placeholder="Company Name" 
                    className="font-bold" 
                  />
                  <Input 
                    value={profile.phone} 
                    onChange={(e) => handleChange("phone", e.target.value)} 
                    placeholder="Phone" 
                  />
                  <Input 
                    value={profile.location} 
                    onChange={(e) => handleChange("location", e.target.value)} 
                    placeholder="Location" 
                  />
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-gray-900">{profile.name}</h2>
                  <p className="text-gray-500">Phone Number: <span className="text-gray-800">{profile.phone}</span></p>
                  <p className="text-gray-500">Location: <span className="text-gray-800">{profile.location}</span></p>
                  
                  <div className="flex items-center justify-center md:justify-start mt-2">
                    <span className="flex items-center gap-1 bg-blue-50 text-blue-500 text-xs px-2 py-1 rounded-sm font-medium">
                      <BadgeCheck size={14} fill="#3b82f6" className="text-white" /> Id Verified
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* IDs Section */}
          <div className="space-y-6">
            <div>
                <label className="block text-gray-900 font-semibold mb-1">Business Registration Certificate ID</label>
                {isEditing ? (
                    <Input value={profile.businessRegId} onChange={(e) => handleChange("businessRegId", e.target.value)} />
                ) : (
                    <p className="text-gray-500 text-sm">{profile.businessRegId}</p>
                )}
            </div>
            <div>
                <label className="block text-gray-900 font-semibold mb-1">Tax ID</label>
                {isEditing ? (
                    <Input value={profile.taxId} onChange={(e) => handleChange("taxId", e.target.value)} />
                ) : (
                    <p className="text-gray-500 text-sm">{profile.taxId}</p>
                )}
            </div>
            <div>
                <label className="block text-gray-900 font-semibold mb-1">Authorized Representative ID</label>
                {isEditing ? (
                    <Input value={profile.authRepId} onChange={(e) => handleChange("authRepId", e.target.value)} />
                ) : (
                    <p className="text-gray-500 text-sm">{profile.authRepId}</p>
                )}
            </div>
          </div>
          
          {/* Overview Section */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Overview</h3>
            {isEditing ? (
              <Textarea 
                value={profile.overview} 
                onChange={(e) => handleChange("overview", e.target.value)} 
                className="h-32 leading-relaxed"
              />
            ) : (
              <p className="text-gray-500 text-sm leading-relaxed text-justify">
                {profile.overview}
              </p>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN: Documents & Actions */}
        <div className="flex flex-col justify-between pt-8 lg:pt-0 h-full">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6">Professional Details (Mandatory)</h3>
            
            <div className="space-y-6">
              {/* Row: Business Registration Certificate */}
              <div className="flex items-center justify-between gap-4">
                <span className="text-gray-500 text-sm font-medium">Business Registration Certificate</span>
                {isEditing ? (
                   <Input type="file" className="max-w-[200px]" />
                ) : (
                  <ViewDocumentModal title="Business Registration Certificate" />
                )}
              </div>
            </div>
          </div>

          {/* Edit Button Area */}
          <div className="mt-12 flex justify-end">
            <Button 
              onClick={() => setIsEditing(!isEditing)} 
              className={`w-full md:w-auto px-8 py-6 rounded-full font-bold text-base shadow-lg transition-all ${
                isEditing 
                  ? "bg-blue-600 hover:bg-blue-700 text-white" 
                  : "bg-[#3FAE2A] hover:bg-green-700 text-white"
              }`}
            >
              {isEditing ? "Save Professional Details" : "Edit Professional Details"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper Component for Document Modal
function ViewDocumentModal({ title }: { title: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="rounded-full px-8 border-gray-100 bg-white text-gray-700 text-xs hover:bg-gray-50 h-9 font-medium shadow-sm">
          View Resume
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <div className="flex flex-col items-center p-6">
          <h3 className="text-lg font-bold mb-4">{title}</h3>
          <div className="w-full h-64 bg-gray-100 rounded-lg flex flex-col items-center justify-center text-gray-400">
             <FileText size={48} className="mb-2"/>
             <span>Document Preview</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}