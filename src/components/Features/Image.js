import styled from "styled-components";

const Image = (props) => {

  const StyledImg = styled.img`
    width: 35%;
   // box-shadow: 4px 3px 16px #d0bdbda8;
     border-radius: 20%;
    /* height: 18vh; */
 

   
  `;
  const { img } = props;
  return (
    <>
      <StyledImg src={img} />
    </>
  );
};
export default Image;
