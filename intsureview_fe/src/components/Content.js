import React, { useState, useEffect } from "react";
import AddPost from "./AddPost";
import Post from "./Post";
import "../styles/main.css";

const baseURL = "http://localhost:8000";

const Content = ({ setModalVisible }) => {
  const [posts, setPosts] = useState([]);

  // Fetch all posts from the server
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

  useEffect(() => {
    // Call getAllPosts when the component mounts
    getAllPosts();
  }, []);

  // Delete a post with the specified ID
  const deleteItem = async (postId) => {
    console.log(postId);

    const response = await fetch(`${baseURL}/forms/${postId}/`, {
      method: "DELETE",
    });

    if (response.ok) {
      console.log(response.status);
    }

    // Refresh the post list after deletion
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

      <AddPost setModalVisible={setModalVisible} getAllPosts={getAllPosts} />
    </div>
  );
};

export default Content;
