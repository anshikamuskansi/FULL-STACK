import React from "react";
import "./card.css";
function Card(props){
  return(
    <div className="card">
      <img src={props.image} alt={props.title} className="card-image"/>
      <h3 className="card-title">{props.title}</h3>
      <p className="card-description">{props.description}</p>
    </div>
  );
}

/*const Card = () => {
  return (
    <div className="card">
      <img
        src="https://via.placeholder.com/300x180"
        alt="Card"
        className="card-img"
      />
      <div className="card-content">
        <h2 className="card-title">Beautiful Landscape</h2>
        <p className="card-description">
          Explore the serene beauty of nature with this breathtaking view of the
          mountains and the sunset.
        </p>
        <button className="card-btn">Read More</button>
      </div>
    </div>
  );
};*/

export default Card;
