import React from 'react';

import Calculator from './Calculator';

import styles from './app.css';

const App = () => (
  <div>
      <h1 className={styles.title}>Calculator</h1>
      <Calculator />
  </div>
);

export default App;
