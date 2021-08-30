import React, { useState } from 'react';
import TheFilter from '../components/TheFilter';
import SuggestionsWrapper from './SuggestionsWrapper';

export default function Home() {
  //Filter
  let [currentPrice, setCurrentPrice] = useState(0);
  let [currentPeopleAmount, setCurrentPeopleAmount] = useState(0);
  let [currentBedroomAmount, setCurrentBedroomAmount] = useState(0);
  let [currentRating, setCurrentRating] = useState(0);

  const filterByPrice = (value) => {
    setCurrentPrice(value)
  };

  const filterByPeopleAmount = (value) => {
    setCurrentPeopleAmount(value)
  };

  const filterByBedroomAmount = (value) => {
    setCurrentBedroomAmount(value)
  };

  const filterByRating = (value) => {
    setCurrentRating(value)
  }
  
  const styles = {
    wrapper: {
      width: '95%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  };

  return (
    <div className="main-wrapper" style={styles.wrapper}>
      <TheFilter 
        onChangePrice={filterByPrice}
        onChangePeopleAmount={filterByPeopleAmount}
        onChangeBedroomAmount={filterByBedroomAmount}
        onChangeRating={filterByRating}
      />
        <SuggestionsWrapper 
          filteredPrice={currentPrice}
          filteredPeopleAmount={currentPeopleAmount}
          filteredBedroomAmount={currentBedroomAmount}
          filteredRating={currentRating}
        />
    </div>
  )
};