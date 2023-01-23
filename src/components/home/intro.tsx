import JCWebp1 from "../../assets/images/jaycee-ern.webp";
import JCWebp2 from "../../assets/images/jaycee-ern@2x.webp";
import JCPng from "../../assets/images/jaycee-ern.png";
import ImageFallback from "../images/ImageFallback";

const Intro = () => {
  return (
    <section id="intro" className="block intro">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-6 intro__left" data-aos="fade-right">
            <header>
              <h1 className="intro__name">Hi, I'm Jaycee.</h1>
              <h2 className="intro__title">UI/UX Designer</h2>
              <p className="intro__tagline">
                UI/UX has always been my passion. I build amazing websites that
                clients will love. And if you're the one looking for a UI/UX
                that likes to get things done, let's discuss.
              </p>
            </header>
            <a href="#work-list" className="btn btn-primary intro__cta">
              See my work
              <span className="fa fa-arrow-down"></span>
            </a>
          </div>
          <div
            className="col-xs-hidden col-lg-6 intro__right"
            data-aos="fade-left"
          >
            <ImageFallback
              srcSet={`${JCWebp1} 1x, ${JCWebp2} 2x`}
              fallback={JCPng}
              alt="Jaycee Ern"
              aos="flip-left"
              className="intro__image"
            />
            <div className="intro__social-icons">
              <a href="#">
                <span className="text-primary fa fa-twitter"></span>
              </a>
              <a href="#">
                <span className="text-primary fa fa-instagram"></span>
              </a>
              <a href="#">
                <span className="text-primary fa fa-linkedin"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
