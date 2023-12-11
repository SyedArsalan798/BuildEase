import React from'react';
//rotas
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ShowPricesDataProvider } from './ShowPricesDataProvider';

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
import UTerms from './components/User/UTermsCondition'
import Runproject from './components/Contractor/Runningproject';
import Progress from './components/Contractor/Progress';
import ShowPricesUser from './ShowPricesUser';
import ShowPricesContractor from './ShowPricesContractor'; 
import UCalculator from './components/costcalculator/u_calculator';
import CCalculator from './components/costcalculator/c_calculator';

import FeedbackEditor from './components/Contractor/messages/feedbackeditor';
import Mail from './components/Contractor/messages/mail';
import Request from './components/Contractor/Request';
import Usermsg from './components/User/messages/feedbackeditor';
import Usermail from './components/User/messages/mail';
import Card1detail from './components/Contractor/card1info';
// import Searchbar from './components/Contractor/Searchbar';
function App() {
  return (

    <ShowPricesDataProvider>
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
          <Route path='/u_termcondition' element={<UTerms />} />

          <Route path='/runningproject' element={<Runproject />} />
          <Route path='/progress' element={<Progress />} />
          <Route path='/u_dailyprice' element={<ShowPricesUser />} />
          <Route path='/c_dailyprice' element={<ShowPricesContractor />} />
          <Route path='/u_costcalculator' element={<UCalculator />} />
          <Route path='/c_costcalculator' element={<CCalculator />} />

          <Route path='/feedback' element={<FeedbackEditor />} />
          <Route path="/mail/:index" element={<Mail />} />
          <Route path='/hirerequest' element={<Request />} />
          <Route path='/usermsg' element={<Usermsg />} />
          <Route path='/card1-details' element={<Card1detail />} />

          <Route path="/usermail/:index" element={<Usermail />} />













          
          {/* <Route path='/allcontracts' element={<AllContractorlist/>} /> */}
          <Route path='/detailcontract' element={<Detaillist/>} />







        </Routes>
      </BrowserRouter>
    </ShowPricesDataProvider>
  );
}

export default App;