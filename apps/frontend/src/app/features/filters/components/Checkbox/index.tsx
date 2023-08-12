import React from "react";

interface CheckboxProps {
  option: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ option }) => {
  return (
    <div>
      <div className="flex items-center gap-1 sm:gap-2">
        <input type="checkbox" className="h-4 w-4 sm:h-5 sm:w-5" />
        <label className="m-1 w-[80%] sm:w-[244px] h-4 text-[#585858] justify-center items-start text-xs sm:text-sm">
          {option}
        </label>
      </div>
    </div>
  );
};

export default Checkbox;
