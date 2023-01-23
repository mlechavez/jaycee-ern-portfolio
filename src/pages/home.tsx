import Clients from "../components/home/clients";
import Intro from "../components/home/intro";
import Works from "../components/home/works";
import Talk from "../components/talk";
import Testimonial from "../components/testimonial";

import { testimonials } from "../data/data";
const HomePage = () => {
  return (
    <>
      <Intro />
      <Clients />
      <Works />
      <Testimonial item={testimonials[0]} />
      <Talk />
    </>
  );
};

export default HomePage;
