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
      src: "../../src/assets/projects/ecotrip.png",
      alt: "Bild 1",
      title: "EcoTrip",
      description: "An app for planning trips sustainably.",
      githubLink:
        "https://github.com/RebeckaGothlin/exjobb-EcoTrip-RebeckaGothlin",
      deployLink: "https://exjobb-eco-trip-rebecka-gothlin.vercel.app/",
    },
    {
      id: 2,
      src: "../../src/assets/projects/API-notes.png",
      alt: "Bild 2",
      title: "API notes",
      description: "A document system where you can create blog posts.",
      githubLink: "https://github.com/RebeckaGothlin/API-notes",
      deployLink: "",
    },
    {
      id: 3,
      src: "../../src/assets/projects/the-zoo.png",
      alt: "Bild 3",
      title: "The Zoo",
      description: "An interactive and fun animal feeding simulation.",
      githubLink: "https://github.com/RebeckaGothlin/react-thezoo",
      deployLink: "https://rebeckagothlin.github.io/react-thezoo/",
    },
    {
      id: 4,
      src: "../../src/assets/projects/tic-tac-toe.png",
      alt: "Bild 4",
      title: "Tic Tac Toe",
      description: "A game app - play Tic Tac Toe!",
      githubLink: "https://github.com/RebeckaGothlin/vue-tic-tac-toe",
      deployLink: "https://rebeckagothlin.github.io/vue-tic-tac-toe/",
    },
    {
      id: 5,
      src: "../../src/assets/projects/quiz.png",
      alt: "Bild 5",
      title: "Quiz",
      description: "A quiz where you answer tricky questions.",
      githubLink: "https://github.com/RebeckaGothlin/quiz-typescript-js",
      deployLink: "",
    },
    {
      id: 6,
      src: "../../src/assets/projects/webshop-js.png",
      alt: "Bild 6",
      title: "Webshop",
      description: "A webshop where you can shop sweets.",
      githubLink: "https://github.com/RebeckaGothlin/webshop-javascript",
      deployLink:
        "https://medieinstitutet.github.io/fed23d-js-grundkurs-webshop-RebeckaGothlin/",
    },
    {
      id: 7,
      src: "../../src/assets/projects/toughcookie.jpg",
      alt: "Bild 7",
      title: "Tough Cookie",
      description: "A design made using SCSS and html.",
      githubLink:
        "https://github.com/RebeckaGothlin/html-css-inlamning2-tough-cookie",
      deployLink: "",
    },
    {
      id: 8,
      src: "../../src/assets/projects/af-group.png",
      alt: "Image of JobbNavigator Start Page",
      title: "Arbetsportalen",
      description:
        "A job search tool that helps users find relevant job postings.",
      githubLink: "https://github.com/RebeckaGothlin/react-jobsearch",
      deployLink: "",
    },
    {
      id: 9,
      src: "../../src/assets/projects/wwf-prototype.png",
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
                <p className="text-white text-sm mb-4 project-description">{image.description}</p>
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
                    href={image.deployLink || "#"}
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
