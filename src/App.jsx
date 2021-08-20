import React, { useState } from 'react';
import './App.css';
// Components
import TheFilter from './components/TheFilter';
import SuggestionsWrapper from './components/SuggestionsWrapper';
import Modal from './components/Modal'

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
      color: 'white'
    },
    wrapper: {
      width: '95%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }
  //Filter
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
  
  //Modal
  let [modalIsActive, setModalIsActive] = useState(false)
  let [modalData, setModalData] = useState({})

  const toggleModal = (toggler, data) => {
    setModalData(data)
    setModalIsActive(toggler)
  }

  return (
    <div className="App" style={styles.App}>
      {modalIsActive 
      ? <Modal isActive={modalIsActive} onCloseModal={toggleModal} data={modalData}/>
      : <></>}
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
          onShowModal={toggleModal}
        />
      </div>
    </div>
  );
}

export default App;
