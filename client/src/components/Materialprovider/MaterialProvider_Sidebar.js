import React from "react";
import "../Materialprovider/materialProvider_sidebar.css";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
// import { Link, useNavigate } from "react-router-dom";
// import AddListing from "../Contractor/images/addlisting.png";
import Materials from "../Contractor/images/materials.png";

import Hire from "../Contractor/images/hire.png";

import CostCalculator from "../Contractor/images/costcalculator.png";
import Project from "../Contractor/images/project.png";
import Progress from "../Contractor/images/progress.png";
import Member from "../Contractor/images/member.png";
import Price from "../Contractor/images/dailyprice.png";
import Message from "../Contractor/images/feedback.png";
import Terms from "../Contractor/images/terms.png";

import { Button } from "react-bootstrap";

const MaterialProvider_Sidebar = () => {
  // const dispatch = useDispatch();
  return (
    <header className="leftSidebar__logo_navigation">
      
      <nav className="leftSidebarMenu__main_wrap" >
         
        <div className="leftMenu__main_wrap">
          <LinkContainer to="/contractorlist"><Nav.Link ><img style={{width: "16px"}} src={Hire} alt="" /><span>Hire Contractor</span></Nav.Link></LinkContainer>
          <LinkContainer to="/materiallist"><Nav.Link ><img style={{width: "16px"}} src={Materials} alt="" /><span>Buy Materials</span></Nav.Link></LinkContainer>
          <LinkContainer to="/members"><Nav.Link ><img style={{width: "16px"}} src={Project} alt="" /><span>Running Projects</span></Nav.Link></LinkContainer>
          <LinkContainer to="/home"><Nav.Link ><img style={{width: "16px"}} src={Progress} alt="" /><span>Progress</span></Nav.Link></LinkContainer>

          <LinkContainer to="/messages"><Nav.Link ><img style={{width: "16px"}} src={Message} alt="" /><span>Messages</span></Nav.Link></LinkContainer>
          <LinkContainer to="/costcalculator"><Nav.Link ><img style={{width: "16px"}} src={CostCalculator} alt="" /><span>Cost Calculator</span></Nav.Link></LinkContainer>
          <LinkContainer to="/dailyprice"><Nav.Link ><img style={{width: "16px"}} src={Price} alt="" /><span>Daily Prices</span></Nav.Link></LinkContainer>

          <LinkContainer to="/termcondition"><Nav.Link ><img style={{width: "16px"}} src={Terms} alt="" /><span>Terms & Condition</span></Nav.Link></LinkContainer>

        </div>
      </nav>
    </header>
  );
};

export default MaterialProvider_Sidebar;
