import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';

// Components
import TheFilter from './components/TheFilter';
import SuggestionsWrapper from './components/SuggestionsWrapper';
import Home from './components/Home';
import RentItemPage from './components/RentItemPage';
// import Modal from './components/Modal';

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
  };
  
  //Modal
  // let [modalIsActive, setModalIsActive] = useState(false);
  // let [modalData, setModalData] = useState({});

  // const toggleModal = (toggler, data) => {
  //   setModalData(data);
  //   setModalIsActive(toggler);
  // };


  return (
    <div className="App" style={styles.App}>
      <header style={styles.header}>
        <h1 style={{marginLeft: '10px'}}>RENT</h1>
      </header>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/rent-item" component={RentItemPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
