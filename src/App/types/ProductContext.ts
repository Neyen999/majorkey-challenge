import {Item} from "./Item";

export interface ItemContext {
  loading: boolean,
  items: Item[]
  addItem: (newItem: any) => void,
  deleteItem: (id: Date) => void,
  checkItem: (id: Date) => void,
  uncheckItem: (id: Date) => void,
  currentPage: number,
  currentItems: Item[],
  totalPages: number,
  paginate: (page: number) => void,
  modal: boolean,
  openModal: () => void,
  closeModal: () => void
};
