import "./Location.css";
const Location = () => {
  return (
    <section className="location" id="location">
      <h2 className="tittleText">
        <span>L</span>ocation
      </h2>
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            width="600"
            height="500"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=Sta.%20Potenciana%20cor.%20Sta%20Cruz%20Street,%20Burauen,%20Philippines&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
export default Location;
