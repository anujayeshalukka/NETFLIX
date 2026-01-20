import React from 'react'
import MultiCarousel from "./MultiCarousel";
import slider1 from "../assets/slider1.webp";
import slider2 from "../assets/slider2.webp";
import slider3 from "../assets/slider3.webp";
import slider4 from "../assets/slider4.webp";
import slider5 from "../assets/slider5.webp";
import slider6 from "../assets/slider6.webp";
import slider7 from "../assets/slider7.webp";
import slider8 from "../assets/slider8.webp";
import slider9 from "../assets/slider9.webp";
import slider10 from "../assets/slider10.webp";


const data = [
  { title: "Stranger Things", image: slider1 },
  { title: "Money Heist", image: slider2 },
  { title: "Wednesday", image: slider3 },
  { title: "Squid Game", image: slider4 },
  { title: "Dark", image: slider5 },
  { title: "The Witcher", image: slider6 },
  { title: "Bridgerton", image: slider7 },
  { title: "The Crown", image: slider8 },
  { title: "Lucifer", image: slider9 },
  { title: "YOU", image: slider10 },
];


const Slider = () => {
  return (
    <div className="bg-black w-full">
      <div className="padding mt-10">
        <h2 className="text-white text-lg md:text-xl font-semibold mb-2">
          Trending Now
        </h2>
        <div className="flex items-center py-15">
          <MultiCarousel items={data} />
        </div>
      </div>
    </div>
  )
}

export default Slider