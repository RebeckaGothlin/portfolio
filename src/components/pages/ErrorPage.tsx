import { Image } from "../Image";
import { Button } from "../Button";
import { Empty, EmptyDescription, EmptyImage, EmptyTitle } from "keep-react";
import { useNavigate } from "react-router-dom";

const EmptyComponent = () => {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="w-full lg:h-screen md:h-[550px] h-[830px] relative overflow-x-hidden flex justify-end font-poppins"
    >
      <Empty>
        <EmptyImage>
          <Image
            image="https://staticmania.cdn.prismic.io/staticmania/aa469681-b2d1-4384-a990-91906711a24d_Property+1%3DNight+sky_+Property+2%3DSm.svg"
            className="h-[234px] w-[350px"
            alt="404"
          />
        </EmptyImage>
        <EmptyTitle className="mb-[14px] mt-5">
          404 - Where Did You Go? 🗺️
        </EmptyTitle>
        <EmptyDescription className="mb-8">
          Uh-oh! You’ve stumbled upon a page that doesn’t exist. The good news? It’s just a minor detour on your adventure through my portfolio. Let’s get you back on track!
        </EmptyDescription>
        <Button
          type="button"
          className="px-5 py-3 text-white transition-all duration-300 ease-in border-none shadow-md outline-none rounded-1 lg:px-7 font-extralight bg-slateGray hover:shadow-none hover:bg-black hover:text-white hover:border-gray-950"
          onClick={() => navigate("/")}
        >
          Back to Home
        </Button>
      </Empty>
    </section>
  );
};

export default EmptyComponent; 