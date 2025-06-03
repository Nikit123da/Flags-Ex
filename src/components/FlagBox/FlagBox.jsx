import React from 'react'
import './flagBox.css'

function FlagBox({flagData}) {
  return (
    <div className='Flagscontainer'>
        <div className='flagContaier'>
            <h2>{flagData.name}</h2>
            <img src = {flagData.flag}/>
        </div>
    </div>
  )
}

export default FlagBox