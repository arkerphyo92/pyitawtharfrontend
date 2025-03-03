import { apiResponse } from "@/app/_types/category";
import api from "@/app/_lib/api";

export const getAllCategories = async (): Promise<apiResponse> => {
  try {
    const response = await api.get("/api/categories/list");
    if (response && response.data) {
      console.log("response.data", response.data); // Log just the response data
      return response.data;
    } else {
      throw new Error("No data returned in the response");
    }
  } catch (error) {
    console.log("Error fetching categories", error);
    throw error;
  }
};
