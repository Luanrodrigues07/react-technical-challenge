import React from 'react';

interface CheckboxProps {
  option: string;
}

const Checkbox = ({ option }: CheckboxProps) => {
  return (
    <div>
      <div className="flex items-center gap-[0.25rem]">
        <input type="checkbox" className="h-20px w-20px"/>
        <label className="m-1 w-[244px] h-[20px] text-[#585858] justify-center items-start text-[12px]">{option}</label>
      </div>
    </div>
  );
};

export default Checkbox;
