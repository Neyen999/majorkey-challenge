import * as React from "react";
import {Context} from "./context/Context";
import {Modal} from "./components/Modal";
import {Header} from "./components/Header";
import {Count } from "./components/Count";
import {Pagination} from "./components/Pagination";
import {MarketProductList} from "./components/containers/ItemList/MarketProductList";
import {Loader} from "./components/Loader";
import {NoProducts} from "./components/NoProducts";

const App: React.FC = () => {
  const {loading, products, currentPage, currentProducts, paginate, openModal, totalPages} = React.useContext(Context);

  return (
    <main className="main">
      <Modal />
      <Header />
      <Count products={products}/>
        {
        loading    ?
        <Loader /> :
        // When it finished loading, check if there is any product
        (currentProducts.length ?
          <>
            <Pagination totalPages={totalPages} currentPage={currentPage} paginate={paginate}/>
            <MarketProductList currentProducts={currentProducts}/>
          </>
         : <NoProducts />
        )}
        <div className="form-container container">
          <button className="bluebg heightfifthy" onClick={() => openModal()}>Add item</button>
        </div>
    </main>
  );
};

export default App;
