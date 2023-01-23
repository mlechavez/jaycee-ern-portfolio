import { worksImages } from "../../data/data";
import ImageFallback from "../images/ImageFallback";

const Works = () => {
  return (
    <section id="work-list" className="block flex-column gap-32 work-list">
      <div className="container">
        <header className="text-center work-list__header">
          <h2 className="mb-16">Some of my work</h2>
          <p>
            I build and design web applications but I'm also doing mobile
            applications
          </p>
        </header>
      </div>
      <div>
        <article className="bg-green work">
          <div className="work__img">
            <ImageFallback
              srcSet={`${worksImages[0].images.webpOne} 1x, ${worksImages[0].images.webPTwo} 2x`}
              fallback={`${worksImages[0].images.png}`}
              alt={worksImages[0].name}
              aos="zoom-in-up"
            />
          </div>
          <div className="work__content">
            <h3 className="work__content-heading">Admin Dashboard</h3>
            <p className="work__content-description">
              Admin Dashboard is the world first hud style admin template which
              built on top of the popular framework Bootstrap 5.2.0. Concept of
              design for HUD Admin is based on the HUD ui design and finally it
              comes out with a clean and neat design. It is built on top of the
              popular Bootstrap Framework. Besides that, it is bundled with a
              lot of third party plugins, reusable widget and much more
            </p>
          </div>
        </article>
        <article className="bg-purple work">
          <div className="work__img">
            <ImageFallback
              srcSet={`${worksImages[1].images.webpOne} 1x, ${worksImages[1].images.webPTwo} 2x`}
              fallback={`${worksImages[1].images.png}`}
              alt={worksImages[0].name}
              aos="zoom-in-up"
            />
          </div>
          <div className="work__content">
            <h3 className="work__content-heading">E-commerce</h3>
            <p className="work__content-description">
              Dukamarket is the best choice for a modern and clean eCommerce
              store with 40+ homepage layout and extremely customizable admin
              settings. Suitable for every type of store.. It is a powerful
              design tool. Dukamarket an outstanding Premium Shopify theme. It
              will be perfect solution for your current or future webshop.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Works;
