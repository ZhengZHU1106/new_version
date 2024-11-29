'use client';

import { useEffect, useState } from "react";
import Login from "@/components/Login";
import Overlay from "@/components/Overlay";

export default function Page() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (token) {
      setIsLoggedIn(true); // Assume user is logged in if token exists
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true); // Set login state when user logs in
  };

  return (
    <div>
      {isLoggedIn ? (
        <Overlay /> // Render chatbox if logged in
      ) : (
        <Login onLogin={handleLogin} /> // Show login form otherwise
      )}
    </div>
  );
}
