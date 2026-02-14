"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { Eye, EyeOff, Mail, Lock } from "lucide-react"; // Icons updated

import { login } from "@/redux/authSlice"; // আপনার স্লাইস পাথ চেক করুন
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// টাইপ ডিফিনিশন (আপনার স্লাইসের সাথে মিল রেখে)
type UserRole = "company" | "employer" | "job-seeker";

export default function SignInPage() {
    const router = useRouter();
    const dispatch = useDispatch();

    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // --- MOCK LOGIC FOR DEVELOPMENT START ---
        // বাস্তবে এখানে আপনি API কল করবেন।
        // টেস্টিংয়ের জন্য আমরা ইমেইল দেখে রোল ঠিক করছি:
        
        let assignedRole: UserRole = "job-seeker"; // Default

        if (formData.email.includes("company")) {
            assignedRole = "company";
        } else if (formData.email.includes("employer")) {
            assignedRole = "employer";
        }

        const mockUser = {
            id: "user_123",
            name: assignedRole === "company" ? "Tech Solutions Ltd" : "John Doe",
            email: formData.email,
            avatar: "https://github.com/shadcn.png",
            role: assignedRole, // এই রোলটি রিডাক্সে যাবে
        };

        // একটু সময় নিচ্ছি যাতে লোডিং ইফেক্ট বোঝা যায়
        setTimeout(() => {
            dispatch(login(mockUser)); // Redux-এ ডেটা পাঠানো হলো
            setIsLoading(false);
            router.push("/"); // হোম পেজে রিডাইরেক্ট
        }, 1000);
        // --- MOCK LOGIC END ---
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 font-sans">
            
            <div className="w-full max-w-[1393px] bg-white rounded-[30px] shadow-xl overflow-hidden flex flex-col md:flex-row min-h-[700px]">

                {/* LEFT SIDE: Image & Overlay */}
                <div className="relative w-full md:w-1/2 hidden md:block">
                    <Image
                        src="/image/login-page-image.jpg"
                        alt="Team handshake"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[80%] bg-white/30 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-center text-white shadow-lg">
                        <h3 className="text-lg font-bold">Welcome to HireHubJA</h3>
                        <p className="text-sm opacity-90 mt-1">Login to explore more</p>
                    </div>
                </div>

                {/* RIGHT SIDE: Form */}
                <div className="w-full md:w-1/2 bg-[#EAF6EA] flex flex-col items-center justify-center p-8 md:p-12 relative">

                    {/* Logo */}
                    <div className="mb-6 text-center">
                        <Image src="/image/logo.svg" alt="HireHubJA Logo" width={200} height={100} className="object-contain mx-auto" />
                    </div>

                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-green-700">Welcome Back!</h1>
                        <p className="text-gray-500 text-sm mt-2">Sign in to manage your account</p>
                    </div>

                    {/* Dev Hint (ডেভেলপমেন্টের সময় সুবিধার জন্য, পরে মুছে দেবেন) */}
                    <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-2 mb-4 text-xs w-full max-w-md">
                        <p className="font-bold">Testing Tips:</p>
                        <p>1. Use "<b>company</b>@test.com" for Company View</p>
                        <p>2. Use "<b>employer</b>@test.com" for Employer View</p>
                        <p>3. Any other email for Job Seeker View</p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleLogin} className="w-full max-w-md space-y-5">

                        <div className="space-y-1">
                            <Label htmlFor="email" className="text-xs font-medium text-gray-600 ml-1">Email</Label>
                            <div className="relative">
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    className="pl-10 rounded-xl bg-white border-none py-6 shadow-sm focus-visible:ring-green-500"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                />
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <Label htmlFor="password" className="text-xs font-medium text-gray-600 ml-1">Password</Label>
                            <div className="relative">
                                <Input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    className="pl-10 pr-10 rounded-xl bg-white border-none py-6 shadow-sm focus-visible:ring-green-500"
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    required
                                />
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <Link href="/auth/forgot-password" className="text-xs text-green-600 hover:underline">
                                Forgot password?
                            </Link>
                        </div>

                        <Button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-[#3FAE2A] hover:bg-[#359624] text-white font-bold rounded-full py-6 text-lg shadow-lg mt-4 transition-all"
                        >
                            {isLoading ? "Signing In..." : "Sign In"}
                        </Button>
                    </form>

                    <div className="mt-8 text-sm text-gray-500">
                        Don't have an account?
                        <Link href="/signup" className="text-[#3FAE2A] font-semibold ml-1 hover:underline">
                            Sign up
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}