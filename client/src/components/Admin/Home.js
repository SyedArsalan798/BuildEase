
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import './Home.css'; // Import the CSS file
// import Card from '../Contractor/Card'; // Import the Card component
import Contractoricon from "../Contractor/images/contractorcard.png";
import areaicon from '../Contractor/images/areameasure.png';
import Icon from '../Contractor/images/plus_icon.png'
import Admin_Sidebar from './Admin_Sidebar';
import SearchBar from '../User/Searchbar';


// import ShowPrices from '../../ShowPrices';
const Home = () => {

const [pendingListings] = useState([
    { id: 1, title: 'Kitchen Renovation', contractor: { name: 'John Doe' }, dateAdded: '2023-12-05' },
    { id: 2, title: 'Bathroom Remodel', contractor: { name: 'Jane Smith' }, dateAdded: '2023-12-07' },
    ]);

    const [openProjects] = useState([
    { id: 1, title: 'Website Development', client: { name: 'Acme Corp.' }, contractor: { name: 'John Doe' }, dateAdded: '2023-11-20' },
    { id: 2, title: 'Mobile App Design', client: { name: 'ABC Technologies' }, contractor: { name: 'Jane Smith' }, dateAdded: '2023-11-25' },
    ]);

  const handleAddContract = () => {
    // Add your logic for handling the "Add Contract" button click here
    console.log('Add Contract button clicked!');
  };

  return (
    <>
      {/* <ShowPrices /> */}
      <SearchBar />
      <Admin_Sidebar />
      <Container fluid className="admin_dash p-3">
      <Row className='first_row_admin'>
        <Col md={3} className='col'>
        <Link to="/admin/listings" className="text-decoration-none">
          <Card className="rounded-lg">
            <Card.Body>
            <p className="card-text fw-bolder fs-6 text-secondary">Pending Listings</p>
              <h5 className="card-title fw-bolder fs-4">
                {pendingListings.length}
              </h5>
            </Card.Body>
          </Card>
          </Link>
        </Col>
        <Col md={3} className='col'>
        <Link to="/admin/projects" className="text-decoration-none">

          <Card className="rounded-lg">
            <Card.Body>
            <p className="card-text fw-bolder fs-6 text-secondary">Open Projects</p>

            <h5 className="card-title fw-bolder fs-4">
                {openProjects.length}
              </h5>

            </Card.Body>
          </Card>
          </Link>
        </Col>
        <Col md={3} className='col'>
        <Link to="/admin/projects/completed" className="text-decoration-none">

          <Card className="rounded-lg">
            <Card.Body>
            <p className="card-text fw-bolder fs-6 text-secondary">Completed Projects</p>

            <h5 className="card-title fw-bolder fs-4">12</h5>

            </Card.Body>
          </Card>
          </Link>
        </Col>
        <Col md={3} className='col'>
        <Link to="/admin/users" className="text-decoration-none">

          <Card className="rounded-lg">
            <Card.Body>
            <p className="card-text fw-bolder fs-6 text-secondary">Registered Users</p>

            <h5 className="card-title fw-bolder fs-4">12</h5>

            </Card.Body>
          </Card>
          </Link>
        </Col>
      </Row>
      <Row className='second_row_admin mt-4'>
        <Col md={6} className='col'>
          <h3 className='mb-2'>Pending Listings</h3>
          <ul className="list-group">
            {pendingListings.map(listing => (
              <li className="list-group-item" key={listing.id}>
                <a href={`/admin/listings/${listing.id}`}>
                  {listing.title} - {listing.contractor.name} ({listing.dateAdded})
                </a>
              </li>
            ))}
          </ul>
        </Col>
        <Col md={6} className='col'>
          <h3 className='mb-2'>Open Projects</h3>
          <ul className="list-group">
            {openProjects.map(project => (
              <li className="list-group-item" key={project.id}>
                <a href={`/admin/projects/${project.id}`}>
                  {project.title} ({project.client.name}) - {project.contractor.name} ({project.dateAdded})
                </a>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
      


    </>
  );
};

export default Home;
