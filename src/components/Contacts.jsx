import "../styles/style.css";

export default function Contacts({id}) {
  return (
    <div>
      <section className="contacts" id={id}>
        <div className="container contacts__inner">
          <div className="contacts__text">
            <h3>Contacts</h3>
            <p>
              <strong>Address:</strong> 1, Approximate street, building 1,
              Moscow, 100000
            </p>
            <p>🟢 Approximate</p>
            <p>Mon-Sun 09:00 to 21:00</p>
            <p>
              <strong>Phone:</strong> 8 800 123 45 67
            </p>
          </div>

          <div className="contacts__map">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A1e84f64b9e8b98e3b4773a94b13c73c04c3c813ceb4232f50dbe6f91bd17aa17&amp;source=constructor"
              frameBorder="0"
              title="Map"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
