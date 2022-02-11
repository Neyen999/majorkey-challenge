import * as React from "react";
import "../theme.css";
import {Context} from "./context/Context";
import {Modal} from "./components/Modal/Modal";
import {Header} from "./components/Header/Header";
import {Count } from "./components/Count/Count";
import {Pagination} from "./components/Pagination/Pagination";
import {MarketProductList} from "./components/ItemList/container/MarketProductList";
import {Button} from "./components/Button/Button";
import {Loader} from "./components/Loader/Loader";
import {NoProducts} from "./components/NoProducts/NoProducts";

const App: React.FC = () => {
  const {loading, items, currentPage, currentItems, paginate, openModal, totalPages} = React.useContext(Context);

  const [theme, setTheme] = React.useState<string>("light");
  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }

  return (
    <main className={`main ${theme}`}>
      <Modal />
      <Header />
      <Count items={items}/>
        {
        loading    ?
        <Loader /> :
        (currentItems.length ?
          <>
            <Pagination totalPages={totalPages} currentPage={currentPage} paginate={paginate}/>
            <MarketProductList currentItems={currentItems}/>
          </>
         : <NoProducts />
        )}
        <div className="form-container container">
          <Button
            buttonClass="reset primary-btn primary-form--btn"
            buttonText="Add Item"
            onClick={openModal}
            disabled={false}
          />
        </div>
        <div className="change-theme" onClick={toggleTheme}>
        {
          theme === "light"
          ? <i style={{cursor: 'pointer'}} className="fa-solid fa-moon dark"></i>
          : <i style={{cursor: 'pointer'}} className="fa-solid fa-sun light"></i>
        }
        </div>
    </main>
  );
};

export default App;
