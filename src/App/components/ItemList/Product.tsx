import React from 'react';
import {Button} from '../Button/Button';
import {Item} from '../../types/Item';
import "./Product.css"

interface Props {
  completed: boolean,
  item: Item,
  deleteItem: (id: Date) => void,
  checkItem: (id: Date) => void,
  uncheckItem: (id: Date) => void,
}

export const Product: React.FC<Props> = ({completed, item, checkItem, uncheckItem, deleteItem}) => {
  return (
    <li className={`product ${completed ? "completed": ""}`}>
      <h4>{item.content}</h4>
      <div className="actions">
        {
          completed
          ? <Button
              buttonClass="reset undo"
              buttonText={<i className="fas fa-undo"></i>}
              onClick={() => uncheckItem(item.id)}
              disabled={false}
            />
          : <Button
              buttonClass="reset checkbtn"
              buttonText={<i className="fas fa-check"></i>}
              onClick={() => checkItem(item.id)}
              disabled={false}
            />

        }
        <Button
          buttonClass="reset deletebtn"
          buttonText={<i className="fas fa-trash"></i>}
          onClick={() => deleteItem(item.id)}
          disabled={false}
        />
      </div>
    </li>
  )
}
