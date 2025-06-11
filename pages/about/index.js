import { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaSass,
  FaBootstrap,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiJquery,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiMongoose,
  SiPhp,
  SiPrisma,
  SiTypescript,
} from "react-icons/si";

// components
// import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

//  about data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Front End",
        icons: [
          {
            tooltip: "HTML",
            icon: <FaHtml5 />,
          },
          {
            tooltip: "CSS",
            icon: <FaCss3 />,
          },
          {
            tooltip: "Bootstrap",
            icon: <FaBootstrap />,
          },
          {
            tooltip: "Sass",
            icon: <FaSass />,
          },
          {
            tooltip: "Tailwindcss",
            icon: <SiTailwindcss />,
          },
          {
            tooltip: "JavaScript",
            icon: <FaJs />,
          },
          {
            tooltip: "JQuery",
            icon: <SiJquery />,
          },
          {
            tooltip: "React",
            icon: <FaReact />,
          },
          {
            tooltip: "Nextjs",
            icon: <SiNextdotjs />,
          },
          {
            tooltip: "Typescript",
            icon: <SiTypescript />,
          },
        ],
      },
      {
        title: "Back End",
        icons: [
          {
            tooltip: "Nodejs",
            icon: <FaNodeJs />,
          },
          {
            tooltip: "Expressjs",
            icon: <SiExpress />,
          },
          {
            tooltip: "Mongoose",
            icon: <SiMongoose />,
          },
          {
            tooltip: "Prisma",
            icon: <SiPrisma />,
          },
          {
            tooltip: "Php",
            icon: <SiPhp />,
          },
        ],
      },
      {
        title: "Database",
        icons: [
          {
            tooltip: "MongoDB",
            icon: <SiMongodb />,
          },
          {
            tooltip: "MySQL",
            icon: <SiMysql />,
          },
        ],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Junior Account Administrator - Leekie Enterprise",
        stage: "2016 - Present",
      },
    ],
  },
];

// counter
import CountUp from "react-countup";

export default function About() {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-20 xxs:py-32 text-center xl:text-left">
      <Circles />
      {/* avatar img */}
      {/* <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[230px]"
      >
        <Avatar />
      </motion.div> */}
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-[25px] xl:h2">
            Code, <span className="text-accent">Create, </span>Innovate.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto mb-1 xxs:mx-2  px-0 xxs:px-2 text-[12px] xxxs:text-base">
            {/* mb-6 xl:mb-12 */}
            I&apos;m a self-taught individual with a deep passion for Web
            Development.
          </motion.p>
          <motion.p
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto mb-1 xxs:mx-2  px-0 xxs:px-2 text-[12px] xxxs:text-base">
            My skills cover both Front End and Back End work, including
            Database.
          </motion.p>
          <motion.p
            variants={fadeIn("right", 0.7)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto mb-1 xxs:mx-2  px-0 xxs:px-2 text-[12px] xxxs:text-base">
            Got questions? Feel free to drop me a message through the contact
            form. Looking forward to connecting!
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.8)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
            {/* <div className="flex flex-1 xl:gap-x-6">
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>

              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={50} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  satisfied clients
                </div>
              </div>

              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={650} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  finished project
                </div>
              </div>

              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={8} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  winning awards
                </div>
              </div>
            </div> */}
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-red-600 after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 text-[12px] xxxs:text-base`}
                  onClick={() => setIndex(itemIndex)}>
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-10 flex flex-col gap-y-2 xl:gap-y-8 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
                  <div className="font-light mb-2 md:mb-0 text-[12px] xxxs:text-base">
                    {item.title}
                  </div>
                  <div className="hidden md:flex text-[12px] xxxs:text-base">
                    -
                  </div>
                  <div className="text-[12px] xxxs:text-base">{item.stage}</div>
                  <div className="flex gap-x-4">
                    {item.icons?.map((icon, itemIndex) => {
                      return (
                        <div
                          key={itemIndex}
                          className="text-sm xxxs:text-2xl text-white">
                          <div className="has-tooltip">
                            <span className="tooltip rounded shadow-lg p-1 bg-neutral-900 text-red-500 -mt-8 text-xs">
                              {icon.tooltip}
                            </span>
                            <div>{icon.icon}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
