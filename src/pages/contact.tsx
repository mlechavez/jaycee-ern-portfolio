const ContactPage = () => {
  return (
    <section className="block contact">
      <div className="container">
        <header className="text-center contact__header">
          <h1 className="h3 contact__heading">
            I'm currently available for freelance work.
          </h1>
          <p>
            Got a project in mind? Use the form to give me as much details as
            possible and I'll get back to you as soon as I can
          </p>
        </header>
        <div className="contact__content">
          <form>
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                className="form-field"
                placeholder="Name..."
              />
              <input
                type="text"
                id="budget"
                name="budget"
                className="form-field"
                placeholder="Budget Range..."
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                className="form-field"
                placeholder="Email..."
              />
              <input
                type="text"
                id="budget"
                name="budget"
                className="form-field"
                placeholder="Timeline..."
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                id="message"
                className="form-field"
                placeholder="Message..."
              ></textarea>
            </div>
            <button className="btn btn-primary contact__btn">
              Let's do this
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
