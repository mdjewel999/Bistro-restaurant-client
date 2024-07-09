import { Parallax } from "react-parallax";
const Cover = ({ img, title }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the menu"
      strength={-200}
    >
      {" "}
      <div className="hero h-[600px] max-sm:h-[250px]">
        <div className="hero-overlay"></div>
        <div className="hero-content text-white text-center">
          <div className="px-48 py-12 rounded-lg opacity-60 bg-[#000101] ">
            <h1 className="mb-5 text-5xl  font-bold uppercase">{title}</h1>
            <p className="mb-5 uppercase">
            Would You Like To Try A Dish?
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
