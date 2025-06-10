import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Slide } from "react-awesome-reveal";
import Logo from "../../assets/logo/logo-large.svg";
import { Image } from "../Image";
import { ArrowCircleRight, CirclesFour } from "@phosphor-icons/react";

const NavBar: React.FC = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const handleToggleMenu = () => {
    setOpen(!open);
  };

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const section = document.getElementById(id);
    if (section) {
      const headerOffset = 80;
      const elementPosition =
        section.getBoundingClientRect().top + window.pageYOffset;

      let offsetPosition = elementPosition - headerOffset;

      if (id === "about-me") {
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

  const scrollToSectionMobile = (id: string) => {
    setActiveSection(id);
    const section = document.getElementById(id);
    if (section) {
      const headerOffset = 80;
      const elementPosition =
        section.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      handleToggleMenu();
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // const scrollToTopMobile = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  //   handleToggleMenu();
  // };

  const [navBarColor, setNavBarColor] = useState<boolean>(false);

  const listenScrollEvent = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    window.scrollY < 10 ? setNavBarColor(false) : setNavBarColor(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 z-50 w-full h-auto overflow-x-hidden bg-transparent">
      <Slide direction="down">
        <nav
          className={`w-screen md:h-24 h-20 ${
            navBarColor ? "bg-white" : "bg-white bg-opacity-70"
          } lg:px-24 md:px-12 px-8 flex justify-between items-center`}
        >
          <Image
            as="a"
            onClick={() => {
              navigate("/");
              scrollToTop();
            }}
            className="h-8 md:h-10 cursor-pointer logo-image"
            image={Logo}
            alt="Logo"
          />
          <ul className="hidden lg:flex items-center justify-center mr-15 gap-8 font-poppins font-light">
            <li>
              <NavLink
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("home");
                }}
                className={`relative inline-block overflow-hidden whitespace-nowrap hover:border-b-gray-950 hover:border-b ${
                  activeSection === "home" ? "font-medium" : ""
                }`}
              >
                Start
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("about-me");
                }}
                className={`relative inline-block overflow-hidden whitespace-nowrap hover:border-b-gray-950 hover:border-b ${
                  activeSection === "about-me" ? "font-medium" : ""
                }`}
              >
                About Me
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("projects");
                }}
                className={`relative inline-block overflow-hidden whitespace-nowrap hover:border-b-gray-950 hover:border-b ${
                  activeSection === "projects" ? "font-medium" : ""
                }`}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("footer");
                }}
                className={`relative inline-block overflow-hidden whitespace-nowrap hover:border-b-gray-950 hover:border-b ${
                  activeSection === "footer" ? "font-medium" : ""
                }`}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <a
                href="resume-rebecka-gothlin.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-[139px] h-[44px] whitespace-nowrap border-2 border-gray-950 before:top-0 py-2 px-8 relative z-10 before:content-[''] before:absolute before:left-0 before:w-full before:h-0 before:bg-cloudGray before:-z-10 hover:before:h-full before:transition-all before:duration-300 before:ease-in text-base ${
                  activeSection === "resume" ? "font-medium" : ""
                }`}
              >
                Resume
              </a>
            </li>
          </ul>
          <div className="flex items-center gap-4 lg:hidden">
            <div
              className="cursor-pointer hamburger text-slateGray"
              onClick={handleToggleMenu}
            >
              <CirclesFour size={30} color="slateGray" weight="fill" />
            </div>
          </div>
        </nav>
      </Slide>

      {/* Mobile Navigation */}
      <nav
        className={`font-poppins flex justify-end lg:hidden h-screen w-full bg-slateGray/90 fixed top-0 ${
          open ? "right-0" : "-right-[120vw]"
        } transition-all duration-500 ease-out`}
      >
        <div
          className={`w-[70%] h-screen bg-white flex flex-col justify-between items-center relative ${
            open ? "right-0" : "-right-[120px]"
          } transition-all duration-500 ease-out delay-300`}
        >
          <section className="flex flex-col w-full gap-16 px-4 py-6">
            <div className="flex items-center justify-between w-full">
              <Image
                as="a"
                href="/"
                className="h-12 md:h-10"
                image={Logo}
                alt="Logo"
              />
              <div
                className="cursor-pointer hamburger text-slateGray"
                onClick={handleToggleMenu}
              >
                <ArrowCircleRight size={30} color="slateGray" weight="fill" />
              </div>
            </div>
            <ul className="flex flex-col gap-3 pl-2">
              <li>
                <NavLink
                  to="#"
                  onClick={() => scrollToSectionMobile("home")}
                  className="relative inline-block overflow-hidden pt-2 whitespace-nowrap pl-4"
                >
                  Start
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  onClick={() => scrollToSectionMobile("about-me")}
                  className="relative inline-block overflow-hidden pt-2 whitespace-nowrap pl-4"
                >
                  About Me
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  onClick={() => scrollToSectionMobile("projects")}
                  className="relative inline-block overflow-hidden pt-2 whitespace-nowrap pl-4"
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  onClick={() => scrollToSectionMobile("footer")}
                  className="relative inline-block overflow-hidden pt-2 whitespace-nowrap pl-4 pb-10"
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <a
                  href="resume-english-2025.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-[139px] h-[44px] whitespace-nowrap border-2 border-gray-950 before:top-0 py-2 px-8 relative z-10 before:content-[''] before:absolute before:left-0 before:w-full before:h-0 before:bg-cloudGray before:-z-10 hover:before:h-full before:transition-all before:duration-300 before:ease-in text-left ${
                    activeSection === "resume" ? "font-medium" : ""
                  }`}
                >
                  Resume
                </a>
              </li>
            </ul>
          </section>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
