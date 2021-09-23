import { TopBar } from "./components/topbar/topBar";
import {Intro} from './components/intro/intro';
import {Portfolio} from './components/portfolio/portfolio';
import {Skills} from './components/skills/skills';
import {Contact} from './components/contact/contact';
import {Menu} from './components/menu/menu';
import './app.scss';
import { useState } from "react";
function App() {
  const [menuOpen,setMenuOpen] = useState(false);
  return (
    <div className="app">
       <TopBar
       menuOpen={menuOpen}
       setMenuOpen={setMenuOpen}
       />
       <Menu
       menuOpen={menuOpen}
       setMenuOpen={setMenuOpen}
       />
       <div className="sections">
         <Intro />
         <Skills/>
         <Portfolio/>
         <Contact/>
       </div>
    </div>
  );
}

export default App;
