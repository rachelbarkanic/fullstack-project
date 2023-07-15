import React, { useState } from "react";
import "../styles/main.css";


const RideForm = () => {
    const [modalVisible, setModalVisible] = useState(false)

  return (
    <div>
      <div className="form">
        <div className="form-header">
          <div>
            <p className="form-header-text">Add a Ride!</p>
          </div>
          <div>
            <a href="#" className="close-btn"
            >
              X
            </a>
          </div>
        </div>
        <form action="">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id=""
              cols="30"
              rows="5"
              className="form-control"
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="difficulty">Difficulty (out of 10)</label>
            <input
              type="number"
              name="difficulty"
              id="difficulty"
              min="1"
              max="10"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="completed">Completed?</label>
            <select name="completed" className="form-control">
              <option value="">Select an option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="form-group submit-btn">
            <input type="submit" className="btn" value="Post It" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default RideForm;
