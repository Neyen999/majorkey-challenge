import React from "react";
import {useLocalStorage} from "../hooks/useLocalStorage";
import {ProductContext} from "../types/ProductContext";

export const Context = React.createContext({} as ProductContext);

interface Props {
  children: JSX.Element
};

export const ProductProvider: React.FC<Props> = ({ children }) => {
  const {
    item: products,
    saveItem: saveProducts,
    loading
  } = useLocalStorage([], "TSX_PRODUCT");

  const [modal, setOpenModal] = React.useState<boolean>(false);

  const [productsPerPage] = React.useState(5);
  const [currentPage, setCurrentPage] = React.useState<number>(1);

  //
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);


  const paginate = (page: number) => setCurrentPage(page);


  const addProduct = (content: string) => {
    const newProducts = [...products];

    newProducts.push({
      id: new Date(),
      content: content,
      completed: false
    });

    saveProducts(newProducts);
    closeModal()
  };

  const deleteProduct = (id: Date) => {
    const productIndex = products.findIndex(product => product.id === id);
    const newProducts = [...products];

    newProducts.splice(productIndex, 1);
    saveProducts(newProducts);
  };

  const checkProduct = (id: Date) => {
    const productIndex = products.findIndex(product => product.id === id);
    const newProducts = [...products];

    newProducts[productIndex].completed = true;
    saveProducts(newProducts);
  };

  const uncheckProduct = (id: Date) => {
    const productIndex = products.findIndex(product => product.id === id);
    const newProducts = [...products];

    newProducts[productIndex].completed = false;
    saveProducts(newProducts);
  };

  const openModal = () => {
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <Context.Provider value={{
      loading,
      products,
      addProduct,
      deleteProduct,
      checkProduct,
      uncheckProduct,
      currentPage,
      currentProducts,
      totalPages,
      paginate,
      modal,
      openModal,
      closeModal
    }}>
      {children}
    </Context.Provider>
  );
};
