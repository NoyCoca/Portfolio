import Image from "./Image";
import styled from "styled-components";
const SkillsCard =({title, img})=>{
    const StyleDiv = styled.div`
      width: 20%;
      text-align: center;
    `;
    return (
      <StyleDiv>
        <Image img={img} />
        <p>{title}</p>
      </StyleDiv>
    );
}

export default SkillsCard;