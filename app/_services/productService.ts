import { apiResponse } from "@/app/_types/product";
import api from "@/app/_lib/api";
import { Params } from "next/dist/server/request/params";

export const getAllProducts = async (
  category: string,
  search: string | null
): Promise<apiResponse> => {
  try {
    let response;
    // console.log("search", search);
    // console.log("params", params);
    if (category || search) {
      // console.log("category", category);
      response = await api.get(
        `/api/products/list?${category ? `&category_name=${category}` : ""}${
          search ? `&search=${search}` : ""
        }`
      );
    } else {
      response = await api.get("/api/products/list");
    }

    if (response && response.data) {
      // console.log("response.data", response.data); // Log just the response data
      return response.data;
    } else {
      throw new Error("No data returned in the response");
    }
  } catch (error) {
    console.log("Error fetching products", error);
    throw error;
  }
};
