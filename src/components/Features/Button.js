import styled from "styled-components";
import { colors } from "../Pages/StyledPage";
const Button = ({ title, handelClick, color }) => {
  const StyleButton = styled.button`
    margin-left: 5px;
    font-size: 20px;
    padding: 5px;
    background: none;
    color: white;
    border: ${color}  solid 1.5px;
    border-radius: 8px;
    &:hover {
      background: ${color};
    }
  `;
  return <StyleButton onClick={handelClick}>{title}</StyleButton>;
};

export default Button;
