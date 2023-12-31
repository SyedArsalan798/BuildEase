import React from 'react';
import Sidebar from './Sidebar';
import SearchBar from './Searchbar';
import './RunningProject.css'; // Import the CSS file
import Greendot from './images/green-status.png';
import Bluedot from './images/blue-status.png';
import Yellowdot from './images/yellow-status.png';



const RunningProject = () => {
  return (
    <>
      <SearchBar />
      <Sidebar />
      <div className="runningprojecttable-container">
        <table className="runproject-table border">
          <thead>
            <tr>
              <th>Project id</th>
              <th>Project Type</th>
              <th>Owner</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Estimated Cost</th>
              <th>Actual Cost</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* Sample data, replace with your actual project data */}
            <tr>
              <td>1</td>
              <td>Residential Construction</td>
              <td>John Doe</td>
              <td>2023-01-01</td>
              <td>2023-06-30</td>
              <td>$100,000</td>
              <td>$90,000</td>
              <td className="not-started text-primary">
              <span><img src={Bluedot} width={20}/></span>
                <span>Not Started</span></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Construction</td>
              <td>John Doe</td>
              <td>2023-01-01</td>
              <td>2023-06-30</td>
              <td>$100,000</td>
              <td>$90,000</td>
              <td className="not-started text-primary">
              <span><img src={Bluedot} width={20}/></span>
                <span>Not Started</span></td>
            </tr>
            <tr >
              <td>3</td>
              <td>Residential House</td>
              <td>Jane Doe</td>
              <td>2023-02-15</td>
              <td>2023-08-31</td>
              <td>$50,000</td>
              <td>$40,000</td>
              <td className="in-progress" style={{color: '#EAE123'}}>
              <span><img src={Yellowdot} width={20}/></span>
                <span>In Progress</span></td>
            </tr>
            <tr >
              <td>4</td>
              <td>Infrastructure</td>
              <td>Bob Smith</td>
              <td>2023-03-10</td>
              <td>2023-09-15</td>
              <td>$200,000</td>
              <td>$180,000</td>
              <td className="completed text-success">
              <span><img src={Greendot} width={20}/></span>
              <span>Completed</span>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>Construction</td>
              <td>John Doe</td>
              <td>2023-01-01</td>
              <td>2023-06-30</td>
              <td>$100,000</td>
              <td>$90,000</td>
              <td className="not-started text-primary">
              <span><img src={Bluedot} width={20}/></span>
                <span>Not Started</span></td>
            </tr>
            <tr >
              <td>6</td>
              <td>Residential House</td>
              <td>Jane Doe</td>
              <td>2023-02-15</td>
              <td>2023-08-31</td>
              <td>$50,000</td>
              <td>$40,000</td>
              <td className="in-progress" style={{color: '#EAE123'}}>
              <span><img src={Yellowdot} width={20}/></span>
                <span>In Progress</span></td>
            </tr>
            <tr >
              <td>7</td>
              <td>Infrastructure</td>
              <td>Bob Smith</td>
              <td>2023-03-10</td>
              <td>2023-09-15</td>
              <td>$200,000</td>
              <td>$180,000</td>
              <td className="completed text-success">
              <span><img src={Greendot} width={20}/></span>
              <span>Completed</span>
              </td>
            </tr> <tr>
              <td>8</td>
              <td>Construction</td>
              <td>John Doe</td>
              <td>2023-01-01</td>
              <td>2023-06-30</td>
              <td>$100,000</td>
              <td>$90,000</td>
              <td className="not-started text-primary">
              <span><img src={Bluedot} width={20}/></span>
                <span>Not Started</span></td>
            </tr>

            

            
            
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RunningProject;