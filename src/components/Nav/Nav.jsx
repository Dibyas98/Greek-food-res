import React, { useState } from "react";
import "./nav.css";
import Switch from "../switch/Switch";
const home ={
  color: 'blue'
}
const MenuOption = ['home','quotas','resturant','food','contact'];

export default function Nav(props) {


  return (
    <nav className= {`${props.mode}back`}>
      <div className="nav-container">
        <div className="logo">
          <img src="https://flowbite.com/docs/images/logo.svg" alt="" />
          <h1>GeekFood</h1>
          
        </div>

        <div className="menu">
          <ul>
          {
            MenuOption.map((ele, index) => (
              <li key={index}  >
                <a href={ele} className= {`menu ${props.mode}text`} style={ele === 'home' ? home : {}} onClick={props.menu}>{ele}</a>
              </li>
            ))
          
          
          
          /* <ul ClassName = 'menu-ul'>
            <li><a href="#" style={st}>home</a></li>
            <li><a href="">quotas</a></li>
            <li><a href="">resturant</a></li>
            <li><a href="">food</a></li>
            <li><a href="">contact</a></li>
          </ul> */}
          {/* {NavBarList} */}
          </ul>
        </div>
        <div className="get-started">
          <button>get Started</button>
        </div>
        <Switch  toggle = {props.toggle}> </Switch>
      </div>
      <div className="mobile">
            <i className="fa-solid fa-bars"></i>
          </div>
    </nav>
  );
}