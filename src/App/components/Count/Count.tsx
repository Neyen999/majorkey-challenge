import React from 'react';
import {Item} from '../../types/Item';

interface Props {
  items: Item[]
}

export const Count: React.FC<Props> = ({items}) => {
  return (
    <h2 className="alignheading container">{items.length} Item(s)</h2>
  );
};
