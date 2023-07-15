import React, { useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleModalVisibility = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <div>
      <Header />
      <Content setModalVisible={handleModalVisibility} />
      <Footer />
    </div>
  );
};

export default App;
