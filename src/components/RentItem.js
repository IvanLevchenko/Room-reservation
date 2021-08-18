import React from 'react'

export default function RentItem({
  title, rating, images, rules, address, numOfBedrooms, numOfPeople, costPerDay, city 
}) {
  const styles = {
    rentItem: {
      minWidth: '400px',
      height: '380px',
      margin: '10px',
      backgroundColor: 'white',
      boxShadow: '0 3px 20px rgba(0,0,0,0.19), 0 4px 6px rgba(0,0,0,0.23)',
      cursor: 'pointer',
      position: 'relative'
    },
    priceTag: {
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
  }
  
  return (
    <div className="rent-item" style={styles.rentItem}>
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
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="grey" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
            </svg>
            {city}
          </p>
          {[...Array(Math.round(rating))].map((star, indx)=> {
            return (
            <svg key={indx} width="20" viewBox="0 -10 511.98685 511" xmlns="http://www.w3.org/2000/svg">
              <path d="m510.652344 185.902344c-3.351563-10.367188-12.546875-17.730469-23.425782-18.710938l-147.773437-13.417968-58.433594-136.769532c-4.308593-10.023437-14.121093-16.511718-25.023437-16.511718s-20.714844 6.488281-25.023438 16.535156l-58.433594 136.746094-147.796874 13.417968c-10.859376 1.003906-20.03125 8.34375-23.402344 18.710938-3.371094 10.367187-.257813 21.738281 7.957031 28.90625l111.699219 97.960937-32.9375 145.089844c-2.410156 10.667969 1.730468 21.695313 10.582031 28.09375 4.757813 3.4375 10.324219 5.1875 15.9375 5.1875 4.839844 0 9.640625-1.304687 13.949219-3.882813l127.46875-76.183593 127.421875 76.183593c9.324219 5.609376 21.078125 5.097657 29.910156-1.304687 8.855469-6.417969 12.992187-17.449219 10.582031-28.09375l-32.9375-145.089844 111.699219-97.941406c8.214844-7.1875 11.351563-18.539063 7.980469-28.925781zm0 0" fill="#ffc107"/>
            </svg>
            )
          })}
          <svg style={{marginLeft: '10px'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="grey" className="bi bi-person-fill" viewBox="0 0 16 16">
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
          </svg>
          {numOfPeople}
          <svg style={{marginLeft: '10px'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="grey" className="bi bi-house-fill" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
            <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
          </svg>
          {numOfBedrooms}
        </div>
        <div className="cost-per-day" style={{display: 'flex', justifySelf: 'flex-end'}}></div>
      </div>
    </div>
  )
}