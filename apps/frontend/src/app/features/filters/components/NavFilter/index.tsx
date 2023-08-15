import Dropdown, { Option } from "../DropDown";
import { Category, Color, shareCategories, shareColors } from "../../actions";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const NavFilter = () => {
  const categoryQuery = useQuery<Category[], Error>(
    ["categories"],
    shareCategories,
    {
      initialData: [],
    }
  );

  const colorQuery = useQuery<Color[], Error>(["colors"], shareColors, {
    initialData: [],
  });

  const formatOption = (id: string, name: string): Option => {
    return {
      id,
      name,
    };
  };

  const formattedPrice = [
    "R$ 0,01 - R$ 50,00",
    "R$ 50,01 - R$ 100,00",
    "R$ 100,01 - R$ 500,00",
  ].map((price, index) => formatOption(index.toString(), price));

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
          options={categoryQuery.data?.map((e) => formatOption(e.name, e.name))}
        />
        <Dropdown
          categoryName="Cor"
          options={colorQuery.data?.map((e) => formatOption(e.name, e.name))}
        />
        <Dropdown categoryName="Preço" options={formattedPrice} />
      </div>
    </nav>
  );
};

export default NavFilter;
