import React from "react";
import Image from "next/image";
import { RiLoader5Line } from "react-icons/ri";

const Spinner = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center animate-spin">
      <RiLoader5Line className="text-5xl text-slate-600" /> 
    </div>
  );
};

export default Spinner;
