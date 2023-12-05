import React from 'react';
import Sidebar from './Sidebar';
import SearchBar from './Searchbar';
import './RunningProject.css'; // Import the CSS file

const RunningProject = () => {
  return (
    <>
      <SearchBar />
      <Sidebar />
      <div className="runningprojecttable-container">
        <table className="runproject-table">
          <thead>
            <tr>
              <th>Project id</th>
              <th>Project Type</th>
              <th>Owner</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Estimated Cost</th>
              <th>sActual Cost</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* Sample data, replace with your actual project data */}
            <tr className="not-started">
              <td>1</td>
              <td>Construction</td>
              <td>John Doe</td>
              <td>2023-01-01</td>
              <td>2023-06-30</td>
              <td>$100,000</td>
              <td>$90,000</td>
              <td>Not Started</td>
            </tr>
            <tr className="in-progress">
              <td>1</td>
              <td>Residential House</td>
              <td>Jane Doe</td>
              <td>2023-02-15</td>
              <td>2023-08-31</td>
              <td>$50,000</td>
              <td>$40,000</td>
              <td>In Progress</td>
            </tr>
            <tr className="completed">
              <td>1</td>
              <td>Infrastructure</td>
              <td>Bob Smith</td>
              <td>2023-03-10</td>
              <td>2023-09-15</td>
              <td>$200,000</td>
              <td>$180,000</td>
              <td>Completed</td>
            </tr>
            <tr className="in-progress">
            <td>1</td>

              <td>Residential House</td>
              <td>Jane Doe</td>
              <td>2023-02-15</td>
              <td>2023-08-31</td>
              <td>$50,000</td>
              <td>$40,000</td>
              <td>In Progress</td>
            </tr>
            <tr className="not-started">
            <td>1</td>

              <td>Construction</td>
              <td>John Doe</td>
              <td>2023-01-01</td>
              <td>2023-06-30</td>
              <td>$100,000</td>
              <td>$90,000</td>
              <td>Not Started</td>
            </tr>
            <tr className="completed">
            <td>1</td>

              <td>Infrastructure</td>
              <td>Bob Smith</td>
              <td>2023-03-10</td>
              <td>2023-09-15</td>
              <td>$200,000</td>
              <td>$180,000</td>
              <td>Completed</td>
            </tr>
            <tr className="in-progress">
            <td>1</td>

              <td>Residential House</td>
              <td>Jane Doe</td>
              <td>2023-02-15</td>
              <td>2023-08-31</td>
              <td>$50,000</td>
              <td>$40,000</td>
              <td>In Progress</td>
            </tr>
            <tr className="not-started">
            <td>1</td>

              <td>Construction</td>
              <td>John Doe</td>
              <td>2023-01-01</td>
              <td></td>
              <td>$100,000</td>
              <td>$90,000</td>
              <td>Not Started</td>
            </tr>
            <tr className="completed">
            <td>1</td>

              <td>Infrastructure</td>
              <td>Bob Smith</td>
              <td>2023-03-10</td>
              <td>2023-09-15</td>
              <td>$200,000</td>
              <td>$180,000</td>
              <td>Completed</td>
            </tr><tr className="in-progress">
            <td>1</td>

              <td>Residential House</td>
              <td>Jane Doe</td>
              <td>2023-02-15</td>
              <td>2023-08-31</td>
              <td>$50,000</td>
              <td>$40,000</td>
              <td>In Progress</td>
            </tr>
            <tr className="not-started">
            <td>1</td>

              <td>Construction</td>
              <td>John Doe</td>
              <td>2023-01-01</td>
              <td></td>
              <td>$100,000</td>
              <td>$90,000</td>
              <td>Not Started</td>
            </tr>
            <tr className="completed">
            <td>1</td>

              <td>Infrastructure</td>
              <td>Bob Smith</td>
              <td>2023-03-10</td>
              <td>2023-09-15</td>
              <td>$200,000</td>
              <td>$180,000</td>
              <td>Completed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RunningProject;
