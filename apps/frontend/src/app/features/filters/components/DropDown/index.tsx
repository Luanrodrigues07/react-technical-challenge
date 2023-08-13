import React, { useState } from "react";
import Checkbox from "../Checkbox";
import { CaretDown } from "phosphor-react";

export type Option = {
  id: string;
  name: string;
};

type DropdownProps = {
  categoryName: string;
  options: Option[];
};

const Dropdown = ({ options, categoryName }: DropdownProps) => {
  const [showing, setShowing] = useState(true);

  const showingDrop = () => {
    setShowing(!showing);
  };

  return (
    <>
      <div className="flex justify-between">
        <strong className="text-[12px] mt-[0.7rem]">{categoryName}</strong>
        <a className="cursor-pointer" onClick={showingDrop}>
          <CaretDown size={20} />
        </a>
      </div>
      <div className={`${showing ? "" : "hidden"}`}>
        <div className="w-[248px] h-[1px] bg-[#585858] opacity-[0.2] mt-[0.5rem]"></div>
        {options.map((option) => (
          <Checkbox key={option.id} option={option.name} />
        ))}
      </div>
    </>
  );
};

export default Dropdown;
