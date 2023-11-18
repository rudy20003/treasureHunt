"use client";
import { signOut } from "next-auth/react";
const ButtonLogout = () => {
  const handleCLick = () => {
    signOut();
  };
  return (
    <button id="logout" className="btnText" onClick={handleCLick}>
      Logout
    </button>
  );
};

export default ButtonLogout;
