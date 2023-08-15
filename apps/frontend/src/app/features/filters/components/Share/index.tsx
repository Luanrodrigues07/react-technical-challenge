import React, { useState, useEffect } from "react";
import { Product } from "@/features/products/actions";
import axios from "axios";

const apiUrl = "http://localhost:1337/api";

const Share = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get(`${apiUrl}/products`);
        setProducts(response.data.data);
      } catch (error) {
        console.error("Erro ao buscar produtos:");
      }
    }
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="relative">
      <input
        placeholder="O que você está procurando?"
        className="w-[39.25rem] h-[3rem] rounded-[0.5rem] p-[1rem] text-black text-[16px] outline-none font-inter mr-[1.5rem]"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      {searchValue.length > 0 && (
        <ul className="bg-white text-black border rounded-[0.5rem] shadow-md absolute left-0 w-[39.25rem] mt-[0.2rem] font-inter">
          {filteredProducts.map((product) => (
            <li
              className="p-1 cursor-pointer border-2 font-inter"
              key={product.id}
            >
              {product.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Share;
