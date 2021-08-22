import React, { useState } from 'react';
import TheFilter from '../components/TheFilter';
import SuggestionsWrapper from './SuggestionsWrapper';

export default function Home() {
  let [currentPrice, setCurrentPrice] = useState(0);
  let [currentPeopleAmount, setCurrentPeopleAmount] = useState(0);
  let [currentBedroomAmount, setCurrentBedroomAmount] = useState(0);

  const filterPrice = (value) => {
    setCurrentPrice(value)
  };

  const filterPeopleAmount = (value) => {
    setCurrentPeopleAmount(value)
  };

  const filterBedroomAmount = (value) => {
    setCurrentBedroomAmount(value)
  };
  
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
        onChangePrice={filterPrice}
        onChangePeopleAmount={filterPeopleAmount}
        onChangeBedroomAmount={filterBedroomAmount}
      />
      <SuggestionsWrapper 
        filteredPrice={currentPrice}
        filteredPeopleAmount={currentPeopleAmount}
        filteredBedroomAmount={currentBedroomAmount}
      />
    </div>
  )
};