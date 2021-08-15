import React from 'react'
import { useSelector } from 'react-redux'
import RentItem from './RentItem'

export default function SuggestionsWrapper() {
  const styles = {
    width: '100%',
    display: 'flex',
    marginTop: '10px',
    flexWrap: 'wrap',
  }

  const state = useSelector(state => state.apartments.apartmentsData)

  return (
    <div className="suggestions-wrapper" style={styles}>
      {state.map(flat => {
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
        />
      })}
    </div>
  )  
}