import orderFoodBro from "../../../assets/Order food-bro.png";
import "./NoProducts.css"

export const NoProducts: React.FC = () => {
  return (
    <div className="noproducts alignAndJustifyColumn container">
      <h2>Aún no hay elementos</h2>
      <p>Añade alguno!</p>
      <img src={orderFoodBro} alt="Person ordering food" />
    </div>
  );
};
