import { Ecurrency } from "./currency.type";

export interface IProduct {
  id: string;
  name: string;
  pictures: string[];
  main_picture: string;
  currency: Ecurrency;
  price: number;
  count: number;
  category: {
    name: string;
  }
}