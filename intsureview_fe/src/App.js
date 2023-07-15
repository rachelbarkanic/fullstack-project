import React, { useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

const App = () => {
  // State to track the visibility of the modal
  const [modalVisible, setModalVisible] = useState(false);

  // Function to toggle the modal visibility
  const handleModalVisibility = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <div>
      <Header />
      {/* Render the Content component and pass the handleModalVisibility function */}
      <Content setModalVisible={handleModalVisibility} />
      <Footer />
    </div>
  );
};

export default App;
