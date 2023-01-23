import ImageFallback from "../images/ImageFallback";

import JCWebp1 from "../../assets/images/jaycee-ern.webp";
import JCWebp2 from "../../assets/images/jaycee-ern@2x.webp";
import JCPng from "../../assets/images/jaycee-ern.png";

const About = () => {
  return (
    <section className="block about">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-6 about__left">
            <h2 className="about__title">Jaycee Ern</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Metus pellentesque amet
              suspendisse sed pellentesque eget in vitae. Sollicitudin amet non
              orci amet eros vel placerat. Amet eros at in a at est id ac.
            </p>
            <p>
              Viverra tincidunt elit mauris enim ultrices. Mauris vulputate
              vehicula at non diam. Cursus egestas lacus et diam risus.
              Consequat enim aliquam tempor est. Quis volutpat odio sed eu dolor
              amet. Molestie nibh duis venenatis ut ullamcorper nibh ut leo
              nulla.
            </p>
            <p>
              Tristique faucibus egestas et eget adipiscing ullamcorper. Eu
              tortor dui nunc aliquet commodo sed. Ultrices fringilla tincidunt
              in quam. Nibh elit elit dui venenatis urna sit. Amet commodo mi
              massa lobortis pharetra ut. Id varius consectetur lobortis eget
              lorem nunc est. Eget
            </p>
          </div>
          <div className="col-md-12 col-lg-6 about__right">
            <ImageFallback
              srcSet={`${JCWebp1} 1x, ${JCWebp2} 2x`}
              fallback={JCPng}
              alt="Jaycee Ern"
              aos="flip-left"
              className="client-info__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
