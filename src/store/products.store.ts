import { create } from "zustand";
import { IProduct } from "../type";

interface ProductState {
  products: IProduct[]
}

export const useProductStore = create<ProductState>()((set) => ({
  products: [],
  setProducts: (newproducts: IProduct[]) => set((state) => ({ ...state, products: newproducts })),
}));
