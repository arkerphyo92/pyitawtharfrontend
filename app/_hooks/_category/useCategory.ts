"use client";
import { useState, useEffect } from "react";
import { getCategory } from "@/app/_services/categoryService";
import { Category, apiResponse } from "@/app/_types/category";

const useCategory = (cat_name: string | null) => {
  const [category, setCategory] = useState<Category>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCategory = async () => {
      try {
        const response: Category = await getCategory(cat_name);
        console.log("category", response);
        setCategory(response);
      } catch (error) {
        console.log(error);
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    loadCategory();
  }, [cat_name]);

  return { category, loading, error };
};

export default useCategory;
