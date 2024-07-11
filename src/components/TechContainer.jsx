import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import {
  HTML,
  CSS,
  Figma,
  GitHub,
  Git,
  JavaScript,
  MongoDB,
  MYSQL,
  NodeJS,
  REACT,
  Tailwind,
  CSharp,
  NetCore,
} from "./SVG/SVGS";
gsap.registerPlugin(ScrollTrigger);
function TechContainer() {

  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    const images = container.querySelectorAll(".px-2");

    gsap.set(images, { y: 100, opacity: 0 });

    gsap.fromTo(
      images,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container,
        },
      }
    );
  }, []);


  return (
    <>
      <article className="flex flex-wrap items-center justify-center mx-auto overflow-x-hidden overflow-y-hidden  ">
        <div ref={containerRef}    className="flex flex-wrap justify-around  dark:text-white">
          <div className="px-2 py-4 md:px-3 mx-7 ">
            <HTML width={120} height={120} />
            <h1 className="text-center">HTML</h1>
          </div>

          <div className="px-2 py-4 md:px-3 mx-7">
            <CSS width={120} height={120} />
            <h1 className="text-center">CSS</h1>
          </div>
          <div className="px-2 py-4 md:px-3 mx-7 ">
            <JavaScript width={120} height={120} />
            <h1 className="text-center">JavaScrpit</h1>
          </div>

          <div className="px-2 py-4 md:px-3 mx-7 ">
            <REACT width={120} height={120} />
            <h1 className="text-center">React</h1>
          </div>

          <div className="px-2 py-4 md:px-3 mx-7 ">
            <Git width={120} height={120} />
            <h1 className="text-center">Git</h1>
          </div>
          <div className="px-2 py-4 md:px-3 ">
            <GitHub width={120} height={120} />
            <h1 className="text-center">GitHub</h1>
          </div>

          <div className="px-2 py-2 md:px-3 ">
            <NodeJS width={100} height={130} />
            <h1 className="text-center">Node.js</h1>
          </div>
          <div className="px-2 py-4 md:px-3 ">
            <MongoDB width={120} height={120} />
            <h1 className="text-center">MongoDB</h1>
          </div>
          <div className="px-2 py-5 md:px-3 ">
            <MYSQL width={120} height={120} />
            <h1 className="text-center">SQL</h1>
          </div>

          <div className="px-2 py-4 md:px-3 ">
            <Tailwind width={120} height={120} />
            <h1 className="text-center">Tailwind CSS</h1>
          </div>

          <div className="px-2 py-4 md:px-3 ">
            <CSharp width={120} height={120} />
            <h1 className="text-center">C#</h1>
          </div>

          <div className="px-2 py-4 md:px-3 ">
            <NetCore width={120} height={120} />
            <h1 className="text-center">.Net</h1>
          </div>
          </div>

        <div className=" flex py-10 items-center w-full">
          <div className="flex-grow border-t-2 border-gray-400"></div>
        </div>
      </article>
    </>
  );
}

export default TechContainer;
