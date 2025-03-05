"use client";
import { useState, useEffect } from "react";
import { getAllProducts } from "@/app/_services/productService";
import { Product, apiResponse } from "@/app/_types/product";

const useProducts = (category) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response: apiResponse = await getAllProducts(category);
        console.log("products", response);
        setProducts(response.items);
      } catch (error) {
        console.log(error);
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return { products, loading, error };
};

export default useProducts;
