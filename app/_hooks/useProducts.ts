"use client";
import { useState, useEffect } from "react";
import { getAllProducts } from "@/app/_services/productService";
import { Product, apiResponse } from "@/app/_types/product";
import { Params } from "next/dist/server/request/params";

const useProducts = (category: string, search: string | null) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  // console.log("params", params);
  // console.log("search", search);
  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        // console.log("params from useProducts", category);
        const response: apiResponse = await getAllProducts(category, search);
        // console.log("products", response);
        setProducts(response.items);
      } catch (error) {
        console.log(error);
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [category, search]);

  return { products, loading, error };
};

export default useProducts;
