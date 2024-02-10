import Header from "./components/Header";
import Intro from "./components/Intro";
function App() {

  //191F3D
  return (
    <div>
      <Header />
      <div style={{ display: "flex", flexDirection: "row", height:"500px",  justifyContent:"space-evenly", backgroundColor:"#F0F7FC"}}> 
        <Intro />
      </div>
    </div>
  );
}
export default App;
