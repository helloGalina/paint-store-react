import mebel from "../assets/mebel.jpg";
import videoFile from "../assets/bluepaint.mp4";
import "../styles/style.css";

export default function About({id}) {
  return (
    <div>
      <section className="intro" id={id}>
        <div className="container intro__inner">
          <h2 className="intro__title">
            <span className="intro__brand">PAINT STORE</span>
            <span className="intro__subtitle">
              designed for you and the planet
            </span>
          </h2>

          <p className="intro__text">
            We blend innovation with sustainability to craft paints that clean
            the air, uplift your space, and give back — 10% of our profits
            support global charity causes.
          </p>
        </div>
      </section>

      <section className="paint">
        <div className="container">
          <div className="paint__inner">
            <div className="paint__video">
              <video
                src={videoFile}
                type="video/mp4"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
            <div>
              <h3>Purifies indoor spaces of airborne pollutants.</h3>

              <p>Anti-Molding, Zero VOC, Odourless and Easy to Clean</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
