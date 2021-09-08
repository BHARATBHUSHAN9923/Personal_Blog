import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              src='images/Siege.jpg'
              text='One of the best shooters'
              label='Gaming'
              path='/post'
            />
            <CardItem
              src='images/ACV.jpg'
              text='Best Assasins Creed game ever?'
              label='Gaming'
              path='/ACV'
            />
            <CardItem
              src='images/React-Logo.png'
              text='My Recent project using react and django'
              label='Coding'
              path='/project'
            />
          </ul>
  
        </div>
      </div>
    </div>
  );
}

export default Cards;