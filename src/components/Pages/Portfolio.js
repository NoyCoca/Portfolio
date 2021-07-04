import PageHeader from "../Features/PageHeader";
import styled from "styled-components";
import Project from "../Features/Project";
import moviesProjectImg from "../../Images/moviesProject.png";
import newsProjectImg from "../../Images/newsProject.png";

const Portfolio = () => {
  const projectsArray = [
    {
      projectName: "Movies",
      explanation: "Using Html, Css, JavaScript with fetch Api",
      img: moviesProjectImg,
      code: "https://github.com/NoyCoca/movies",
      website: "https://noycoca.github.io/movies/",
    },
    {
      projectName: "News",
      explanation: "Using Html, Css flex & grid",
      img: newsProjectImg,
      code: "https://github.com/NoyCoca/news-project",
      website: "https://noycoca.github.io/news-project/",
    },
  ];
return (
  <>
    <PageHeader title="Portfolio" />
    {projectsArray.map((project) => (
      <Project projectObject={project} />
    ))}
  </>
);

};
export default Portfolio;
