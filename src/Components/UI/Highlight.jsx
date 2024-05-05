import React from "react";

const Highlight = ({ icon, title, para }) => {
  return(
    <div className="highlight">
      <div className="hightlight__img">{icon}</div>
      <h3 className="highlight__subtitle">Easy and quick</h3>
      <p className="highlight__para">
        Get access to the books you purchase online instantly.
      </p>
    </div>
  );
};

export default Highlight;
