import React from 'react';
import Form from './Form';
import RideForm from './RideForm';

const Content = () => {
  return (
    <div>
    <div className="posts">
      <p className="centerText">No Posts</p>
    </div>
    <div className="modal">
    <RideForm></RideForm>
    </div>
    </div>
  );
};

export default Content;