import "./Contacts.css";
const Contacts = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="tittleText">
        <span>C</span>ontact
      </h2>
      <div className="col-md-3 text-center">
        <ul id="contacts">
          <li>
            <img
              className="contact-img"
              src="https://uxwing.com/wp-content/themes/uxwing/download/location-travel-map/map-pin-icon.svg"
            />
            <p>Sta. Potenciana cor. Sta Cruz Street, Burauen, Philippines</p>
          </li>
          <li>
            <img
              className="contact-img"
              src="https://uxwing.com/wp-content/themes/uxwing/download/communication-chat-call/phone-call-icon.svg"
            />
            <p>+ 639 999 196 677</p>
          </li>
          <li>
            <img
              className="contact-img"
              src="https://uxwing.com/wp-content/themes/uxwing/download/communication-chat-call/email-icon.svg"
            />
            <p>contact@mdbootstrap.com</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Contacts;
