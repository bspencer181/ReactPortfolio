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
              src='images/viralsupporthomepage.png'
              text='Application that provides non-biased information and resources for COVID-19.'
              label='Viral Support'
              path={{ pathname: "https://github.com/bspencer181/ViralSupport" }}
            />
            <CardItem
              src='images/P2.png'
              text='Type in a video game title to view images, ratings, descriptions, and more!'
              label='Game Data Finder'
              path={{ pathname: "https://github.com/bspencer181/GameDataFinder" }}
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/budget.jpg'
              text='Application that tracks online and offline expenses.'
              label='Budget Tracker'
              path={{ pathname: "https://github.com/bspencer181/BudgetTracker"}}
            />
            <CardItem
              src='images/password.jpg'
              text='Generate a random password using letters, upper/lowercase numbers, and symbols.'
              label='Random Password Generator'
              path={{ pathname: "https://github.com/bspencer181/RandomPasswordGenerator" }}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;