//import { Image } from "../Image";
import { Text } from "../Text";
import { Fade } from "react-awesome-reveal";
import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

const Footer = () => {
  /*   const dispatch = useDispatch();
  const navigate = useNavigate();
  const heroText = HeroTexts[0];

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Opens the FAQ modal via Redux dispatch
  const openFAQ = () => {
    dispatch(openfaqmodal());
  }; */

  return (
    <footer id="footer" className="flex flex-col w-full">
      <section
        id="about-me"
        className="relative flex flex-col items-center justify-center w-full h-full px-6 lg:px-24 md:px-20 font-poppins pt-[10vh] bg-cloudGray bg-opacity-30"
      >
        {/* Rubrik */}
        <main className="relative flex flex-col items-center justify-center w-full gap-3 -mt-[10vh]">
          <Text
            as="p"
            className="text-sm font-normal tracking-widest uppercase text-slateGray lg:text-base heading-contact"
          >
            <Fade duration={2000}>Contact</Fade>
          </Text>
        </main>

        {/* Innehållssektion */}
        <div className="flex flex-col md:flex-row items-stretch justify-center w-full gap-4 pt-0 mt-10 mb-10">
          {/* Bild */}

          {/* Text */}
          <div className="w-full md:w-2/3 text-center md:text-left mb-0 pb-0 contact-text">
            <p className="text-sm md:text-base text-gray-800 leading-relaxed text-center font-medium">
              I’d love to hear from you! If you’re looking for a passionate
              graphic designer with a strong technical background, let’s
              connect. I’m excited to discuss how I can contribute to your team
              and bring your ideas to life.
            </p>
            <p className="mt-9 text-sm text-center md:text-base text-gray-800 leading-relaxed contact-paragraph">
              Email:
            </p>
            <p className="text-sm md:text-base text-gray-800 leading-relaxed text-center font-medium">
              rebecka.gothlin@hotmail.com
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-6 mt-0 pt-0">
            <a
              href="https://github.com/RebeckaGothlin"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-3 mt-[-2.5px] pt-0 hover:scale-110 transition duration-300"
            >
              <GithubLogo size={85}
              color="currentColor"
              weight="fill"
              className="mb-10 pb-3"
               />
            </a>
            <a
              href="https://www.linkedin.com/in/rebecka-g%C3%B6thlin-963037280/"
              target="_blank"
              rel="noopener noreferrer"
              className=" rounded-full p-3 mt-0 pt-0 hover:scale-110 transition duration-300"
            >
              <LinkedinLogo 
              color="currentColor"
              weight="fill"
              size={85}
              className="mb-10 pb-3"
               />
            </a>
          </div>
          <div>
            <p className="mb-2 text-sm">© 2025 Rebecka Göthlin. All rights reserved.</p>
          </div>
      </section>
    </footer>
  );
};

export default Footer;
