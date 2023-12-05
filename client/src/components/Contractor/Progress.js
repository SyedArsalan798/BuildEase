import React, { useState } from 'react';
import Sidebar from './Sidebar';
import SearchBar from './Searchbar';
import ProgressBar from './ProgressBar'; // Assuming you have a ProgressBar component
import './Progress.css'; // Import the CSS file

const Progress = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectChange = (projectId) => {
    setSelectedProject(projectId);
  };

  return (
    <>
      <SearchBar />
      <Sidebar />
      <div className="progress-container">
        <div className="status-section">
          <p>In Progress</p>
        </div>
        <div className="dropdown-section">
          <label htmlFor="projectId">Project ID:</label>
          <select
            id="projectId"
            onChange={(e) => handleProjectChange(e.target.value)}
            value={selectedProject}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        {selectedProject && <ProgressBar projectId={selectedProject} />}
      </div>
    </>
  );
};

export default Progress;
