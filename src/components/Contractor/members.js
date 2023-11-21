import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import AddNewImg from './add.svg';
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

  const sampleData = [
    {
      memberName: 'John Doe',
      age: '25',
      phoneNo: '123-456-7890',
    },
    {
      memberName: 'Jane Doe',
      age: '30',
      phoneNo: '987-654-3210',
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
    if (newMember.memberName && newMember.age && newMember.phoneNo) {
      setData([...data, newMember]);
      setNewMember({
        memberName: '',
        age: '',
        phoneNo: '',
      });
      setShowAddNewRow(false);
    } else {
      alert('Please fill in all fields');
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
              <h2>
                Member Information{' '}
                <span className='addnew__newsUpdate_btn' onClick={handleAddNewRow}>
                  <img src={AddNewImg} alt='-' /> Add New
                </span>
              </h2>
            </div>
          </div>

          <div className="table-container">
            <table className="data-table">
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
                <h2>Add Member Information</h2>
                <form className='member__fields_form_wrap'>
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
                    </div>
                    <div className="member_create_pop_group member_phone_no">
                      <label htmlFor="phoneNo">Phone No</label>
                      <input
                        type="text"
                        id="phoneNo"
                        placeholder='0335-1234567'
                        value={newMember.phoneNo}
                        onChange={(e) => {
                          const enteredPhoneNo = e.target.value;
                          if (enteredPhoneNo.length <= 11) {
                            setNewMember({ ...newMember, phoneNo: enteredPhoneNo });
                          }
                        }}
                      />

                      
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
