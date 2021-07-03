import styled from "styled-components";

const Card = ({ title, img, explanation }) => {
  const StyleDiv = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    background-image: url(${img});
    background-size: cover;
    width: 40vh;
    height: 60vh;
    justify-content: center;
    align-items: center;
    filter: brightness(0.7);
    &:hover {
      filter: brightness(1);
    }
  `;
  const StyleDivInfo = styled.div``;

  return (
    <StyleDiv>
      <h1> {title}</h1>
      <p>{explanation}</p>
    </StyleDiv>
  );
};
export default Card;
