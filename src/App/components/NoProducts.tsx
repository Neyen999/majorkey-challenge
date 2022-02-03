import orderfood from "../../assets/Order food-bro.png";

export const NoProducts: React.FC = () => {
  return (
    <div className="noproducts alignAndJustifyColumn container">
      <h2>Aún no hay elementos</h2>
      <p>Añade alguno!</p>
      <img src={orderfood} alt="Person ordering food" />
    </div>
  );
};
