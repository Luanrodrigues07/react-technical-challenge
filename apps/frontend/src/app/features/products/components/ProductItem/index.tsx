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
      <div className="flex-col w-[214.468px] h-[200px] items-center justify-center">
        <img
          src={"http://localhost:1337" + product.image.url}
          alt=""
          className="w-[184.919px] h-[177.778px]"
        />
      </div>
      <div className="flex-col mt-[0.5rem]">
        <span className="font-inter">
          {formatCurrency(product?.price || 0)}
        </span>
        <p className="text-[#8B96A5] text-[14px] font-inter">{product?.name}</p>
      </div>
    </div>
  );
};

export default ProductItem;
