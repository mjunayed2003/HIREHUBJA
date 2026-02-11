"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { Eye, EyeOff } from "lucide-react";

import { login } from "@/redux/authSlice";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignInPage() {
    const router = useRouter();
    const dispatch = useDispatch();

    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        // Simulate API call
        dispatch(
            login({
                id: "1",
                name: "Rakibul Islam",
                avatar: "https://github.com/shadcn.png",
            })
        );

        // Redirect to Home after login
        router.push("/");
    };

    return (
        // Main Background Container
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
            
            {/* Card Container - Width matched to Navbar (1393px) */}
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
                    {/* Glassmorphism Overlay */}
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[80%] bg-white/30 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-center text-white shadow-lg">
                        <h3 className="text-lg font-bold">Welcome to HireHubJA</h3>
                        <p className="text-sm opacity-90 mt-1">Login to explore more</p>
                        <div className="flex justify-center gap-2 mt-3">
                            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                            <span className="w-2 h-2 bg-white/50 rounded-full"></span>
                            <span className="w-2 h-2 bg-white/50 rounded-full"></span>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE: Form */}
                <div className="w-full md:w-1/2 bg-[#EAF6EA] flex flex-col items-center justify-center p-8 md:p-12 relative">

                    {/* Logo Section */}
                    <div className="mb-6 text-center">
                        <div className="flex flex-col items-center">
                            <Image
                                src="/image/logo.svg"
                                alt="HireHubJA Logo"
                                width={300} // Adjusted width for better proportion
                                height={150}
                                className="object-contain"
                            />
                        </div>
                    </div>

                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-green-700">Welcome to HireHubJA</h1>
                        <p className="text-gray-500 text-sm mt-2">Sign in to access your account</p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleLogin} className="w-full max-w-md space-y-5">

                        <div className="space-y-1">
                            <Label htmlFor="email" className="text-xs font-medium text-gray-600 ml-1">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                className="rounded-xl bg-white border-gray-200 focus:ring-green-500 focus:border-green-500 py-6"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                            />
                        </div>

                        <div className="space-y-1 relative">
                            <Label htmlFor="password" className="text-xs font-medium text-gray-600 ml-1">Password</Label>
                            <div className="relative">
                                <Input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    className="rounded-xl bg-white border-gray-200 focus:ring-green-500 focus:border-green-500 py-6 pr-10"
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 pt-4 -translate-y-1/2 text-gray-400 hover:text-gray-600"
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
                            className="w-full bg-[#4ade80] hover:bg-[#3ecf72] text-white font-bold rounded-full py-6 text-lg shadow-green-200 shadow-lg mt-4"
                        >
                            Sign In
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