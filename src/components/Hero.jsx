import PropTypes from "prop-types";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div className="container-hero" ref={container} id="home">
      <Banner scrollYProgress={scrollYProgress} />
      <Section scrollYProgress={scrollYProgress} />
    </div>
  );
};
const Section = ({ scrollYProgress }) => {
  const rotate = useTransform(scrollYProgress, [0, 1], [-10, 0]);

  const animations = {
    h2: {
      initial: { opacity: 0.1 },
      whileInView: { opacity: 1 },
    },
  };

  return (
    <motion.section style={{ rotate }} className="hero">
      <div className="hero-overlay">
        <motion.h2 {...animations.h2} className="h2">
          Innovate Boldly, <br />
          Secure Confidently
        </motion.h2>
        |{" "}
        <Typewriter
          options={{
            strings: [
              "Transform Your Business Landscape",
              "Empower Your Digital Brand",
              "Elevate Your Digital Security",
              "Maximize Your Business Potential",
            ],
            autoStart: true,
            loop: true,
            cursor: "",
            wrapperClassName: "typewriterpara",
          }}
          className="typewriter"
        />
      </div>
    </motion.section>
  );
};

const Banner = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -10]);

  return (
    <motion.div style={{ scale, rotate }} className="banner">
      <h1>I B K</h1>
    </motion.div>
  );
};

Banner.propTypes = {
  scrollYProgress: PropTypes.object.isRequired,
};

Section.propTypes = {
  scrollYProgress: PropTypes.object.isRequired,
};

export default Hero;
