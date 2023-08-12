import casaco from "../../../../images/casaco.png";
import Image from "next/image";
import { Product } from "../../actions";

type ProductItemProps = {
  product: Product;
};

const ProductItem = ({ product }: ProductItemProps) => {
  const formatCurrency = (value: number): string => {
    const formattedValue = value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    return formattedValue;
  };
  return (
    <div className="flex-col bg-white rounded-[0.5rem] text-[black] p-[1.5rem] h-[310px] w-[235.91px] items-center">
      <div className="flex w-[214.468px] h-[200px] p-[7.111px 126.204px 15.111px 13.345px] items-center justify-center shrink-[0]">
        <img
          src={"http://localhost:1337" + product.image.url}
          alt=""
          className="w-[184.919px] h-[177.778px]"
        />
      </div>
      <div className="flex-col mt-[0.5rem]">
        <strong>{formatCurrency(product?.price || 0)}</strong>
        <p className="text-[#8B96A5]">{product?.name}</p>
      </div>
    </div>
  );
};

export default ProductItem;
