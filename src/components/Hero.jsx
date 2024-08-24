import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { motion, useScroll, useTransform } from "framer-motion";
import Typewriter from "typewriter-effect";
import { gsap } from "gsap";
import SplitTextJS from "split-text-js";
import { AiOutlineArrowDown } from "react-icons/ai";

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
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-15, 0]);

  const animations = {
    h2: {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
    },
  };

  return (
    <motion.section style={{ rotate, scale }} className="hero">
      <div className="heroOverlay">
        <motion.h2 style={{ ...animations.h2 }} className="h2">
          Innovate Boldly, <br />
          Secure Confidently
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
            wrapperClassName: "typewriterpara",
          }}
        />
      </div>
      <div className="consultancy-section">
        <h2>Why Choose IBK</h2>
        <p className="consultancy-paragraph">
          In today&#39;s fast-paced and competitive business landscape, having a
          strong, cohesive brand presence, a robust digital infrastructure, and
          effective HR management is not just advantageous—it&#39;s essential
          for any business&#39; survival and growth. Our consultancy firm
          provides comprehensive services spanning branding and marketing, web
          design and development, HR management, data collection, and
          cybersecurity, ensuring that every facet of your business is optimized
          for success.
        </p>
        <p className="consultancy-paragraph">
          By partnering with us, you gain access to a multidisciplinary team of
          experts who deliver tailored solutions designed to enhance your brand
          visibility, secure your data, streamline your operations, and attract
          top talent. Unlike other firms, we offer a holistic approach that
          integrates these critical areas, ensuring that your business not only
          keeps up with market demands but also leads the way in innovation and
          efficiency.
        </p>
        <p className="consultancy-paragraph">
          Keeping our focus on quality, security, and strategic growth, we
          empower your business to thrive in an increasingly complex digital
          economy.
        </p>
      </div>
    </motion.section>
  );
};

const Banner = ({ scrollYProgress }) => {
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -15]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  useEffect(() => {
    const titles = gsap.utils.toArray(".textWrapper p");
    const tl = gsap.timeline();

    titles.forEach((title, index) => {
      const splitTitle = new SplitTextJS(title);
      tl.from(
        splitTitle.chars,
        {
          opacity: 0,
          y: 80,
          rotateX: -90,
          stagger: 0.04,
        },
        "<"
      ).to(
        splitTitle.chars,
        {
          opacity: 0,
          y: -80,
          rotateX: 90,
          stagger: 0.04,
        },
        "<1"
      );

      // After all titles have animated, show the final title with a typing effect
      if (index === titles.length - 1) {
        tl.call(() => {
          const finalTitle = document.querySelector(".fixedTitle");
          gsap.to(finalTitle, { opacity: 1, duration: 0 }); // Make it visible immediately

          // Typing effect
          const splitFinalTitle = new SplitTextJS(finalTitle, {
            type: "chars",
          });
          gsap.fromTo(
            splitFinalTitle.chars,
            { opacity: 0 },
            {
              opacity: 1,
              duration: 0.05,
              stagger: 0.05,
            }
          );
        });

        tl.call(() => {
          const subtitle = document.querySelector(".fixedText");
          gsap.to(subtitle, { opacity: 1, duration: 0 });

          const splitSubtitle = new SplitTextJS(subtitle, {
            type: "chars",
          });
          gsap.fromTo(
            splitSubtitle.chars,
            { opacity: 0 },
            { opacity: 1, duration: 0.05, stagger: 0.05, delay: 2.5 }
          );
        });
        tl.call(() => {
          const breathBtn = document.getElementById("btnBreath");
          gsap.fromTo(
            breathBtn,
            { opacity: 0, y: 50 },
            { y: 0, opacity: 1, delay: 6.5, duration: 0.7 }
          );
        });
      }
    });

    // Cleanup function to kill the timeline on unmount
    return () => {
      tl.kill();
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <motion.div style={{ rotate, scale }} className="banner">
      <div>
        <div className="textWrapper">
          <p>INSIGHT</p>
          <p>BRIDGE</p>
          <p>KENYA</p>
        </div>
        {/* This div will show the fixed title after the animation */}
        <div className="fixedTitle" style={{ opacity: 0 }}>
          <span>
            <q>Brand Brilliance Meets Digital Defense</q>
          </span>
        </div>
        <div className="fixedText" style={{ opacity: 0 }}>
          <span>
            Your go-to partner for digital marketing, human resources, and
            cybersecurity.
          </span>
        </div>

        <div className="more">
          <button id="btnBreath">
            <AiOutlineArrowDown />
          </button>
        </div>
      </div>
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
