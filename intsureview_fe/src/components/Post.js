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
          Added By: {username}<br />
          Difficulty: {difficulty}/10<br />
          Completed: {completed ? 'Yes' : 'No'}
        </p>
      </div>
    </div>
  );
};

export default Post;
