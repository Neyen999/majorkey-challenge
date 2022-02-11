import React from "react"
import {useLocalStorage} from "../hooks/useLocalStorage"
import {ItemContext} from "../types/ProductContext"

export const Context = React.createContext({} as ItemContext)

interface Props {
  children: JSX.Element
}

export const ProductProvider: React.FC<Props> = ({ children }) => {
  const {
    item: items,
    saveItem,
    loading
  } = useLocalStorage([], "TSX_PRODUCT")

  const [modal, setOpenModal] = React.useState<boolean>(false)
  const [itemsPerPage] = React.useState(5)
  const [currentPage, setCurrentPage] = React.useState<number>(1)

  //
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(items.length / itemsPerPage)


  const paginate = (page: number): void => setCurrentPage(page)


  const addItem = (content: string): void => {
    const newItems = [...items]

    newItems.push({
      id: new Date(),
      content: content,
      completed: false
    })

    saveItem(newItems)
    closeModal()
  }

  const deleteItem = (id: Date): void => {
    const ItemIndex = items.findIndex(item => item.id === id)
    const newItems = [...items]

    newItems.splice(ItemIndex, 1)
    saveItem(newItems)
  }

  const checkItem = (id: Date): void => {
    const ItemIndex = items.findIndex(item => item.id === id)
    const newItems = [...items]

    newItems[ItemIndex].completed = true
    saveItem(newItems)
  }

  const uncheckItem = (id: Date): void => {
    const ItemIndex = items.findIndex(item => item.id === id)
    const newItems = [...items]

    newItems[ItemIndex].completed = false
    saveItem(newItems)
  }

  const openModal = (): void => {
    setOpenModal(true)
  }

  const closeModal = (): void => {
    setOpenModal(false)
  }

  return (
    <Context.Provider value={{
      loading,
      items,
      addItem,
      deleteItem,
      checkItem,
      uncheckItem,
      currentPage,
      currentItems,
      totalPages,
      paginate,
      modal,
      openModal,
      closeModal
    }}>
      {children}
    </Context.Provider>
  )
}
