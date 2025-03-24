"use client"

import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useViewRouter } from "../hooks/useViewRouter";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginForm = () => {

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    const {updateView} = useViewRouter();
    const router = useRouter();
    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setError("")

        if (!email || !password) {
            setError("Please fill in all fields");
            console.log(error);
            return;
        }
        try {
            setLoading(true);
            const response = await fetch('api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Login Failed');
            }
            router.push('/main/dashboard')
        } catch (err) {
            setError((err as Error).message);
        } finally {
            setLoading(false)
        }
    }

    const handleCreateAccountClick = () => {
        updateView("signup");
    }

    return <div className="flex flex-col items-center justify-center w-full h-screen pt-[53px] mb-[20px] sm:mb-0">
        <div className="flex flex-col w-full max-w-[450px] p-4 sm:p-0">
            <img 
                src="/Capture.svg"
                alt="Capture Logo"
                className="w-[160px] h-[35px]"
            />
            <h1 className="mt-[60px] text-3xl mb-3">Welcome back</h1>
            <p className="text-sm text-gray-500 mb-[30px]">Sign in to continue</p>

            {/* Form */}
            <form className="flex flex-col w-full" onSubmit={handleSubmit}>
                {/* Email input */}
                <label className="text-base mb-[5px]" htmlFor="email">Email</label>
                    <input 
                        id="email"
                        type="email"
                        className="text-white mb-[15px] outline-none border-1 border-white rounded-lg h-[52px] px-3 text-black focus:border-0 focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                {/* Password input */}
                <label className="text-base mb-[5px]" htmlFor="password">Password</label>
                <div className="relative mb-[15px]">
                    <input 
                        id="password"
                        type={isPasswordVisible ? 'text' : 'password'}
                        className="w-full text-white outline-none border-1 border-white rounded-lg h-[52px] px-3 text-black focus:border-0 focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                        {isPasswordVisible ? (
                            <FaEyeSlash className="text-white" />
                        ) : (
                            <FaEye className="text-white" />
                        )}
                    </button>
                </div>

                {/* Reset password link */}
                <p className="text-sm text-gray-500 mb-[30px] text-center">
                    <Link href="/reset-password">Click here to reset password</Link>
                </p>
                <button className="h-[52px] border-1 border-white rounded-lg mb-[20px] text-base hover:bg-blue-500 hover:border-0">{loading ? "Loading..." : "Sign in"}</button>
                <button className="h-[52px] border-1 border-white rounded-lg mb-[20px] text-base hover:bg-blue-500 hover:border-0" onClick={handleCreateAccountClick}>Create an account</button>
            </form>    
        </div>
    </div>
}

export default LoginForm;