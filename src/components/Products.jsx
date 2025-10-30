import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/style.css";

export default function Products({ id }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://6900b90aff8d792314bb2515.mockapi.io/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Ошибка загрузки:", err));
  }, []);

  return (
    <section className="catalog" id={id}>
      <div className="container">
        <div className="catalog-start">
          <div className="catalog-start-item">
            <span>01</span>
            <div>
              <h3>Eco-friendly & Premium</h3>
              <p>A+ paint</p>
            </div>
          </div>
          <div className="catalog-start-item">
            <span>02</span>
            <div>
              <h3>Curated selection</h3>
              <p>of 50 exclusive colors</p>
            </div>
          </div>
          <div className="catalog-start-item">
            <span>03</span>
            <div>
              <h3>Easy to try on with our</h3>
              <p>sample stickers</p>
            </div>
          </div>
          <div className="catalog-start-item">
            <span>04</span>
            <div>
              <h3>Free shipping &</h3>
              <p>returns in Europe</p>
            </div>
          </div>
        </div>

        <h2 className="catalog-title">New drops</h2>

        <div className="catalog-inner">
          {products.length > 0 ? (
            products.map((item) => (
              <div className="catalog-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <span>{item.price}</span>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>

        <button className="catalog-button">Shop all colors</button>
      </div>
    </section>
  );
}
