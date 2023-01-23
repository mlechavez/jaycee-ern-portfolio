import { Link } from "react-router-dom";
import ImageFallback from "../images/ImageFallback";
import ThinkingMan from "../../assets/images/thinking-man.png";
import ThinkingMan2 from "../../assets/images/thinking-man@2x.png";

const Talk = () => {
  return (
    <section id="talk" className="block talk">
      <div className="container flex-row gap-56">
        <div className="talk__image">
          <ImageFallback
            srcSet={`${ThinkingMan} 1x, ${ThinkingMan2} 2x`}
            fallback={ThinkingMan}
            alt="Thinking Man"
            type="image/png"
          />
        </div>
        <div className="talk__content">
          <header>
            <h3 className="text-center mb-32 talk__heading">
              I'm currently available for freelance work.
            </h3>
            <p className="text-center mb-48 talk__desc">
              If you're looking for a developer that likes to get stuff done,
            </p>
          </header>
          <Link
            to="/contact"
            className="btn btn-primary-outline btn-block text-center btn-cta"
          >
            Let's talk
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Talk;
