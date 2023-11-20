import React from'react';
//rotas
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
//componentes
import Showcontractor from './components/User/Showcontract';
import Contractorpage from './components/Contractor/Home';
import Materialpage from './components/Materialprovider/Materialpage';
import Contractorlist from './components/User/Contractorslist';
import Materiallist from './components/User/Materialslist';
import Listing from './components/Contractor/Addlisting';
import AllContractorlist from './components/User/Contractorslist';
import Detaillist from './components/User/Detaillist';
import Messsages_Contractor from './components/Contractor/Messsages_Contractor';
import Member from './components/Contractor/members';
import Terms from './components/Contractor/Termsconditon';
import Runproject from './components/Contractor/Runningproject';
import Progress from './components/Contractor/Progress';
import Prices from './components/Dailyprices/Pricelist';
import Calculator from './components/costcalculator/calculator';
import FeedbackEditor from './components/Contractor/messages/feedbackeditor';
import Mail from './components/Contractor/messages/mail';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/allcontractors' element={<Showcontractor />} />
          <Route path='/homecontract' element={<Contractorpage />} />
          <Route path='/homematerial' element={<Materialpage />} />
          <Route path='/contractorlist' element={<Contractorlist />} />
          <Route path='/materiallist' element={<Materiallist />} />
          <Route path='/contractlisting' element={<Listing />} />
          <Route path='/messages' element={<Messsages_Contractor />} />
          <Route path='/memberlist' element={<Member />} />
          <Route path='/termcondition' element={<Terms />} />
          <Route path='/runningproject' element={<Runproject />} />
          <Route path='/progress' element={<Progress />} />
          <Route path='/dailyprice' element={<Prices />} />
          <Route path='/costcalculator' element={<Calculator />} />
          <Route path='/feedback' element={<FeedbackEditor />} />
          <Route path="/mail/:index" element={<Mail />} />









          
          {/* <Route path='/allcontracts' element={<AllContractorlist/>} /> */}
          <Route path='/detailcontract' element={<Detaillist/>} />







        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;