import Portfolio from "../components/Pages/Portfolio";
import Home from "../components/Pages/Home";
import Skills from "../components/Pages/Skills";
import { Route, Switch } from "react-router-dom";
import Contact from "../components/Pages/Contact";
const Routing = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/skills">
        <Skills />
      </Route>
      <Route exact path="/portfolio">
        <Portfolio />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
    </Switch>
  );
};

export default Routing;
