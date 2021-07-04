import styled from "styled-components";

const Image = (props) => {

  const StyledImg = styled.img`
    width: 35%;
     border-radius: 20%;  
  `;
  const { img } = props;
  return (
    <>
      <StyledImg src={img} />
    </>
  );
};
export default Image;
