import ImageFallback from "../images/ImageFallback";

type TestimonialListProps = {
  items: any[];
};
const TestimonialList = ({ items }: TestimonialListProps) => {
  return (
    <section className="block testimonials">
      <div className="container">
        <header>
          <h2 className="text-center testimonials__heading">
            I'm grateful to work with these people
          </h2>
        </header>
        <div className="row">
          {items.map((item: any) => (
            <div key={item.id} className="col-xs-12 col-lg-6">
              <div className="testimonial">
                <p className="testimonial__content">{`"${item.content}"`}</p>

                <div className="testimonial__client">
                  <div className="testimonial__image">
                    {item.images.map((image: any) => (
                      <ImageFallback
                        key={image.id}
                        srcSet={`${image.webpOne} 1x, ${image.webpTwo} 2x`}
                        fallback={image.png}
                        className="client-info__image"
                        alt={image.name}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialList;
