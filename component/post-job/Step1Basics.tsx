"use client";
import { useState } from "react";
import { ChevronDown, Check, X, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useJobPost } from "@/component/post-job/JobPostContext";

const WORK_TYPES = ["Full Time", "Part Time", "Contract"];
const WORK_TIMES = ["On-Site", "Remote", "Hybrid"];

interface Step1BasicsProps {
  categoryList: string[]; 
}


export default function Step1Basics({ categoryList }: Step1BasicsProps) {
  const { formData, setFormData, nextStep } = useJobPost();
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const toggleCategory = (cat: string) => {
    setFormData((prev) => {
      const exists = prev.categories.includes(cat);
      const newCats = exists
        ? prev.categories.filter((c) => c !== cat)
        : [...prev.categories, cat];
      return { ...prev, categories: newCats };
    });
  };

  const handleChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
      <h2 className="text-lg font-bold text-gray-900">Job Basics</h2>

      {/* Job Title */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-600">Job Title (Required)</label>
        <input
          type="text"
          value={formData.jobTitle}
          onChange={(e) => handleChange("jobTitle", e.target.value)}
          className="w-full border rounded-lg px-4 py-3 text-sm focus:border-[#3FAE2A] focus:outline-none"
          placeholder="Ex: Senior Caregiver"
        />
      </div>

      {/* Number of Employees */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-600">Number of employees</label>
        <input
          type="number"
          value={formData.employees}
          onChange={(e) => handleChange("employees", e.target.value)}
          className="w-full border rounded-lg px-4 py-3 text-sm focus:border-[#3FAE2A] focus:outline-none"
          placeholder="Ex: 1"
        />
      </div>

      {/* Multiple Category Modal */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-600">Job Category</label>
        <Dialog open={isCategoryOpen} onOpenChange={setIsCategoryOpen}>
          <DialogTrigger asChild>
            <div className="w-full border rounded-lg px-4 py-3 text-sm flex justify-between items-center cursor-pointer hover:border-[#3FAE2A] bg-white">
              <span className={formData.categories.length ? "text-gray-900" : "text-gray-400"}>
                {formData.categories.length > 0
                  ? `${formData.categories[0]} ${formData.categories.length > 1 ? `+ ${formData.categories.length - 1} more` : ""}`
                  : "Select Categories"}
              </span>
              <ChevronDown size={18} className="text-gray-400" />
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-md h-[80vh] flex flex-col p-6">
            <DialogHeader>
              <DialogTitle>Select Categories</DialogTitle>
            </DialogHeader>
            {/* Selected Tags */}
            <div className="flex flex-wrap gap-2 mb-2">
              {formData.categories.map((cat) => (
                <span key={cat} className="bg-green-50 text-[#3FAE2A] text-xs px-2 py-1 rounded-full border border-green-100 flex items-center gap-1">
                  {cat} <X size={12} className="cursor-pointer" onClick={() => toggleCategory(cat)} />
                </span>
              ))}
            </div>
            {/* List */}
            <div className="flex-1 overflow-y-auto space-y-1">
              {categoryList && categoryList.map((cat) => {
                const isSelected = formData.categories.includes(cat);
                return (
                  <div key={cat} onClick={() => toggleCategory(cat)} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <span className={isSelected ? "text-[#3FAE2A] font-medium" : "text-gray-700"}>{cat}</span>
                    <div className={`w-5 h-5 border rounded flex items-center justify-center ${isSelected ? "bg-[#3FAE2A] border-[#3FAE2A]" : "border-gray-400"}`}>
                      {isSelected && <Check size={14} className="text-white" />}
                    </div>
                  </div>
                );
              })}
            </div>
            <Button onClick={() => setIsCategoryOpen(false)} className="bg-[#3FAE2A] w-full">Done</Button>
          </DialogContent>
        </Dialog>
      </div>

      {/* Grid: Work Type & Work Time */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-2">
            <label className="text-sm font-medium text-gray-600">Work Type</label>
            <select className="w-full border rounded-lg px-4 py-3 text-sm focus:border-[#3FAE2A] focus:outline-none bg-white" 
            onChange={(e) => handleChange("workType", e.target.value)} value={formData.workType}>
                <option value="">Select work type</option>
                {WORK_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
        </div>
        <div className="space-y-2">
            <label className="text-sm font-medium text-gray-600">Work Time</label>
            <select className="w-full border rounded-lg px-4 py-3 text-sm focus:border-[#3FAE2A] focus:outline-none bg-white"
            onChange={(e) => handleChange("workTime", e.target.value)} value={formData.workTime}>
                <option value="">Select work time</option>
                {WORK_TIMES.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
        </div>
      </div>

      {/* Location */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-600">Job Location</label>
        <div className="relative">
          <input type="text" placeholder="Set job location" className="w-full border rounded-lg px-4 py-3 text-sm focus:border-[#3FAE2A] focus:outline-none pr-10" 
          onChange={(e) => handleChange("location", e.target.value)} value={formData.location}/>
          <MapPin className="absolute right-4 top-3 text-gray-400" size={18} />
        </div>
      </div>

      {/* Remote Toggle */}
      <div className="flex items-center justify-between py-2">
        <span className="text-sm text-gray-600 font-medium">Remote</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" checked={formData.isRemote} onChange={(e) => handleChange("isRemote", e.target.checked)} />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-[#3FAE2A] peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
        </label>
      </div>

      {/* Applied Deadline (New Field) */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-600">Applied Deadline</label>
        <input
          type="date"
          value={formData.deadline}
          onChange={(e) => handleChange("deadline", e.target.value)}
          className="w-full border rounded-lg px-4 py-3 text-sm focus:border-[#3FAE2A] focus:outline-none text-gray-600"
        />
      </div>

      {/* Next Button */}
      <div className="pt-6">
        <Button onClick={nextStep} className="w-full h-12 bg-[#3FAE2A] hover:bg-green-700 rounded-full font-bold">Next</Button>
      </div>
    </div>
  );
}