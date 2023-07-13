import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Form from './components/Form';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Content>
      <Form />
      </Content>
      <Footer />
    </div>
  );
}

export default App;
