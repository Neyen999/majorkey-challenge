import React from 'react';
import {Item} from '../../../types/Item';

interface Props {
  completed: boolean,
  product: Item,
  deleteProduct: (id: Date) => void,
  checkProduct: (id: Date) => void,
  uncheckProduct: (id: Date) => void,
};

export const Product: React.FC<Props> = ({completed, product, checkProduct, uncheckProduct, deleteProduct}) => {
  return (
    <li className={`product ${completed ? "completed": ""}`}>
      <h4>{product.content}</h4>
      <div className="actions">
        {
          completed ?
          <button type='button' className='undo buttonreset' onClick={() => uncheckProduct(product.id)}><i className="fas fa-undo"></i></button> :
          <button type='button' className='checkbtn buttonreset' onClick={() => checkProduct(product.id)}><i className="fas fa-check"></i></button>
        }
        <button type='button' className='deletebtn buttonreset' onClick={() => deleteProduct(product.id)}><i className="fas fa-trash"></i></button>
      </div>
    </li>
  );
};
