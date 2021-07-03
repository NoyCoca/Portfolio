import { createContext, useContext } from "react";

export const skillsContext = createContext();
export const SkillsProvider = skillsContext.Provider;
  export const image = {
    client: [
      {
        img: "https://www.stimulsoft.com/images/products/reports-js/description/logo.svg",
        title: "Java Script",
      },
      {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",
        title: "Html",
      },
      {
        img: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png",
        title: "Css",
      },
      {
        img: "http://www.manejandodatos.es/wp-content/uploads/2015/03/typescript.png",
        title: "TypeScript",
      },
      {
        img: "https://ionicframework.com/docs/assets/icons/logo-react-icon.png",
        title: "React",
      },
      {
        img: "https://brandlogos.net/wp-content/uploads/2016/06/bootstrap-logo-vector-download.jpg",
        title: "Bootstrap",
      },
      {
        img: "data:image/png;base64,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",
        title: "Material Ui",
      },
    ],
    server: [
      {
        img: "https://cdnlogo.com/logos/c/27/c.svg",
        title: "C#",
      },
      {
        img: "https://icon-library.com/images/node-js-icon/node-js-icon-15.jpg",
        title: "Nodejs",
      },
      {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/1200px-.NET_Core_Logo.svg.png",
        title: ".Net",
      },
    ],
    environment: [
      {
        img: "https://www.logolynx.com/images/logolynx/5f/5f6909d0b9d353543725134d0def3b37.png",
        title: "Visual studio",
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZkOMm2c1AdVpZwlAZNGmReYtcAlD6bCgloA&usqp=CAU",
        title: "Visual studio code",
      },
      {
        img: "data:image/png;base64,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",
        title: "Github",
      },
    ],
  };
export const UseSkillsContext = () => useContext(skillsContext);