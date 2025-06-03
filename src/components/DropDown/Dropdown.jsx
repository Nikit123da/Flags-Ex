import React, { useState, useEffect } from 'react';
import './Dropdown.css'

function Dropdown({ options, onSelect, onSearch}) {
  const [selected, setSelected] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState(options);


  const handleSelect = (country) => {
    setSelected(country);
    setShowDropdown(false);
    if(onSelect) onSelect(country)
  }

  useEffect(() => {
    setFilteredOptions(options);
  }, [options]);
  
  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = options.filter((country) =>
      country.name.toLowerCase().includes(searchTerm)
    );
    setFilteredOptions(filtered);
  }

  return (
    <div className='dropdown'>
      <div className='dropdownBar' onClick={() => setShowDropdown(!showDropdown)}>
        {
          <div className='insideBar'>
            <img src={selected.flag} alt="flags" className='img' />
            {selected.name}
          </div>
        }
        v
      </div>

        
      {showDropdown && (

        <div className='dropdownBar'>
          <input type="text" onChange={handleSearch} placeholder="Search..." />

          {filteredOptions.map((country, index) => (
          <div key={index} onClick={() => handleSelect(country)} className='item'>
            <img src={country.flag} alt="flag" className='img' />
            {country.name}
          </div>
            ))}

          {
          options.map((country, index) => (
            <div key={index} onClick={() => handleSelect(country)} className='item'>

              <img src={country.flag} alt="flag" className='img'/>
              {country.name}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Dropdown
