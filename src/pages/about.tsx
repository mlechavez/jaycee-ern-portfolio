import About from "../components/about/about";
import Benefit from "../components/about/benefit";
import TestimonialList from "../components/about/testimonial-list";
import Talk from "../components/talk";
import { testimonials } from "../data";
import ServicesSection from "../components/about/services";

const AboutPage = () => {
  return (
    <>
      <About />
      <Benefit />
      <TestimonialList items={testimonials} />
      <ServicesSection />
      <Talk />
    </>
  );
};

export default AboutPage;
