import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import '../App.css';

import starImg from '../assets/star.svg';

export default function TheFilter({
  onChangePrice, onChangePeopleAmount, onChangeBedroomAmount, onChangeRating
}) {
  const state = [...useSelector(state => state.apartments.apartmentsData)];
  
  //Price per day
  const priceRange = useRef(null);
  const priceLabel = useRef(null);
  let [selectedPricePerDay, setSelectedPricePerDay] = useState(null);
  const prices = [];

  state.forEach(elem => prices.push(elem.costPerDay));

  let minPricePerDay = prices.sort((a, b) => a - b)[0];
  let maxPricePerDay = prices.sort((a, b) => b - a)[0];
  
  //People amount 
  let maxPeopleAmount = 0;
  const amountOfPeopleRange = useRef(null);
  const peopleAmountLabel = useRef(null);
  let [selectedPeopleAmount, setSelectedPeopleAmount] = useState(null);

  state.map(elem => elem.main.numOfPeople > maxPeopleAmount ? maxPeopleAmount = elem.main.numOfPeople : null);
  
  //Bedrooms amount
  const amountOfBedroomsRange = useRef(null);
  const bedroomsAmountLabel = useRef(null);
  let maxBedroomAmount = 0;
  let [selectedBedroomsAmount, setSelectedBedroomsAmount] = useState(null);

  state.map(elem => elem.main.numOfBedrooms > maxBedroomAmount ? maxBedroomAmount = elem.main.numOfBedrooms : null);

  const toggleLabel = (label) => {
    label.current.style.display = 'block'
    switch(label) {
      case priceLabel: setSelectedPricePerDay(priceRange.current.value)
      break;
      case peopleAmountLabel: setSelectedPeopleAmount(amountOfPeopleRange.current.value)
      break;
      case bedroomsAmountLabel: setSelectedBedroomsAmount(amountOfBedroomsRange.current.value)
      break;
    }
    setTimeout(() => label.current.style.display = 'none', 1000) // !Little bug!
  };
  
  //Filter by rating
  let [starIsSelected, setStarIsSelected] = useState({id: null, value: false});

  const styles = {
    filter: {
      width: '80%',
      height: '100px',
      display: 'flex',
      color: 'grey',
      fontWeight: 'bold',
      flexWrap: 'wrap',
      position: 'relative'
    },
    filterComponent: {
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      minWidth: '130px', 
      height: '100%',
      marginLeft: '20px',
      justifyContent: 'space-evenly',
    },
    starsWrapper: {
      padding: '0', 
      listStyle: 'none', 
      width: '100%', 
      display: 'flex', 
      justifyContent: 'space-evenly', 
      marginTop: '5px',
      userSelect: 'none',
    }
  };

  return (
    <div className="filter" style={styles.filter}>
      <div className="by-rating" 
        style={styles.filterComponent}
      >
        <label>Rating</label>
        <div className="stars" style={{width: '100%'}}>
          <ul 
            style={styles.starsWrapper}
          >
            {[...Array(5)].map((elem, index) => {
              return (
                <img
                  src={starImg}
                  alt=""
                  key={index}
                  draggable="false"
                  style={{filter: starIsSelected.value && starIsSelected.id >= index ? 'grayscale(0)' : 'grayscale(1)'}}
                  onMouseOver={() => setStarIsSelected({id: index, value: true})}
                  onMouseLeave={() => setStarIsSelected({id: null, value: false})}
                  onClick={() => onChangeRating(index + 1)}
                />
              )
            })}
          </ul>
        </div>
      </div>
      <div className="by-price"
        style={{...styles.filterComponent, minWidth: '200px'}}
      >
        <label>Price per day</label>
        <div className="price-input" style={{display: 'flex', width: '100%', position: 'relative'}}>
          <span style={{marginRight: '5px'}}>{minPricePerDay}$</span>
          <input 
            type="range"
            min={minPricePerDay} 
            max={maxPricePerDay} 
            step="5"
            style={{width: '100%'}}
            className="price-range"
            ref={priceRange}
            onChange={() => {
              toggleLabel(priceLabel)
              onChangePrice(priceRange.current.value)
            }}
            defaultValue={minPricePerDay}
          />
          <label ref={priceLabel} style={{display: 'none', position: 'absolute', left: '40%', top: '-20px'}}>{selectedPricePerDay}</label>
          <span style={{marginLeft: '5px'}}>{maxPricePerDay}$</span>
        </div>
      </div>
      <div className="by-num-of-people" style={styles.filterComponent}>
        <label>Amount of people</label>
        <div className="people-input" style={{display: 'flex', width: '100%', position: 'relative'}}>
          <span>1</span>
          <input 
            defaultValue="1" 
            ref={amountOfPeopleRange} 
            onChange={() =>{
              toggleLabel(peopleAmountLabel)
              onChangePeopleAmount(amountOfPeopleRange.current.value)
            }} 
            type="range" min="1" max={maxPeopleAmount} 
            step="1"
          />
          <label ref={peopleAmountLabel} style={{position: 'absolute', left: '45%', top: '-20px'}}>{selectedPeopleAmount}</label>
          <span>{maxPeopleAmount}</span>
        </div>
      </div>
      <div className="by-num-of-bedrooms" style={styles.filterComponent}>
        <label>Amount of bedrooms</label>
        <div className="bedrooms-input" style={{display: 'flex', width: '100%', position: 'relative'}}>
          <span>1</span>
          <input 
            defaultValue="1" 
            ref={amountOfBedroomsRange} 
            onChange={() => {
              toggleLabel(bedroomsAmountLabel)
              onChangeBedroomAmount(amountOfBedroomsRange.current.value)
            }} 
            type="range" 
            min="1" 
            max={maxBedroomAmount} 
            step="1"
          />
          <label ref={bedroomsAmountLabel} style={{position: 'absolute', left: '40%', top: '-20px'}}>{selectedBedroomsAmount}</label>
          <span>{maxBedroomAmount}</span>
        </div>
      </div>
    </div>
  );
};