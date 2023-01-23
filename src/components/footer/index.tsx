const Footer = () => {
  return (
    <footer className="block footer">
      <div className="top">
        <img className="footer__logo" src="images/logo.svg" alt="" />
        <p className="copyright">
          Copyright Jaycee Ern 2022. All Rights Reserved.
        </p>
      </div>
      <div className="bottom">
        <div className="privacy-notice">
          <a href="#" className="text-primary">
            Privacy Policy
          </a>
          <a href="#" className="text-primary">
            Terms &amp; Condition
          </a>
        </div>
        <div className="social-media">
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
    </footer>
  );
};

export default Footer;
