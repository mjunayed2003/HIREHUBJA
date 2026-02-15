"use client"

import { useRouter } from "next/navigation"

export default function ProtectedPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center space-y-6">
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Sign In 
        </h1>

        <p className="text-gray-500 max-w-md mx-auto">
          Please sign in to continue.
        </p>

        <button
          onClick={() => router.push("/signin")}
          className="
            bg-[#3FAE2A]
            hover:bg-[#349422]
            text-white
            font-semibold
            px-8 py-3
            rounded-xl
            shadow-lg
            transition-all
            duration-300
            hover:scale-105
            active:scale-95
          "
        >
          Go to Sign In
        </button>

      </div>
    </div>
  )
}
