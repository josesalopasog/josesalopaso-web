import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import NavButtons from "./NavButtons";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import projectOneImg from '../../assets/images/mercadofake-show.jpg';
import projectTwoImg from '../../assets/images/todoapp-show.jpg';
import githubIcon from '../../assets/svg/github-dark.svg';

import TechIcons from "./TechIcons";
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid';

const ProjectsSwiper = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full p-5 m-0'>
      <div style={{ width: "100%" }}>
        <Swiper
          effect={'coverflow'}
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
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
        >
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center w-[300px] h-[400px] p-5 bg-gray-950 rounded-lg m-0 gap-2" target="_blank">
              <h2 className='text-[30px]'>Mercado Fake</h2>
              <a href="https://josesalopasog.github.io/mercadofake-web/" target="_blank">
                <img src={projectOneImg.src} alt='project 1 img' className='rounded-lg my-1 transition-transform duration-300 hover:scale-110' />
              </a> 
              <p className='text-[12px]' data-lang="projectOneInfo"> An e-commerce clone inspired by Mercado Libre.</p>
              <TechIcons
                showReactIcon={true}
                showViteIcon={true}
                showTailwindIcon={true}
                showJSIcon={true}
                showHTMLIcon={true}
              />
              <NavButtons 
                WebURL={"https://josesalopasog.github.io/mercadofake-web/"} 
                GitURL={"https://github.com/josesalopasog/mercadofake-web"} 
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center w-[300px] h-[400px] p-5 bg-gray-950 rounded-lg m-0 gap-2">
              <h2>ToDo App</h2>
              <a href="https://josesalopasog.github.io/ToDo-App/" target="_blank">
                <img src={projectTwoImg.src} alt='project 2 img' className='rounded-lg my-1 transition-transform duration-300 hover:scale-110' />
              </a>
              <p className='text-[12px]' data-lang="projectTwoInfo">An web application to keep track of ToDo's</p>
              <TechIcons
                showReactIcon={true}
                showJSIcon={true}
                showHTMLIcon={true}
                showCSSIcon={true}
              />
              <NavButtons 
                WebURL={"https://josesalopasog.github.io/ToDo-App/"} 
                GitURL={"https://github.com/josesalopasog/ToDo-App"} 
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center w-[300px] h-[400px] p-5 bg-gray-950 rounded-lg m-0">
              <h2>Proyecto 3</h2>
              <p>Descripción 3</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-3 items-center justify-center w-[300px] h-[400px] p-5 bg-gray-950 rounded-lg m-0">
              <h2 className="m-0" data-lang="moreProjects">More Projects</h2>
              <p className="text-[14px]" data-lang="moreProjectsInfo">Check out my other projects on: </p>
              <a href="https://github.com/josesalopasog?tab=repositories" className="flex flex-row items-center justify-center gap-2 px-1 py-[2px] m-0 border border-white rounded-lg transition-transform duration-300 hover:scale-110" target='_blank'>
                <img src={githubIcon.src} alt='github icon' className='w-3 h-3' />
                <p className='text-[16px]'>GitHub</p>
                <ArrowTopRightOnSquareIcon className='w-3 h-3' />
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