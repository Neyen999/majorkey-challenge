import React from 'react'
import {Button} from '../Button/Button'
import "./Pagination.css"

interface Props {
  totalPages: number,
  currentPage: number,
  paginate: (page: number) => void
}

export const Pagination: React.FC<Props> = ({totalPages, currentPage, paginate}) => {
  return (
    <div className='pagination container'>
      <Button
        buttonClass="reset"
        buttonText={<i className="fas fa-arrow-circle-left"></i>}
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage > 1 ? false : true}
      />
      <Button
        buttonClass="reset"
        buttonText={<i className="fas fa-arrow-circle-right"></i>}
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage < totalPages ? false : true}
    />
    </div>
  )
}
