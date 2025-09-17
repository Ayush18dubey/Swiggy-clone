import { useOutletContext } from "react-router-dom";
import "./../Style/carousel.css";
import Card from "./card";
import { useRef } from "react";
const Carousel = () => {
  const { restaurants } = useOutletContext();
  const slidesContainerRef = useRef(null);

  const handleNextClick = () => {
    const slideWidth =
      slidesContainerRef.current.querySelector(".carousel__slide").clientWidth;
    slidesContainerRef.current.scrollLeft += slideWidth;
  };

  const handlePrevClick = () => {
    const slideWidth =
      slidesContainerRef.current.querySelector(".carousel__slide").clientWidth;
    slidesContainerRef.current.scrollLeft -= slideWidth;
  };
  return (
    <div className="carousel">
      <div className="carousel__container">
        <h2 className="carousel__title">Top restaurant chains in Noida</h2>
        <div className="carousel__controls">
          <button className="carousel__arrow" onClick={handlePrevClick}>
            <img src="/images/left.png"></img>
          </button>
          <button className="carousel__arrow" onClick={handleNextClick}>
            <img src="/images/right.png"></img>
          </button>
        </div>
      </div>
      <section className="carousel__slider">
        <ul className="carousel__slides" ref={slidesContainerRef}>
          {restaurants.map((res) => {
            return (
              <li className="carousel__slide" key={res._id}>
                <Card res={res} show={false}></Card>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default Carousel;
