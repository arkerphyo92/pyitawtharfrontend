import { apiResponse } from "@/app/_types/product";
import api from "@/app/_lib/api";

export const getAllProducts = async (
  params: string | null
): Promise<apiResponse> => {
  try {
    let response;
    if (params) {
      console.log("params", params);
      response = await api.get(`/api/products/list?category_name=${params}`);
    } else {
      response = await api.get("/api/products/list");
    }
    if (response && response.data) {
      console.log("response.data", response.data); // Log just the response data
      return response.data;
    } else {
      throw new Error("No data returned in the response");
    }
  } catch (error) {
    console.log("Error fetching products", error);
    throw error;
  }
};
