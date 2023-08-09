import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import Head from "next/head";
import Image from "next/image";
import logo from "../app/images/logo.png"
import pay from "../app/images/pay.png"
import gsafe from "../app/images/gsafe.png"



export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <>
      <Head>
        <title>80Lines React Challenge</title>
        <link rel='shortcut icon' type='image/x-icon' href='/favicon.png' />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
      <div className=" w-screen h-screen">
      <nav 
      className="flex bg-gradient-to-tl from-[#9D59FF] to-[#9D59FF00] h-[5.25rem] w-full items-center justify-between">
        <Image src={logo}  alt="" className="h-10 w-32 ml-16 top-7"></Image>
        <input placeholder="O que você está procurando?" 
        className="w-[39.25rem] h-[3rem] rounded-[0.5rem] mr-32 p-[1rem] text-black text-[16px] outline-none"></input>
      </nav>
      <nav className="flex bg-[#EEEEEE] h-[5.25rem] w-full items-center text-[black] justify-between">
        <div className="flex ml-[4rem]">
          <span>todos os produtos</span>
        <strong className="ml-[11.3rem]">Produtos mais Buscados</strong>
        </div>
        <div className="mr-[4rem]">
          <span className="mr-[0.5rem]">Ordenados por: </span>
          <select className="w-[11.25rem] h-[2.5rem] rounded-[2rem] text-black p-[0.5rem] text-[12px] outline-none">
            <option>Revelancia</option>
          </select>
        </div>
      </nav>
      <div className="flex bg-[#EEEEEE] w-full h-[67.438rem]">
        {/* <nav className="flex bg-black w-[62.125rem] h-[1.25rem]"></nav> */}
        <nav className="flex bg-[#FFFFFF] w-[17.5rem] h-[38.75rem] rounded-[0.5rem] ml-[4rem]"></nav>
        <div className="flex bg-[#FFFFFF] w-[63rem] h-[60.625rem] rounded-[0.5rem] ml-[2rem]"></div>
      </div>
      <footer className="flex bg-[#FFFFFF] w-full  h-[25rem] text-black flex-col p-[4rem]">
        <div className="h-[10rem] flex flex-col">
        <strong className="text-black w-[25rem] text-[14px] mt-[1rem] cursor-pointer">Atendimento</strong>
        <span className="text-[#585858] w-[25rem] text-[12px] mt-[1rem] cursor-pointer">Central de atendimento</span>
        <span className="text=[#585858] w-[25rem] text-[12px] mt-[1rem] cursor-pointer">Políticas de privacidade</span>
        </div>
        <div className="w-[82rem] h-[0.063rem] bg-[#D9D9D9] left-[4rem]"></div>
        <div className="relative bottom-0 h-[10rem]">
          <span className="absolute bottom-14 left-0 w-[25rem] text-[14px] cursor-pointer">Formas de pagamento</span>
          <Image src={pay} alt="" className="w-[33rem] h-[2rem] absolute bottom-0 left-0 cursor-pointer"></Image>
          <Image src={gsafe} alt="" className="w-[12.125rem] h-[3.5rem] absolute bottom-0 right-0 cursor-pointer"></Image>
        </div>
      </footer>
      </div>
    </>
  );
}
