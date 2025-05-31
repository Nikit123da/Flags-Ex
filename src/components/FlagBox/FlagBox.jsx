import React from 'react'

function FlagBox(flagData) {
  return (
    <div>
        <div>
            <h2>{flagData.flagName}</h2>
            <img src = {flagData.img} alt = {flagData.flagName}/>
        </div>

    </div>
  )
}

export default FlagBox