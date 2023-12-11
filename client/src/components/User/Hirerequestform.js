// Hirerequest.jsx

import React, { useState } from 'react';
import User_Sidebar from './User_Sidebar';
import './Hirerequestform.css'; // Import the CSS file
import { Form, Button } from 'react-bootstrap';

const Hirerequest = () => {
  // State variables for form fields
  const [validationErrors, setValidationErrors] = useState({
    projectTitle: '',
    projectType: '',
    areaSize: '',
    clientEstimateCost: '',
    material: ''
  });

  const [projectTitle, setProjectTitle] = useState('');
  const [projectType, setProjectType] = useState('');
  const [areaSize, setAreaSize] = useState('');
  const [clientEstimateCost, setClientEstimateCost] = useState('');
  const [material, setMaterial] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation logic
    const errors = {};

    if (!projectTitle.trim()) {
      errors.projectTitle = 'Project Title is required';
    }

    if (!projectType) {
      errors.projectType = 'Project Type is required';
    }

    if (!areaSize.trim()) {
      errors.areaSize = 'Area Size is required';
    }

    if (!clientEstimateCost.trim()) {
      errors.clientEstimateCost = 'Client Estimate Cost is required';
    } else if (clientEstimateCost.length > 7) {
      errors.clientEstimateCost = 'Client Estimate Cost should not exceed 7 digits';
    }

    if (!material) {
      errors.material = 'Material is required';
    }

    setValidationErrors(errors);

    // If there are no errors, you can proceed with the submission logic
    if (Object.keys(errors).length === 0) {
      // Your submission logic here
    }
  };

  return (
    <>
      <User_Sidebar />
      <div className="hire-request-form-container">
        <h2>Hire Request Form</h2>
        <form onSubmit={handleSubmit}>
          <div className={`hireform-group ${validationErrors.projectTitle ? 'has-error' : ''}`}>
            <label htmlFor="projectTitle" className="hireform-label">
              Project Title
            </label>
            <input
              type="text"
              className="hireform-control"
              id="projectTitle"
              value={projectTitle}
              onChange={(e) => setProjectTitle(e.target.value)}
              required
            />
            {validationErrors.projectTitle && (
              <div className="error-message">{validationErrors.projectTitle}</div>
            )}
          </div>

          <div className={`hireform-group ${validationErrors.projectType ? 'has-error' : ''}`}>
            <label htmlFor="projectType" className="hireform-label">
              Project Type
            </label>
            <select
              className="hireform-control"
              id="projectType"
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
              required
            >
              <option value="">Select Project Type</option>
              <option value="commercial">Commercial</option>
              <option value="residential">Residential</option>
            </select>
            {validationErrors.projectType && (
              <div className="error-message">{validationErrors.projectType}</div>
            )}
          </div>

          <div className={`hireform-group ${validationErrors.areaSize ? 'has-error' : ''}`}>
            <label htmlFor="areaSize" className="hireform-label">
              Area Size (in yards)
            </label>
            <input
              type="number"
              className="hireform-control"
              id="areaSize"
              value={areaSize}
              onChange={(e) => setAreaSize(e.target.value)}
              required
            />
            {validationErrors.areaSize && (
              <div className="error-message">{validationErrors.areaSize}</div>
            )}
          </div>

          <div className={`hireform-group ${validationErrors.clientEstimateCost ? 'has-error' : ''}`}>
            <label htmlFor="clientEstimateCost" className="hireform-label">
              Client Estimate Cost (in Rs)
            </label>
            <input
              type="number"
              placeholder="6000000"
              className="hireform-control"
              id="clientEstimateCost"
              value={clientEstimateCost}
              onChange={(e) => setClientEstimateCost(e.target.value)}
              required
            />
            {validationErrors.clientEstimateCost && (
              <div className="error-message">{validationErrors.clientEstimateCost}</div>
            )}
          </div>

          <div className={`hireform-group ${validationErrors.material ? 'has-error' : ''}`}>
            <label htmlFor="material" className="hireform-label">
              Material
            </label>
            <select
              className="hireform-control"
              id="Material"
              value={material}
              onChange={(e) => setMaterial(e.target.value)}
              required
            >
              <option value="">Select Material</option>
              <option value="My Own">My Own</option>
              <option value="Contractor Side">Contractor Side</option>
            </select>
            {validationErrors.material && (
              <div className="error-message">{validationErrors.material}</div>
            )}
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Hirerequest;
