import { useState } from "react";
import { ChevronRightIcon, ChevronLeftIcon, GithubIcon, ArrowTopRightIcon } from "../../assets/icons";
import PropTypes from "prop-types";

import "./styles.css"
import GradientText from "../GradientText";


const CarouselProjects = ({ slides = [], className = "" }) => {
    const [current, setCurrent] = useState(0);

    const prevSlide = () =>
        setCurrent((current - 1 + slides.length) % slides.length);
    const nextSlide = () => setCurrent((current + 1) % slides.length);
    return (
        <div className={`carousel-container ${className}`}>
            <div
                className="carousel-slides"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div 
                        key={index} 
                        className="carousel-slide"
                        style={{
                            backgroundImage: `url(${slide.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center 70%",
                        }}
                    >
                        <div className="carousel-content">
                            <div className={`carousel-text`}>
                                <h2>{slide.title}</h2>
                                <p>{slide.subtitle}</p>
                            </div>
                        </div>

                        <div className="carousel-techs">
                            <div className="carousel-techs-container">
                                {slide.techs.map((tech, index) => (
                                    <div key={index} className="carousel-tech-bg">
                                        <div className="carousel-tech-icon">
                                            {tech}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="carousel-caption">
                            <button onClick={prevSlide} className="carousel-control left">
                                <ChevronLeftIcon className="icon" />
                            </button>
                            <div className="caption-tag">
                                <GradientText>
                                    {slide.tagProject}
                                </GradientText>
                            </div>
                            <div className="caption-buttons-container">
                                <a href={slide.webURL} target='_blank'>
                                    <ArrowTopRightIcon className="caption-button" />
                                </a>
                                <a href={slide.repURL} target='_blank'>
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
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        className={`dot ${current === idx ? "active" : ""}`}
                    />
                ))}
            </div>
        </div>
    );
}

CarouselProjects.propTypes = {
    slides: PropTypes.arrayOf(
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
    bgColor: PropTypes.string,
};

export default CarouselProjects;