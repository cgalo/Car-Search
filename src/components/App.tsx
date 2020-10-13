import React from 'react';
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar/SearchBar';

type AppState = {images: Text[]};

interface unsplashData {
  total: number
  total_pages: number

}

class App extends React.Component {
  state : AppState = {
    images: []
  };

  onSearchSubmit = async(userInput: String) => {
    const response = await unsplash.get('/search/photos', {
      params: {
        query: (userInput)}
    });
    this.setState({ images : response.data.results });
  }
  
  render () {
    
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar InputHandler={this.onSearchSubmit} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;