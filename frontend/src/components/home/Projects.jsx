import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import project from "/assets/projects/project.png";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".project-heading",
        // markers: true,
        start: "top center",
        end: "20% center",
        scrub: 1,
      },
    });
    tl.from(".project-heading-text", {
      scale: 4,
      autoAlpha: 0,
    }).from(".projects", {
      xPercent: 200,
    });
  });
  return (
    <>
      <div className="project-main-section  overflow-x-hidden overflow-y-visible py-4">
        <div className="project-sub-section">
          <div className="project-heading text-center uppercase ">
            <p className="project-heading-text text-[10rem] pt-10">PROjects</p>
            <div className="projects w-[80%] m-auto flex flex-wrap gap-3 items-center justify-center ">
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ProjectCard = () => {
  return (
    <>
      <div className="project-card-container w-[20rem] h-100 border-2 rounded-3xl relative overflow-hidden">
        <div className="project-img  ">
          <img src={project} alt="" srcset="" className="w-full object-cover" />
        </div>
        <div className="project-desc mt-2 px-5">
          <div className="project-heading text-3xl">Project Name</div>
          <div className="project-about text-left mt-1">
            <ul>
              <li>it is good</li>
              <li>It is responsive and implemented beautifully</li>
              <li>Intregated with payment gateway</li>
            </ul>
          </div>
          <div className="project-link"></div>
        </div>
        <div className="project-tools w-[20rem] h-100 border-2  opacity-0 hover:opacity-95 transition-all absolute  rounded-3xl top-0 bg-violet-900 flex justify-center items-center flex-wrap">
          <div className="flex justify-center items-center flex-wrap gap-3">
            <span className="border-2 rounded-full px-3">HTML</span>
            <span className="border-2 rounded-full px-3">REACT JS</span>
            <span className="border-2 rounded-full px-3">GSAP</span>
            <span className="border-2 rounded-full px-3">PAYMENT GATEWAY</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
