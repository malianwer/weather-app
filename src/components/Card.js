import React from "react";

const Card = ({ children, className }) => {
  const card = {
    background: "rgb(25 32 45)",
    color: "#fff",
  };
  return (
    <div className={className} style={card}>
      {children}
    </div>
  );
};

export default Card;
