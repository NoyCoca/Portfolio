import styled from "styled-components";
import { useState } from "react";
import PageHeader from "../Features/PageHeader";
import Button from "../Features/Button";
import SkillsCard from "../Features/SkillsCard";
import { PageDiv, colors } from "../Pages/StyledPage";
import { UseSkillsContext } from "../../SkillsContext";
const Skills = () => {
  const skillsContext = UseSkillsContext();
  const [Skills, SetSkills] = useState(skillsContext.client);
  const [Header, SetHeader] = useState("Client");
  const StyleH1 = styled.h1`
    text-align-last: center;
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
    background-size: cover;
  `;
  return (
    <PageDiv>
      <PageHeader title="Skills" color="white" />
      <StyleH1>{Header}</StyleH1>

      <div style={{ textAlign: " center", marginBottom: "80px" }}>
        <Button
          title="Client"
          handelClick={() => {
            SetSkills(skillsContext.client);
            SetHeader("Client");
          }}
          color={colors.yellowText}
        />
        <Button
          title="Server"
          handelClick={() => {
            SetSkills(skillsContext.server);
            SetHeader("Server");
          }}
          color={colors.yellowText}
        />
        <Button
          title="IDE"
          handelClick={() => {
            SetSkills(skillsContext.environment);
            SetHeader("IDE");
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
