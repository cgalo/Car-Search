import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar/SearchBar';

type AppState = {searchInput: string};

class App extends React.Component {
  state : AppState = {
    searchInput : ''
  };

  onSearchSubmit = (userInput: String) => {
    axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: (userInput)
      },
      headers: {
        Authorization: 'Client-ID ' + (process.env.REACT_APP_UNSPLASH_API_KEY)
      }
    });
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