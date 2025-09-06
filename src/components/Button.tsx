import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="mt-4 h-10 rounded-md bg-yellow-400 px-5 text-sm font-normal text-gray-900 cursor-pointer border-none
                   hover:bg-yellow-300 active:bg-yellow-400 transition"
    >
      {children}
    </button>
  );
}
