import * as React from "react";
import {Context} from "../context/Context";

const Form: React.FC = () => {
  const [newValue, setNewValue] = React.useState<string>("");

  const {addProduct} = React.useContext(Context);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addProduct(newValue);
    setNewValue("");
  };

  const {closeModal} = React.useContext(Context);

  return (
    <form onSubmit={(e) => onSubmit(e)} className="form-modal">
      <input className="heightfifthy" value={newValue} onChange={(e) => setNewValue(e.target.value)} />
      <div className="actions">
        <button className="buttonreset heightfifthy" type="button" onClick={() => closeModal()}>Close</button>
        <button className="buttonreset bluebg heightfifthy">Add</button>
      </div>
    </form>
  );
};

export default Form;
