import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
// import { Link, useNavigate } from "react-router-dom";
// import AddListing from "../Contractor/images/addlisting.png";
// import Materials from "../Contractor/images/materials.png";

import Hire from "../Contractor/images/hire.png";

import CostCalculator from "../Contractor/images/costcalculator.png";
import Project from "../Contractor/images/project.png";
import Progress from "../Contractor/images/progress.png";
import ClientImg from "../Contractor/images/hire.png";
import Dashboard from "../Contractor/images/dashboard.png";
import ContractorImg from "../../assets/profile.png";
import Price from "../Contractor/images/dailyprice.png";
import Message from "../Contractor/images/feedback.png";
import Terms from "../Contractor/images/terms.png";
import Logo from "../Contractor/images/buildease_logo.png"

const Admin_Sidebar = () => {
  // const dispatch = useDispatch();
  return (
    <header className="leftSidebar__logo_navigation">
      <center>
      <img src={Logo} width={150}></img>
      </center>
      <nav className="leftSidebarMenu__main_wrap" >
         
        <div className="leftMenu__main_wrap">
          <LinkContainer to="/dashboard"><Nav.Link ><img style={{width: "16px"}} src={Dashboard} alt="" /><span>Dashboard</span></Nav.Link></LinkContainer>
          {/* <LinkContainer to="/materiallist"><Nav.Link ><img style={{width: "16px"}} src={Materials} alt="" /><span>Buy Materials</span></Nav.Link></LinkContainer> */}
          <LinkContainer to="/view_contractor"><Nav.Link ><img style={{width: "16px"}} src={ContractorImg} alt="" /><span>View Contractors</span></Nav.Link></LinkContainer>
          <LinkContainer to="/view_clients"><Nav.Link ><img style={{width: "16px"}} src={ClientImg} alt="" /><span>View Clients</span></Nav.Link></LinkContainer>

          <LinkContainer to="/usermsg"><Nav.Link ><img style={{width: "16px"}} src={Message} alt="" /><span>Messages</span></Nav.Link></LinkContainer>
          <LinkContainer to="/u_costcalculator"><Nav.Link ><img style={{width: "16px"}} src={CostCalculator} alt="" /><span>Cost Calculator</span></Nav.Link></LinkContainer>
          <LinkContainer to="/u_dailyprice"><Nav.Link ><img style={{width: "16px"}} src={Price} alt="" /><span>Daily Prices</span></Nav.Link></LinkContainer>

          <LinkContainer to="/u_termcondition"><Nav.Link ><img style={{width: "16px"}} src={Terms} alt="" /><span>Terms & Condition</span></Nav.Link></LinkContainer>

        </div>
      </nav>
    </header>
  );
};

export default Admin_Sidebar;
