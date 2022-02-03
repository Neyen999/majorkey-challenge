import React from 'react';
import {Item} from '../types/Item';

interface Props {
  products: Item[]
}

export const Count: React.FC<Props> = ({products}) => {
  return (
    <h2 className="alignheading container">{products.length} Item(s)</h2>
  );
};
