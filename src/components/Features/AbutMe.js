import Button from "./Botton";
import styled from "styled-components";
import { colors } from "../Pages/StyledPage";
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

  return (
    <StyleDiv className="abutMe">
      <StyleDiv2>
        <StyleDivInfo>
          <StyleH1> Noy Coca - Full Stack Developer</StyleH1>
          <p>
            אחראית, חרוצה, בעלת מוטיבציה גבוהה, יכולת למידה עצמאית וקליטה מהירה,
            ניהול משימות מרובות (מולטיאסקיטנג), עצמאות ו"ראש גדול", תיפקוד תחת
            לחץ.
          </p>
          <Button title="Get to know me" color={colors.yellowText}></Button>
        </StyleDivInfo>
      </StyleDiv2>
    </StyleDiv>
  );
};
export default AbutMe;
