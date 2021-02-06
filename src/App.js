import logo from "./logo.svg";
import "./App.css";
import { Navbars } from "./Components/Navbar/Navbars";
import { CoursesDetails } from "./Components/LeftNav/CoursesDetails";

function App() {
  return (
    <div className="App">
      <Navbars />
      <CoursesDetails />
    </div>
  );
}

export default App;
