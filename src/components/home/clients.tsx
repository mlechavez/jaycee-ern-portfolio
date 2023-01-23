import ImageFallback from "../images/ImageFallback";

import { clientsImages } from "../../data";

const Clients = () => {
  return (
    <section className="bg-gradient block clients">
      <div className="container">
        <header className="text-center clients__header">
          <h2 className="text-white clients__heading">
            Companies that I worked with
          </h2>
          <p className="text-white">
            It's my pleasure working with these companies
          </p>
        </header>
        <div className="clients__list">
          {clientsImages.map((client) => (
            <ImageFallback
              key={client.id}
              srcSet={`${client.images.webpOne} 1x, ${client.images.webPTwo} 2x`}
              fallback={client.images.png}
              alt={client.name}
              className="clients__image"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
