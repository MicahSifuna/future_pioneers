import React from 'react';
import '././styles/cards.css';

// import queen from "../Assets/queen.jpg";
// import oscar from "../Assets/oscar.jpg";

import ItemDescription from './ItemDescription';

const Cards = ({ name, description, image }) => {
  return (
    <div>
        <ItemDescription
            name={name}
            description={description}
        />
    </div>
  )
}

export default Cards