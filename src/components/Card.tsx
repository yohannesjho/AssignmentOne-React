import { useState } from "react";
import Button from "./Button";
import Checkbox from "./CheckBox";

const pages = ["All pages", "Page 1", "Page 2", "Page 3", "Page 4"];

export default function Card() {
  const [checked, setChecked] = useState<boolean[]>(
    Array(pages.length).fill(false)
  );
  const [hidden, setHidden] = useState(false);

  const handleCheck = (index: number, value: boolean) => {
    if (index === 0) {
      setChecked(Array(pages.length).fill(value));
    } else {
      const newChecked = [...checked];
      newChecked[index] = value;
      setChecked(newChecked);
    }
  };

  if (hidden) return null;

  return (
    <div
      className="relative
    max-w-[370px] min-w-[280px] aspect-[370/326]
    bg-white rounded-[6px] border border-[#eeeeee] p-[10px]
    shadow-[0_8px_15px_0_rgba(20,20,20,0.12)]
    flex flex-col justify-between my-[20px] mx-auto
    w-full
            "
    >
      <ul className="flex flex-col  ">
        {pages.map((page, index) => (
          <li
            key={page}
            className={`
        flex justify-between items-center py-2 h-[2.625rem]
        ${index === 1 ? "border-t border-gray-200" : ""}
        ${index === pages.length - 1 ? "border-b border-gray-200" : ""}
      `}
          >
            <Checkbox
              label={page}
              checked={checked[index]}
              onChange={(e) => handleCheck(index, e.target.checked)}
            />
          </li>
        ))}
      </ul>
      <Button onClick={() => setHidden(true)}>Done</Button>
    </div>
  );
}
