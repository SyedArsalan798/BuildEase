import React from 'react';
import './Progress.css'; // Import the CSS file
import StartLogo from './images/start-progress.png' // Import your logos for each checkpoint
import GreyStructureLogo from './images/greystructure-progress.png';
import RoofInsulationLogo from './images/roofinsulation-progress.png';
import CompletedLogo from './images/housecomplete-progress.png';

const ProgressBar = ({ projectId }) => {
  // Logic to calculate progress based on project ID
  const calculateProgress = (projectId) => {
    // Implement your logic here
    // You can use state or any other mechanism to determine the progress for the given project ID
    // For demonstration purposes, let's assume a static progress value
    return 50; // 50% progress
  };

  const progress = calculateProgress(projectId);

  const handleCheckpointClick = (checkpoint) => {
    // Handle click logic for each checkpoint
    console.log(`Clicked on ${checkpoint}`);
  };

  return (
    <div className="progress-bar-container">
      <div className="progress-bar">
        <div className="progress-b" style={{ width: `${progress}%` }}></div>
        <div
          className="checkpoint start"
          onClick={() => handleCheckpointClick('Start')}
        >
          <img src={StartLogo} alt="Start Logo" />
          <span>Start</span>
        </div>
        <div
          className="checkpoint grey-structure"
          onClick={() => handleCheckpointClick('Grey Structure')}
        >
          <img src={GreyStructureLogo} alt="Grey Structure Logo" />
          <span>Grey Structure</span>
        </div>
        <div
          className="checkpoint roof-insulation"
          onClick={() => handleCheckpointClick('Roof Insulation')}
        >
          <img src={RoofInsulationLogo} alt="Roof Insulation Logo" />
          <span>Roof Insulation</span>
        </div>
        <div
          className="checkpoint completed"
          onClick={() => handleCheckpointClick('Completed')}
        >
          <img src={CompletedLogo} alt="Completed Logo" />
          <span>Completed</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
