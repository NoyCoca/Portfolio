import  styled from 'styled-components'
import Sidebar from './SideBar';
import Button from "./Button";
const Header = ({ handelClick }) => {
  const StyleHeader = styled.header`
    background: black;
    position: fixed;
    width: 100vw;
    z-index: 4000000;
    img {
      width: 2%;
    }
  `;
  return (
    <StyleHeader>
      <header>
        <Sidebar />
        <Button
          handelClick={handelClick}
          title={<i class="fas fa-adjust"></i>}
        />

        <img src="https://tech-career-jobs.com/Img/logo.png" />
      </header>
    </StyleHeader>
  );
};

export default Header;;
