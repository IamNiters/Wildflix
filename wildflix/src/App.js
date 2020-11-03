import React from 'react';
import {GlobalStyle} from './GlobalStyle';

// Components
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <h1>Hello React </h1>
      <GlobalStyle />
    </div>
  );
}

export default App;
