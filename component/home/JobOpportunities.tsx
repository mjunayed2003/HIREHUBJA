import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bookmark, MapPin } from "lucide-react"
import Image from 'next/image'


const jobListings = [
  {
    id: 1,
    company: "Mercedes Benz",
    logo: "/image/jobOpportunities.jpg",
    date: "20 Dec 2026",
    title: "Senior Sales Executive",
    tags: ["Full Time", "Senior level", "On-site", "Sales"],
    salary: "$1000/Month",
    location: "Dhaka, Bangladesh"
  },
  {
    id: 2,
    company: "Mercedes Benz",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Benz_Logo_2010.svg/1024px-Mercedes-Benz_Logo_2010.svg.png",
    date: "20 Dec 2026",
    title: "Senior Sales Executive",
    tags: ["Full Time", "Senior level", "On-site", "Sales"],
    salary: "$1000/Month",
    location: "Dhaka, Bangladesh"
  },
  {
    id: 3,
    company: "Mercedes Benz",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Benz_Logo_2010.svg/1024px-Mercedes-Benz_Logo_2010.svg.png",
    date: "20 Dec 2026",
    title: "Senior Sales Executive",
    tags: ["Full Time", "Senior level", "On-site", "Sales"],
    salary: "$1000/Month",
    location: "Dhaka, Bangladesh"
  },
  {
    id: 4,
    company: "Mercedes Benz",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Benz_Logo_2010.svg/1024px-Mercedes-Benz_Logo_2010.svg.png",
    date: "20 Dec 2026",
    title: "Senior Sales Executive",
    tags: ["Full Time", "Senior level", "On-site", "Sales"],
    salary: "$1000/Month",
    location: "Dhaka, Bangladesh"
  },
  {
    id: 5,
    company: "Mercedes Benz",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Benz_Logo_2010.svg/1024px-Mercedes-Benz_Logo_2010.svg.png",
    date: "20 Dec 2026",
    title: "Senior Sales Executive",
    tags: ["Full Time", "Senior level", "On-site", "Sales"],
    salary: "$1000/Month",
    location: "Dhaka, Bangladesh"
  },
  {
    id: 6,
    company: "Mercedes Benz",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Benz_Logo_2010.svg/1024px-Mercedes-Benz_Logo_2010.svg.png",
    date: "20 Dec 2026",
    title: "Senior Sales Executive",
    tags: ["Full Time", "Senior level", "On-site", "Sales"],
    salary: "$1000/Month",
    location: "Dhaka, Bangladesh"
  },
];

const JobOpportunities = () => {
  return (
    <div className=' max-w-[1622px] w-full mx-auto  pb-10 px-4'>
      {/* Header Section */}
      <div className='mx-auto pb-12'>
        <h5 className='text-[40px] md:text-[64px] font-bold mx-auto text-center text-[#3FAE2A] leading-tight'>
          Explore Job Opportunities
        </h5>
        <p className='text-[16px] md:text-[20px] mx-auto text-center text-[#6B7280] mt-4'>
          Discover the latest verified job openings from trusted employers — updated in real time.
        </p>
      </div>

      {/* Job Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        {jobListings.splice(0,6).map((job) => (
          <Card
            key={job.id}
            className="bg-[#F9F9F9] border-none shadow-sm hover:shadow-md transition-shadow duration-300 rounded-xl"
          >
            <CardHeader className="flex flex-row items-start justify-between pb-2 space-y-0">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10 bg-white border rounded-full">
                  <AvatarImage
                    src="/image/jobOpportunities.jpg"
                    alt="Job icon"
                    className="rounded-full object-cover"
                  />
                  <AvatarFallback>JOB</AvatarFallback>
                </Avatar>

              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500 font-medium">
                  {job.date}
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 text-gray-400 hover:text-[#3FAE2A]"
                >
                  <Bookmark className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>

            <CardContent className="space-y-3">
              <div>
                <p className="text-xs text-gray-500 font-medium">{job.company}</p>
                <h3 className="text-lg font-bold text-gray-900 leading-tight mt-1">
                  {job.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {job.tags.map((tag, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="rounded-full text-[10px] px-2 py-0.5 font-normal text-gray-600 border-gray-300 bg-white"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>

            <CardFooter className="flex flex-col items-start pt-2 gap-2">
              <p className="text-[#3FAE2A] font-bold text-sm">{job.salary}</p>
              <div className="flex items-center text-gray-500 text-xs gap-1">
                <MapPin className="h-3 w-3" />
                <span>{job.location}</span>
              </div>
            </CardFooter>
          </Card>
        ))}

      </div>
    </div>
  )
}

export default JobOpportunities