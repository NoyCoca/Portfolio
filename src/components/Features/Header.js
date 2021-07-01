import  styled from 'styled-components'
import Sidebar from './SideBar';
const Header =  ( )=> {
    const StyleHeader = styled.header`
      background: black;
      position: fixed;
      width: 100vw;
      z-index: 4000000;
      img{
        width: 2%;
      }
    `;
    return (
      <StyleHeader>
        <header>
          <Sidebar />
          <img src="https://tech-career-jobs.com/Img/logo.png" />
        </header>
      </StyleHeader>
    );
}

export default Header;;
