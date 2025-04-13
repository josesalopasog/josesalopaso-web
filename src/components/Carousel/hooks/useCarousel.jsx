import { useState, useRef, useEffect, useCallback } from "react";

export const useCarousel = (slides) => {
  const [current, setCurrent] = useState(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const deltaX = useRef(0);
  const slideRef = useRef(null);
  const transitionRef = useRef(true);
 

  const nextSlide = () => {
    if (!transitionRef.current) return;
    setCurrent((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (!transitionRef.current) return;
    setCurrent((prev) => prev - 1);
  };

  const handleStart = (x) => {
    startX.current = x;
    isDragging.current = true;
  };

  const handleMove = (x) => {
    if (!isDragging.current) return;
    const diff = startX.current - x;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
      isDragging.current = false;
    }
  };

  const handleEnd = () => {
    isDragging.current = false;
    deltaX.current = 0;
  };

  const handleMouseDown = (e) => {
    handleStart(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    deltaX.current = e.clientX - startX.current;
  };

  const handleMouseUp = () => {
    if (!isDragging.current) return;
    if (deltaX.current > 50) {
      prevSlide();
    } else if (deltaX.current < -50) {
      nextSlide();
    }
    handleEnd();
  };

  const handleTransitionEnd = useCallback(() => {
    transitionRef.current = true;

    if (current === slides.length) {
      transitionRef.current = false;
      setCurrent(0);
    } else if (current === -1) {
      transitionRef.current = false;
      setCurrent(slides.length - 1);
    }
  }, [current, slides.length]);

  useEffect(() => {
    const slideEl = slideRef.current;
    if (slideEl) {
      slideEl.addEventListener("transitionend", handleTransitionEnd);
      return () => {
        slideEl.removeEventListener("transitionend", handleTransitionEnd);
      };
    }
  }, [handleTransitionEnd]);

  return {
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
  };
};