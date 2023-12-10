import React, { useState, useEffect } from 'react';
import { Form, Button, Card, Table } from 'react-bootstrap';
import Sidebar from '../Contractor/Sidebar';
import './CalculatorCSS.css'

import DropUp from './dropup.png'
import { useShowPricesData } from '../../ShowPricesDataProvider';

function CCalculator() {
  const [areaSize, setAreaSize] = useState('');
  const [constructionType, setConstructionType] = useState('greyScale');
  const [constructionMode, setConstructionMode] = useState('withMaterial');
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

  const [blocksRate, setBlocksRate] = useState(0);
  const [cementRate, setCementRate] = useState(0);
  const [sandRate, setSandRate] = useState(0);
  const [crushRate, setCrushRate] = useState(0);
  const [steelRate, setSteelRate] = useState(0);
  const [date, setDate] = useState('');


  const { data, loading } = useShowPricesData();

  const baseQuantities = {

    blocks: 31347,
    cement: 337,
    sand: 1685,
    crush: 1102,
    steel: 2,

  }

  useEffect(()=> {
    const avgCementRate = data && data.cement ? (parseInt(data.cement["DG Cement"].min) + parseInt(data.cement["DG Cement"].max)) / 2 : 0;
    const dated = data && data.cement ? data.cement.date : ''
    setDate(dated)
  
  
  
    setBlocksRate(data && data.blocks ? parseInt(data.blocks["Fair Face 500-700 PSI"].price) : 0);
    setCementRate(avgCementRate)
    setSandRate(data && data.sand ? parseInt(data.sand["Sand-Kotri"].price) : 0)
    setCrushRate(data && data.crush ? parseInt(data.crush['Crush-(Hassan Peer,Hub,Thatta) 10-25mm'].price) : 0)
    setSteelRate(data && data.steel ? parseInt(data.steel['Amreli Steel 60-Grade'].price * 1000) : 0)
  
  }, [loading]);

  useEffect(() => {
    // Update quantities when rooms dropdown values change
    const ratio = areaSize / 80; // Calculate the ratio based on the new area size

    setBlocksQuantity(Math.round((baseQuantities.blocks + (livingRooms - 1) * 627 + (drawingRooms - 1) * 627 + (kitchens - 1) * 627 + (bathrooms - 1) * 627 + (bedrooms - 1) * 627) * ratio));
    setCementQuantity(Math.floor((baseQuantities.cement + (livingRooms - 1) * 7 + (drawingRooms - 1) * 7 + (kitchens - 1) * 7 + (bathrooms - 1) * 7 + (bedrooms - 1) * 7)*ratio));
    setSandQuantity(Math.floor((baseQuantities.sand + (livingRooms - 1) * 34 + (drawingRooms - 1) * 34 + (kitchens - 1) * 34 + (bathrooms - 1) * 34 + (bedrooms - 1) * 34) * ratio));
    setCrushQuantity(Math.floor(baseQuantities.crush * ratio))
    setSteelQuantity(Math.floor(baseQuantities.steel * ratio))
  }, [bedrooms, bathrooms, kitchens, drawingRooms, livingRooms, areaSize]);


  const calculateMaterialCost = (quantity, rate) => {
    return quantity * rate;
  };

  const calculateFinalCost = () => {

    // const avgCementRate = (data.cement['DG Cement'].min + data.cement['DG Cement'].min)/2

    // Calculate material costs for each item
    const blocksCost = calculateMaterialCost(blocksQuantity, blocksRate);
    const cementCost = calculateMaterialCost(cementQuantity, cementRate);
    const sandCost = calculateMaterialCost(sandQuantity, sandRate);
    const crushCost = calculateMaterialCost(crushQuantity, crushRate);
    const steelCost = calculateMaterialCost(steelQuantity, steelRate);
    const labourCostPerSqFt = 1033.333333;
    const labourCostTotal = (areaSize ? (areaSize * 9) : 720) * labourCostPerSqFt;

    // Calculate final cost by summing up all material costs and labor cost
    return blocksCost + cementCost + sandCost + crushCost + steelCost + labourCostTotal;
  };

  

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

    // Utility function to format currency
    const formatCurrency = (amount) => {
      if (amount >= 10000000) {
        return `${(amount / 10000000).toFixed(2)} Crore`;
      } else if (amount >= 100000) {
        return `${(amount / 100000).toFixed(2)} Lac`;
      } else if (amount >= 1000) {
        return `${(amount / 1000).toFixed(2)} Thousand`;
      } else {
        return `${amount}`;
      }
    };

  return (
    <>
    <Sidebar />
    <>
      <Card className="add-listing-container p-4 border mb-4">
        <small className='d-flex justify-content-end text-secondary'>Try refreshing the page for daily updated information.</small>
        <h5 className='mb-1 fw-bolder text-secondary'>Cost Calculator</h5>
        {loading ? (
                <span>Loading Realtime Data...</span>

            ) : 

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label className="label">Area Size (in Sq. yards) <span className='text-danger'>*</span></Form.Label>
            <Form.Control
              placeholder='e.g 80'
              type="number"
              min={75}
              max={49975}
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

        <p className='mb-0' style={{color: '#00B3E3', fontSize: '14px'}} onClick={function(){
            setOtherOptionEnabled(!OtherOptionEnabled)
        }}>{OtherOptionEnabled ? 
        <>
        Less Options
        <img width="12" height="12" src={DropUp} alt="expand-arrow--v1"/>

        </>
        
        : 
        <>
        More Options
        <img width="12" height="12" src="https://img.icons8.com/ios/50/expand-arrow--v1.png" alt="expand-arrow--v1"/>
        </>
        }

        </p>

        </div>
          {areaSize && areaSize >= 75 && areaSize <= 49975 &&
          <>

          <h3 className='mb-0'>Estimated cost of Grey Scale Construction of {areaSize} Sq. yards Area</h3>
          <small className='mb-0 text-secondary'>Last updated on {date}</small>

          {/* 'Estimated cost of Grey Scale Construction of ' + areaSize + ' Sq. yards Area' : 'Estimated cost of Grey Scale Construction of 80 Sq. yards Area'} */}

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
                <td>{blocksRate}</td>
                <td>{formatCurrency(calculateMaterialCost(blocksQuantity, blocksRate))}</td>
              </tr>
              <tr>
                <td>DG Cement (Bags)</td>
                <td>{cementQuantity}</td>
                <td>{cementRate}</td>
                <td>{formatCurrency(calculateMaterialCost(cementQuantity, cementRate))}</td>
              </tr>
              <tr>
                <td>Sand Kotri</td>
                <td>{sandQuantity}</td>
                <td>{sandRate}</td>
                <td>{formatCurrency(calculateMaterialCost(sandQuantity, sandRate))}</td>
              </tr>
              <tr>
                <td>Hub Crush</td>
                <td>{crushQuantity}</td>
                <td>{crushRate}</td>
                <td>{formatCurrency(calculateMaterialCost(crushQuantity, crushRate))}</td>
              </tr>
              <tr>
                <td>Amreli Steel (Tons)</td>
                <td>{steelQuantity}</td>
                <td>{steelRate}</td>
                <td>{formatCurrency(calculateMaterialCost(steelQuantity, steelRate))}</td>
              </tr>
              <tr>
                <td>Labor Cost (Per Sq. Ft)</td>
                <td>{areaSize*9}</td>
                <td>1033.333333</td>
                <td>{formatCurrency(calculateMaterialCost(areaSize * 9, 1033.333333))}</td>
              </tr>
              <tr>
                <td colSpan="3"><b>Total Cost</b></td>
                <td><b>{formatCurrency(calculateFinalCost())}</b></td>
              </tr>
            </tbody>
          </Table>
          </>
          
      }

        {(areaSize <= 75 || areaSize >=49975) && areaSize && <p className='text-danger mb-0'>Oops! Please enter an area size between 75 and 49975 square yards.</p>}

        </Form>

        
        }
      </Card>
      </>
    </>
  );
}

export default CCalculator;
