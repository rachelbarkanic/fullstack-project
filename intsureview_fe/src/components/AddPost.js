import React from "react";

const AddPost = ({
  modalVisible,
  setModalVisible,
  title,
  setTitle,
  description,
  setDescription,
  username,
  setUsername,
  difficulty,
  setDifficulty,
  completed,
  setCompleted,
  createPost,
}) => {
  return (
    <div>
      <div className="add-section">
        <a
          className="add-btn"
          href="#"
          onClick={() => setModalVisible(true)}
        >
          Add a Ride
        </a>
      </div>
      <div className={modalVisible ? "modal" : "modal-not-visible"}>
        <div className="form">
          <div className="form-header">
            <div>
              <p className="form-header-text">Add a Ride!</p>
            </div>
            <div>
              <a
                href="#"
                className="close-btn"
                onClick={() => setModalVisible(!modalVisible)}
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
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id=""
                cols="30"
                rows="5"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="form-control"
                required
              ></textarea>
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
                <option value="">Select an option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="form-group submit-btn">
              <input
                type="submit"
                className="btn"
                value="Post It"
                onClick={createPost}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
