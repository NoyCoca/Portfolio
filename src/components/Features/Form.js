import styled from "styled-components";
import Button from "../Features/Botton";
import Input from "./Input";
const Form = () => {
  const StyleFrom = styled.form`
    display: flex;
    flex-direction: column;
    width: 25%;
    text-align: center;

    input,
    textarea {
      border: solid 0.5px white;
      margin-bottom: 20px;
      border-radius: 6px;
      padding: 5px;
      transition: width 0.35s ease-in-out;
      width: 100%;
      position: inherit;
    }
    input:focus ,textarea:focus {
      width: 105%;
    }
  `;
  const StyleH1 = styled.h1`
    color: #ffc107;
  `;
  return (
    <StyleFrom
      method="post"
      action="mailto:Noycoca123@gmail.com?subject=Results"
    >
      <StyleH1> Get in Touch </StyleH1>
      <Input type="text" placeholder="Full name" />

      <Input type="Email" placeholder="Email" />

      <Input type="text" placeholder="Phone" />

      <textarea rows="4" cols="50" placeholder="Your massage" />

      <Button title="SEND" />
    </StyleFrom>
  );
};

export default Form;
