'use client';

import { useState } from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { loginWithEmail } from "@/firebase"; // Import the Firebase login function

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const token = await loginWithEmail(email, password); // Authenticate user
      localStorage.setItem("userToken", token); // Save token for future requests
      onLogin(); // Notify parent component that the user is logged in
    } catch (error) {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className={montserrat.className}>
      <div className="fixed inset-0 mx-4 my-4 sm:top-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-96 sm:h-[400px] bg-gradient-to-br from-[#EF953F] to-[#567CDD] rounded-[24px] shadow-lg p-[2.5px] z-50 transition-all duration-500 ease-in-out flex flex-col justify-center">
        <div className="w-full flex flex-col h-full bg-gray-50 rounded-[22.5px] p-6 pt-10">
          <div className="flex flex-col items-center space-y-4">
            <Image src="/images/Logo.svg" alt="Logo" width={50} height={50} />
            <p className="text-md font-semibold">Overlay</p>
          </div>
          <form className="space-y-4 mt-5 p-3" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-xs font-medium pl-1 pb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 text-xs border rounded-lg shadow-sm focus:outline-none"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="text-xs pb-2 pl-1 font-medium">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border text-xs rounded-lg shadow-sm focus:outline-none"
                placeholder="Enter your password"
              />
            </div>
            {error && <p className="text-red-500 text-xs">{error}</p>}
            <button
              type="button"
              onClick={handleLogin} // Call Firebase login
              className="w-[100px] bg-white font-medium text-xs py-2 rounded-full shadow hover:font-semibold hover:shadow-md"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
