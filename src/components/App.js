import React from 'react';
import CSSModules from 'react-css-modules';

import Calculator from './Calculator';

import styles from './app.css';

const App = () => (
  <div>
      <h1 styleName='title'>Calculator</h1>
      <Calculator />
  </div>
);

export default CSSModules(App, styles, {allowMultiple: true});
