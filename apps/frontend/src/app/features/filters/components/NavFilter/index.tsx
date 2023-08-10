
const NavFilter = () => {
    return (
        <nav className="flex-col bg-[#FFFFFF] w-[17.5rem] h-fit rounded-[0.5rem] ml-[4rem] p-[1rem]">
          <div className="flex w-[15.5rem] h-[1.25rem] justify-between">
            <strong className="text-black text-[14px]">Filtrar por</strong>
            <a className="text-black text-[12px] cursor-pointer hover:text-[purple]">Limpar Filtro</a>
          </div>
          <div className="w-[15.5rem] mt-[1rem] bg-black">
          </div>
        </nav>
    )
}

export default NavFilter