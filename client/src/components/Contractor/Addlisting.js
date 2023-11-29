import './Addlisting.css';


import React, { useState } from 'react';
import { Form, Button, Card, Dropdown } from 'react-bootstrap';
import Sidebar from './Sidebar';

const AddListing = () => {
  const [isPublic, setIsPublic] = useState(false);
  const [projectTitle, setProjectTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedType, setSelectedType] = useState('');
  const [selectedResidentialOptions, setSelectedResidentialOptions] = useState([]);
  const [selectedCommercialOptions, setSelectedCommercialOptions] = useState([]);
  const [selectedArchitecturalStyles, setSelectedArchitecturalStyles] = useState([]);
  const [selectedAreaSizes, setSelectedAreaSizes] = useState([]);
  const [teamSize, setTeamSize] = useState('');
  const [specializedSkills, setSpecializedSkills] = useState('');
  const [estimatedCompletionTime, setEstimatedCompletionTime] = useState('');
  const [actualBudget, setActualBudget] = useState('');
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [selectedMaterialDetails, setSelectedMaterialDetails] = useState({});
  const [labourRate, setLabourRate] = useState('')
  const [selectedSteelDetails, setSelectedSteelDetails] = useState([]);
  
  const estimatedBudgetFromAPI = 100000; // Replace with actual data from API

  //All Error Handling
  const [validationError, setValidationError] = useState(''); //For Area Size
  const [titleFieldRequired, setTitleFieldRequired] = useState('');
  const [descriptionFieldRequired, setDescriptionFieldRequired] = useState('');
  const [residentialValidationError, setresidentialValidationError] = useState('');
  const [commercialValidationError, setCommercialValidationError] = useState('');
  const [locationFieldRequired, setLocationFieldRequired] = useState('')
  const [typeFieldRequired, setTypeFieldRequired] = useState('')
  const [teamFieldRequired, setTeamFieldRequired] = useState('')
  const [materialFieldRequired, setMaterialFieldRequired] = useState('');
  const [labourRateRequired, setLabourRateRequired] = useState('')

  const [completionTimeFieldRequired, setCompletionTimeFieldRequired] = useState('')
  const [budgetFieldRequired, setBudgetFieldRequired] = useState('')





  const areaSizes = [80, 120, 180, 220, 240, 500, 1000];

  const commercialOptions = [
    'Office Building Construction',
    'Retail Store Construction',
    'Hotel Construction',
    'Healthcare Facility Construction',
    'Hospital Construction',
  ];

  const residentialOptions = [
    'Single-Family Home Construction',
    'Multi-Family Dwelling Construction',
    'Custom Home Building',
    'Flat Construction',
    'Room',
  ];

  const materialOptions = {
    cement: [
      'DG Cement',
      'Lucky Cement',
      'Maple Leaf Cement',
      'Maple Leaf White Cement (40KG)',
      'Bestway Cement',
      'Fauji Cement',
      'Kohat Cement',
      'Attock Cement',
      'PakCem',
      'Askari Cement',
      'Pioneer',
      'Flying Cement',
      'Power Cement',
      'Cherat Cement',
    ],
    //mapia
    blocks: [
      'Fair Face 1200 PSI',
      'Fair Face 500-700',
      'Hollow 1200 PSI',
      'Hollow 500-700 PSI',
      'Solid 1200 PSI',
      'Solid 500-700 PSI'
    ],
    steel: [
      'Pakistan Steel Mills',
      'Ittehad Steel',
      'Mughal Steel',
      'Amreli Steel',
      'Ittefaq Steel',
      'Kamran Steel',
      'AF Steel',
      'FF Steel',
      'Al Haj Asia Star Steel',
    ],
    //mapia

    sand: [
      'Sand-Bholari',
      'Sand-Fresh Nadi',
      'Sand-Hub',
      'Sand-Jhampir',
      'Sand-Kotri',
      'Sand-Makli',
      'Sand-Malir',
      'Sand-Moram',
      'Sand-Hyderabad',
      'Sand-Lasbela',
      'Sand-Thatta'   
    ],
    //mapia
    crush: [
      'Crush-(Hassan Peer,Hub,Thatta) 10-25mm',
      'Crush-Khaka',
      'Crush-Stone Soling (Rohra) 2"-3" 50-80mm'
    ],

    windows: [
      'Standard Aluminum',
      'Chawla Aluminium',
      'Master Aluminum',
      'GR Aluminium',
      'Prime Aluminum',
    ],

    // tiles:
    // [

      
    // ],
    

    marble: [
      'Badal',
      'Tavera',
      'Flower',
      'Sunny Grey',
      'Sunny White',
      'Zebra',
      'Ziarat Grey',
      'Black Granite',
      'China Verona',
      'Black galaxy',
      'Botticino (boticina)',
      'Silky Black',
      'Tropical Grey',
    ]
    // <option value="">Select Materials</option>
    // <option value="cement">Cement</option>
    // <option value="blocks">Blocks</option>
    // <option value="steel">Steel - Iron Bar</option>
    // <option value="sand">Sand</option>
    // <option value="crush">Crush (Bajri)</option>
    // <option value="windows">Aluminum Windows</option>
    // <option value="tiles">Tiles</option>
    // <option value="doors">Doors (Plywood)</option>
    // <option value="marble">Marble</option>
    // <option value="labour">Labour rate</option>
        
    
  };

  const architecturalStyles = ['Modern', 'Traditional', 'Contemporary'];


  const handleProjectTitleChange = (e) => {
    const value = e.target.value;
    setProjectTitle(value);
    if (value === ''){
      setTitleFieldRequired('This field is required'); // Example: Mark field as required if it's empty
    }
    else{
      setTitleFieldRequired('');
    }
  };

  const handleDescriptionChange = (e) => {
    const value = e.target.value;
    setDescription(value);

    if (value === ''){
      setDescriptionFieldRequired('This field is required');
    }
    else{
      setDescriptionFieldRequired('');
    }

  };

  const handleLocationSelect = (e) => {
    const value = e.target.value;
    if (!selectedLocations.includes(value) && value!=="") {
      setSelectedLocations([...selectedLocations, value]);
      value === '' ? setLocationFieldRequired('Please select at least one Location') : setLocationFieldRequired('');
      // setgeneralFieldRequired(''); //Handling required field while submitting
    }
  };


  const handleLocationRemove = (location) => {
    const updatedLocations = selectedLocations.filter((loc) => loc !== location);
    setSelectedLocations(updatedLocations);
  };


  const handleTypeChange = (e) => {
    const value = e.target.value;
    setSelectedType(value);
    if (value === ''){
      setTypeFieldRequired('This field is required');
    }
    else{
      setTypeFieldRequired('');
    }
  }

  const handleTeamSizeChange = (e) => {
    const value = e.target.value;
    setTeamSize(value);
    if (value === ''){
      setTeamFieldRequired('Please select the number of members of your team');
    }
    else{
      setTeamFieldRequired('');
    }
  }



  const handleResidentialOptionSelect = (option) => {
    if (!selectedResidentialOptions.includes(option)) {
      setSelectedResidentialOptions([...selectedResidentialOptions, option]);
      setresidentialValidationError(''); // Clear validation error when an option is selected
    }
  };

  const handleArchitecturalStyleSelect = (style) => {
    if (!selectedArchitecturalStyles.includes(style)) {
      setSelectedArchitecturalStyles([...selectedArchitecturalStyles, style]);
    }
  };

  const handleResidentialOptionRemove = (option) => {
    const updatedOptions = selectedResidentialOptions.filter((item) => item !== option);
    setSelectedResidentialOptions(updatedOptions);
  };

  const handleArchitecturalStyleRemove = (style) => {
    const updatedStyles = selectedArchitecturalStyles.filter((item) => item !== style);
    setSelectedArchitecturalStyles(updatedStyles);
  };

  const handleCommercialOptionSelect = (option) => {
    if (!selectedCommercialOptions.includes(option)) {
      setSelectedCommercialOptions([...selectedCommercialOptions, option]);
      setCommercialValidationError(''); // Clear validation error when an option is selected
      // setgeneralFieldRequired('');
    }
  };

  const handleCommercialOptionRemove = (option) => {
    const updatedOptions = selectedCommercialOptions.filter((opt) => opt !== option);
    setSelectedCommercialOptions(updatedOptions);
  };

  const handleAreaSizeSelect = (size) => {
    if(!selectedAreaSizes.includes(size)){
      setSelectedAreaSizes([...selectedAreaSizes, size]);
      setValidationError('');
    }
    // const newSelectedSizes = [...selectedAreaSizes];
    // if (newSelectedSizes.includes(size)) {
    //   newSelectedSizes.splice(newSelectedSizes.indexOf(size), 1);
    // } else {
    //   newSelectedSizes.push(size);
    // }
    // setSelectedAreaSizes(newSelectedSizes);
    // Additional logic or state updates can be added here if needed
  };

  const handleAreaSizeRemove = (size) => {
    const newSelectedSizes = selectedAreaSizes.filter((selectedSize) => selectedSize !== size);
    setSelectedAreaSizes(newSelectedSizes);
    // Additional logic or state updates can be added here if needed
  };

  const handleCompletionTimeChange = (e) => {
    const value = e.target.value;
    setEstimatedCompletionTime(value);
    if (value === ''){
      setCompletionTimeFieldRequired('This field is required');
    }
    else{
      setCompletionTimeFieldRequired('');
    }
  }

  const handleBudgetChange = (e) => {
    const value = e.target.value;
    setActualBudget(value);
    if (value === ''){
      setBudgetFieldRequired('Please write appropriate budget for the listing');
    }
    else{
      setBudgetFieldRequired('');
    }
  }

  
  const handleMaterialSelect = (e) => {
    const value = e.target.value;
    if (!selectedMaterials.includes(value) && value!=="") {
      setSelectedMaterials([...selectedMaterials, value]);
      value === '' ? setMaterialFieldRequired('Please select at least one material') : setMaterialFieldRequired('');
      // setgeneralFieldRequired(''); //Handling required field while submitting
    }
  };

  const handleMaterialRemove = (material) => {
    const updatedMaterials = selectedMaterials.filter((mat) => mat !== material);
    setSelectedMaterials(updatedMaterials);

    // Remove material details when a material is removed
    setSelectedMaterialDetails((prevDetails) => {
      const updatedDetails = { ...prevDetails };
      delete updatedDetails[material];
      return updatedDetails;
    });
  };


  

  // const handleMaterialDetailsSelect = (material, detail) => {
  //   setSelectedMaterialDetails((prevDetails) => ({
  //     ...prevDetails,
  //     [material]: detail,
  //   }));
  // };
  const handleMaterialDetailsSelect = (material, detail) => {
    if (detail.trim() !== '') {
      setSelectedMaterialDetails((prevDetails) => {
        const existingDetails = prevDetails[material] || [];
        return {
          ...prevDetails,
          [material]: [...new Set([...existingDetails, detail])],
        };
      });
    }
  };
  const handleMaterialDetailsRemove = (material, detail) => {
    setSelectedMaterialDetails((prevDetails) => {
      const existingDetails = prevDetails[material] || [];
      const updatedDetails = existingDetails.filter(
        (selectedDetail) => selectedDetail !== detail
      );
      return {
        ...prevDetails,
        [material]: updatedDetails,
      };
    });
  };

  const handleLabourRateChange = (e) => {
    const value = e.target.value;
    setLabourRate(value);
    if (value === ''){
      setLabourRateRequired('Please choose an appropriate rate for the labour');
    }
    else{
      setLabourRateRequired('');
    }
  }

  // const renderMaterialDetailsDropdown = (material) => {
  //   return (
  //     <Form.Control as="select" key={material} onChange={(e) => handleMaterialDetailsSelect(material, e.target.value)}>
  //       <option value="">Select Detail for {material}</option>
  //       {materialOptions[material].map((option) => (
  //         <option key={option} value={option}>
  //           {option}
  //         </option>
  //       ))}
  //     </Form.Control>
  //   );
  // };

  const renderMaterialDetailsDropdown = (material) => {
    const selectedDetails = selectedMaterialDetails[material] || [];


    return (
      <div key={material} className="mb-3">
        <label style={{display: "inline-block"}} htmlFor={`materialDetailsDropdown_${material}`} className="form-label">
          {material.charAt(0).toUpperCase() + material.slice(1)}
        </label>
        
        <Dropdown drop="up">
          <Dropdown.Toggle variant="" className='border' id={`materialDetailsDropdown_${material}`}>
            Select {material} Details
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {materialOptions[material].map((option) => (
              <Dropdown.Item
                key={option}
                onClick={() => handleMaterialDetailsSelect(material, option)}
              >
                {option}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <div className="mt-2">
          {selectedDetails.map((detail) => (
            <Button
            style={{fontSize: "13px", backgroundColor: "#f1f1f1", color: "black", border: "1px solid black"}}
              key={detail}
              variant=""
              className="me-2 mb-2 rounded-pill"
              onClick={() => handleMaterialDetailsRemove(material, detail)}
            >
              {detail} <span>&times;</span>
            </Button>
          ))}
        </div>
      </div>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the selectedAreaSizes before submitting
    if (selectedAreaSizes.length === 0) {
      setValidationError('Please select at least one area size');
    }
    if (selectedResidentialOptions.length === 0) {
      setresidentialValidationError('Please select at least one residential option');
    }

    if (selectedCommercialOptions.length === 0){
      setCommercialValidationError('Please select at least one commercial option');

    }

    if (projectTitle === ''){
      setTitleFieldRequired('This field is required');
    }

    if (description === ''){
      setDescriptionFieldRequired('This field is required');
    }

    if (selectedLocations.length === 0){
      setLocationFieldRequired('Please select at least one Location');
    }

    if (selectedMaterials.length === 0){
      setMaterialFieldRequired('Please select at least one Material');
    }

    if (selectedType === ''){
      setTypeFieldRequired('Please select type of construction');
    }

    if (teamSize === ''){
      setTeamFieldRequired('Please select the number of members of your team');

    }

    if(labourRate === ''){
      setLabourRateRequired('Please choose an appropriate rate for the labour')
    }
    
    if (actualBudget === ''){
      setBudgetFieldRequired('Please write appropriate budget for the listing');
    }

    if(estimatedCompletionTime === ''){
      setCompletionTimeFieldRequired('This field is required')
    }

    // if()

    // Your submission logic here
    // ...
  };

  return (
    <>
    <Sidebar />
    <Card className="add-listing-container p-4 border">
    <h6 className='mb-1'>Add Listing</h6>

      <Form onSubmit={handleSubmit}>
        <div className='d-flex justify-content-between align-items-center mb-1'>
        <h5 className='text-secondary'>Basic Information</h5>

        <Form.Group className="public-or-private" title='Public listing would be visible to all the users, whereas private listing would be visible to you only'>
          
          <Form.Check
            type="switch"
            id="public-switch"
            label="Public"
            checked={isPublic}
            onChange={() => setIsPublic(!isPublic)}
          />
        </Form.Group>
        </div>
        <hr style={{marginTop: 0}}/>


        <Form.Group className="mb-3">
          <Form.Label className="label">Project Title <span className='text-danger'>*</span></Form.Label>
          <Form.Control type="text" placeholder="e.g. Smart Home Construction Services"
          value={projectTitle}
          onChange={handleProjectTitleChange}
          className={`${titleFieldRequired ? 'is-invalid' : ''}`} />
        </Form.Group>

        {titleFieldRequired && (
          <Form.Control.Feedback type="invalid">{titleFieldRequired}</Form.Control.Feedback>
        )}

        <Form.Group className="mb-3">
          <Form.Label className="label">Description <span className='text-danger'>*</span></Form.Label>
          <Form.Control as="textarea"
          style={{resize: "none"}} 
          value={description}
          onChange={handleDescriptionChange}
          className={`rounded rounded-3 ${descriptionFieldRequired ? 'is-invalid' : ''}`}
          placeholder="Describe your Specified Services" rows={5} />
        </Form.Group>

        {descriptionFieldRequired && (
          <Form.Control.Feedback type="invalid">{descriptionFieldRequired}</Form.Control.Feedback>
        )}

        <Form.Group className="mb-3">
          <Form.Label className="label">Location <span className='text-danger'>*</span></Form.Label>
          <Form.Control as="select" onChange={handleLocationSelect} className={`${locationFieldRequired ? 'is-invalid' : ''}`}>
            <option value="">Select Location</option>
            <option value="Karachi">Karachi</option>
            {/* <option value="Lahore">Lahore</option>
            <option value="Islamabad">Islamabad</option>
            <option value="Rawalpindi">Rawalpindi</option> */}
          </Form.Control>

          <div className='mt-2'>
          {selectedLocations.map((location) => (
                <Button
                  style={{fontSize: "13px", backgroundColor: "grey", color: "white"}}
                  key={location}
                  variant=""
                  className="me-2 rounded-pill"
                  onClick={() => handleLocationRemove(location)}
                >
                  {location} <span>&times;</span>
                </Button>
              ))}
          </div>

          {locationFieldRequired && (
          <Form.Control.Feedback type="invalid">{locationFieldRequired}</Form.Control.Feedback>
        )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="label">Type <span className='text-danger'>*</span></Form.Label>
          <Form.Control as="select"  onChange={handleTypeChange} className={`${typeFieldRequired ? 'is-invalid' : ''}`}>
            <option value="">Select Type</option>
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
          </Form.Control>

          {typeFieldRequired && (
          <Form.Control.Feedback type="invalid">{typeFieldRequired}</Form.Control.Feedback>
        )}
        </Form.Group>
        {selectedType === 'residential' && (
          <div>
            <Form.Group className="mb-3">
              <Form.Label className="label">Residential Options <span className='text-danger'>*</span></Form.Label>
              <Dropdown className='mb-2'>
                <Dropdown.Toggle variant="" id="residentialDropdown" className={`border ${residentialValidationError ? 'is-invalid' : ''}`}>
                  Select Residential Option
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {residentialOptions.map((option) => (
                    <Dropdown.Item
                      key={option}
                      onClick={() => handleResidentialOptionSelect(option)}
                    >
                      {option}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
                {residentialValidationError && (
                <Form.Control.Feedback type="invalid">{residentialValidationError}</Form.Control.Feedback>
              )}
              </Dropdown>
              <div>
                {selectedResidentialOptions.map((option) => (
                  <Button
                  style={{fontSize: "13px", backgroundColor: "grey", color: "white"}}
                    key={option}
                    variant=""
                    className="me-2 mb-2 rounded-pill"
                    onClick={() => handleResidentialOptionRemove(option)}
                  >
                    {option} <span>&times;</span>
                  </Button>
                ))}
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="label">Architectural Styles</Form.Label>
              <div className="mb-2">
              {/* Architectural Styles Dropdown */}
              <Dropdown>
                <Dropdown.Toggle variant="" id="architecturalStylesDropdown" className='border'>
                  Select Architectural Style
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {architecturalStyles.map((style) => (
                    <Dropdown.Item
                      key={style}
                      onClick={() => handleArchitecturalStyleSelect(style)}
                    >
                      {style}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
              <div>
                {selectedArchitecturalStyles.map((style) => (
                  <Button
                  style={{fontSize: "13px", backgroundColor: "grey", color: "white"}}

                    key={style}
                    variant=""
                    className="me-2 rounded-pill"
                    onClick={() => handleArchitecturalStyleRemove(style)}
                  >
                    {style} <span>&times;</span>
                  </Button>
                ))}
              </div>
            </Form.Group>
          </div>
        )}
        {selectedType === 'commercial' && (
          <div>
            <Form.Group className="mb-3">
              <Form.Label className="label">Commercial Options <span className='text-danger'>*</span></Form.Label>
              <Dropdown className='mb-2'>
                <Dropdown.Toggle variant="" id="commercialOptionsDropdown" className={`border ${commercialValidationError ? 'is-invalid' : ''}`}>
                  {selectedCommercialOptions.length > 0
                    ? 'Selected Commercial Options'
                    : 'Select Commercial Options'}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {commercialOptions.map((option) => (
                    <Dropdown.Item
                      key={option}
                      onClick={() => handleCommercialOptionSelect(option)}
                    >
                      {option}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
                {commercialValidationError && (
                <Form.Control.Feedback type="invalid">{commercialValidationError}</Form.Control.Feedback>
              )}
              </Dropdown>
              <div>
                {selectedCommercialOptions.map((option) => (
                  <Button
                  style={{fontSize: "13px", backgroundColor: "grey", color: "white"}}
                    key={option}
                    variant=""
                    className="me-2 mb-2 rounded-pill"
                    onClick={() => handleCommercialOptionRemove(option)}
                  >
                    {option} <span>&times;</span>
                  </Button>
                ))}
              </div>
            </Form.Group>
          </div>
        )}
        { selectedType && 
        <Form.Group className="mb-3">
          <Form.Label className="label">Area Size (in yards) <span className='text-danger'>*</span></Form.Label>
          <Dropdown className='mb-2'>
              <Dropdown.Toggle variant="" id="areaSizeDropdown" className={`border ${validationError ? 'is-invalid' : ''}`}
>
                {selectedAreaSizes.length > 0 ? 'Selected Area Sizes' : 'Select Area Sizes'}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {areaSizes.map((size) => (
                  <Dropdown.Item key={size} onClick={() => handleAreaSizeSelect(size)}>
                    {size}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
              {validationError && (
                <Form.Control.Feedback type="invalid">{validationError}</Form.Control.Feedback>
              )}
            </Dropdown>
            <div>
              {selectedAreaSizes.map((size) => (
                <Button
                style={{fontSize: "13px", backgroundColor: "grey", color: "white"}}
                  key={size}
                  variant=""
                  className="me-2 mb-2 rounded-pill"
                  onClick={() => handleAreaSizeRemove(size)}
                >
                  {size} <span>&times;</span>
                </Button>
              ))}
            </div>
        </Form.Group>
}
        {selectedType && (
            <div className='pt-3'>
            <h5 className='text-secondary'>Team and Expertise</h5>
            {selectedType && <hr style={{marginTop: 0}}/>}

 
            <div className="mb-3">
              {/* Team and Expertise Section */}

              {/* Size of the Team */}
              <div className="mb-3">
                <label htmlFor="teamSize" className="form-label">
                  Size of the Team <span className='text-danger'>*</span>
                </label>
                <Form.Control
                placeholder='e.g. 13'
                  type="number"
                  min={1}
                  id="teamSize"
                  value={teamSize}
                  onChange={handleTeamSizeChange}
                  className={`${teamFieldRequired ? 'is-invalid' : ''}`}
                  
                />
              </div>
              {teamFieldRequired && (
                  <Form.Control.Feedback type="invalid">{teamFieldRequired}</Form.Control.Feedback>
                )}

              {/* Specialized Skills or Expertise */}
              <div className="mb-3">
                <label htmlFor="specializedSkills" className="form-label">
                  Specialized Skills or Expertise 
                </label>
                <Form.Control
                  placeholder="e.g. Project Management, Civil Engineering, Construction Planning"
                  type="text"
                  id="specializedSkills"
                  value={specializedSkills}
                  onChange={(e) => setSpecializedSkills(e.target.value)}
                />
              </div>
            </div>
            </div>
          )}

          {/* Estimated Schedule and Budget Section */}
          {selectedType && 
          <div className="mb-3 pt-3">
            <h5 className='text-secondary'>Materials and Resources</h5>
            {selectedType && <hr style={{marginTop: 0}}/>}


            {/* Estimated Completion Time */}
            {/* <div className="mb-1">
              <label htmlFor="estimatedCompletionTime" className="form-label">
              List of Required Materials <span className='text-danger'>*</span>
              </label>
              <Form.Control
                type="text"
                className={`${completionTimeFieldRequired ? 'is-invalid' : ''}`}
                id="estimatedCompletionTime"
                placeholder="e.g., 6 months, 1 year"
                value={estimatedCompletionTime}
                onChange={handleCompletionTimeChange}
              />
            </div>
            {completionTimeFieldRequired && (
              <small className='mt-0 text-danger'>This field is required</small>

            )} */}

          {/* List of required Materials */}

          <Form.Group className="mb-3">
          <Form.Label className="label">List of Required Materials <span className='text-danger'>*</span></Form.Label>
          <Form.Control as="select" onChange={handleMaterialSelect} className={`${materialFieldRequired ? 'is-invalid' : ''}`}>
            <option value="">Select Materials</option>
            <option value="cement">Cement</option>
            <option value="blocks">Blocks</option>
            <option value="steel">Steel - Iron Bar</option>
            <option value="sand">Sand</option>
            <option value="crush">Crush (Bajri)</option>
            <option value="windows">Aluminum Windows</option>
            {/* <option value="tiles">Tiles</option> */}
            {/* <option value="doors">Doors (Plywood)</option> */}
            <option value="marble">Marble</option>
            {/* <option value="labour">Labour rate</option> */}

          </Form.Control>

          <div className='mt-2'>
          {selectedMaterials.map((material) => (
                <Button
                  style={{fontSize: "13px", backgroundColor: "grey", color: "white"}}
                  key={material}
                  variant=""
                  className="me-2 rounded-pill"
                  onClick={() => handleMaterialRemove(material)}
                >
                  {material} <span>&times;</span>
                </Button>
              ))}
          </div>
          {/* {JSON.stringify(selectedMaterialDetails, null, 4)} */}



          {materialFieldRequired && (
          <Form.Control.Feedback type="invalid">{materialFieldRequired}</Form.Control.Feedback>
        )}

        {selectedMaterials.length >= 1 && <h5 className='mt-3 text-secondary'>Add Sources of Materials</h5>}

        {/* Render Material Details Dropdowns */}
        {selectedMaterials.map((material) => renderMaterialDetailsDropdown(material))}


            {/* Labour Rate input type*/}
            <div className="mb-3 mt-3">
            <label style={{display: "inline-block"}} htmlFor="labourRate" className="form-label">
              Labour Rates/person (Rs.) <span className='text-danger'>*</span>
            </label>

            <Form.Control
            placeholder='e.g. 500'
              type="number"
              min={1}
              id="labourRate"
              value={labourRate}
              onChange={handleLabourRateChange}
              className={`mt-0 ${labourRateRequired ? 'is-invalid' : ''}`}
              
            />
            
            {labourRateRequired && (
              <Form.Control.Feedback type="invalid">{labourRateRequired}</Form.Control.Feedback>
            )}
            
            
          </div>

        </Form.Group>


            {/* Actual Budget
            <div className="mb-1 mt-3">
              <label htmlFor="actualBudget" className="form-label">
                Actual Budget <span className='text-danger'>*</span>
              </label>
              <Form.Control
                type="number"
                id="actualBudget"
                placeholder="e.g. Rs. 4000000"
                value={actualBudget}
                className={`no-spinners ${budgetFieldRequired ? 'is-invalid' : ''}`}
                onChange={handleBudgetChange}
                min={1}
                step={1}
              />
            </div>

            {budgetFieldRequired && (
                  // <Form.Control.Feedback type="invalid">{budgetFieldRequired}</Form.Control.Feedback>
                  <small className='mt-0 text-danger'>Please write appropriate budget for the listing</small>
            )} */}

            {/* Estimated Budget */}
            <div className="mb-3 mt-3" title='This budget is estimated based on the current market prices of the resourses that would be used for the construction'>
              <p className="form-label text-secondary"><b>Overall Material Cost A/C to Current Market: </b>
              <span className='ms-1 fw-bold text-dark' style={{fontSize: "large"}}>{`Rs. ${estimatedBudgetFromAPI}`}</span>

              </p>
              
              
            </div>
          </div>
          }

          <div className="d-flex justify-content-end">
            <Button className='rounded-pill' variant="primary" type="submit" style={{padding: "10px 40px"}}>
              Publish
            </Button>
          </div>
      </Form>
    </Card>
    </>
  );
};

export default AddListing;