import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header> </Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(<App />);