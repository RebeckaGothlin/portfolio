import { Fade } from "react-awesome-reveal";
import { Text } from "../Text";
import { Image } from "../Image";
import OnMe from "../../assets/Me.jpg";
//import { Card } from "../Cards";

const ServicesSection = () => {
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  return (
    <>
      <section
        id="about-me"
        className="relative flex flex-col items-center justify-center w-full h-full px-6 lg:px-24 md:px-20 font-poppins pt-[10vh] bg-cloudGray bg-opacity-30 drop-shadow-md about-me-section"
      >
        {/* Rubrik */}
        <main className="relative flex flex-col items-center justify-center w-full gap-3 -mt-[10vh]">
          <Text
            as="p"
            className="text-sm font-normal tracking-widest uppercase text-slateGray lg:text-base heading-aboutme"
          >
            <Fade duration={2000}>About Me</Fade>
          </Text>
        </main>

        {/* Innehållssektion */}
        <div className="flex flex-col md:flex-row items-stretch justify-center w-full gap-4 pt-0 mt-10 mb-10">
          {/* Bild */}
          <div className="flex-shrink-0 flex items-stretch justify-center">
            <Image
              image={OnMe}
              alt="Your Name"
              className={`rounded-full object-cover w-auto mr-5 h-[234px] aboutme-image ${
                isSafari ? "hidden" : ""
              }`}
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-2/3 text-center md:text-left mb-10 aboutme-text">
            <p className="text-sm md:text-base text-gray-800 leading-relaxed">
              I’m a frontend developer with a strong technical foundation, but
              my true passion lies in graphic design. My education has equipped
              me with the skills to build functional, engaging digital
              experiences, but it’s through design that I feel I can make the
              greatest impact—creating visually compelling, user-centered
              solutions.
            </p>
            <p className="mt-4 text-sm md:text-base text-gray-800 leading-relaxed">
              I'm excited to merge my technical background with my love for
              design to create projects that are both beautiful and functional.
              Explore my portfolio to see how I bring ideas to life, and feel
              free to check out my Resume for more details about my education
              and experience.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
