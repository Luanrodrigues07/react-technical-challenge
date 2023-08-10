import casaco from "../../../../images/casaco.png"
import Image from "next/image"

const ProductItem = () => (
    <div className="flex-col bg-white rounded-[0.5rem] text-[black] p-[1.5rem] h-[310px] w-[235.91px] items-center">
        <div className="flex w-[214.468px] h-[200px] p-[7.111px 126.204px 15.111px 13.345px] items-center justify-center shrink-[0]">
        <Image src={casaco} alt="" className="w-[184.919px] h-[177.778px]"/>
        </div>
        <div className="flex-col mt-[1rem]">
        <strong>R$ 00</strong>
        <p>Text</p>
        </div>
    </div>
)

export default ProductItem