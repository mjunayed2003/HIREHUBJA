import HeroPage from "@/component/home/Hero";
import JobOpportunities from "@/component/home/JobOpportunities";
import KeyFeatures from "@/component/home/KeyFeatures";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroPage />
      <JobOpportunities />
      <KeyFeatures />
    </div>
  );
}
