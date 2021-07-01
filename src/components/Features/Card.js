import styled from "styled-components";

const Card = ({ title, img  }) => {
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
    filter: brightness(0.5);
    &:hover {
      filter: brightness(0.8);
    }
  `;
  const StyleDivInfo = styled.div``;

  return (
    <StyleDiv>
      <h1> {title}</h1>
      <p> vfvfvfvfv </p>
    </StyleDiv>
  );
};
export default Card;
