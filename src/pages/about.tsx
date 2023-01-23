import About from "../components/about/about";
import Benefit from "../components/about/benefit";
import TestimonialList from "../components/about/testimonial-list";
import Talk from "../components/talk";
import { testimonials } from "../data/data";

const AboutPage = () => {
  return (
    <>
      <About />
      <Benefit />
      <TestimonialList items={testimonials} />
      <Talk />
    </>
  );
};

export default AboutPage;
