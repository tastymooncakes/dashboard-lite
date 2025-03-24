"use client"

import { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import { useViewRouter } from "./hooks/useViewRouter";
import { useRouter } from "next/navigation";

export default function Home() {
  const { view, updateView } = useViewRouter();

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