import React, { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {  } from '../features/counter/apartmentsSlice'
import '../App.css'

export default function TheFilter({onChangePrice, onChangePeopleAmount, onChangeBedroomAmount}) {
  const dispatch = useDispatch()
  const state = [...useSelector(state => state.apartments.apartmentsData)]
  
  //Price per day
  const priceRange = useRef(null)
  const priceLabel = useRef(null)
  let [selectedPricePerDay, setSelectedPricePerDay] = useState(null)
  const prices = []

  state.forEach(elem => prices.push(elem.costPerDay))

  let minPricePerDay = prices.sort((a, b) => a - b)[0]
  let maxPricePerDay = prices.sort((a, b) => b - a)[0]
  
  //People amount 
  let maxPeopleAmount = 0
  const amountOfPeopleRange = useRef(null)
  const peopleAmountLabel = useRef(null)
  let [selectedPeopleAmount, setSelectedPeopleAmount] = useState(null)

  state.map(elem => elem.numOfPeople > maxPeopleAmount ? maxPeopleAmount = elem.numOfPeople : null)
  
  //Bedrooms amount
  const amountOfBedroomsRange = useRef(null)
  const bedroomsAmountLabel = useRef(null)  
  let maxBedroomAmount = 0
  let [selectedBedroomsAmount, setSelectedBedroomsAmount] = useState(null)

  state.map(elem => elem.numOfBedrooms > maxBedroomAmount ? maxBedroomAmount = elem.numOfBedrooms : null)

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
  } 
  
  //Filter by rating
  let stars = []

  const lightUpSelectedStars = (index) => {
    
  }
  
  for(let i = 0; i < 5; i++) {
    stars.push(
      <li key={i} onMouseOver={() => lightUpSelectedStars(i)}>
        <svg width="20" viewBox="0 -10 511.98685 511" xmlns="http://www.w3.org/2000/svg" className="star">
          <path d="m510.652344 185.902344c-3.351563-10.367188-12.546875-17.730469-23.425782-18.710938l-147.773437-13.417968-58.433594-136.769532c-4.308593-10.023437-14.121093-16.511718-25.023437-16.511718s-20.714844 6.488281-25.023438 16.535156l-58.433594 136.746094-147.796874 13.417968c-10.859376 1.003906-20.03125 8.34375-23.402344 18.710938-3.371094 10.367187-.257813 21.738281 7.957031 28.90625l111.699219 97.960937-32.9375 145.089844c-2.410156 10.667969 1.730468 21.695313 10.582031 28.09375 4.757813 3.4375 10.324219 5.1875 15.9375 5.1875 4.839844 0 9.640625-1.304687 13.949219-3.882813l127.46875-76.183593 127.421875 76.183593c9.324219 5.609376 21.078125 5.097657 29.910156-1.304687 8.855469-6.417969 12.992187-17.449219 10.582031-28.09375l-32.9375-145.089844 111.699219-97.941406c8.214844-7.1875 11.351563-18.539063 7.980469-28.925781zm0 0" fill="#ffc107"/>
        </svg>
      </li>
    )
  }

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
    lightedStars: {
      filter: 'greyscale(0)'
    }
  }

  return (
    <div className="filter" style={styles.filter}>
      <div className="by-rating" 
        style={styles.filterComponent}
      >
        <label>Rating</label>
        <div className="stars" style={{width: '100%'}}>
          <ul 
            style={{padding: '0', listStyle: 'none', width: '100%', display: 'flex', justifyContent: 'space-evenly', marginTop: '5px'}}
          >
            {stars}
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
  )
}