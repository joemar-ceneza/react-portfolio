// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

// icons
import { BsArrowRight } from "react-icons/bs";

// next js image
import Image from "next/image";
import Link from "next/link";

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "our-home",
          path: "/our-home.jpg",
          link: "https://joemar-ceneza-our-home.netlify.app/",
        },
        {
          title: "e-commerce-camera-haus",
          path: "/e-commerce-camera-haus.jpg",
          link: "https://joemar-ceneza-camera-haus.netlify.app/",
        },
        {
          title: "nextauth-app",
          path: "/nextauth-app.jpg",
          link: "https://nextauth-app-joemar-ceneza.vercel.app/",
        },
        {
          title: "portfolio-v2",
          path: "/portfolio-v2.jpg",
          link: "https://joemar-ceneza.github.io/portfolio/",
        },
      ],
    },
    {
      images: [
        {
          title: "e-commerce-e-shopping",
          path: "/e-commerce-e-shopping.jpg",
          link: "https://joemar-ceneza-e-commerce-shopping.netlify.app/",
        },
        {
          title: "simon-game",
          path: "/simon-game.jpg",
          link: "https://joemar-ceneza.github.io/simon-game/",
        },
        {
          title: "todo-list",
          path: "/todo-list.jpg",
          link: "https://joemar-ceneza-todo-list.netlify.app/",
        },
        {
          title: "portfolio-v1",
          path: "/portfolio-v1.jpg",
          link: "https://joemarceneza.netlify.app/",
        },
      ],
    },
    {
      images: [
        {
          title: "crud",
          path: "/crud.jpg",
          link: "https://joemar-ceneza-crud.netlify.app/",
        },
        {
          title: "faq-accordion",
          path: "/faq-accordion.jpg",
          link: "https://joemar-ceneza.github.io/faq-accordion/",
        },
        {
          title: "huddle-landing-page",
          path: "/huddle-landing-page.jpg",
          link: "https://joemar-ceneza.github.io/huddle-landing-page/",
        },
        {
          title: "testimonials-slider",
          path: "/testimonials-slider.jpg",
          link: "https://joemar-ceneza.github.io/testimonials-slider/",
        },
      ],
    },
  ],
};

export default function WorkSlider() {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[200px] xxs:h-[280px] sm:h-[530px]">
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div
                    key={index}
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group">
                    <Link href={`${image.link}`} target="_blank">
                      <div className="flex items-center justify-center relative overflow-hidden">
                        {/* image */}
                        <Image src={image.path} width={500} height={500} alt="" />
                        {/* overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-300"></div>
                        {/* title */}
                        <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                          <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                            {/* title part 1 */}
                            <div className="delay-100">LIVE</div>
                            {/* title part 1 */}
                            <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                              PROJECT
                            </div>
                            {/* icon */}
                            <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                              <BsArrowRight />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
