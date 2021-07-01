import PageHeader from "../Features/PageHeader";
import styled from "styled-components";
import Project from "../Features/Project";

const Portfolio = () => {
  const projectsArray = [
    {
      projectName: "Movies",
      explanation: "Using Html, Css, JavaScript with fetch Api",
      img: "imgs/moviesProject.png",
      code: "https://github.com/NoyCoca/movies",
      website: "https://noycoca.github.io/movies/",
    },
    {
      projectName: "News",
      explanation: "Using Html, Css flex & grid",
      img: "imgs/newsProject.png",
      code: "https://github.com/NoyCoca/news-project",
      website: "https://noycoca.github.io/news-project/",
    },
  ];
return (
  <>
    <PageHeader title="Portfolio" color=" white" />
    {projectsArray.map((project) => (
      <Project projectObject={project} />
    ))}
  </>
);

};
export default Portfolio;
