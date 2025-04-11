import React from "react";
import "./styles.css";

const InfiniteSlider = ({ items=[], speed = 10, direction = "left" }) => {
    
    return (
        <div className="slider-container">
          <div
            className={`slider-track ${direction}`}
            style={{
              animationDuration: `${speed}s`,
            }}
          >
            {[...items, ...items, ...items, ...items].map((item, index) => (
              <div className="slider-item" key={index}>
                <span className="slider-icon">{item.icon}</span>
                <span className="slider-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      );
};

export default InfiniteSlider;