import React from 'react';

interface Props {
  totalPages: number,
  currentPage: number,
  paginate: (page: number) => void
};

export const Pagination: React.FC<Props> = ({totalPages, currentPage, paginate}) => {
  return (
    <div className='pagination container'>
    {
      currentPage > 1 ?
      <button className='buttonreset' type='button' onClick={() => paginate(currentPage - 1)}><i className="fas fa-arrow-circle-left"></i></button> :
      <button className='buttonreset' type='button' disabled><i className="fas fa-arrow-circle-left"></i></button>
    }
    {
      currentPage < totalPages ?
      <button className='buttonreset' type='button' onClick={() => paginate(currentPage + 1)}><i className="fas fa-arrow-circle-right"></i></button> :
      <button className='buttonreset' type='button' disabled><i className="fas fa-arrow-circle-right"></i></button>
    }
    </div>
  );
};
