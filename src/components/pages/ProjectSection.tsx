import { useRef } from "react";
import Slider from "react-slick";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Text } from "../Text";
import { Fade } from "react-awesome-reveal";

const ProjectsSection = () => {
  const sliderRef = useRef<Slider | null>(null);

  const next = () => {
    if (sliderRef.current) {
      // Kontrollera om sliderRef.current existerar
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      // Kontrollera om sliderRef.current existerar
      sliderRef.current.slickPrev();
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const images = [
    {
      id: 1,
      src: "/ecotrip.png",
      alt: "EcoTrip",
      title: "EcoTrip",
      description: "An app for planning trips sustainably.",
      githubLink:
        "https://github.com/RebeckaGothlin/exjobb-EcoTrip-RebeckaGothlin",
      deployLink: "https://exjobb-eco-trip-rebecka-gothlin.vercel.app/",
    },
    {
      id: 2,
      src: "/ambassador-figma.png",
      alt: "Image of figma design of the Ambassadors page",
      title: "Figma design",
      description: "A Figma wireframe for Ambassadors page",
      githubLink: "",
      deployLink:
        "https://www.figma.com/proto/08cDJa5lX23ZBA1B061sKR/UX-Group-assignment?page-id=0%3A1&type=design&node-id=6-4&viewport=770%2C982%2C0.15&t=qhCQQt7FABDMi2gB-1&scaling=scale-down&starting-point-node-id=6%3A4&show-proto-sidebar=1&mode=design",
    },
    {
      id: 3,
      src: "/ambassador-landing.png",
      alt: "Image of the Ambassadors page",
      title: "OpenAQ Ambassadors",
      description: "The OpenAQ Ambassadors Program landing page",
      githubLink: "https://github.com/openaq/ambassadors.openaq.org",
      deployLink: "https://ambassadors.openaq.org/",
    },
    {
      id: 4,
      src: "/atelierpoppy.png",
      alt: "Image of the Atelier Poppy page",
      title: "Atelier Poppy",
      description:
        "An art portfolio made using React, showcasing drawings and other creations.",
      githubLink: "https://github.com/RebeckaGothlin/atelier-poppy",
      deployLink: "https://atelier-poppy.vercel.app/",
    },
    {
      id: 5,
      src: "/API-notes.png",
      alt: "API notes",
      title: "API notes",
      description: "A document system where you can create blog posts.",
      githubLink: "https://github.com/RebeckaGothlin/API-notes",
      deployLink: "",
    },
    {
      id: 6,
      src: "/the-zoo.png",
      alt: "The Zoo",
      title: "The Zoo",
      description: "An interactive and fun animal feeding simulation.",
      githubLink: "https://github.com/RebeckaGothlin/react-thezoo",
      deployLink: "https://rebeckagothlin.github.io/react-thezoo/",
    },
    {
      id: 7,
      src: "/tic-tac-toe.png",
      alt: "Tic Tac Toe",
      title: "Tic Tac Toe",
      description: "A game app - play Tic Tac Toe!",
      githubLink: "https://github.com/RebeckaGothlin/vue-tic-tac-toe",
      deployLink: "https://rebeckagothlin.github.io/vue-tic-tac-toe/",
    },
    {
      id: 8,
      src: "/quiz.png",
      alt: "Quiz",
      title: "Quiz",
      description: "A quiz where you answer tricky questions.",
      githubLink: "https://github.com/RebeckaGothlin/quiz-typescript-js",
      deployLink: "",
    },
    {
      id: 9,
      src: "/webshop-js.png",
      alt: "Webshop",
      title: "Webshop",
      description: "A webshop where you can shop sweets.",
      githubLink: "https://github.com/RebeckaGothlin/webshop-javascript",
      deployLink:
        "https://medieinstitutet.github.io/fed23d-js-grundkurs-webshop-RebeckaGothlin/",
    },
    {
      id: 10,
      src: "/toughcookie.jpg",
      alt: "Tough Cookie",
      title: "Tough Cookie",
      description: "A design made using SCSS and html.",
      githubLink:
        "https://github.com/RebeckaGothlin/html-css-inlamning2-tough-cookie",
      deployLink: "",
    },
    {
      id: 11,
      src: "/af.png",
      alt: "Image of Arbetsportalen Start Page",
      title: "Arbetsportalen",
      description:
        "A job search tool that helps users find relevant job postings.",
      githubLink: "https://github.com/RebeckaGothlin/react-jobsearch",
      deployLink: "",
    },
    {
      id: 12,
      src: "/wwf-prototype.png",
      alt: "Image of WWF prototype Wireframe Start Page",
      title: "WWF Prototype (Figma)",
      description: "A Figma wireframe prototype for a WWF campaign.",
      githubLink: "",
      deployLink:
        "https://www.figma.com/proto/08cDJa5lX23ZBA1B061sKR/UX-Group-assignment?page-id=0%3A1&type=design&node-id=6-4&viewport=770%2C982%2C0.15&t=qhCQQt7FABDMi2gB-1&scaling=scale-down&starting-point-node-id=6%3A4&show-proto-sidebar=1&mode=design",
    },
  ];

  return (
    <section
      id="projects"
      className="relative w-full h-auto px-4 py-8 mt-12 mb-12 font-poppins bg-cloudGray bg-opacity-30 drop-shadow-md"
    >
      <Text
        as="p"
        className="text-sm font-normal tracking-widest uppercase text-slateGray lg:text-base heading-projects text-center mb-12"
      >
        <Fade duration={2000}>Projects</Fade>
      </Text>

      <div className="flex items-center justify-between mb-5">
        <button
          onClick={previous}
          className="p-2 bg-slateGray rounded-full text-white hover:bg-gray-800 ml-2"
        >
          <CaretLeft size={15} />
        </button>
        <button
          onClick={next}
          className="p-2 bg-slateGray rounded-full text-white hover:bg-gray-800 mr-2"
        >
          <CaretRight size={15} />
        </button>
      </div>

      <Slider ref={sliderRef} {...settings}>
        {images.map((image) => (
          <div key={image.id} className="px-2 font-poppins">
            <div className="relative overflow-hidden rounded-lg group h-[380px] mb-10 projects-image">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-85 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-slateGray bg-opacity-60 p-4 projects-card">
                <h3 className="text-white text-lg font-semibold mb-2 font-poppins projects-heading">
                  {image.title}
                </h3>
                <p className="text-white text-sm mb-4 project-description">
                  {image.description}
                </p>
                <div className="flex justify-between gap-4">
                  <a
                    href={image.githubLink || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`shadow-md text-white bg-slateGray hover:shadow-none hover:bg-black transition-all duration-300 ease-in py-2 px-4 ${
                      !image.githubLink
                        ? "cursor-not-allowed opacity-50 pointer-events-none"
                        : ""
                    }`}
                  >
                    GitHub
                  </a>
                  <a
                    href={image.id === 2 ? image.src : image.deployLink || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`shadow-md text-white bg-slateGray hover:shadow-none hover:bg-black transition-all duration-300 ease-in py-2 px-4 ${
                      !image.deployLink
                        ? "cursor-not-allowed opacity-50 pointer-events-none"
                        : ""
                    }`}
                  >
                    Deployed
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ProjectsSection;
