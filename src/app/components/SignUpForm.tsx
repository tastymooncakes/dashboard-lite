"use client"

import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";

const SignUpForm = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isChecked, setIsChecked] = useState(true);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (!email || !password || !username || !isChecked) {
            setError("Please fill in all fields");
            return;
        }
        setError("");
        console.log(error)
    }

    const handleCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
    }

    return <div className="flex flex-col items-center justify-center w-full h-screen pt-[53px] mb-[20px] sm:mb-0">
        <div className="flex flex-col w-full max-w-[450px] p-4 sm:p-0">
            <img 
                src="/Capture.svg"
                alt="Capture Logo"
                className="w-[160px] h-[35px]"
            />
            <h1 className="mt-[60px] text-3xl mb-3">Create an account</h1>
            <p className="text-sm text-gray-500 mb-[30px]">Sign up to continue</p>

            {/* Form */}
            <form className="flex flex-col w-full" onSubmit={handleSubmit}>
                {/* Username input */}
                <label className="text-base mb-[5px]" htmlFor="username">Username</label>
                    <input 
                        id="username"
                        type="username"
                        className="text-white mb-[15px] outline-none border-1 border-white rounded-lg h-[52px] px-3 text-black focus:border-0 focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
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
                        aria-label={isPasswordVisible ? "Hide password" : "Show password"}
                    >
                        {isPasswordVisible ? (
                            <FaEyeSlash className="text-white" />
                        ) : (
                            <FaEye className="text-white" />
                        )}
                    </button>
                </div>

                {/* Agree to Policy */}
                <div className="flex flex-row mt-[20px] space-x-2">
                    <input 
                        type="checkbox"
                        id="Privacy Policy"
                        checked={isChecked}
                        className="w-5 h-5"
                        onChange={handleCheckBox}
                    />
                    <label className="text-sm text-gray-500 mb-[30px]">By signing up, you agree to our {""}
                        <a 
                            href="https://ipfs-pin.numbersprotocol.io/ipfs/QmR2AB2qc1fbsTtf77WXmQn3fyNZskLUt1EG4Qoxxnt6Up" 
                            aria-label="Policy"
                            target="_blank"
                            rel="noreferrer noopener"
                            >
                            Privacy Policy
                        </a>
                    </label>
                </div>
                <button className="h-[52px] border-1 border-white rounded-lg mb-[20px] text-base hover:bg-blue-500 hover:border-0" >Sign up</button>
                <p className="text-sm text-white text-center">Already have an account? {""}
                    <Link 
                        href={{pathname: "/"}} 
                        className="text-blue-500"
                        >Login
                    </Link>
                </p>
            </form>    
        </div>
    </div>
}

export default SignUpForm;