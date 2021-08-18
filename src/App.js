import React, { useState } from 'react';
import './App.css';
// Components
import TheFilter from './components/TheFilter';
import SuggestionsWrapper from './components/SuggestionsWrapper';

function App() {
  const styles = {
    App: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    header: {
      background: 'linear-gradient(13deg, rgba(238,174,202,1) 0%, rgba(204,179,214,1) 0%, rgba(148,187,233,1) 100%)',
      width: '100%',
      marginBottom: '20px',
      padding: '5px',
      color: 'white'
    },
    wrapper: {
      width: '95%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }

  let [currentPrice, setCurrentPrice] = useState(0)
  let [currentPeopleAmount, setCurrentPeopleAmount] = useState(0)
  let [currentBedroomAmount, setCurrentBedroomAmount] = useState(0)

  const filterPrice = (value) => {
    setCurrentPrice(value)
  }

  const filterPeopleAmount = (value) => {
    setCurrentPeopleAmount(value)
  }

  const filterBedroomAmount = (value) => {
    setCurrentBedroomAmount(value)
  }

  return (
    <div className="App" style={styles.App}>
      <header className="header" style={styles.header}>
        <h1 style={{marginLeft: '10px'}}>RENT</h1>
      </header>
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
    </div>
  );
}

export default App;
