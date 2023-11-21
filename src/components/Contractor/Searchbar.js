import React from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import './Searchbar.css';
const SearchBar = () => {
  return (
    <div className="input-group">
      <FormControl
        type="search"
        className="form-control rounded"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
      />
      <Button variant="outline-primary" className="custom-search-button">
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
