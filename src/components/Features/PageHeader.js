import styled from "styled-components";

const PageHeader = ({title, color}) => {
  const StyleH1 = styled.h1`
    text-align-last: center;
    border-bottom: 0.5px solid #ffc107;
    margin: 0 35px;
    padding: 40px;
    font-family: "Font Awesome 5 Brands";
    font-size: 70px;
  `;

  return <StyleH1> {title} </StyleH1>;
};
export default PageHeader;