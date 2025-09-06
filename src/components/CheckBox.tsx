import React from "react";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Checkbox({ label, checked, onChange }: CheckboxProps) {
  return (
    <label className="flex justify-between items-center cursor-pointer w-full">
      <span className="text-sm font-medium text-gray-800">{label}</span>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="appearance-none w-6 h-6 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-blue-500 relative cursor-pointer
          hover:border-gray-400 active:bg-blue-700
          checked:hover:bg-blue-400 checked:active:bg-blue-700
        before:content-[''] before:absolute before:w-[13px] before:h-[8px] before:left-[6px] before:top-[8px]
        checked:before:bg-[url('/Vector141.svg')] checked:before:bg-contain checked:before:bg-no-repeat"
      />
    </label>
  );
}
