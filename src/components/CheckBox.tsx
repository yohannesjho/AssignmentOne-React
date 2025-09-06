import React from "react";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Checkbox({ label, checked, onChange }: CheckboxProps) {
  return (
    <label className="relative flex justify-between items-center w-full px-[15px] pl-[22px] py-[8px] cursor-pointer">
      <span className="text-gray-900 font-normal text-sm leading-[1.3] sm:text-[0.8rem]">
        {label}
      </span>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="
    checkbox-custom
        "
      />
    </label>
  );
}
