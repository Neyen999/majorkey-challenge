import React from "react";
import "./Button.css"

interface Props {
  buttonClass: string,
  buttonText: string | JSX.Element,
  onClick: (e: any) => void,
  disabled: boolean
}

export const Button: React.FC<Props> = ({ buttonClass, buttonText, onClick, disabled }) => {
  return (
    <button type="button" className={buttonClass} onClick={onClick} disabled={disabled}>
      {buttonText}
    </button>
  );
};
