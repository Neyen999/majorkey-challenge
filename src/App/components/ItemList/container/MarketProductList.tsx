import React from 'react'
import {Context} from '../../../context/Context'
import {Item} from '../../../types/Item'
import {Product} from '../Product'
import "./MarketProductList.css"

interface Props {
  currentItems: Item[]
}

export const MarketProductList: React.FC<Props> = ({currentItems}) => {
  const {
    deleteItem,
    checkItem,
    uncheckItem,
    } = React.useContext(Context);

  return (
    <ul className="container list-container">
      {currentItems.map((item: Item, index: number) => (
        <Product
        key={index}
        completed={item.completed}
        item={item}
        checkItem={checkItem}
        uncheckItem={uncheckItem}
        deleteItem={deleteItem}/>
      ))}
    </ul>
  )
}
