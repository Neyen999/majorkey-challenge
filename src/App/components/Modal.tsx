import React from 'react';
import {Context} from '../context/Context';
import Form from "./Form"

export const Modal = () => {
  const {modal} = React.useContext(Context)

  return (
    <div className={`${modal ? "modalopen" : "modalclose"}`}>
      <div className="modalcontent">
        <h2 className='alignheading'>Add an item!</h2>
        <Form />
      </div>
    </div>
  );
};
