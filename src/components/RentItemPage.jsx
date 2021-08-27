import React from 'react';
import { useSelector } from 'react-redux';
import LightGallery from 'lightgallery/react';

import '../App.css';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

export default function RentItemPage() {
  
  const title = window.location.href.includes('%20') 
  ? window.location.href.split('/').reverse()[0].split('%20').join(' ')
  : window.location.href.split('/').reverse()[0];

  const images = [];

  let apartmentsData = useSelector(state => state.apartments.apartmentsData).filter(item => item.title === title);
  
  apartmentsData[0].images.forEach(img => images.push(img));

  const styles = {
    rentItemPage: {
      width: '100%',
      display: 'flex',
      border: '1px solid orange'
    },
    rentItemPageImages: {
      maxWidth: '620px',
      minWidth: '500px',
      margin: '10px',
      background: 'white',
      padding: '10px',
      borderRadius: '15px',
      boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px', 
    },
    image: {
      width: '300px',
      margin: '5px'
    },
    rentItemPageMain: {
      flex: '2',
      margin: '10px',
      color: '#525252',
      background: 'white',
      padding: '10px',
      borderRadius: '15px',
      boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
    }
  };

  return (
    <div className="rent-item-page" style={styles.rentItemPage}>
      <div className="rent-item-page-images" style={styles.rentItemPageImages}>
        <LightGallery speed={500} elementClassNames="gallery">
          {images.map(img => <img src={img} key={img} style={styles.image} />)}
        </LightGallery>
      </div>
      <div className="rent-item-page-main" style={styles.rentItemPageMain}>
        <h1>{apartmentsData[0].title}</h1>
      </div>
    </div>
  )
};