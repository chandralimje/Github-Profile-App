import React from "react";
import "./Card.css";

const Card = ({ userName, profile, profileurl }) => {
  return (
    <>
      <div className="frame">
        <img src={profile} alt="userImage" className="Img" />
        <h2>{userName}</h2>
        <a href={profileurl} className="btn" target="_blank">
          Click Here
        </a>
      </div>
    </>
  );
};

export default Card;
