import logoBlue from './assets/logo-white-small-full.svg';
import logoWhite from './assets/logo-bluefull.png'
import buildingIcon from './assets/icon-building.svg'
import qrIcon from './assets/icon-qr.svg'
import platformIcon from './assets/icon-platform.svg'
import crowdIcon from './assets/icon-crowd.svg'
import './App.css';
import './shared.css';
import Card from './Card'
import InputText from './InputText'
import React, {useLayoutEffect, useState,useRef, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  //API SETUP
  const apiURL = 'http://localhost:9000';
  
  let hero = useRef();
  let nav = useRef({classList : ""});
  let [navTextColor, setNavTextColor] = useState('#007FE7');
  let scrollHandler = () =>{
    let offset = window.scrollY;
    if(offset <700){
      nav.current.classList.remove('navbar--container__transparent');
      setNavTextColor('#007FE7');
    } 
    else if (offset >=700 && offset <1365) {
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
  const formSubmitHandler = (event) =>{
    event.preventDefault();
    if (!event.target[0].value || !event.target[1].value || !event.target[2].value) {
      alert("Please fill form correctly");
      return;
    }
    const data = {
      "name" : event.target[0].value,
      "email" : event.target[1].value,
      "msg" : event.target[2].value,
    }
    const requestOptions = {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json' ,
        'Accept': 'application/json'
      },
      body: data
    };
    alert("Sent the message");
    fetch(apiURL + "/submit",requestOptions)
        .then(response => console.log(response));
    window.location.reload();
  }
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
              <li className = 'navbar--nav-items'><a href='#contact'>contact us</a></li>
            </ul>
          </nav>
      </div>
      <div className="hero--container" ref={hero}>
        <h1 className='hero--subHeading'>The best QR-Based crowd managing platform!</h1>
        <h2 className="hero--heading">Experience the new normal.</h2>
        <div className="hero--cta-container">
          <a href="#features">Learn More?</a>
          <a href="#">Get Started`{'>'}`</a>
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
          <a href="#">Intrigued Yet?</a>
        </div>
      </div>
      <div className="contact--container">
        <div className="contact--heading" id = "contact">
          Still want to know more?
          <div className="contact--subheading">
        We’ve gotchu fam, hit us up!
        </div>
        </div>
        
        <form action="" class='contact--form' onSubmit ={formSubmitHandler}>
          <InputText label='Name' placeholder='Eg. Joe Smith' color='blue' id='cta-name'/>
          <InputText label='Email' placeholder='Eg. joe.smith@uncrammed.com' color='blue' id='cta-email'/>
          <InputText label='Your Message' placeholder='Type your message here' color='blue' id='cta-msg'/>
          <input type='submit'  className="contact--cta-link" value='Send It' />
        </form>
      </div>
    </div>
  );
}

export default App;
