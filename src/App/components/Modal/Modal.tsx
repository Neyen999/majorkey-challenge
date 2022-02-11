import React from 'react';
import {Context} from '../../context/Context';
import Form from "../Form/Form"
import "./Modal.css"

// eslint-disable-next-line
export const Modal = () => {
  const {modal} = React.useContext(Context)

  return (
    <div className={`${modal ? "modalopen" : "modalclose"}`}>
      <div className="modalcontent">
        <h2 aria-label='modalheading' className='alignheading'>Add an item!</h2>
        <Form />
      </div>
    </div>
  );
};
