import Header from "./components/Header";
import Profile from "./components/Profile";
function App() {

  //191F3D
  return (
    <div>
      <Header />
      <div style={{ display: "flex", flexDirection: "row", height:"500px",  justifyContent:"space-evenly", backgroundColor:"#F0F7FC"}}> 
        <div style={{ flex: 1 , display:"flex", justifyContent:"center", alignItems:"center"}}>
          <p>In this example, we have an HTML file with a  element where the generated text will be displayed. The JavaScript file contains an array of phrases, and a function </p>
        </div>
        <div style={{ flex: 1 , height:"500px", justifyContent:"center", marginTop:"50px",alignItems:"center"}}>
          <Profile />
        </div>
      </div>
    </div>
  );
}
export default App;
