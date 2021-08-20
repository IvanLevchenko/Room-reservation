import React from 'react'
import { useSelector } from 'react-redux'
import RentItem from './RentItem'

export default function SuggestionsWrapper({
  filteredPrice, filteredPeopleAmount, filteredBedroomAmount, onShowModal
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
          && filteredPeopleAmount <= flat.numOfPeople
          && filteredBedroomAmount <= flat.numOfBedrooms
        ) {
          return <RentItem 
            key={flat.id} 
            title={flat.title}
            rating={flat.rating}
            city={flat.city}
            costPerDay={flat.costPerDay}
            numOfPeople={flat.numOfPeople}
            numOfBedrooms={flat.numOfBedrooms}
            address={flat.address}
            rules={flat.rules}
            images={flat.images}
            onShowModal={onShowModal}
          />
        }
      })}
    </div>
  )  
}