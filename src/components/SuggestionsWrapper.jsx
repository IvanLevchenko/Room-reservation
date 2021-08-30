import React from 'react';
import { useSelector } from 'react-redux';
import RentItem from './RentItem';

export default function SuggestionsWrapper({
  filteredPrice, filteredPeopleAmount, filteredBedroomAmount, filteredRating
}) {
  const styles = {
    width: '100%',
    display: 'flex',
    marginTop: '10px',
    flexWrap: 'wrap',
    position: 'relative'

  }

  const apartmentsData = useSelector(state => state.apartments.apartmentsData)
  
  return (
    <div className="suggestions-wrapper" style={styles}>
      {apartmentsData.map(flat => {
        if(
          filteredPrice <= flat.costPerDay
          && filteredPeopleAmount <= flat.main.numOfPeople
          && filteredBedroomAmount <= flat.main.numOfBedrooms
          && (filteredRating >= flat.rating || filteredRating === 0)
        ) {
          return <RentItem 
            key={flat.id} 
            title={flat.title}
            rating={flat.rating}
            city={flat.city}
            costPerDay={flat.costPerDay}
            numOfPeople={flat.main.numOfPeople}
            numOfBedrooms={flat.main.numOfBedrooms}
            address={flat.address}
            rules={flat.main.rules}
            images={flat.images}
          />
        }
        return '';
      })}
    </div>
  );
};