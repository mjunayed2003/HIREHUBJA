import React from "react";
import { Search, User } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden bg-[#e8f7e9] py-16 text-gray-700">
      
      {/* Background Pattern (Topographic Waves) */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="none"
            stroke="#86efac"
            strokeWidth="2"
            d="M0,160 C120,200 240,100 360,120 C480,140 600,220 720,200 C840,180 960,80 1080,100 C1200,120 1320,200 1440,180"
          />
          <path
            fill="none"
            stroke="#86efac"
            strokeWidth="2"
            d="M0,220 C150,260 300,160 450,180 C600,200 750,280 900,260 C1050,240 1200,140 1350,160"
          />
          <path
            fill="none"
            stroke="#86efac"
            strokeWidth="2"
            d="M0,60 C200,120 400,20 600,60 C800,100 1000,40 1200,80 C1400,120 1600,20 1800,60"
          />
          <path
            fill="none"
            stroke="#86efac"
            strokeWidth="2"
            d="M-100,280 C100,320 300,220 500,240 C700,260 900,340 1100,320 C1300,300 1500,200 1700,220"
          />
        </svg>
      </div>

      <div className="container relative mx-auto px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Column 1: Logo & Description */}
          <div className="flex flex-col space-y-4">
            {/* Logo Simulation */}
            <div className="flex items-center gap-2">
              
              <Image
                src="/image/logo.svg"
                alt="Company Logo"
                width={120}
                height={40}
                className="object-contain"
              />
            </div>
            
            <p className="text-sm leading-relaxed text-gray-600">
              MUPRODEC ENERGY SARL specializes in renewable energy and efficiency solutions across West Africa. With 10+ years of expertise, we provide high-quality installations, maintenance, and training to drive sustainable growth.
            </p>
          </div>

          {/* Column 2: Explore */}
          <div className="flex flex-col space-y-4 lg:pl-10">
            <h3 className="text-lg font-semibold text-gray-900">Explore</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-green-600">Home</a></li>
              <li><a href="#" className="hover:text-green-600">Products</a></li>
              <li><a href="#" className="hover:text-green-600">Blogs</a></li>
              <li><a href="#" className="hover:text-green-600">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Unity Pages */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Unity Pages</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-green-600">About Us</a></li>
              <li><a href="#" className="hover:text-green-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-green-600">Terms & Condition</a></li>
            </ul>
          </div>

          {/* Column 4: Get in Touch */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Get in Touch</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <a href="mailto:Fortunekouka@gmail.com" className="hover:text-green-600">
                  Fortunekouka@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:00956567890" className="hover:text-green-600">
                  (009)56567890
                </a>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;