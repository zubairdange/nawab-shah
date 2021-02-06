import logo from "./logo.svg";
import "./App.css";
import { Navbars } from "./Components/Navbar/Navbars";
import { UGCoursesDetails } from "./Components/LeftNav/UGCoursesDetails";
import { Home } from "./Components/LeftNav/Home";

function App() {
  return (
    <div className="App">
      <Navbars />
      <Home />
    </div>
  );
}

export default App;
