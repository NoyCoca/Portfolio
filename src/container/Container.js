
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../components/Features/Header";
import Footer from "../components/Features/Footer";
import Routing from "../Routing/Routing";
import { useState } from "react";
import { SkillsProvider, image , skillsContext} from '../SkillsContext';

const Container = ()=> {
      const [color, setColor] = useState("dark");
    return (
      <SkillsProvider value={image}>
        <div
          id="main"
          style={{
            background: color == "dark" ? "black" : "rgb(162, 160, 160)",
            color: color == "dark" ? "white" : "black",
          }}
        >
          <Router>
            <Header
              title="Noy Coca"
              handelClick={() =>
                color == "dark" ? setColor("light") : setColor("dark")
              }
            />
            <Routing />
            <Footer />
          </Router>
        </div>
      </SkillsProvider>
    );
}

export default Container;