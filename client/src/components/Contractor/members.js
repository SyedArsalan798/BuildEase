import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
// import AddNewImg from './add.svg';
import AddNew from './images/plus_icon.png'
import SearchBar from './Searchbar';

import './member.css';

const Member = () => {
  const [data, setData] = useState([]);
  const [newMember, setNewMember] = useState({
    memberName: '',
    age: '',
    phoneNo: '',
  });
  const [showAddNewRow, setShowAddNewRow] = useState(false);
  const [validationErrors, setValidationErrors] = useState({
    memberName: '',
    age: '',
    phoneNo: '',
  });

  const sampleData = [
    {
      memberName: 'John Doe',
      age: '25',
      phoneNo: '03324444444',
    },
    {
      memberName: 'Jane Doe',
      age: '30',
      phoneNo: '03324444444',
    },
    {
      memberName: 'Jane Doe',
      age: '30',
      phoneNo: '03324444444',
    }, {
      memberName: 'Jane Doe',
      age: '30',
      phoneNo: '03324444444',
    },
    // Add more sample data as needed
  ];

  useEffect(() => {
    setData(sampleData);
  }, []);

  const handleAddNewRow = () => {
    setShowAddNewRow(true);
  };

  const handleClosePopup = () => {
    setShowAddNewRow(false);
    setNewMember({
      memberName: '',
      age: '',
      phoneNo: '',
    });
  };

  const handleSaveNewRow = () => {
    const isValidAge = /^\d{1,2}$/.test(newMember.age);
    const isValidPhoneNo = /^\d{11}$/.test(newMember.phoneNo.replace(/[^0-9]/g, ''));

    if (newMember.memberName && isValidAge && isValidPhoneNo) {
      setData([...data, newMember]);
      setNewMember({
        memberName: '',
        age: '',
        phoneNo: '',
      });
      setValidationErrors({
        memberName: '',
        age: '',
        phoneNo: '',
      });
      setShowAddNewRow(false);
    } else {
      const errors = {
        memberName: newMember.memberName ? '' : 'Member Name is required',
        age: isValidAge ? '' : 'Age should be a valid number up to 2 digits',
        phoneNo: isValidPhoneNo ? '' : 'Phone No should be a valid 11-digit number',
      };
      setValidationErrors(errors);
    }    
  };
  

  return (
    <div>
      <SearchBar/>
      <Sidebar />
      <div className=''>
        <div className='page__container_wrapper member__page'>
          <div className="Member_info_container">
            <div className='heading__and_addbtn'>
            <h6 className='c_members_heading text-secondary'>All the workers under your supervision would be shown here.</h6>

                <div className='addnew__newsUpdate_btn border' onClick={handleAddNewRow}>
                <img width="22" height="22"  style={{marginBottom: '3px'}} src={AddNew} alt="plus--v1"/> 
                <span className='ms-3 me-1 fw-bold'>Add new Member</span>
                </div>

              
            </div>
          </div>

          <div className="table-container">
            <table className="data-table border">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Member Name</th>
                  <th>Age</th>
                  <th>Phone No</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.memberName}</td>
                    <td>{item.age}</td>
                    <td>{item.phoneNo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {showAddNewRow && (
            <div className="member_create_pop_main_wrap">
              <div className="member_create_pop_content">
                <span className="close__member_create_pop" onClick={handleClosePopup}>
                  &times;
                </span>
                <h5>Add Member Information</h5>
                <form className='member__fields_form_wrap' onSubmit={(e) => {e.preventDefault()}}>
                  <div className='member__field_wrap_body'>
                    <div className="member_create_pop_group member_name">
                      <label htmlFor="memberName">Member Name</label>
                      <input
                        type="text"
                        id="memberName"
                        placeholder='Ayaz Hasan'
                        value={newMember.memberName}
                        onChange={(e) => setNewMember({ ...newMember, memberName: e.target.value })}
                      />
                      {validationErrors.memberName && (
                        <small className="error-message text-danger">{validationErrors.memberName}</small>
                      )}
                    </div>
                    <div className="member_create_pop_group member_age">
                      <label htmlFor="age">Age</label>
                      <input
                        type="number"
                        id="age"
                        placeholder='25'
                        value={newMember.age}
                        onChange={(e) => setNewMember({ ...newMember, age: e.target.value })}
                      />
                      {validationErrors.age && (
                        <small className="error-message text-danger">{validationErrors.age}</small>
                      )}
                    </div>
                    <div className="member_create_pop_group member_phone_no">
                      <label htmlFor="phoneNo">Phone No</label>
                      <input
                        type="text"
                        id="phoneNo"
                        placeholder='03351234567'
                        value={newMember.phoneNo}
                        onChange={(e) => {
                          const enteredPhoneNo = e.target.value;
                          if (enteredPhoneNo.length <= 11) {
                            setNewMember({ ...newMember, phoneNo: enteredPhoneNo });
                          }
                        }}
                        
                      />

                        {validationErrors.phoneNo && (
                          <small className="error-message text-danger">{validationErrors.phoneNo}</small>
                        )}

                    </div>
                  </div>
                  <div className='member__field_wrap_footer'>
                    <button onClick={handleClosePopup} className='member__field_wrap_footer_cancel'>
                      Cancel
                    </button>
                    <button onClick={handleSaveNewRow} className='member__field_wrap_footer_save'>
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Member;
