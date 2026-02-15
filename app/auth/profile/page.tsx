"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { User, Settings, LogOut, ChevronRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import LogoutModal from "@/component/profile/LogoutModel";
import { useState } from "react";

export default function EmployerProfile() {
  const router = useRouter();
  const [showLogout, setShowLogout] = useState(false);

  return (
    <div className="max-w-5xl mx-auto pb-20">
      {/* Banner */}
      <div className="relative w-full h-[250px] overflow-hidden">
        <Image 
          src="/image/profile-bg.jpg" 
          alt="Banner" 
          fill 
          className="object-cover" 
        />
        <div className="absolute inset-0 bg-green-900/40" />
      </div>

      {/* User Info Section */}
      <div className="px-10 -mt-15 relative z-10 flex items-end gap-6">
        <div className="w-44 h-44 rounded-2xl border-4 border-white overflow-hidden bg-white shadow-lg">
          <Image src="/image/profile-picture.png" alt="Profile" width={176} height={176} className="object-cover" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-[#3FAE2A]">Sowrove Bepary</h1>
          <p className="text-gray-500 font-medium">Experience level: <span className="text-gray-700">Senior level</span></p>
          <p className="text-sm text-gray-400">Location: <span className="text-gray-800">Dhaka, Bangladesh</span></p>
          <div className="flex gap-2 mt-2">
            <Badge className="bg-blue-50 text-blue-500 border-none font-normal flex gap-1"><CheckCircle2 size={12}/> Id Verified</Badge>
            <Badge className="bg-blue-50 text-blue-500 border-none flex gap-1 font-normal"><CheckCircle2 size={12}/> Face Verified</Badge>
          </div>
        </div>
      </div>

      <div className="mt-12 h-[1px] bg-gray-100 mx-10" />

      {/* Navigation List */}
      <div className="max-w-2xl mx-auto mt-10 space-y-4">
        <ProfileListItem 
          icon={<User className="text-white" size={18}/>} 
          label="Professional Details" 
          onClick={() => router.push('/auth/professional-details')} 
        />
        <ProfileListItem 
          icon={<Settings className="text-white" size={18}/>} 
          label="Settings" 
          onClick={() => router.push('/auth/settings')} 
        />
        <ProfileListItem 
          icon={<LogOut className="text-white" size={18}/>} 
          label="Log Out" 
          iconBgClass="bg-black" // Changed to black here
          onClick={() => setShowLogout(true)} 
        />
      </div>

      <LogoutModal open={showLogout} onOpenChange={setShowLogout} />
    </div>
  );
}

// Updated component to accept iconBgClass
function ProfileListItem({ 
  icon, 
  label, 
  onClick, 
  iconBgClass = "bg-[#3FAE2A]"
}: { 
  icon: React.ReactNode, 
  label: string, 
  onClick: () => void,
  iconBgClass?: string 
}) {
  return (
    <button 
      onClick={onClick}
      className="w-full flex items-center justify-between p-4 bg-white border border-gray-100 rounded-2xl hover:shadow-md transition group"
    >
      <div className="flex items-center gap-4">
        {/* Uses the passed class or defaults to green */}
        <div className={`w-9 h-9 rounded-full flex items-center justify-center ${iconBgClass}`}>
          {icon}
        </div>
        <span className="font-medium text-gray-700">{label}</span>
      </div>
      <ChevronRight size={18} className="text-gray-400 group-hover:text-[#3FAE2A]" />
    </button>
  );
}