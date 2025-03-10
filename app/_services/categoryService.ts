import { apiResponse, Category } from "@/app/_types/category";
import api from "@/app/_lib/api";

export const getAllCategories = async (
  params: string | null
): Promise<apiResponse> => {
  try {
    let response;
    if (params) {
      // console.log("params", params);
      response = await api.get(`/api/categories/list?parentCategory=${params}`);
    } else {
      response = await api.get("/api/categories/list");
    }
    if (response && response.data) {
      // console.log("response.data", response.data); // Log just the response data
      return response.data;
    } else {
      throw new Error("No data returned in the response");
    }
  } catch (error) {
    console.log("Error fetching categories", error);
    throw error;
  }
};

export const getCategory = async (
  cat_name: string | null
): Promise<Category> => {
  try {
    const response = await api.get(`/api/categories/${cat_name}`);
    if (response && response.data) {
      console.log("response.data", response.data);
      return response.data;
    } else {
      throw new Error("No data returned in the response");
    }
  } catch (error) {
    console.log("Error fetching categories", error);
    throw error;
  }
};
