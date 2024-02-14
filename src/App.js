import About from "./components/About";
import Header from "./components/Header";
import Intro from "./components/Intro";
import "./components-css/app.css";
import Skills from "./components/Skills";
function App() {
  return (
    <div>
      <Header />
      <div className="container-home" id="home">
        <Intro />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
    </div>
  );
}
export default App;
