import "./App.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Hero from "./components/Hero/Hero";
import { Row, Col, Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Hero />
    </div>
  );
}

export default App;
