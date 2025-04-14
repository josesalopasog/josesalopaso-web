import { useCarousel } from "./hooks/useCarousel";
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  GithubIcon,
  ArrowTopRightIcon,
} from "../../icons";
import PropTypes from "prop-types";

import "./styles.css";
import GradientText from "../GradientText";

const CarouselProjects = ({ items = [], className = "" }) => {
  const {
    current,
    setCurrent,
    prevSlide,
    nextSlide,
    handleStart,
    handleMove,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleEnd,
    slideRef,
  } = useCarousel(items);

  const extendedItems = [
    items[items.length - 1],
    ...items,
    items[0],
  ];

  return (
    <div
      className={`carousel-container ${className}`}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleEnd}
      onTouchStart={(e) => handleStart(e.touches[0].clientX)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      onTouchEnd={handleEnd}
    >
      <div
        ref={slideRef}
        className="carousel-items"
        style={{
          transform: `translateX(-${(current + 1) * 100}%)`,
        }}
      >
        {extendedItems.map((slide, index) => (
          <div
            key={index}
            className="carousel-slide"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            <div className="carousel-content">
              <div className="carousel-text">
                <h2>{slide.title}</h2>
                <p>{slide.subtitle}</p>
              </div>
            </div>

            <div className="carousel-techs">
              <div className="carousel-techs-container">
                {slide.techs.map((tech, index) => (
                  <div key={index} className="carousel-tech-bg">
                    <svg className="carousel-tech-icon">{tech.icon}</svg>
                    <span className="carousel-tech-label">{tech.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="carousel-caption">
              <button onClick={prevSlide} className="carousel-control left">
                <ChevronLeftIcon className="icon" />
              </button>
              <div className="caption-tag">
                <GradientText>{slide.tagProject}</GradientText>
              </div>
              <div className="caption-buttons-container">
                <a href={slide.webURL} target="_blank" rel="noopener noreferrer">
                  <ArrowTopRightIcon className="caption-button" />
                </a>
                <a href={slide.repURL} target="_blank" rel="noopener noreferrer">
                  <GithubIcon className="caption-button" />
                </a>
              </div>
              <button onClick={nextSlide} className="carousel-control right">
                <ChevronRightIcon className="icon" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="carousel-dots">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`dot ${current === idx ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

CarouselProjects.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      title: PropTypes.string,
      subtitle: PropTypes.string,
      techs: PropTypes.array,
      tagProject: PropTypes.string,
      webURL: PropTypes.string,
      repURL: PropTypes.string,
    })
  ).isRequired,
  className: PropTypes.string,
};

export default CarouselProjects;