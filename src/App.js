import logoBlue from './assets/logo-white-small-full.svg';
import logoWhite from './assets/logo-bluefull.png'
import buildingIcon from './assets/icon-building.svg'
import qrIcon from './assets/icon-qr.svg'
import platformIcon from './assets/icon-platform.svg'
import crowdIcon from './assets/icon-crowd.svg'
import './App.css';
import './shared.css';
import Card from './Card'
import React, {useLayoutEffect, useState} from 'react';
function App() {
  let nav = React.createRef();
  let hero = React.createRef();
  let [navTextColor, setNavTextColor] = useState('#007FE7');
  let scrollHandler = () =>{
    let offset = window.scrollY;
    console.log(offset);
    if(offset <700){
      nav.current.classList.remove('navbar--container__transparent');
      console.log('removing');
      setNavTextColor('#007FE7');
    } else if (offset >=700 && offset <1365) {
      nav.current.classList.add('navbar--container__transparent');
      setNavTextColor('white');
  
    } 
    else if (offset >= 1365){
      setNavTextColor('#007FE7');
        nav.current.classList.remove('navbar--container__transparent');
    }
  }
  useLayoutEffect(()=>{
    window.addEventListener('scroll',scrollHandler);
    return () => window.removeEventListener('scroll',scrollHandler)
  })
  return (
    <div className="App">
      <div className="navbar--container" ref={nav}>
        <div className="navbar-logo--container">
          <img src={ navTextColor == '#007FE7' ?logoBlue : logoWhite } alt="" className='navbar-logo-img'/>
        </div>
        <nav className = 'navbar--nav-container' style = {{color : navTextColor}} >
            <ul>
              <li className = 'navbar--nav-items hover-underline'><a href='#'>login</a></li>
              <li className = 'navbar--nav-items'><a href='#'>signup</a></li>
              <li className = 'navbar--nav-items'><a href='#'>contact us</a></li>
            </ul>
          </nav>
      </div>
      <div className="hero--container" ref={hero}>
        <h1 className='hero--subHeading'>The best QR-Based crowd managing platform!</h1>
        <h2 className="hero--heading">Experience the new normal.</h2>
        <div className="hero--cta-container">
          <a href="#features">Learn More?</a>
          <a href="#">Get Started></a>
        </div>
      </div>
      <div className="features--container" id='features'>
        <h1 className="features--heading">
          Features.
        </h1>
        <div className="features--cards">
          <Card imgSrc={qrIcon}>Scan QR to check-into a bulding</Card>
          <Card imgSrc={platformIcon}>Check-out from the platform anytime!</Card>
          <Card imgSrc={buildingIcon}>See the number of people in a building!</Card>
          <Card imgSrc={crowdIcon}>Crowd managing features coming soon!</Card>
        </div>
        <div className="features--cta-container">
          <a href="">Intrigued Yet?</a>
        </div>
      </div>
      <div className="contact--container">
        Still want to know more?
      </div>
    </div>
  );
}

export default App;
