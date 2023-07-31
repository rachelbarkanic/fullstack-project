import React, { useState } from "react";
import "../styles/main.css";

const baseURL = "http://localhost:8000";

const RideForm = ({ setFormModalVisible, setModalVisible, getAllPosts }) => {
  // State variables for form inputs and errors
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [username, setUsername] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [completed, setCompleted] = useState("");
  const [titleError, setTitleError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [difficultyError, setDifficultyError] = useState("");
  const [completedError, setCompletedError] = useState("");

  const createPost = async (event) => {
    event.preventDefault();

    // Validate form inputs
    let formIsValid = true;

    if (!title) {
      setTitleError("Please enter a title");
      formIsValid = false;
    } else {
      setTitleError("");
    }

    if (!description) {
      setDescriptionError("Please enter a description");
      formIsValid = false;
    } else {
      setDescriptionError("");
    }

    if (!username) {
      setUsernameError("Please enter a username");
      formIsValid = false;
    } else {
      setUsernameError("");
    }

    if (!difficulty || isNaN(difficulty) || difficulty < 1 || difficulty > 10) {
      setDifficultyError("Please enter a valid difficulty (1-10)");
      formIsValid = false;
    } else {
      setDifficultyError("");
    }

    if (!completed) {
      setCompletedError("Please select an option");
      formIsValid = false;
    } else {
      setCompletedError("");
    }

    // If any field is invalid, stop form submission
    if (!formIsValid) {
      return;
    }

    // Create a new request object with form data
    const new_request = new Request(`${baseURL}/forms/`, {
      body: JSON.stringify({
        title,
        description,
        username,
        difficulty,
        completed: completed ? "Yes" : "No",
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    // Send the request to create a new post
    const response = await fetch(new_request);
    const data = await response.json();

    if (response.ok) {
      console.log(data);
    } else {
      console.log("Failed Network Request");
    }

    // Reset form inputs and errors, and update visibility states
    setTitle("");
    setDescription("");
    setUsername("");
    setDifficulty("");
    setCompleted("");
    setFormModalVisible(false);
    setModalVisible(false);
    getAllPosts();
  };

  return (
    <div className="modal">
      <div className="form-container">
        <div className="form">
          <div className="form-header">
            <div>
              <p className="form-header-text">Add a Ride!</p>
            </div>
            <div>
              <a
                href="#"
                className="close-btn"
                onClick={() => setFormModalVisible(false)}
              >
                X
              </a>
            </div>
          </div>
          <div className="form-content">
            <form action="">
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="form-control"
                  required
                />
                {titleError && <p className="form-error">{titleError}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  name="description"
                  id=""
                  cols="30"
                  rows="1"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="form-control"
                  required
                ></textarea>
                {descriptionError && (
                  <p className="form-error">{descriptionError}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="form-control"
                  required
                />
                {usernameError && <p className="form-error">{usernameError}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="difficulty">Difficulty (out of 10)</label>
                <input
                  type="number"
                  name="difficulty"
                  id="difficulty"
                  min="1"
                  max="10"
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value)}
                  className="form-control"
                  required
                />
                {difficultyError && (
                  <p className="form-error">{difficultyError}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="completed">Completed?</label>
                <select
                  name="completed"
                  value={completed}
                  onChange={(e) => setCompleted(e.target.value)}
                  className="form-control"
                  required
                >
                  <option value="">-- Select --</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                {completedError && (
                  <p className="form-error">{completedError}</p>
                )}
              </div>
            </form>
          </div>
          <div className="form-group submit-btn">
            <button className="btn" onClick={createPost}>
              Post It
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RideForm;
