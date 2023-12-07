import React, { useState, useEffect } from 'react';
import { Form, Button, Card, Table } from 'react-bootstrap';
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

  const [blocksQuantity, setBlocksQuantity] = useState(31347);
  const [cementQuantity, setCementQuantity] = useState(337);
  const [sandQuantity, setSandQuantity] = useState(1685);
  const [crushQuantity, setCrushQuantity] = useState(1102);
  const [steelQuantity, setSteelQuantity] = useState(2);
  const [labourCost, setLabourCost] = useState(720);

  const [validationError, setValidationError] = useState('');

//   const handleCustomizeInputs = () => {
//     // Your custom logic for updating quantities based on customized inputs
//     setBlocksQuantity(31347 + (livingRooms - 1) * 627 + (drawingRooms - 1) * 627 + (kitchens - 1) * 627 + (bathrooms - 1) * 627 + (bedrooms - 1) * 627);
//     setCementQuantity(337 + (livingRooms - 1) * 7 + (drawingRooms - 1) * 7 + (kitchens - 1) * 7 + (bathrooms - 1) * 7 + (bedrooms - 1) * 7);
//     setSandQuantity(1685 + (livingRooms - 1) * 34 + (drawingRooms - 1) * 34 + (kitchens - 1) * 34 + (bathrooms - 1) * 34 + (bedrooms - 1) * 34);
//     // Update other quantities using a similar pattern
//   };

useEffect(() => {
    // Update quantities when rooms dropdown values change
    setBlocksQuantity(31347 + (livingRooms - 1) * 627 + (drawingRooms - 1) * 627 + (kitchens - 1) * 627 + (bathrooms - 1) * 627 + (bedrooms - 1) * 627);
    setCementQuantity(337 + (livingRooms - 1) * 7 + (drawingRooms - 1) * 7 + (kitchens - 1) * 7 + (bathrooms - 1) * 7 + (bedrooms - 1) * 7);
    setSandQuantity(1685 + (livingRooms - 1) * 34 + (drawingRooms - 1) * 34 + (kitchens - 1) * 34 + (bathrooms - 1) * 34 + (bedrooms - 1) * 34);
  }, [bedrooms, bathrooms, kitchens, drawingRooms, livingRooms]);

  const calculateMaterialCost = (quantity, rate) => {
    return quantity * rate;
  };

  const calculateFinalCost = () => {
    // Calculate material costs for each item
    const blocksCost = calculateMaterialCost(blocksQuantity, 60);
    const cementCost = calculateMaterialCost(cementQuantity, 1200);
    const sandCost = calculateMaterialCost(sandQuantity, 50);
    const crushCost = calculateMaterialCost(crushQuantity, 50);
    const steelCost = calculateMaterialCost(steelQuantity, 272000);
    const labourCostPerSqFt = 1033.333333;
    const labourCostTotal = 720 * labourCostPerSqFt;

    // Calculate final cost by summing up all material costs and labor cost
    return blocksCost + cementCost + sandCost + crushCost + steelCost + labourCostTotal;
  };
  const { data, loading } = useShowPricesData();

  

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
            {/* {JSON.stringify(data)} */}
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

                  {/* Display calculated quantities
        <div>
            <p>Updated Blocks Quantity: {blocksQuantity}</p>
            <p>Updated Cement Quantity: {cementQuantity}</p>
            <p>Updated Sand Quantity: {sandQuantity}</p>
            <p>Updated Crush Quantity: {crushQuantity}</p>
            <p>Updated Steel Quantity: {steelQuantity}</p>
            <p>Updated Labour Cost: {labourCost}</p>
          </div> */}


          
          {/* Calculate Cost button */}
          <div className="d-flex justify-content-end">
            <Button className='rounded-pill' variant="primary" style={{ padding: "10px 40px" }}>
              Calculate Cost
            </Button>
          </div>

          <Table striped bordered hover className="mt-3">
            <thead>
              <tr>
                <th>Material</th>
                <th>Quantity</th>
                <th>Rate (PKR)</th>
                <th>Material Cost (PKR)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Blocks (500-700 PSI)</td>
                <td>{blocksQuantity}</td>
                <td>60</td>
                <td>{calculateMaterialCost(blocksQuantity, 60)}</td>
              </tr>
              <tr>
                <td>DG Cement (Bags)</td>
                <td>{cementQuantity}</td>
                <td>1200</td>
                <td>{calculateMaterialCost(cementQuantity, 1200)}</td>
              </tr>
              <tr>
                <td>Sand Kotri</td>
                <td>{sandQuantity}</td>
                <td>50</td>
                <td>{calculateMaterialCost(sandQuantity, 50)}</td>
              </tr>
              <tr>
                <td>Hub Crush</td>
                <td>{crushQuantity}</td>
                <td>50</td>
                <td>{calculateMaterialCost(crushQuantity, 50)}</td>
              </tr>
              <tr>
                <td>Amreli Steel (Tons)</td>
                <td>{steelQuantity}</td>
                <td>272000</td>
                <td>{calculateMaterialCost(steelQuantity, 272000)}</td>
              </tr>
              <tr>
                <td>Labor Cost (Per Sq. Ft)</td>
                <td>{areaSize ? areaSize*9 : 720}</td>
                <td>1033.333333</td>
                <td>{areaSize ? calculateMaterialCost(areaSize, 1033.333333) : calculateMaterialCost(720, 1033.333333)}</td>
              </tr>
              <tr>
                <td colSpan="3"><b>Final Cost</b></td>
                <td><b>Rs. {calculateFinalCost()}</b></td>
              </tr>
            </tbody>
          </Table>
        </Form>

        
        }
      </Card>
      </>
    </>
  );
}

export default UCalculator;
