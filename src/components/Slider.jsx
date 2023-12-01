import React, { useEffect, useState } from "react";

const Slider = ({ images, title }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [activeSlide, setActiveSlide] = useState(images[slideIndex]);

  function setSlider(number) {
    if (slideIndex === 0 && number === -1) {
      setSlideIndex(images.length - 1);
      return;
    }

    if (slideIndex === images.length - 1 && number === 1) {
      setSlideIndex(0);
      return;
    } else {
      let newNumber = slideIndex + number;
      setSlideIndex(newNumber);
      return;
    }
  }

  function prev() {
    setSlider(-1);
  }

  function next() {
    setSlider(1);
  }

  useEffect(() => {
    setActiveSlide(images[slideIndex]);
  }, [slideIndex]);

  return (
    <div className="flex flex-col items-center justify-center bg-red-100 p-8 h-screen">
      {<h1>{title}</h1>}
      {images && (
        <>
          <div className="relative flex flex-col items-center justify-center w-screen h-full">
            <div className="max-w-screen-md w-10/12 rounded-md overflow-hidden shadow-xl flex justify-center items-center">
              <img src={activeSlide} alt={`Slide ${slideIndex + 1}`} className="object-cover w-full h-full" />
            </div>
            <button
              className="absolute left-5 bg-white p-2 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer sm:left-10"
              onClick={prev}
            >
              &lt;
            </button>
            <button
              onClick={next}
              className="absolute right-5 bg-white p-2 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer sm:right-10"
            >
              &gt;
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Slider;
