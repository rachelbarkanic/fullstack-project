import React, { useState } from "react";
import RideForm from "./RideForm";
import "../styles/main.css";

const AddPost = ({ setModalVisible, getAllPosts }) => {
  const [formModalVisible, setFormModalVisible] = useState(false);

  return (
    <div>
      <div className="add-section">
        {/* Button to open the ride form */}
        <button className="add-btn" onClick={() => setFormModalVisible(true)}>
          Add a Ride
        </button>
      </div>

      {/* Display the ride form modal when formModalVisible is true */}
      {formModalVisible && (
        <div className="modal">
          <RideForm
            setFormModalVisible={setFormModalVisible}
            setModalVisible={setModalVisible}
            getAllPosts={getAllPosts}
          />
        </div>
      )}
    </div>
  );
};

export default AddPost;
