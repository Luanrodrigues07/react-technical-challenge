import ProductItem from "../ProductItem";
import { Product } from "../../actions";

type ProductsGridType = {
  products: Product[];
};

const ProductsGrid = ({ products }: ProductsGridType) => {
  return (
    <div className="grid grid-cols-4 gap-4 bg-[#EEEEEE] w-[63rem] h-[60.625rem] rounded-[0.5rem] ml-[2rem]">
      {products.map((product, index) => (
        <ProductItem key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductsGrid;
