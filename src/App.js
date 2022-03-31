import "./App.css";
import { RoutingPath } from "./Routes/RoutingPath";
import { Navbar, Footer } from "./Components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-container">
        <RoutingPath />
      </div>
      <Footer />
    </div>
  );
}

export default App;
