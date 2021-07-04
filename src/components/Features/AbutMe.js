import Button from "./Button";
import styled from "styled-components";
import { colors } from "../Pages/StyledPage";
import { useState } from "react";
const AbutMe = () => {
  const StyleDiv = styled.div`
    background-image: url("https://actiknow.com/wp-content/uploads/2018/04/home-banner-WebDevelopment.jpg");
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
  `;
  const StyleDiv2 = styled.div`
    position: revert;
    width: 100%;
    height: 100vh;
    z-index: 40000;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    color: white;
    align-items: center;
    
  `;
  const StyleDivInfo = styled.div`
    width: 50vw;
  `;
  const StyleH1 = styled.h1`
    color: ${colors.yellowText};
  `;
  const [isTrue, setIsTrue] = useState(false);
  return (
    <StyleDiv className="abutMe">
      <StyleDiv2>
        <StyleDivInfo>
          <StyleH1> Noy Coca - Full Stack Developer</StyleH1>
          <p
            className="animate__animated animate__fadeInLeft animate__delay-0.5s"
            style={{
              visibility: isTrue === false ? "hidden" : "",
            }}
          >

            Responsible, hardworking, highly motivated, independent learning
            ability and quick absorption, multi-task management, functioning
            under pressure.
          </p>
          <Button
            title="Get to know me"
            color={colors.yellowText}
            handelClick={() =>
              isTrue === false ? setIsTrue(true) : setIsTrue(false)
            }
          ></Button>
        </StyleDivInfo>
      </StyleDiv2>
    </StyleDiv>
  );
};
export default AbutMe;
