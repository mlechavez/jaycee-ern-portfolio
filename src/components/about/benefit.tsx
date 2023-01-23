const Benefit = () => {
  return (
    <section className="block benefit">
      <div className="container">
        <h2 className="benefit__heading">Why work with me?</h2>

        <div className="benefit__content">
          <div className="benefit__left">
            <div className="benefit__header">
              <span className="fa fa-clock-o" aria-hidden="true"></span>
              <span className="heading">On-time Delivery</span>
            </div>
            <div className="benefit__description">
              I know time is money, so I don't want to waste yours or mine. So I
              guarantee that I will always deliver what you pay for as promised.
            </div>
          </div>
          <div className="benefit__right">
            <div className="benefit__header">
              <span className="fa fa-star-o" aria-hidden="true"></span>
              <span className="heading">Quality</span>
            </div>
            <div className="benefit__description">
              I don't want to put my name on something subpar, so my first
              concern is always quality. No matter what, you will love the
              result.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefit;
