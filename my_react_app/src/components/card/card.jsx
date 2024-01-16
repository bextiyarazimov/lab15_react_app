

import React from 'react';
import './card.css';
import Button from '../button/button';

const Card = (props) => {
  return (
    <div className='card'>
        <h2 className='card_title'>{props.title}</h2>
        <p className='card_desc'>{props.text}</p>
      <Button text="Inner text"/>
    </div>
  )
}

 export default Card
