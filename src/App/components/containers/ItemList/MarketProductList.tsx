import React from 'react';
import {Context} from '../../../context/Context';
import {Item} from '../../../types/Item';
import {Product} from './Product';

interface Props {
  currentProducts: Item[]
};

export const MarketProductList: React.FC<Props> = ({currentProducts}) => {
  const {
    deleteProduct,
    checkProduct,
    uncheckProduct,
    } = React.useContext(Context);

  return (
    <ul className='list-container container'>
      {currentProducts.map((product: Item, index: number) => (
        <Product
        key={index}
        completed={product.completed}
        product={product}
        checkProduct={checkProduct}
        uncheckProduct={uncheckProduct}
        deleteProduct={deleteProduct}/>
      ))}
    </ul>
  );
};
