import ProductItem from "../ProductItem";
import { Product } from "../../actions";

type ProductsGridProps = {
  products: Product[];
};

const ProductsGrid: React.FC<ProductsGridProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-[#EEEEEE] w-[63rem] h-[60.625rem] rounded-[0.5rem] ml-[2rem] font-inter">
      {products.map((product, index) => (
        <ProductItem key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductsGrid;
