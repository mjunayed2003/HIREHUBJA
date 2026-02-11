import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Apple, Play } from "lucide-react"; 

const JournyAndApp = () => {
  return (
    <div className="w-full max-w-[1251px] mx-auto px-4 bg-white overflow-hidden">
      {/* --- Section 1: Start Your Journey --- */}
      <section className="container mx-auto px-4 pt-16 md:pt-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        
          <div className="relative mx-auto h-[400px] w-full max-w-[500px]">
            <div className="absolute right-21 top-0 z-0 grid grid-cols-5 gap-2 opacity-80">
              {[...Array(30)].map((_, i) => (
                <div key={i} className="h-1.5 w-1.5 rounded-full bg-green-500" />
              ))}
            </div>
            
            {/* Green Dots Pattern Bottom Left */}
            <div className="absolute    bottom-18 -left-10 z-0 grid grid-cols-5 gap-2 opacity-80">
              {[...Array(30)].map((_, i) => (
                <div key={i} className="h-1.5 w-1.5 rounded-full bg-green-500" />
              ))}
            </div>

            {/* Main Large Image */}
            <div className="absolute left-0 top-8 h-64 w-60 overflow-hidden rounded-2xl shadow-lg md:w-72">
              <Image
                src="/image/journy1.jpg"
                alt="Professional working"
                fill
                className="object-cover"
              />
            </div>

            {/* Small Top Image */}
            <div className="absolute right-4 top-10  h-32 w-32 overflow-hidden rounded-xl border-4 border-white shadow-lg md:right-30">
              <Image
                src="/image/journy2.jpg"
                alt="Worker smiling"
                fill
                className="object-cover"
              />
            </div>

            {/* Small Bottom Image */}
            <div className="absolute bottom-7 right-4 h-40 w-40 overflow-hidden rounded-xl border-4 border-white shadow-lg md:right-22">
              <Image
                src="/image/journey3.jpg"
                alt="Success moment"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h2 className="text-3xl font-bold text-green-600 md:text-4xl">
              Start Your Journey
            </h2>
            <p className="mt-4 max-w-lg text-muted-foreground">
              Whether you're searching for your next job or your next hire —
              everything starts here.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                className="h-12 w-36 rounded-full bg-green-600 text-base font-medium hover:bg-green-700"
              >
                Find a Job
              </Button>
              <Button
                variant="outline"
                className="h-12 w-36 rounded-full border-green-600 text-base font-medium text-green-600 hover:bg-green-50 hover:text-green-700"
              >
                Post a Job
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 2: Download Mobile App --- */}
      <section className="container mx-auto px-4">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        
        {/* Left: Content */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <h2 className="text-3xl font-bold text-green-600 md:text-4xl">
            Download Our Mobile App
          </h2>
          <h3 className="mt-2 text-lg font-medium text-gray-500">
            Find Jobs. Hire Talent. Anytime, Anywhere.
          </h3>

          <div className="mt-8 space-y-2">
            <p className="font-semibold text-gray-700">
              Get the full experience on mobile
            </p>
            <p className="text-sm text-muted-foreground">
              — apply for jobs, manage hiring, and stay connected on the go.
            </p>
          </div>

          {/* Store Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            {/* Google Play */}
            <button className="flex items-center gap-3 rounded-lg bg-black px-4 py-2 text-white hover:bg-gray-800 transition">
              <Play className="h-6 w-6 fill-white" />
              <div className="text-left">
                <div className="text-[10px] uppercase leading-none">Get it on</div>
                <div className="text-sm font-bold">Google Play</div>
              </div>
            </button>

            {/* Apple Store */}
            <button className="flex items-center gap-3 rounded-lg bg-black px-4 py-2 text-white hover:bg-gray-800 transition">
              <Apple className="h-7 w-7 fill-white mb-1" />
              <div className="text-left">
                <div className="text-[10px] uppercase leading-none">Download on the</div>
                <div className="text-sm font-bold">Apple Store</div>
              </div>
            </button>
          </div>
        </div>

        {/* Right: Phone Mockup Image */}
        <div className="flex w-full items-center justify-center lg:justify-end">
          <div className="relative h-[400px] w-full max-w-[600px] md:h-[500px]">
            <Image
              src="/image/app-mobile.png" 
              alt="Mobile App Mockup"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
        
      </div>
    </section>
    </div>
  );
};

export default JournyAndApp;