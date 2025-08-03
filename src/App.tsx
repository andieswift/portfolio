import { NavBar } from "./components/NavBar";
import { Name } from "./components/Name";
import { Exp } from "./components/Exp";
import { TechTools } from "./components/TechTools";
import { About } from "./components/About";
import { Contact } from "./components/Contact";

function App() {
  return (
    <>
      <NavBar />
      <Name />
      <Exp />
      <TechTools />
      <About />
      <Contact />
    </>
  );
}

export default App;
