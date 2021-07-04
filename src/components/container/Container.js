
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../Features/Header";
import Footer from "../Features/Footer";
import Routing from "../../Routing/Routing";
import { useState } from "react";
import { SkillsProvider, image} from '../../SkillsContext';
import { colors } from "../Pages/StyledPage";

const Container = ()=> {
      const [color, setColor] = useState("dark");
    return (
      <SkillsProvider value={image}>
        <div
          id="main"
          style={{
            background: color == "dark" ? `${colors.darkBackground}` : `${colors.lightBackground}`,
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