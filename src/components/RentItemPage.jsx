import React from 'react';
import { useSelector } from 'react-redux';
import LightGallery from 'lightgallery/react';

import '../App.css';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import RentItemPageBox from './RentItemPageBox';

export default function RentItemPage() {
  
  const title = window.location.href.includes('%20') 
  ? window.location.href.split('/').reverse()[0].split('%20').join(' ')
  : window.location.href.split('/').reverse()[0];

  const images = [];
  const mainInfo = [];

  let apartmentsData = useSelector(state => state.apartments.apartmentsData).filter(item => item.title === title);
  
  apartmentsData[0].images.forEach(img => images.push(img));
  Object.entries(apartmentsData[0].main).forEach(info => {
    if(info[0] !== 'rules') {
      mainInfo.push(info)
    } else {
      info[1].forEach(rule => mainInfo.push(rule))
    }
  })
  
  const styles = {
    rentItemPage: {
      width: '100%',
      display: 'flex',
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
      margin: '5px',
      cursor: 'pointer'
    },
    rentItemPageMain: {
      flex: '2',
      margin: '10px',
      color: '#525252',
      background: 'white',
      padding: '10px',
      borderRadius: '15px',
      boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
    },
    rentItemPageBody: {
      display: 'flex',
      flexDirection: 'column',
      marginLeft: '10px'
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
        <div className="rent-item-page-header" style={{display: 'flex', marginLeft: '10px'}}>
          <h1 style={{marginRight: '15px'}}>{apartmentsData[0].title}</h1>
          {[...Array(Math.round(apartmentsData[0].rating))].map((star, indx)=> {
          return (
          <svg key={indx} width="20" viewBox="0 -10 511.98685 511" xmlns="http://www.w3.org/2000/svg">
            <path d="m510.652344 185.902344c-3.351563-10.367188-12.546875-17.730469-23.425782-18.710938l-147.773437-13.417968-58.433594-136.769532c-4.308593-10.023437-14.121093-16.511718-25.023437-16.511718s-20.714844 6.488281-25.023438 16.535156l-58.433594 136.746094-147.796874 13.417968c-10.859376 1.003906-20.03125 8.34375-23.402344 18.710938-3.371094 10.367187-.257813 21.738281 7.957031 28.90625l111.699219 97.960937-32.9375 145.089844c-2.410156 10.667969 1.730468 21.695313 10.582031 28.09375 4.757813 3.4375 10.324219 5.1875 15.9375 5.1875 4.839844 0 9.640625-1.304687 13.949219-3.882813l127.46875-76.183593 127.421875 76.183593c9.324219 5.609376 21.078125 5.097657 29.910156-1.304687 8.855469-6.417969 12.992187-17.449219 10.582031-28.09375l-32.9375-145.089844 111.699219-97.941406c8.214844-7.1875 11.351563-18.539063 7.980469-28.925781zm0 0" fill="#ffc107"/>
          </svg>
          )
        })}
        </div>
        <div className="rent-item-page-body" style={styles.rentItemPageBody}>
          <div className="rent-item-page-body-info" style={{margin: '10px 0 10px 0'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Magnam deserunt numquam facilis esse? Exercitationem quae velit, 
            nemo dicta sed fuga officiis illo a amet aut ratione quibusdam perspiciatis 
            distinctio eveniet!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Magnam deserunt numquam facilis esse? Exercitationem quae velit, 
            nemo dicta sed fuga officiis illo a amet aut ratione quibusdam perspiciatis 
            distinctio eveniet!
          </div>
          <div className="rent-item-page-body-boxes" style={{display: 'flex'}}>
            {mainInfo.map((item, index)=> {
              return <RentItemPageBox key={index} type={item}/>
            })}
          </div>
        </div>
      </div>
    </div>
  )
};