import styled from "styled-components";
import Button from "./Button";
import { colors } from "../Pages/StyledPage";
const Project = ({ projectObject }) => {
  const { projectName, explanation, img, code, website } = projectObject;
  const StyleDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 50px;
    img {
      width: 40%;
      height: 60vh;
      border-radius: 16px;
      transition: width 2s, height 2s;
    }
    img:hover {
      width: 50%;
      height: 80vh;
    }
  `;
  const StyleDivCardInfo = styled.div`
    margin: 60px;
    justify-content: center;
    align-self: center;
  `;
  const pageDiv = styled.div`
    width: 100vw;
    height: 100vh;
  `;
  return (
    <>
      <StyleDiv>
        <img src={img} />
        <StyleDivCardInfo>
          <h1 style={{ color: "#ffc107" }}>{projectName}</h1>
          <p>{explanation}</p>
          <Button
            title="View code"
            handelClick={() => window.open(code)}
            color={colors.yellowText}
          />
          <Button
            title="Website"
            handelClick={() => window.open(website)}
            color={colors.yellowText}
          />
        </StyleDivCardInfo>
      </StyleDiv>
    </>
  );
};

export default Project;
