import { Product } from "../types/Product";
import { getData } from "./httpClient";

export function getProducts() {
  return getData<Product[]>('api/products.json');
}