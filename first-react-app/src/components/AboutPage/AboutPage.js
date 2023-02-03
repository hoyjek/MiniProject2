import "./AboutPage.css";
const AboutPage = () => {
  return (
    <section className="about" id="about">
      <div className="row">
        <div className="col50">
          <h2 className="tittleText">
            <span>A</span>bout Us
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            reiciendis, vel adipisci similique tempore neque! Repellat inventore
            excepturi expedita, quibusdam id eos eligendi voluptas qui
            asperiores ratione reprehenderit ipsam blanditiis aliquam porro
            corrupti, ea animi corporis, repudiandae quia repellendus illo!
            <br />
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
            quidem accusantium optio molestiae iusto iste officiis totam sequi
            excepturi temporibus.
          </p>
        </div>
        <div className="col50">
          <div className="imgBx">
            <img
              id="about-pic"
              src={require("../../public/assets/banner.jpg")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutPage;
