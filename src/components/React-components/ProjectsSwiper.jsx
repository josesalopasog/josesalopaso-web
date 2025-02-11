import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import SourceButtons from "./SourceButtons";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../styles/ProjectsSwiper.css";

import projectOneImg from "../../assets/images/ui-cyberjs-show.jpg";
import projectTwoImg from "../../assets/images/mercadofake-show.jpg";
import projectThreeImg from "../../assets/images/todoapp-show.jpg";

import TechIcons from "./TechIcons";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import { GithubIcon } from "../../icons";

const ProjectsSwiper = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-[25px] m-0">
      <div style={{ width: "100%" }}>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          initialSlide={0}
          slidesPerView={2}
          spaceBetween={30}
          coverflowEffect={{
            rotate: 2,
            stretch: 10,
            depth: 100,
            modifier: 2,
            slideShadows: true,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
        >
          <SwiperSlide>
            <div
              className="swiper-slide"
              target="_blank"
            >
              <h2 className="project-title">CyberJS UI</h2>
              <a
                href="https://ui-cyberjs.netlify.app/"
                target="_blank"
              >
                <img
                  src={projectOneImg.src}
                  alt="project 1 img"
                  className="rounded-lg my-1 transition-transform duration-300 hover:scale-110"
                />
              </a>
              <p className="project-info" data-lang="projectOneInfo">
                {" "}
                This project is primarily focused on animations and UI/UX enhancements.
              </p>
              <TechIcons
                showReactIcon={true}
                showViteIcon={true}
                showTailwindIcon={true}
                showJSIcon={true}
                showHTMLIcon={true}
              />
              <SourceButtons
                WebURL={"https://ui-cyberjs.netlify.app/"}
                GitURL={"https://github.com/josesalopasog/ui-cyberjs-web"}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="swiper-slide"
              target="_blank"
            >
              <h2 className="project-title">Mercado Fake</h2>
              <a
                href="https://josesalopasog.github.io/mercadofake-web/"
                target="_blank"
              >
                <img
                  src={projectTwoImg.src}
                  alt="project 2 img"
                  className="rounded-lg my-1 transition-transform duration-300 hover:scale-110"
                />
              </a>
              <p className="project-info" data-lang="projectOneInfo">
                {" "}
                An e-commerce clone inspired by Mercado Libre.
              </p>
              <TechIcons
                showReactIcon={true}
                showViteIcon={true}
                showTailwindIcon={true}
                showJSIcon={true}
                showHTMLIcon={true}
              />
              <SourceButtons
                WebURL={"https://josesalopasog.github.io/mercadofake-web/"}
                GitURL={"https://github.com/josesalopasog/mercadofake-web"}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide">
              <h2 className="project-title" >ToDo App</h2>
              <a
                href="https://josesalopasog.github.io/ToDo-App/"
                target="_blank"
              >
                <img
                  src={projectThreeImg.src}
                  alt="project 3 img"
                  className="rounded-lg my-1 transition-transform duration-300 hover:scale-110"
                />
              </a>
              <p className="project-info" data-lang="projectTwoInfo">
                An web application to keep track of ToDo's
              </p>
              <TechIcons
                showReactIcon={true}
                showJSIcon={true}
                showHTMLIcon={true}
                showCSSIcon={true}
              />
              <SourceButtons
                WebURL={"https://josesalopasog.github.io/ToDo-App/"}
                GitURL={"https://github.com/josesalopasog/ToDo-App"}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide gap-3">
              <h2 className="m-0" data-lang="moreProjects">
                More Projects
              </h2>
              <p className="text-[14px]" data-lang="moreProjectsInfo">
                Check out my other projects on:{" "}
              </p>
              <a
                href="https://github.com/josesalopasog?tab=repositories"
                className="flex flex-row items-center justify-center gap-2 px-1 py-[2px] m-0 border border-black dark:border-white rounded-lg transition-transform duration-300 hover:scale-110"
                target="_blank"
              >
                <GithubIcon className='w-3 h-3 text-black dark:text-white' />
                <p className="text-[16px]">GitHub</p>
                <ArrowTopRightOnSquareIcon className="w-3 h-3 text-black dark:text-white" />
              </a>
            </div>
          </SwiperSlide>

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow transition-colors duration-3000"></div>
            <div className="swiper-button-next slider-arrow transition-colors duration-3000"></div>
          </div>
        </Swiper>

        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default ProjectsSwiper;
