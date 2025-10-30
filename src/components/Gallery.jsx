import { useState } from "react";
import "../styles/style.css";

import img1 from "../assets/gallery/gallery-1.jpg";
import img2 from "../assets/gallery/gallery-2.jpg";
import img3 from "../assets/gallery/gallery-3.jpg";
import img4 from "../assets/gallery/gallery-4.jpg";
import img5 from "../assets/gallery/gallery-5.jpg";

const images = [img1, img2, img3, img4, img5];

export default function Gallery({id}) {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1);
  const goToSlide = (index) => setCurrent(index);

  return (
    <section className="gallery" id={id}>
      <div className="container">
        <h2 className="gallery-title">Put some colours into your life!</h2>

        <div className="carousel">
          <button className="carousel-btn prev" onClick={prevSlide}>
            &#10094;
          </button>
          <button className="carousel-btn next" onClick={nextSlide}>
            &#10095;
          </button>

          {images.map((img, index) => (
            <div
              key={index}
              className={`carousel-item ${index === current ? "active" : ""}`}
            >
              {index === current && (
                <img src={img} alt={`Slide ${index + 1}`} />
              )}
            </div>
          ))}

          <div className="carousel-indicators">
            {images.map((_, index) => (
              <span
                key={index}
                className={index === current ? "active" : ""}
                onClick={() => goToSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
