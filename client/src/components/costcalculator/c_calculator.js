import React, { useState } from 'react';
import { Form, Button, Card, Dropdown, Alert } from 'react-bootstrap';

function UCalculator() {
  const [areaSize, setAreaSize] = useState('');
  const [constructionType, setConstructionType] = useState('');
  const [constructionMode, setConstructionMode] = useState('');
  const [bedrooms, setBedrooms] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);
  const [kitchens, setKitchens] = useState(1);
  const [livingRooms, setLivingRooms] = useState(1);
  const [drawingRooms, setDrawingRooms] = useState(1);

  const [validationError, setValidationError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic
    if (!areaSize || !constructionType || !constructionMode) {
      setValidationError('Please fill in all required fields.');
      return;
    }

    // Your calculation logic here

    alert("Form Submitted.");
  };

  return (
    <>
      <Card className="add-listing-container p-4 border">
        <h6 className='mb-1'>Cost Calculator</h6>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label className="label">Area Size (in yards) <span className='text-danger'>*</span></Form.Label>
            <Form.Control
              type="number"
              min={1}
              value={areaSize}
              onChange={(e) => setAreaSize(e.target.value)}
              className={`${validationError ? 'is-invalid' : ''}`}
            />
            {validationError && (
              <Form.Control.Feedback type="invalid">{validationError}</Form.Control.Feedback>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="label">Construction Type <span className='text-danger'>*</span></Form.Label>
            <Form.Control as="select" onChange={(e) => setConstructionType(e.target.value)}>
              <option value="">Select Construction Type</option>
              <option value="greyScale">Grey Scale</option>
              <option value="complete">Complete</option>
            </Form.Control>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="label">Construction Mode <span className='text-danger'>*</span></Form.Label>
            <Form.Control as="select" onChange={(e) => setConstructionMode(e.target.value)}>
              <option value="">Select Construction Mode</option>
              <option value="withMaterial">With Material</option>
              <option value="withoutMaterial">Without Material</option>
            </Form.Control>
          </Form.Group>

        <Form.Group className="mb-3">
        <Form.Label className="label">Number of Bedrooms <span className='text-danger'>*</span></Form.Label>
        <Form.Control as="select" value={2} onChange={(e) => setBedrooms(parseInt(e.target.value))}>
            {Array.from({ length: 5 }, (_, index) => (
            <option key={index + 1} value={index + 1}>{index + 1}</option>
            ))}
        </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Label className="label">Number of Bathrooms <span className='text-danger'>*</span></Form.Label>
        <Form.Control as="select" value={bathrooms} onChange={(e) => setBathrooms(parseInt(e.target.value))}>
            {Array.from({ length: 5 }, (_, index) => (
            <option key={index + 1} value={index + 1}>{index + 1}</option>
            ))}
        </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Label className="label">Number of Kitchens <span className='text-danger'>*</span></Form.Label>
        <Form.Control as="select" onChange={(e) => setKitchens(parseInt(e.target.value))}>
            {Array.from({ length: 5 }, (_, index) => (
            <option key={index + 1} value={index + 1}>{index + 1}</option>
            ))}
        </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Label className="label">Number of Living Rooms <span className='text-danger'>*</span></Form.Label>
        <Form.Control as="select" onChange={(e) => setLivingRooms(parseInt(e.target.value))}>
            {Array.from({ length: 5 }, (_, index) => (
            <option key={index + 1} value={index + 1}>{index + 1}</option>
            ))}
        </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Label className="label">Number of Drawing Rooms <span className='text-danger'>*</span></Form.Label>
        <Form.Control as="select" onChange={(e) => setDrawingRooms(parseInt(e.target.value))}>
            {Array.from({ length: 5 }, (_, index) => (
            <option key={index + 1} value={index + 1}>{index + 1}</option>
            ))}
        </Form.Control>
        </Form.Group>


          
          {/* Calculate Cost button */}
          <div className="d-flex justify-content-end">
            <Button className='rounded-pill' variant="primary" type="submit" style={{ padding: "10px 40px" }}>
              Calculate Cost
            </Button>
          </div>
        </Form>
      </Card>
    </>
  );
}

export default UCalculator;
