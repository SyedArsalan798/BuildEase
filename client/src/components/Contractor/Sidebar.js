import React from "react";
import "./sidebar.css";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
// import { Link, useNavigate } from "react-router-dom";
import AddListing from "./images/addlisting.png";
import CostCalculator from "./images/costcalculator.png";
import Project from "./images/project.png";
import Progress from "./images/progress.png";
import Member from "./images/member.png";
import Price from "./images/dailyprice.png";
import Message from "./images/feedback.png";
import Terms from "./images/terms.png";
import Dashboard from "./images/dashboard.png";
import Request from "./images/request.png";
import Logo from './images/buildease_logo.png'

import { Button } from "react-bootstrap";

const Sidebar = () => {
  // const dispatch = useDispatch();
  return (
    <header className="leftSidebar__logo_navigation">
      <center>
      <img src={Logo} width={150}></img>
      </center>
      
      <nav className="leftSidebarMenu__main_wrap" >
         
        <div className="leftMenu__main_wrap">
        <LinkContainer className="nav-link" to="/homecontract"><Nav.Link ><img style={{width: "16px"}} src={Dashboard} alt="" /><span>Dashboard</span></Nav.Link></LinkContainer>

          <LinkContainer className="nav-link" to="/contractlisting"><Nav.Link ><img style={{width: "16px"}} src={AddListing} alt="" /><span>Add Listing</span></Nav.Link></LinkContainer>
          <LinkContainer className="nav-link" to="/memberlist"><Nav.Link ><img style={{width: "16px"}} src={Member} alt="" /><span>Members</span></Nav.Link></LinkContainer>
          <LinkContainer className="nav-link" to="/runningproject"><Nav.Link ><img style={{width: "16px"}} src={Project} alt="" /><span>Running Projects</span></Nav.Link></LinkContainer>
          <LinkContainer className="nav-link" to="/progress"><Nav.Link ><img style={{width: "16px"}} src={Progress} alt="" /><span>Progress</span></Nav.Link></LinkContainer>
          <LinkContainer className="nav-link" to="/hirerequest"><Nav.Link ><img style={{width: "16px"}} src={Request} alt="" /><span>Hiring Request</span></Nav.Link></LinkContainer>

          <LinkContainer className="nav-link" to="/feedback"><Nav.Link ><img style={{width: "16px"}} src={Message} alt="" /><span>Messages</span></Nav.Link></LinkContainer>
          <LinkContainer className="nav-link" to="/c_costcalculator"><Nav.Link ><img style={{width: "16px"}} src={CostCalculator} alt="" /><span>Cost Calculator</span></Nav.Link></LinkContainer>
          <LinkContainer className="nav-link" to="/c_dailyprice"><Nav.Link ><img style={{width: "16px"}} src={Price} alt="" /><span>Daily Prices</span></Nav.Link></LinkContainer>

          <LinkContainer className="nav-link" to="/termcondition"><Nav.Link ><img style={{width: "16px"}} src={Terms} alt="" /><span>Terms & Condition</span></Nav.Link></LinkContainer>

        </div>
      </nav>
    </header>
  );
};

export default Sidebar;
