import React from 'react'
import uuid from 'uuid'

const Bands = props => {

  const bands = props.bands.map((band) => <li key={uuid()}>{band.name}</li>)

  return (
    <div>
      {bands}
    </div>
  )

}

export default Bands
