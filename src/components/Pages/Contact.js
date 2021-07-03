import styled from "styled-components";
import PageHeader from "../Features/PageHeader";
import { PageDiv } from "./StyledPage";
import Form from "../Features/Form";
import {colors} from './StyledPage';
import { useRef } from "react";
const Contact = () => {
  const StyleDivContainer = styled.div`
    display: flex;
    justify-content: center;
    justify-content: space-evenly;
    margin-top: 90px;
  `;
  const StyleDivInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    justify-content: space-evenly;
  `;
  const StyleP = styled.p`
    color: ${colors.yellowText};
    a {
      color: ${colors.yellowText};
      font-size: 30px;
    }
    a:hover {
      color: #b18f28;
    }
    i {
      margin: 10px;
    }
  `;

  return (
    <PageDiv>
      <PageHeader title="Contact" color="white" />
      <StyleDivContainer>
        <StyleDivInfo>
          <h4>Feel free to get in touch with me. Available for job offers</h4>

          <StyleP>
            <p>
              <i className="far fa-envelope-open"></i>
              Noycoca123@gmail.com
            </p>

            <p>
              <i className="fas fa-mobile-alt"></i> 0546265575
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/noy-coca-b84149203/"
                target="_blank"
              >
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/" target="_blank">
                <i class="fab fa-github-square"></i>
              </a>
              <a href=" https://wa.me/0546265575" target="_blank">
                <i class="fab fa-whatsapp"></i>
              </a>
            </p>
          </StyleP>
        </StyleDivInfo>
        <Form />
      </StyleDivContainer>
    </PageDiv>
  );
};
export default Contact;
