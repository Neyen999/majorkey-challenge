import {useState, useEffect} from 'react'
import {Item} from '../types/Item'

// eslint-disable-next-line
export const useLocalStorage = (initialValue: [], key: string) => {
  const [loading, setLoading] = useState<boolean>(true)

  const [item, setItem] = useState<Item[]>(initialValue)

  useEffect(() => {
    function getLocalStorageItems() {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(key)
          let parsedItem

          if (!localStorageItem) {
            localStorage.setItem(key, JSON.stringify(initialValue))
            parsedItem = initialValue
          } else {
            parsedItem = JSON.parse(localStorageItem)
          }

          setItem(parsedItem)
          setLoading(false)
        } catch (error) {
          console.log(error)
        }
      }, 1000)
    }
    getLocalStorageItems()
  }, [])


  const saveItem = (newItem: Item[]): void => {
    const stringifiedItem = JSON.stringify(newItem)
    localStorage.setItem(key, stringifiedItem)
    setItem(newItem)
  }


  return {
    item,
    saveItem,
    loading
  }
}
