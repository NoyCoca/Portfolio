import "./App.css";
import { BrowserRouter as Router} from "react-router-dom";
import Header from "./components/Features/Header";
import Footer from "./components/Features/Footer";
import Sidebar from "./components/Features/SideBar";
import Routing from "./Routing/Routing";
import Slider from "./components/Features/Slider";
function App() {

  return (
    <div id="main">
      <Router>
        <Header title="Noy Coca" />
        <Routing />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
