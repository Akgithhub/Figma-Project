import React, { useEffect } from "react";
import pic4 from "../assets/pic4.png";
import pic5 from "../assets/pic5.png";
import pic6 from "../assets/pic6.png";
import { Link } from "react-router-dom";
import { Tilt } from "react-tilt";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
const Events = () => {
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
  // init Swiper:

  return (
    <>
      <div
        id="events"
        className="flex lg:flex-row flex-col  justify-center text-white max-h-auto w-full "
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
            <button className="btn bg-[#242323] rounded-full lg:w-[10vw] w-auto p-[2em] lg:p-[20px] h-[7vh] flex justify-around text-lg lg:text-xl font-semibold items-center hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-[#484545] hover:border-slate-400 hover:border-2 hover:-translate-y-4 dark:hover:bg-[#242323] dark:focus:ring-[#484545] hover:scale-125 transition-transform hover:ring-[#868181] sm:w-auto">
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
          <div className="line-explore">
            <h1 className="text-[3vh] font-bold text-white pb-[13vh]">
              Explore Your First Event
            </h1>
          </div>
          <div>
            <h1 className="text-[5vh] font-bold text-white pb-[2vh]">
              EVENT NAME
            </h1>
          </div>
          <div className="flex items-center gap-4 pb-[2vh]">
            <div className="text-[3vh] font-bold text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-map-pin"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <h1 className="text-[3vh] font-bold text-white">VENUE</h1>
            <div className="text-[3vh] font-bold text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-alarm-clock"
              >
                <circle cx="12" cy="13" r="8" />
                <path d="M12 9v4l2 2" />
                <path d="M5 3 2 6" />
                <path d="m22 6-3-3" />
                <path d="M6.38 18.7 4 21" />
                <path d="M17.64 18.67 20 21" />
              </svg>
            </div>
            <h1 className="text-[3vh] font-bold text-white">17/05/24 @19:00</h1>
          </div>
          <div className="text-[1rem] font-semibold text-white flex justify-center items-center leading-6 pr-[40px] pb-[8vh]">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
              consequare quod ullam. Esse aperiam aliquid officia, culpa in
              error atque maiores voluptates alias cupiditate?
            </p>
          </div>
          <div>
            <h1 className="text-[3vh] font-bold text-white">Artist Lineup</h1>
          </div>
          <div>
            <div className="card3 flex items-center justify-center pt-[8vh] pb-[10vh]">
              <Tilt options={defaultOptions}>
                <div className="group flex relative transition-all">
                  <div className="text-white p-2 rounded-lg shadow-lg">
                    <div className="text-center">
                      <img
                        src={pic5}
                        alt="Image 1"
                        className="rounded-2xl h-[20vh] w-full sm:w-auto md:w-[40vw] lg:w-[30vw] xl:w-[25vw] object-cover transform rotate-5"
                      />
                    </div>
                  </div>
                  <div className="text-white p-2 rounded-lg shadow-lg absolute top-[-17px] left-1/2 -translate-x-1/2 z-10">
                    <div className="text-center">
                      <img
                        src={pic4}
                        alt="Image 2"
                        className="rounded-2xl h-[25vh] w-auto md:w-[20vw] lg:w-[20vw] xl:w-[20vw] object-cover"
                      />
                    </div>
                  </div>
                  <div className="text-white p-2 rounded-lg shadow-lg">
                    <img
                      src={pic6}
                      alt="Image 3"
                      className="rounded-2xl h-[20vh] w-full sm:w-auto md:w-[40vw] lg:w-[30vw] xl:w-[25vw] object-cover transform -rotate-5"
                    />
                  </div>
                </div>
              </Tilt>
            </div>
          </div>
          <div className="flex justify-start items-center gap-[4vw] lg:flex-row sm:flex-col ">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="150"
                height="150"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-qr-code"
              >
                <rect width="5" height="5" x="3" y="3" rx="1" />
                <rect width="5" height="5" x="16" y="3" rx="1" />
                <rect width="5" height="5" x="3" y="16" rx="1" />
                <path d="M21 16h-3a2 2 0 0 0-2 2v3" />
                <path d="M21 21v.01" />
                <path d="M12 7v3a2 2 0 0 1-2 2H7" />
                <path d="M3 12h.01" />
                <path d="M12 3h.01" />
                <path d="M12 16v.01" />
                <path d="M16 12h1" />
                <path d="M21 12v.01" />
                <path d="M12 21v-1" />
              </svg>
            </div>
            <div className="bg-yellow-500 text-black text-[2vh] font-bold p-4 rounded-3xl border-2 ">
              <button>JOIN WAIT LIST</button>
            </div>
          </div>
          <button></button>
        </div>
      </div>
    </>
  );
};

export default Events;
