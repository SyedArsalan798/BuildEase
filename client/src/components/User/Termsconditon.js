// TermsCondition.js

import React from 'react';
import './Termscondition.css';  // Make sure to create this CSS file for styling
import Sidebar from './Sidebar';

const TermsCondition = () => {
  return (
    <>
    <Sidebar/>
    <div className="terms-container">
      <h1 className="terms-heading">Terms and Conditions</h1>
      <div className="terms-content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac velit vitae elit sodales eleifend.
          Vivamus interdum ac quam at pellentesque. Phasellus congue aliquet lorem, at hendrerit metus.
          Integer euismod, neque vel hendrerit accumsan, augue urna tempus purus, vitae scelerisque nunc ipsum sit amet justo.
        </p>
        <p>
          Nulla facilisi. Duis tristique tincidunt volutpat. Ut laoreet, turpis a hendrerit bibendum,
          elit turpis cursus massa, sit amet blandit turpis purus non justo. In hac habitasse platea dictumst.
        </p>
        <p>
          Proin eget finibus nisl, vel consequat justo. Sed in ex id metus scelerisque dictum non vel purus.
          Aenean vitae purus a tellus malesuada placerat a id lectus. Curabitur hendrerit tincidunt velit,
          non convallis sapien ullamcorper at. Phasellus sodales facilisis augue, nec aliquet metus tincidunt id.
        </p>
        {/* Add more paragraphs as needed */}
      </div>
    </div>
    </>

  );
};

export default TermsCondition;
