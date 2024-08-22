import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
const Hero = () => {
  const animations = {
    h2: {
      initial: { opacity: 0.1 },
      whileInView: { opacity: 1 },
    },
  };
  return (
    <section className="hero">
      <div className="hero-overlay">
        <motion.h2 {...animations.h2}>
          Innovate Boldly, Secure Confidently
        </motion.h2>

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
            wrapperClassName: "typewritterpara",
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
