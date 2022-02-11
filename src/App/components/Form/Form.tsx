import * as React from "react";
import { Button } from "../Button/Button";
import { Context } from "../../context/Context";
import "./Form.css"

const Form: React.FC = () => {
  const [newValue, setNewValue] = React.useState<string>("");
  const [warning, setWarning] = React.useState<boolean>(false);
  const {addItem} = React.useContext(Context);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newValue !== "") {
      addItem(newValue);
      setNewValue("");
      setWarning(false)
    } else {
      setWarning(true)
    }
  };

  const {closeModal} = React.useContext(Context);

  return (
    <form aria-label="form" onSubmit={(e) => onSubmit(e)} className="form-modal">
      <input placeholder="Add an item" className={`heightfifthy ${warning ? "warning" : ""}`} value={newValue} onChange={(e) => setNewValue(e.target.value)} />
      <span className={`${warning ? "showError": "dontShow"}`}>You need to add an item</span>
      <div className="actions">
        <Button
          buttonClass="reset secondary-button secondary-form-btn"
          buttonText="Close"
          onClick={closeModal}
          disabled={false}
        />
        <Button
          buttonClass="reset secondary-button primary-form--btn"
          buttonText="Add"
          onClick={(e) => onSubmit(e)}
          disabled={newValue === "" ? true : false}
        />
      </div>
    </form>
  );
};

export default Form;
