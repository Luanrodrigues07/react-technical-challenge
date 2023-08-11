import React, {useState} from 'react';
import Checkbox from '../Checkbox';
import {CaretDown} from 'phosphor-react'


interface DropdownProps {
  categoryName: string;
  options: string[]
}

const Dropdown = ({options,categoryName}:DropdownProps) => {

  const [showing, setShowing] = useState(true);

  const showingDrop = () => {
      setShowing(!showing)
  }

  return (
    <div>
      <div className="flex justify-between">
            <strong className="text-[12px]">{categoryName}</strong>
            <a className="cursor-pointer" onClick={showingDrop}><CaretDown size={20} /></a>
            </div>
            <div  className={`${showing ? "" : "hidden"}`}>
              <div className='w-[248px] h-[1px] bg-[#585858] opacity-[0.2] mt-[0.5rem]'></div>
              {options.map((option, index) => (
              <Checkbox key={index} option={option}/>

              ))}
            </div>
    </div>
  );
};

export default Dropdown;
