import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Gallery.css';
import FlagBox from '../FlagBox/FlagBox.jsx';
import Dropdown from '../DropDown/Dropdown.jsx';

function Gallery() {
  const [flags, setFlags] = useState([]);
  const [selectedFlag, setSelectedFlag] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        let response = await axios('https://countriesnow.space/api/v0.1/countries/info?returns=flag');
        console.log(response.data.data);
        setFlags(response.data.data); 
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);



  return (
    <div className='container'>
      <div>
        <Dropdown
          options={flags}               
          onSelect={(flag) => {
            setSelectedFlag(flag);     
          }}
          onSearch={(flagName) => {
            setSelectedFlag(flagName)
          }}
        />
      </div>

      <div className='flagsWindow'>
            {
                selectedFlag ? (<FlagBox key={0} flagData={selectedFlag} />) //if selected
                : //else
                ( 
                    flags && flags.map((flagData, index) => (
                    <FlagBox key={index} flagData={flagData} />
                    ))
                )
            }
      </div>

    </div>
  );
}

export default Gallery;
