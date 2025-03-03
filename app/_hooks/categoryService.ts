"use client";
import { useState, useEffect } from "react";
import { getAllCategories } from "@/app/_services/categoryService";
import { Category, apiResponse } from "@/app/_types/category";

const useCategories = () => {
  const [category, setCategory] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const response: apiResponse = await getAllCategories();
        console.log("categories", response);
        setCategory(response.items);
      } catch (error) {
        console.log(error);
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    loadCategories();
  }, []);

  return { category, loading, error };
};

export default useCategories;
