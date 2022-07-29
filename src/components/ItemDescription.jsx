import React from 'react'

const ItemDescription = ({name, description, image}) => {
  return (
    <div  className='description'>
        <h2>{name}</h2>
        <p>{description}</p>
    </div>
  )
}

export default ItemDescription