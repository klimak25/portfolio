import {useState} from 'react'
import Topbar from "./components/Topbar/Topbar";
import Intro from './components/intro/Intro'
import Testmonials from "./components/testmonials/Testmonials";
import Work from "./components/work/Work";
import Contact from "./components/contact/Contact";
import Menu from './menu/Menu';
import Portfolio from './components/portfolio/Portfolio'
import './App.scss'
function App() {
    const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className='sections'>
        <Intro/>
        <Portfolio/>
        <Work/>
        <Testmonials/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
