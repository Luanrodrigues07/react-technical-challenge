import Image from "next/image";
import logo from "../app/images/logo.png";
import pay from "../app/images/pay.png";
import gsafe from "../app/images/gsafe.png";
import { NavFilter } from "@/features/filters/components";
import { ProductsGrid } from "@/features/products/components";
import React from "react";
import { House, CaretRight } from "phosphor-react";
import { useQuery } from "@tanstack/react-query";
import shareProducts, { Product } from "@/features/products/actions";

const Home: React.FC = () => {
  const { data: products } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: async () => {
      return await shareProducts();
    },
  });

  return (
    <>
      <div className=" bg-purple-custom w-screen h-screen">
        <nav className="flex h-[5.25rem] w-full items-center justify-between bg-gradient-to-tl from-[#9D59FF] via-transparent to-[#3A3C5A]">
          <Image src={logo} alt="" className="h-10 w-32 ml-16 top-7"></Image>
          <input
            placeholder="O que você está procurando?"
            className="w-[39.25rem] h-[3rem] rounded-[0.5rem] mr-[5rem] p-[1rem] text-black text-[16px] outline-none font-inter"
          ></input>
        </nav>
        <div className="flex bg-[#EEEEEE] w-full h-[62.8rem]">
          <div>
            <div className="flex ml-[4.5rem] text-black m-[1.5rem]">
              <House size={20} className="flex mr-[0.5rem] cursor-pointer" />
              <CaretRight size={20} className="flex mr-[0.5rem]" />
              <strong className="font-inter">Todos os produtos</strong>
            </div>
            <NavFilter />
          </div>
          <div>
            <div className="flex justify-between m-[1rem]">
              <strong className="ml-[2.3rem] text-[20px] font-inter text-[#585858]">
                Produtos mais Buscados
              </strong>
              <div className="mr-[0.35rem]">
                <span className="mr-[0.5rem] text-black font-inter">
                  Ordenados por:{" "}
                </span>
                <select className="w-[11.25rem] h-[2.5rem] rounded-[2rem] text-black p-[0.5rem] text-[12px] outline-none">
                  <option className="font-inter">Relevancia</option>w
                </select>
              </div>
            </div>
            {products?.length && <ProductsGrid products={products} />}
          </div>
        </div>
        <footer className="flex bg-[#FFFFFF] w-full h-[25rem] text-black flex-col p-[4rem]">
          <div className="h-[10rem] flex flex-col">
            <strong className="text-black w-[25rem] text-[14px] mt-[1rem] cursor-pointer font-inter">
              Atendimento
            </strong>
            <span className="text-[#585858] w-[25rem] text-[12px] mt-[1rem] cursor-pointer font-inter">
              Central de atendimento
            </span>
            <span className="text=[#585858] w-[25rem] text-[12px] mt-[1rem] cursor-pointer font-inter">
              Políticas de privacidade
            </span>
          </div>
          <div className="w-[82rem] h-[0.063rem] bg-[#D9D9D9] left-[4rem]"></div>
          <div className="relative bottom-0 h-[10rem]">
            <span className="absolute bottom-14 left-0 w-[25rem] text-[14px] cursor-pointer font-inter">
              Formas de pagamento
            </span>
            <Image
              src={pay}
              alt=""
              className="w-[33rem] h-[2rem] absolute bottom-0 left-0 cursor-pointer"
            ></Image>
            <Image
              src={gsafe}
              alt=""
              className="w-[12.125rem] h-[3.5rem] absolute bottom-0 right-0 cursor-pointer"
            ></Image>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
