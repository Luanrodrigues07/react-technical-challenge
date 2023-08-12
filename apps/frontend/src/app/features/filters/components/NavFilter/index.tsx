import Checkbox from "../Checkbox/";
import { CaretDown } from "phosphor-react";
import { use, useState } from "react";
import Dropdown from "../DropDown";

const NavFilter = () => {
  return (
    <nav className="flex-col bg-[#FFFFFF] w-[17.5rem] h-fit rounded-[0.5rem] ml-[4rem] p-[1rem]">
      <div className="flex w-[15.5rem] h-[1.25rem] justify-between">
        <strong className="text-black text-[14px]">Filtrar por</strong>
        <button className="text-black text-[12px] cursor-pointer hover:text-[purple]">
          Limpar Filtro
        </button>
      </div>
      <div className="w-[15.5rem] mt-[1rem] text-black">
        <Dropdown
          categoryName="Categoria"
          options={[
            "Roupas de inverno",
            "Roupas sociais",
            "Roupas casuais",
            "Mochilas",
            "Eletronicos",
            "Outros",
          ]}
        />
        <Dropdown
          categoryName="Cor"
          options={["Marrom", "Azul", "Roupas casuais", "Branco", "Preto"]}
        />
        <Dropdown
          categoryName="Preço"
          options={[
            "R$ 0,01 - R$ 50,00",
            "R$ 50,01 - R$ 100,00",
            "R$ 100,01 - R$ 500,00",
          ]}
        />
      </div>
    </nav>
  );
};

export default NavFilter;
