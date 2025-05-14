// Aplicativo Principal
import "./App.css";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { CountContext } from "./context/CountContext";
import BackgroungImg from "./assets/background.jpg";

function App() {
  const {event} = useContext(CountContext);

  let eventImage = null;
  if (event) {eventImage = event.image;}


  return (
    <div id="background" style={eventImage ? 
      ({backgroundImage: `url(${eventImage})`}) : 
      ({backgroundImage: `url(${BackgroungImg})`})
    }>
      <div className="container">
        <Outlet/>
      </div>
    </div>
  );
}

export default App;