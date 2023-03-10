import React from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import {
  DiscoverDubai,
  SRadio,
  RecipeProject,
  ToDoProject,
  DogApiProject,
  PhotographerProject,
  PexonProject,
  NostalgiaProject,
} from "../components/projects/index.js";
import Lights from "../Assets/Lights.jpg";

const Projects = (theme) => {
  return (
    <ProjectsContainer id="Projects">
      <ProjectsDiv>
        <H1>Chosen Projects</H1>
        <Splide
          options={{
            autoplay: true,
            type: "loop",
            interval: 3800,
            speed: 2000,
            width: "100%",
            pagination: true,
            start: 1,
            perMove: 1,
            perPage: 2,
            breakpoints: {
              900: {
                perPage: 1,
              },
            },
            fixedHeight: "27rem",
            padding: 40,
            focus: "center",
            trimSpace: false,
            label: "My Carousel",
            drag: "free",
            gap: "20rem",
            arrows: false,
          }}
        >
          <SplideSlide>
            <DiscoverDubai />
          </SplideSlide>
          <SplideSlide>
            <SRadio />
          </SplideSlide>

          <SplideSlide>
            <RecipeProject />
          </SplideSlide>
          <SplideSlide>
            <PexonProject />
          </SplideSlide>
          <SplideSlide>
            <ToDoProject />
          </SplideSlide>
          <SplideSlide>
            <DogApiProject />
          </SplideSlide>
          <SplideSlide>
            <PhotographerProject />
          </SplideSlide>
          <SplideSlide>
            <NostalgiaProject />
          </SplideSlide>
        </Splide>
      </ProjectsDiv>
    </ProjectsContainer>
  );
};

const ProjectsDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 50vh;
  background: ${({ theme }) => theme.projectsBackground};

  box-shadow: inset 0px 11px 15px -11px #ccc, inset 0px -11px 15px -11px #ccc;
`;
const H1 = styled.h1`
  color: ${({ theme }) => theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 2.5rem;
  padding: 2rem 0;
`;

const ProjectsContainer = styled.div`
  background-image: url(${Lights});
  background-position: center center;
`;
export default Projects;
