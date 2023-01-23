import { services } from "../../data";
import MediaObject from "../media";

import "./services.scss";

const ServicesSection = () => {
  return (
    <div className="services">
      <div className="container">
        <header>
          <h3 className="text-center">What Can I Offer?</h3>
        </header>
        <div className="services__list">
          {services.map((service) => (
            <MediaObject key={service.id} item={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
