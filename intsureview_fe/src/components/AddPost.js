import React, { useState } from "react";
import RideForm from "./RideForm";
import '../styles/main.css';

const AddPost = ({ setModalVisible, getAllPosts }) => {
  const [formModalVisible, setFormModalVisible] = useState(false);

  return (
    <div>
      <div className="add-section">
        <button
          className="add-btn"
          onClick={() => setFormModalVisible(true)}
        >
          Add a Ride
        </button>
      </div>

      {formModalVisible && (
        <div className="modal">
          <RideForm
            setFormModalVisible={setFormModalVisible}
            setModalVisible={setModalVisible} // Pass setModalVisible here
            getAllPosts={getAllPosts}
          />
        </div>
      )}
    </div>
  );
};

export default AddPost;
