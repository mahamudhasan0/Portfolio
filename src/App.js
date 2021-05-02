import React, { useState } from 'react';
import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import {Switch,Route} from 'react-router-dom';
import Home from './Home';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import Contact from './Components/Contact/Contact'
import Projects from './Components/Projects/Projects';
import Resume from './Components/Resume/Resume'



function App() {
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () =>{
    setNavToggle(!navToggle)
  }
  return (
     <div className="App">
      <div className={`sidebar ${navToggle ? 'nav-toggle': ''}`}>
        <Navbar />
      </div>
    <div className="nav-btn" onClick={navClick}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
      </div>
    <div className="main-container">
      <div className="container">
     <Switch>
     <Route path="/" exact>
        <Home/>
      </Route>
      <Route path="/about" exact>
      <About/>  
      </Route>
      <Route path="/blogs" exact>
      <Blogs/> 
      </Route>
      <Route path="/contact" exact>
      <Contact/> 
      </Route>
      <Route path="/projects" exact>
      <Projects/>
      </Route>
      <Route path="/resume" exact>
      <Resume/>
      </Route>
     </Switch>
    </div>
    </div>
    </div>
  );
}

export default App;
