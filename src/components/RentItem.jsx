import React from 'react';
import { useHistory } from 'react-router-dom';

import '../App.css';

import placeMarker from '../assets/place-marker.svg';
import starPic from '../assets/star.svg';

export default function RentItem({
  title, rating, images, rules, address, numOfBedrooms, numOfPeople, costPerDay, city, 
}) {

  const history = useHistory();

  // const modalData = {
  //   title, 
  //   rating, 
  //   images, 
  //   rules, 
  //   address, 
  //   numOfBedrooms, 
  //   numOfPeople, 
  //   costPerDay, 
  //   city,
  // };

  const redirectToRentItemPage = () => {
    history.push(`/rent-item/${title}`);
  };

  const styles = {
    rentItem: {
      minWidth: '400px',
      height: '380px',
      margin: '10px',
      backgroundColor: 'white',
      boxShadow: '0 3px 20px rgba(0,0,0,0.19), 0 4px 6px rgba(0,0,0,0.23)',
      cursor: 'pointer',
      position: 'relative',
      textDecoration: 'none'
    },
    priceTag: {
      fontWeight: 'bold',
      minWidth: '55px', 
      height: '35px', 
      position: 'absolute',
      backgroundColor: '#A8BDE3',
      right: '0',
      top: '0',
      borderRadius: '0 0 0 10px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      fontSize: '20px',
      padding : '5px'
    }
  };

  return (
    
    <div onClick={redirectToRentItemPage} className="rent-item" style={styles.rentItem}>
      <div className="item-img">
        <span className="price-tag" style={styles.priceTag}>{costPerDay}$/day</span>
        <img src={images[0]} alt="" height="300px"/>
      </div>
      <div className="item-header" style={{display: 'flex', alignItems: 'center'}}>
        <h2 style={{color: '#6C6C6C', marginLeft: '10px'}}>{title}</h2>       
      </div>
      <div className="item-footer" style={{display: 'flex', marginLeft: '10px'}}>
        <div className="info" style={{display: 'flex', alignItems: 'center'}}>
          <p style={{display: 'flex', alignItems: 'center', marginRight: '10px'}}>
            <img src={placeMarker} alt="" />
            {city}
          </p>
          {[...Array(Math.round(rating))].map((star, indx)=> {
            return (
              <img src={starPic} alt="" key={indx}/>
            )
          })}
          <svg style={{marginLeft: '5px'}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="grey" className="bi bi-person-fill" viewBox="0 0 16 16">
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
          </svg>
          {numOfPeople}
          <svg style={{marginLeft: '5px'}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="grey" className="bi bi-house-fill" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
            <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
          </svg>
          {numOfBedrooms}
        </div>
        <div className="cost-per-day" style={{display: 'flex', justifySelf: 'flex-end'}}></div>
      </div>
    </div>
  );
};