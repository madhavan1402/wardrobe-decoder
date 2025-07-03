import React from 'react';
import { useLocation } from 'react-router-dom';

const outfitData = [
  { name: 'Formal Shirt', size: 'M', skinTone: 'FAIR', occasion: 'interview', image: '/Assets/Formal-suit1.png', link: 'https://myntra.com/formal-suit' },
  { name: 'Formal Suit', size: 'L', skinTone: 'FAIR', occasion: 'interview', image: '/Assets/Formal-suit1.png', link: 'https://myntra.com/formal-suit' },
];

const Results = () => {
  const location = useLocation();
  const { size, skinTone, occasion } = location.state;

  const matchedOutfits = outfitData.filter(
    (outfit) => outfit.size === size && outfit.skinTone === skinTone && outfit.occasion === occasion
  );

  return (
    <div className="center-content">
      <h2>Outfit Suggestions</h2>
      <div className="row">
        {matchedOutfits.length > 0 ? (
          matchedOutfits.map((outfit, index) => (
            <div key={index} className="col-md-4 mb-3">
              <div className="card">
                <img src={outfit.image} className="card-img-top" alt={outfit.name} />
                <div className="card-body">
                  <h5 className="card-title">{outfit.name}</h5>
                  <a href={outfit.link} className="btn btn-primary">Buy Now</a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No outfits match your criteria. Please try different inputs.</p>
        )}
      </div>
    </div>
  );
};

export default Results;
