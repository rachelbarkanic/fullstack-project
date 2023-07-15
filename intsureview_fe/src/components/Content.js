import React, { useState, useEffect } from "react";
import Post from "./Post";

const baseURL = "http://localhost:8000";

const Content = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [username, setUsername] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [completed, setCompleted] = useState("");
  const [posts, setPosts] = useState([]);

  const getAllPosts = async () => {
    const response = await fetch(`${baseURL}/forms/`);

    const data = await response.json();

    if (response.ok) {
      console.log(data);
      setPosts(data.results);
    } else {
      console.log("Failed Network Request");
    }
  };

  // getAllPosts()
  //   .then(objects => {
  //     console.log(objects)
  //     setPosts(data)
  //   })
  //   .catch(error => {
  //     console.log('Failed Network Request:', error);
  //   });

  useEffect(() => {
    getAllPosts();
  }, []);

  const deleteItem = async (postId) => {
    console.log(postId);

    const response = await fetch(`${baseURL}/forms/${postId}/`, {
      method: 'DELETE'
    } )

    if(response.ok){
      console.log(response.status)
    }

    getAllPosts()
  };

  const createPost = async (event) => {
    event.preventDefault();

    const new_request = new Request(`${baseURL}/forms/`, {
      body: JSON.stringify({
        title,
        description,
        username,
        difficulty,
        completed,
      }),
      headers:{
        'Content-Type':'Application/Json'
      },
      method: 'POST'
    });

    const response = await fetch(new_request);

    const data = await response.json();

    if (response.ok){
      console.log(data)
    }
    else{
      console.log('Failed Network Request')
    }

    setTitle("");
    setDescription("");
    setUsername("");
    setDifficulty(0);
    setCompleted("");

    setModalVisible(false);
    getAllPosts();
  };
  return (
    <div>
      {posts.length > 0 ? (
        <div className="post-list">
          {posts.map((item) => (
            <Post
              title={item.title}
              description={item.description}
              username={item.username}
              difficulty={item.difficulty}
              completed={item.completed}
              onclick={() => deleteItem(item.id)}
              key={item.id}
            />
          ))}
        </div>
      ) : (
        <div className="posts">
          <p className="centerText">No Posts</p>
        </div>
      )}

      <div className="add-section">
        <a className="add-btn" href="#" onClick={() => setModalVisible(true)}>
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
          {/* 
      NEED TO TAKE FORM AND PUT IT SOMEHWERE ELSE
    <RideForm></RideForm> */}
        </div>
      </div>
    </div>
  );
};

export default Content;
