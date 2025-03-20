"use client"

import { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import { useViewRouter } from "./hooks/useViewRouter";
import { useRouter } from "next/navigation";

export default function Home() {
  const { view, updateView } = useViewRouter();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthToken = async () => {
      try {
        const response = await fetch("/api/auth/validate", {
          credentials: "include"
        });
        if (response.ok) {
          router.push("/dashboard");
        }
      } catch (error) {
        console.log("User not Authenticated");
      }
      setLoading(false);
    }
    checkAuthToken();
  }, [router])

  useEffect(() => {
    if (!view) {
      updateView("login");
    }
  }, [view, updateView])

  return (
    <div className="flex flex-col sm:flex-row w-full h-screen">
      <div className="w-full sm:w-1/2">
        {view === "signup" ? <SignUpForm /> : <LoginForm />}
      </div>
      <div className="w-full sm:w-1/2">
        <HeroSection />
      </div>
    </div>
  );
}