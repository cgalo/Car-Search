import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar/SearchBar';

type AppState = {searchInput: string};

class App extends React.Component {
  state : AppState = {
    searchInput : ''
  };

  onSearchSubmit = (val: String) => {
    console.log(val);
  }
  
  render () {
    
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar InputHandler={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;