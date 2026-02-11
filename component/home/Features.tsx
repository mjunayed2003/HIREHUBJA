import React from "react";
import { 
  ScanFace, 
  FileSearch, 
  MessageSquareText, 
  CalendarClock 
} from "lucide-react";

// Interface for type safety
interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  iconColor: string; // To mimic the colorful icons in the image
}

const features: Feature[] = [
  {
    id: 1,
    title: "ID & Face Verification",
    description: "Ensures genuine profiles for both employers and job seekers, reducing fraud and fake listings.",
    icon: ScanFace,
    iconColor: "text-emerald-500",
  },
  {
    id: 2,
    title: "Background Checks",
    description: "Adds an extra layer of safety and reliability before hiring.",
    icon: FileSearch,
    iconColor: "text-blue-400",
  },
  {
    id: 3,
    title: "In-App Messaging",
    description: "Direct communication without sharing personal contact details.",
    icon: MessageSquareText,
    iconColor: "text-sky-500",
  },
  {
    id: 4,
    title: "Interview Scheduling",
    description: "Built-in scheduling with Zoom integration and real-time notifications.",
    icon: CalendarClock,
    iconColor: "text-rose-500",
  },
];

const KeyFeatures = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[1622px] w-full mx-auto px-4 md:px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-600">
            Key Features
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="flex flex-col items-center text-center group"
            >
              {/* Icon Container - Circular Light Green Background */}
              <div className="mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-green-50 transition-transform duration-300 group-hover:scale-110">
                <feature.icon 
                  className={`h-12 w-12 ${feature.iconColor}`} 
                  strokeWidth={1.5}
                />
              </div>

              {/* Title */}
              <h3 className="mb-3 text-xl font-bold text-green-600">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 leading-relaxed max-w-xs text-sm md:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;