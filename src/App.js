import React from 'react';
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

  return (
    <div className="App" style={styles.App}>
      <header className="header" style={styles.header}>
        <h1 style={{marginLeft: '10px'}}>RENT</h1>
      </header>
      <div className="main-wrapper" style={styles.wrapper}>
        <TheFilter/>
        <SuggestionsWrapper/>
      </div>
    </div>
  );
}

export default App;
