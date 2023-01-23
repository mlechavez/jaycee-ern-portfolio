import ImageFallback from "../images/ImageFallback";

type TestimonialProps = {
  item: any;
};
const Testimonial = ({ item }: TestimonialProps) => {
  return (
    <section className="block testimonial">
      <div className="container">
        <header>
          <h2 className="text-center">What my client say</h2>
        </header>
        <p className="testimonial__content">{`"${item.content}"`}</p>
        <div className="testimonial__client">
          <div className="testimonial__image">
            {item.images.map((image: any) => (
              <ImageFallback
                srcSet={`${image.webpOne} 1x, ${image.webpTwo} 2x`}
                fallback={`${image.png}`}
                alt={item.name}
                className="client-info__image"
                type="image/png"
              />
            ))}
          </div>
          <div className="testimonial__client-info">
            <span className="client-name">{item.name}</span>
            <span className="client-company">{item.position}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
