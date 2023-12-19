import React from "react";
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
} from "./SVG/SVGS";

function TechContainer() {
  return (
    <>
      <article className="flex flex-col items-center justify-center mx-auto overflow-x-hidden ">
        <div className="flex flex-row items-center justify-center mx-auto overflow-x-hidden ">
          <div>
            <HTML width={150} height={150} />
            <h1 className="text-center">HTML</h1>
          </div>
          <div>
            <CSS width={150} height={150} />
            <h1 className="text-center">CSS</h1>
          </div>
          <div>
            <JavaScript width={150} height={150} />
            <h1 className="text-center">JavaScrpit</h1>
          </div>
          <div>
            <REACT width={150} height={150} />
            <h1 className="text-center">React</h1>
          </div>
          <div>
            <Git width={150} height={150} />
            <h1 className="text-center">Git</h1>
          </div>
          <div>
            <GitHub width={150} height={150} />
            <h1 className="text-center">GitHub</h1>
          </div>
          <div>
            <NodeJS width={150} height={150} />
            <h1 className="text-center">Node.js</h1>
          </div>
          <div>
            <MongoDB width={150} height={150} />
            <h1 className="text-center">MongoDB</h1>
          </div>
          <div>
            <MYSQL width={150} height={150} />
            <h1 className="text-center">MySQL</h1>
          </div>
          <div>
            <Tailwind width={150} height={150} />
            <h1 className="text-center">Tailwind CSS</h1>
          </div>
          <div>
            <Figma width={150} height={150} />
            <h1 className="text-center">Figma</h1>
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
