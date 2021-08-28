import React from 'react';

import bedroom from '../assets/bedroom.svg';
import noSmoking from '../assets/no-smoking.svg';
import people from '../assets/people.svg';

export default function RentItemPageBox({type}) {

  const styles = {
    box: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: 'rgba(17, 17, 26, 0.1) 0px 0px 16px',
      width: '150px',
      height: '150px',
      margin: '10px 20px 0 10px',
      borderRadius: '15px'
    },
    boxInner: {
      height: '100%',
      width: '100%',
      borderRadius: '15px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#DCDCDC',
      fontSize: '20px'
    }
  };

  let box

  switch(typeof type) {
    case 'object': {
      switch(type[0]) {
        case 'numOfPeople': {
          box = (
            <div className="box-inner" style={styles.boxInner}>
              <img src={people} alt="" />
              <h1>{type[1]}</h1>
            </div>
          )
        } break;
        case 'numOfBedrooms': {
          box = (
            <div className="box-inner" style={styles.boxInner}>
              <img src={bedroom} alt="" />
              <h1>{type[1]}</h1>
            </div>

          )
        } break;
      }
    } break;
    case 'string': {
      switch(type) {
        case 'No smoking': {
          box = (
            <img src={noSmoking} alt="" />
          )
        }
      }
    } break;
  };

  return (
    <div className="box" style={styles.box}>
      {box}
    </div>
  )  
};