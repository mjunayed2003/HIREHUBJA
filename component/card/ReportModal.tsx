 "use client";

import { useState } from "react";
import { Flag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function ReportModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [reason, setReason] = useState("fake"); // fake | other
  const [note, setNote] = useState("");
  
  const MAX_CHARS = 50;

  const handleSubmit = () => {
    console.log("Reporting:", { reason, note });
    // API Call here...
    setIsOpen(false); // Close modal
    alert("Job reported successfully.");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {/* --- Trigger Button (The Flag Icon) --- */}
      <DialogTrigger asChild>
        <button className="p-2 bg-red-50 rounded-full text-red-400 hover:text-red-600 hover:bg-red-100 transition">
          <Flag size={20} />
        </button>
      </DialogTrigger>

      {/* --- Modal Content --- */}
      <DialogContent className="sm:max-w-[500px] p-8 rounded-[30px] bg-[#F9F9F9] border-none shadow-2xl">
        
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold text-red-600 mb-2">
            Report This Job
          </DialogTitle>
          <p className="text-center text-gray-500 text-sm font-medium">
            Help us understand what’s wrong with this job?
          </p>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          
          {/* Reason Selection */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-gray-700">Select Reason</h4>
            
            <div className="space-y-3">
              {/* Option 1: Fake */}
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${reason === 'fake' ? 'border-[#3FAE2A]' : 'border-gray-300'}`}>
                    {reason === 'fake' && <div className="w-2.5 h-2.5 bg-[#3FAE2A] rounded-full" />}
                </div>
                <input 
                  type="radio" 
                  name="reason" 
                  className="hidden" 
                  value="fake" 
                  checked={reason === "fake"} 
                  onChange={() => setReason("fake")} 
                />
                <span className={`text-sm ${reason === 'fake' ? 'text-gray-700 font-medium' : 'text-gray-500'}`}>
                  Fake/inappropriate/spam
                </span>
              </label>

              {/* Option 2: Other */}
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${reason === 'other' ? 'border-[#3FAE2A]' : 'border-gray-300'}`}>
                    {reason === 'other' && <div className="w-2.5 h-2.5 bg-[#3FAE2A] rounded-full" />}
                </div>
                <input 
                  type="radio" 
                  name="reason" 
                  className="hidden" 
                  value="other" 
                  checked={reason === "other"} 
                  onChange={() => setReason("other")} 
                />
                <span className={`text-sm ${reason === 'other' ? 'text-gray-700 font-medium' : 'text-gray-500'}`}>
                  Other
                </span>
              </label>
            </div>
          </div>

          {/* Description Box */}
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-gray-700">Description</h4>
            <div className="relative bg-white rounded-xl border border-gray-200 shadow-sm focus-within:ring-1 focus-within:ring-[#3FAE2A] focus-within:border-[#3FAE2A] transition-all">
              <Textarea
                placeholder="Enter your Short note"
                className="min-h-[120px] resize-none border-none bg-transparent focus-visible:ring-0 p-4 text-sm"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                maxLength={MAX_CHARS}
              />
              <span className="absolute bottom-3 right-4 text-xs text-gray-400 font-medium">
                {note.length}/{MAX_CHARS}
              </span>
            </div>
          </div>

          {/* Report Button */}
          <div className="pt-2">
            <Button 
                onClick={handleSubmit}
                className="w-full bg-[#3FAE2A] hover:bg-[#359624] text-white font-bold py-6 rounded-full text-lg shadow-lg shadow-green-100"
            >
                Report Job
            </Button>
          </div>

        </div>
      </DialogContent>
    </Dialog>
  );
}