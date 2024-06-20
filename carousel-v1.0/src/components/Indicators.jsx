import React from "react";

const Indicators = ({ activeIndex, imgLengths }) => {

  return <div className="indicators">
      {
        Array.from(Array(imgLengths ), (_, index) => (
          <div key={index} className={index === activeIndex ? "indicator active": "indicator"}></div>
        ))}
    </div>;
}

export default Indicators;
