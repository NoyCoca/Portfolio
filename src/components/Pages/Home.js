import Card from "../Features/Card";
import AbutMe from "../Features/AbutMe";
import styled from "styled-components";
import {pageDiv} from './StyledPage';
import myImg1 from "../../Images/myImg.png";
import myImg2 from "../../Images/myImg2.png";
import PageHeader from "../Features/PageHeader";

const Home = () => {
  const StyleDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 30px;
    width: 100%;
    height: 70vh;
    align-content: center;
    text-align: center;
  `;

  return (
    <>
      <AbutMe />
      <pageDiv>
        <PageHeader title="Lectures" />
        <StyleDiv>
          <Card img={myImg1} title=" Engine javascript " />
          <Card img={myImg2} title=" UseRef " />
        </StyleDiv>
      </pageDiv>
    </>
  );
};
export default Home;
