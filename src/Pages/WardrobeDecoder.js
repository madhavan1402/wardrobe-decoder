import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WardrobeDecoder = () => {
  const [size, setSize] = useState('');
  const [skinTone, setSkinTone] = useState('');
  const [occasion, setOccasion] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/results', { state: { size, skinTone, occasion } });
  };

  return (
    <div className="center-content">
      <h2>Find the Perfect Outfit</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Size</label>
          <input
            type="text"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Skin Tone</label>
          <input
            type="text"
            value={skinTone}
            onChange={(e) => setSkinTone(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Occasion</label>
          <select
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
            className="form-control"
            required
          >
            <option value="">Select Occasion</option>
            <option value="vacation">Vacation</option>
            <option value="wedding">Wedding</option>
            <option value="interview">Interview</option>
            <option value="casual">Casual</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary mt-3">Get Outfit Suggestions</button>
      </form>
    </div>
  );
};

export default WardrobeDecoder;
