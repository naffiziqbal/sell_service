import React from "react";

const HeroSection = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">CinemaWala </h1>
            <p className="mb-5">
              A Professional Photographer Who Captures Time and Live in Moment
            </p>
            <button className="btn btn-primary">Blog</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
