import React, { useEffect } from "react";
import pic4 from "../assets/pic4.png";
import pic5 from "../assets/pic5.png";
import pic6 from "../assets/pic6.png";
import { Link } from "react-router-dom";
import { Tilt } from "react-tilt";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { Avatar } from "@chakra-ui/react";

const Collections = () => {
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      effect: "cards",
      cardsEffect: {
        perSlideOffset: 8, // Offset distance per slide (in px)
        perSlideRotate: 2, // Rotate angle per slide (in degrees)
        rotate: true, // Enables cards rotation
        slideShadows: true, // Enables slide shadows
      },

      // Optional parameters
      direction: "horizontal",
      loop: true,

      // Autoplay configuration
      autoplay: {
        delay: 3000, // Delay between transitions (in milliseconds)
        disableOnInteraction: false, // Autoplay will not be disabled after user interactions
      },
      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      // If we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });
  }, []);
  const defaultOptions = {
    reverse: true, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.2, // 2 = 200%, 1.5 = 150%, etc..
    speed: 100, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };
  return (
    <>
      <div
        id="events"
        className="flex lg:flex-row flex-col  justify-center text-white max-h-auto w-full sm:pl-6 "
      >
        <div className="flex flex-col justify-start items-start w-full lg:w-[46vw] bg-[#1a1919] pl-[4vw] relative sm:h-auto">
          <div className="flex items-center gap-6 pt-[3vh] pb-[3vh]">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8em"
                height="8em"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#facc15"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-badge-swiss-franc"
              >
                <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                <path d="M11 17V8h4" />
                <path d="M11 12h3" />
                <path d="M9 16h4" />
              </svg>
            </div>
            <h1 className="text-yellow-400 text-4xl lg:text-5xl font-bold">
              Astrix .
            </h1>
          </div>
          <div className="flex gap-0 lg:pt-[4vh]">
            <h1 className="text-[#242323] text-4xl lg:text-[15vh] font-bold leading-none">
              ASTR
            </h1>
            <h1 className="text-[#242323] text-4xl lg:text-[15vh] font-bold leading-none">
              XR
            </h1>
          </div>
          <div className="cardss lg:absolute lg:top-[10vh]  lg:right-[8vw] cursor-pointer absolute right-[20vw] sm:pt-[10vh]">
            <Tilt options={defaultOptions}>
              <div className="swiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <h1 className="font-semibold text-white text-[4vh]">
                      IRONMAN
                    </h1>
                    <img
                      src={pic4}
                      alt="Slide 1"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="swiper-slide">
                    <h1 className="font-semibold text-white text-[4vh]">
                      DR.STRANGE
                    </h1>
                    <img
                      src={pic5}
                      alt="Slide 2"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="swiper-slide">
                    <h1 className="font-semibold text-white text-[4vh]">
                      SPIDERMAN
                    </h1>
                    <img
                      src={pic6}
                      alt="Slide 3"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Add more slides as needed */}
                </div>

                <div className="swiper-pagination"></div>

                <div className="swiper-button-prev text-red-700"></div>
                <div className="swiper-button-next text-red-700"></div>
              </div>
            </Tilt>
          </div>
          <div className="flex gap-0 lg:pt-[20vh]">
            <h1 className="text-[#242323] text-4xl lg:text-[15vh] font-bold leading-none">
              EVE
            </h1>
            <h1 className="text-[#242323] text-4xl lg:text-[15vh] font-bold leading-none">
              NTS
            </h1>
          </div>
          <div className="main-btn flex lg:flex-row lg:pt-[40vh] pb-[5vh] gap-4 z-10 sm:pt-[8vh] sm:flex-col">
            <button className="btn bg-[#242323] rounded-full w-full lg:w-[10vw] p-[2em] lg:p-[20px] h-[7vh] flex justify-around text-lg lg:text-xl font-semibold items-center hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-[#484545] hover:border-slate-400 hover:border-2 hover:-translate-y-4 dark:hover:bg-[#242323] dark:focus:ring-[#484545] hover:scale-125 transition-transform hover:ring-[#868181]">
              <Link to={"/"}>EVENTS</Link>
            </button>
            <button className="bg-[#242323] rounded-full lg:w-[10vw] w-auto p-[2em] lg:p-[20px] h-[7vh] flex justify-around text-lg lg:text-xl font-semibold items-center hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-[#484545] hover:border-slate-400 hover:border-2 hover:-translate-y-4 dark:hover:bg-[#242323] dark:focus:ring-[#484545] hover:scale-125 transition-transform hover:ring-[#868181] sm:w-auto">
              <Link to={"/collection"}>COLLECTION</Link>
            </button>
          </div>
        </div>
        <div className="vertical-scroll-container flex justify-center items-center w-[5vw] bg-purple-300 text-black font-bold text-[6vh]">
          <div className="vertical-scroll-text tracking-tighter">
            @Loremi#psumdolorsitam3etcoj68sdsgfg
          </div>
        </div>
        <div className="flex flex-col justify-start items-start lg:w-[30vw] w-full bg-[#1a1919] pl-[40px]">
          <div className="line-explore flex flex-col pt-[6vh]">
            <h1 className="text-[3vh] font-bold text-white ">
              Explore Your First
            </h1>
            <h1 className="text-[3vh] font-bold text-white pb-[10vh]">
              Collectible
            </h1>
          </div>
          <div>
            <h1 className="text-[5vh] font-bold text-white pb-[2vh] ">
              META LIVES
            </h1>
          </div>
          <div className="flex items-center gap-4 pb-[2vh]">
            <h1 className="text-white font-bold text-[3vh]">Live in Astrix.</h1>
          </div>
          <div className="text-[1rem] font-semibold text-white flex justify-center items-center leading-6 pr-[40px] pb-[8vh]">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
              consequare quod ullam. Esse aperiam aliquid officia, culpa in
              error atque maiores voluptates alias cupiditate?
            </p>
          </div>

          <div className="avatar flex flex-col gap-[1vw] justify-center ">
            <div className="avatar-ico lg:flex">
              <Avatar name=".">
                <div>
                  <img
                    src={pic5}
                    alt=""
                    className="rounded-full h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 hover:scale-125 transition-all"
                  />
                </div>
              </Avatar>
              <Avatar name=".">
                <div>
                  <img
                    src={pic6}
                    alt=""
                    className="rounded-full h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 hover:scale-125 transition-all"
                  />
                </div>
              </Avatar>
              <Avatar name=".">
                <div>
                  <img
                    src={pic4}
                    alt=""
                    className="rounded-full h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 hover:scale-125 transition-all"
                  />
                </div>
              </Avatar>
              <Avatar name=".">
                <div>
                  <img
                    src="https://bit.ly/code-beast"
                    alt=""
                    className="rounded-full h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 hover:scale-125 transition-all"
                  />
                </div>
              </Avatar>
              <Avatar name=".">
                <div>
                  <img
                    src="https://bit.ly/prosper-baba"
                    alt=""
                    className="rounded-full h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 hover:scale-125 transition-all"
                  />
                </div>
              </Avatar>
            </div>
            <div>
              <h1 className="font-semibold ">22K people Intreased</h1>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center pb-[2vh] pt-[10vh]">
              <h1 className="text-[2vh] font-semibold">Collectibles</h1>
            </div>
          </div>
          <div className="card--wrap flex flex-row lg:flex-row justify-center items-center gap-[7px]">
            <div className="car-1 hover:scale-110 transition-all text-white w-full sm:w-[22vw] md:w-[15vw] lg:w-[10vw] xl:w-[8vw] h-auto border-2 border-white rounded-2xl p-2 sm:p-2 md:p-2">
              <img src={pic4} alt="" className="rounded-2xl" />
              <p className=" font-semibold bg-[#333232] rounded-xl p-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="car-1 hover:scale-110 transition-all text-white w-full sm:w-[22vw] md:w-[15vw] lg:w-[10vw] xl:w-[8vw] h-auto border-2 border-white rounded-2xl p-2 sm:p-2 md:p-2">
              <img src={pic5} alt="" className="rounded-2xl" />
              <p className=" font-semibold bg-[#333232] rounded-xl p-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="car-1 hover:scale-110 transition-all text-white w-full sm:w-[22vw] md:w-[15vw] lg:w-[10vw] xl:w-[8vw] h-auto border-2 border-white rounded-2xl p-2 sm:p-2 md:p-2">
              <img src={pic6} alt="" className="rounded-2xl" />
              <p className=" font-semibold bg-[#333232] rounded-xl p-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="bg-yellow-500 text-[2vh] font-bold p-4 rounded-3xl text-slate-800 mt-[6vh] hover:scale-125 transition-all ">
            <button>JOIN WAITLIST</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collections;
