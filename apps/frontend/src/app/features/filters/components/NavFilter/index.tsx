import Dropdown from "../DropDown/DropDown"
const NavFilter = () => {
    return (
        <nav className="flex-col bg-[#FFFFFF] w-[17.5rem] h-fit rounded-[0.5rem] ml-[4rem] p-[1rem]">
          <div className="flex w-[15.5rem] h-[1.25rem] justify-between">
            <strong className="text-black text-[14px]">Filtrar por</strong>
            <a className="text-black text-[12px] cursor-pointer hover:text-[purple]">Limpar Filtro</a>
          </div>
          <div className="w-[15.5rem] mt-[1rem] text-black">
            <strong className="text-[12px]">Categoria</strong>
          <div className='w-[248px] h-[1px] bg-[#585858] opacity-[0.2] mt-[0.5rem]'></div>
            <Dropdown option={"Roupas de inverno"}/>
            <Dropdown option={"Roupas sociais"}/>
            <Dropdown option={"Roupas casuais"}/>
            <Dropdown option={"Mochilas"}/>
            <Dropdown option={"Eletronicos"}/>
            <Dropdown option={"Outros"}/>
            <strong className="mt-[0.5rem] text-[12px]">Cor</strong>
          <div className='w-[248px] h-[1px] bg-[#585858] opacity-[0.2] mt-[0.5rem]'></div>
            <Dropdown option={"Marrom"}/>
            <Dropdown option={"Azul"}/>
            <Dropdown option={"Branco"}/>
            <Dropdown option={"Preto"}/>
            <strong className="mt-[0.5rem] text-[12px]">Preço</strong>
          <div className='w-[248px] h-[1px] bg-[#585858] opacity-[0.2] mt-[0.5rem]'></div>
            <Dropdown option={"R$ 0,01 - R$ 50,00"}/>
            <Dropdown option={"R$ 50,01 - R$ 100,00"}/>
            <Dropdown option={"R$ 100,01 - R$ 500,00"}/>

          </div>
          
        </nav>
    )
}

export default NavFilter