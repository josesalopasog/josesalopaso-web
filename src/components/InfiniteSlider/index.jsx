import React from "react";
import "./styles.css";

const InfiniteSlider = ({ items = [] }) => {
  return (
    <div className="slider-container">
      <div className="slider-track">
        {items.map((item, index) => (
          <div
            className="slider-item group"
            key={index}
            style={{ '--glow-color': item.color }}
          >
            <span className="slider-icon">{item.icon}</span>
            <span className="slider-label">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteSlider;