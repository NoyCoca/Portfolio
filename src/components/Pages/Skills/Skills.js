import styled from "styled-components";
import { useState } from "react";
import PageHeader from "../../Features/PageHeader";
import Button from "../../Features/Botton";
import { image } from "./SkillsContext";
import SkillsCard from "../../Features/SkillsCard";
import { PageDiv , colors } from "../StyledPage"

const Skills = () => {
  const [Skills, SetSkills] = useState(image.client);
  const [Header, SetHeader] = useState("Client");
  const StyleH1 = styled.h1`
    text-align-last: center;
    color: white;
    margin: 30px;
  `;
  const StyleDiv = styled.div`
    text-align: -webkit-center;
    font-family: "Font Awesome 5 Brands";
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 25px;
    justify-content: center;
    // background-image: url(https://ak.picdn.net/shutterstock/videos/1021632985/thumb/1.jpg);
    // background-image: url(https://wallpaperaccess.com/full/5065799.jpg);
    // background-image: url(https://wi.wallpapertip.com/wsimgs/83-838362_web-developer.jpg);
    /* background-image: url(https://sg.fiverrcdn.com/photos/117439623/original/01292ced1edd6e404ba8373ae837cee3fa7fcc8c.jpg?1537379677); */
    background-size: cover;
  `;
  const StyleDiv2 = styled.div`
    position: revert;
    /* background:#0000009c; */
    width: 100%;
    height: 100vh;
    z-index: 40000;
  `;
  return (
    <PageDiv>
      <PageHeader title="Skills" color="white" />
      <StyleH1>{Header}</StyleH1>

      <div style={{ textAlign: " center", marginBottom: "80px" }}>
        <Button
          title="Client"
          handelClick={() => {
            SetSkills(image.client);
            SetHeader("Client");
          }}
          color={colors.yellowText}
        />
        <Button
          title="Server"
          handelClick={() => {
            SetSkills(image.server);
            SetHeader("Server");
          }}
          color={colors.yellowText}
        />
        <Button
          title="Environment"
          handelClick={() => {
            SetSkills(image.environment);
            SetHeader("Environment");
          }}
          color={colors.yellowText}
        />
      </div>
      <StyleDiv
        id="client"
        className="animate__animated animate__fadeInDown animate__delay-0.5s"
      >
        {Skills.map((skill) => (
          <SkillsCard img={skill.img} title={skill.title} />
        ))}
      </StyleDiv>
    </PageDiv>
  );
};
export default Skills;
