import {Item} from "./Item";

export interface ProductContext {
  loading: boolean,
  products: Item[]
  addProduct: (newItem: any) => void,
  deleteProduct: (id: Date) => void,
  checkProduct: (id: Date) => void,
  uncheckProduct: (id: Date) => void,
  currentPage: number,
  currentProducts: Item[],
  totalPages: number,
  paginate: (page: number) => void,
  modal: boolean,
  openModal: () => void,
  closeModal: () => void
};
