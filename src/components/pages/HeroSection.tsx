import { useState } from "react";
import { Text } from "../Text";
import { Fade, Slide } from "react-awesome-reveal";
import { Button } from "../Button";
import { HeroTexts } from "../data/DataLists";
import ColorSplashLeft from "../../assets/color-splash-left.png";
import ColorSplashRight from "../../assets/color-splash-right.png";
import { Image } from "../Image";
import "./heroSection.css";

const HeroSection = () => {
  const heroText = HeroTexts[0];
  const [activeSection, setActiveSection] = useState<string>("");

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const section = document.getElementById(id);
    if (section) {
      const headerOffset = 80;
      const elementPosition =
        section.getBoundingClientRect().top + window.pageYOffset;

      let offsetPosition = elementPosition - headerOffset;

      if (id === "projects") {
        const viewportHeight = window.innerHeight;
        const sectionHeight = section.offsetHeight;
        const centerOffset = (viewportHeight - sectionHeight) / 2;
        offsetPosition -= centerOffset;
      }

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // const scrollToSectionMobile = (id: string) => {
  //   setActiveSection(id);
  //   const section = document.getElementById(id);
  //   if (section) {
  //     const headerOffset = 80;
  //     const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
  //     const offsetPosition = elementPosition - headerOffset;

  //     window.scrollTo({
  //       top: offsetPosition,
  //       behavior: "smooth",
  //     });
  //     handleToggleMenu();
  //   }
  // };

  return (
    <>
      <section
        id="home"
        className="relative w-full h-[120vh] overflow-visible flex justify-center items-center font-poppins hero-section"
      >
        <section className="absolute top-0 left-0 w-full h-full flex justify-between items-center px-4 lg:px-12">
          <Image
            className="absolute bottom-[-20vh] left-0 w-2/4 lg:w-2/5 h-auto object-contain z-20 responsive-color-splash-left"
            image={ColorSplashLeft}
            alt="Background color splash image"
          />
          <Image
            className="absolute bottom-[-20vh] right-0 w-2/4 lg:w-2/5 h-auto object-contain z-20 responsive-color-splash-right"
            image={ColorSplashRight}
            alt="Background color splash image"
          />
        </section>

        {/* Main content section */}
        <main className="z-10 grid w-full h-auto px-5 lg:px-24 md:grid-cols-2 items-center mt-10">
          <div className="flex flex-col justify-center gap-3 lg:gap-6">
            <Text
              as="p"
              className="text-sm font-normal tracking-widest uppercase text-slateGray lg:text-base hero-text-first"
            >
              <Fade duration={2000}>{heroText.firstText}</Fade>
            </Text>
            <Text
              as="h1"
              className="text-3xl font-medium text-gray-600 lg:text-7xl md:text-5xl hero-text-big"
            >
              <Slide direction="right" duration={1200}>
                {heroText.bigText}
              </Slide>
            </Text>
            <Text
              as="p"
              className="text-sm font-light text-justify text-gray-600 md:text-base hero-text-second"
            >
              <Fade className="hero-text-second1" duration={2000}>{heroText.secondText1}</Fade>
              <Fade className="hero-text-second2" duration={2000}>{heroText.secondText2}</Fade>
              <Fade className="hero-text-second3" duration={2000}>{heroText.secondText3}</Fade>
            </Text>
            <div className="flex items-center gap-6">
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("projects");
                }}
                type="button"
                className={`shadow-md px-5 py-3 text-white bg-slateGray hover:shadow-none hover:bg-black transition-all duration-300 ease-in rounded-none ${
                  activeSection === "projects" ? "font-medium" : ""
                }`}
              >
                Projects
              </Button>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default HeroSection;
