import * as React from "react";

import styles from "./App.module.scss";

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>
          <img alt="TradeHelm" className={styles.logo} src="/logo.svg" />
        </h1>
        <h3 className={styles.text}>Lets get this party started</h3>
      </header>
    </div>
  );
};

export default App;
