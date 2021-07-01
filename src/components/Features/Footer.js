import  styled from 'styled-components'

const Footer = () => {
  const StyleFooter = styled.footer`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    /* border-top: 0.5px solid #ffc107; */
    font-size: 20px;
    a {
      margin: 5px;
    }
  `;
  return (
    <StyleFooter>
      <a href="https://www.linkedin.com/in/noy-coca-b84149203/" target="_blank">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="https://github.com/" target="_blank">
        <i class="fab fa-github-square"></i>
      </a>
      <a href="mailto:NoyCoca123@gmail.com">
        <i class="fas fa-envelope-square"></i>
      </a>
    </StyleFooter>
  );
};
export default Footer;
