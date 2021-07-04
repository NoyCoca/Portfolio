import styled from "styled-components";
import Button from "./Button";
import Input from "./Input";
import { colors } from "../Pages/StyledPage";
import { useEffect, useRef } from "react";

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
    input:focus,
    textarea:focus {
      width: 105%;
      border: ${colors.yellowText} solid 4px;
    }
  `;
  const StyleH1 = styled.h1`
    color: #ffc107;
  `;


  return (
    <StyleFrom
      action="https://formsubmit.co/noycoca123@gmail.com"
      method="POST"
      target="_blank"
      
    >
      <StyleH1> Get in Touch </StyleH1>
      <Input
        type="text"
        name="Full name"
        placeholder="Full name"
      />

      <Input type="email" name="email" placeholder="Email" />

      <Input type="text" name="Phone" placeholder="Phone" />

      <textarea rows="4" name="textarea" cols="50" placeholder="Your massage" />

      <Button title="SEND" color={colors.yellowText} />
    </StyleFrom>
  );
};

export default Form;
