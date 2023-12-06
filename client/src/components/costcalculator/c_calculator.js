import React, { useState, useEffect } from 'react';
import { Form, Button, Card, Dropdown, Alert } from 'react-bootstrap';
import Sidebar from '../Contractor/Sidebar';
import './CalculatorCSS.css'

import DropUp from './dropup.png'
import { useShowPricesData } from '../../ShowPricesDataProvider';

function UCalculator() {
  const [areaSize, setAreaSize] = useState('');
  const [constructionType, setConstructionType] = useState('');
  const [constructionMode, setConstructionMode] = useState('');
  const [bedrooms, setBedrooms] = useState(2);
  const [bathrooms, setBathrooms] = useState(1);
  const [kitchens, setKitchens] = useState(1);
  const [livingRooms, setLivingRooms] = useState(1);
  const [drawingRooms, setDrawingRooms] = useState(1);
  const [OtherOptionEnabled, setOtherOptionEnabled] = useState(false);

  const [validationError, setValidationError] = useState('');

//   const [data, setData] = useState({});
//   const [loading, setLoading] = useState(false);

  const { data, loading } = useShowPricesData();



//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch("/get_prices");
//         const newData = await response.json();
//         setData(newData);
//         setLoading(false);
//       } catch (error) {
//         // setLoading(false);
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);
  

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic
    if (!areaSize || !constructionType || !constructionMode) {
      setValidationError('Area Size, Construction Type, and Construction Mode fields are required');
      return;
    }
    else{
        setValidationError('');
    }

    


    alert("Form Submitted.");
  };

  return (
    <>
    <Sidebar />
    <>
      <Card className="add-listing-container p-4 border mb-4">
        <h6 className='mb-1'>Cost Calculator</h6>

        {loading ? (
                <span>Loading Realtime Data...</span>

            ) : 

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            {JSON.stringify(data)}
            <Form.Label className="label">Area Size (in yards) <span className='text-danger'>*</span></Form.Label>
            <Form.Control
              placeholder='e.g 80'
              type="number"
              min={75}
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
            <Form.Control as="select" value={constructionType} onChange={(e) => setConstructionType(e.target.value)}>
              <option value="">Select Construction Type</option>
              <option value="greyScale">Grey Scale</option>
              <option value="complete">Complete</option>
            </Form.Control>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="label">Construction Mode <span className='text-danger'>*</span></Form.Label>
            <Form.Control as="select" value={constructionMode} onChange={(e) => setConstructionMode(e.target.value)}>
              <option value="">Select Construction Mode</option>
              <option value="withMaterial">With Material</option>
              <option value="withoutMaterial">Without Material</option>
            </Form.Control>
          </Form.Group>


          {OtherOptionEnabled && 

          <>


        <Form.Group className="mb-3">
        <Form.Label className="label">Number of Bedrooms</Form.Label>
        <Form.Control as="select" value={bedrooms} onChange={(e) => setBedrooms(parseInt(e.target.value))}>
            {Array.from({ length: 5 }, (_, index) => (
            <option key={index + 1} value={index + 1}>{index + 1}</option>
            ))}
        </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Label className="label">Number of Bathrooms</Form.Label>
        <Form.Control as="select" value={bathrooms} onChange={(e) => setBathrooms(parseInt(e.target.value))}>
            {Array.from({ length: 5 }, (_, index) => (
            <option key={index + 1} value={index + 1}>{index + 1}</option>
            ))}
        </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Label className="label">Number of Kitchens</Form.Label>
        <Form.Control as="select" value={kitchens} onChange={(e) => setKitchens(parseInt(e.target.value))}>
            {Array.from({ length: 5 }, (_, index) => (
            <option key={index + 1} value={index + 1}>{index + 1}</option>
            ))}
        </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Label className="label">Number of Living Rooms</Form.Label>
        <Form.Control as="select" value={livingRooms} onChange={(e) => setLivingRooms(parseInt(e.target.value))}>
            {Array.from({ length: 5 }, (_, index) => (
            <option key={index + 1} value={index + 1}>{index + 1}</option>
            ))}
        </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Label className="label">Number of Drawing Rooms</Form.Label>
        <Form.Control as="select" value={drawingRooms} onChange={(e) => setDrawingRooms(parseInt(e.target.value))}>
            {Array.from({ length: 5 }, (_, index) => (
            <option key={index + 1} value={index + 1}>{index + 1}</option>
            ))}
        </Form.Control>
        </Form.Group>
        </>
        }

        <div className='enabledOptions'>

        <p onClick={function(){
            setOtherOptionEnabled(!OtherOptionEnabled)
        }}>{OtherOptionEnabled ? 
        <>
        Less Options
        <img width="15" height="15" src={DropUp} alt="expand-arrow--v1"/>

        </>
        
        : 
        <>
        More Options
        <img width="15" height="15" src="https://img.icons8.com/ios/50/expand-arrow--v1.png" alt="expand-arrow--v1"/>
        </>
        }

        </p>

        </div>


          
          {/* Calculate Cost button */}
          <div className="d-flex justify-content-end">
            <Button className='rounded-pill' variant="primary" type="submit" style={{ padding: "10px 40px" }}>
              Calculate Cost
            </Button>
          </div>
        </Form>
        }
      </Card>
      </>
    </>
  );
}

export default UCalculator;
