import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out some of my work!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Application that provides non-biased information and resources for COVID-19.'
              label='Viral Support'
              path='/portfolio'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Type in a video game title to view images, ratings, descriptions, and more!'
              label='Game Data Finder'
              path='/portfolio'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Application that tracks online and offline expenses.'
              label='Budget Tracker'
              path='/portfolio'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Generate a random password using letters, upper/lowercase numbers, and symbols.'
              label='Random Password Generator'
              path='/portfolio'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;