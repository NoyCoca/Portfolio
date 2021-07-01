import Card from "../Features/Card";
import AbutMe from "../Features/AbutMe";
import styled from "styled-components";
import {pageDiv} from './StyledPage'

const Home = () => {
  const StyleDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 30px;
    width: 100%;
    height: 100vh;
    align-content: center;
    text-align: center;
  `;

  return (
    <>
      <AbutMe />
      <pageDiv>
        <StyleDiv>
          <Card img="imges/myImg.png" title=" Engine javascript " />
          <Card img="imges/myImg2.png" title="UseRef" />
        </StyleDiv>
      </pageDiv>
    </>
  );
};
export default Home;
