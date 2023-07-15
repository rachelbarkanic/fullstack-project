import React from "react";
import '../styles/main.css'

const Post = ({ title, description, username, difficulty, completed, onclick }) => {
  return (
    <div className="post">
      <div className="post-header">
        <div>
          <p className="post-title">{title}</p>
        </div>
        <div>
          <a href="#" className="close" onClick={onclick}>
            X
          </a>
        </div>
      </div>
      <div className="post-content">
      <p>
          {description}<br />
          <p className="secondary-color">Added By: {username}</p><br />
          Difficulty: {difficulty}/10<br />
          <p className="secondary-color">Completed: {completed ? 'Yes' : 'No'}</p>
        </p>
      </div>
    </div>
  );
};

export default Post;
