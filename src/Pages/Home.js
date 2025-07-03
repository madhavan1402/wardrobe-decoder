import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleStartNow = () => {
    navigate('/wardrobe-decoder');
  };

  return (
    <div className="center-content">
      <h1>Welcome to Wardrobe Decoder</h1>
      <p>Find the perfect outfit for any occasion!</p>
      <button className="btn btn-primary" onClick={handleStartNow}>Start Now</button>
    </div>
  );
};

export default Home;
