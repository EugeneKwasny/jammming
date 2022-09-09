import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component{
  constructor(props)
  {
    super(props);

    this.state = {
      playlistName: 'Eugene\'s playlist',
      playlistTracks: [
        {
          name: 'Gritty Pretty - Intro',
          artist: 'Tove Lo',
          album:  'Sunshine Kitty',
          id: 1
        },
        {
          name: 'Glad He\'s Gone',
          artist: 'Tove Lo',
          album:  'Sunshine Kitty',
          id: 2
        },
        {
          name: 'Jacques (with Jax Jones)',
          artist: 'Tove Lo',
          album:  'Sunshine Kitty',
          id: 3
        }
      ],
      searchResults: [
        {
          name: 'Gritty Pretty - Intro',
          artist: 'Tove Lo',
          album:  'Sunshine Kitty',
          id: 1
        },
        {
          name: 'Glad He\'s Gone',
          artist: 'Tove Lo',
          album:  'Sunshine Kitty',
          id: 2
        },
        {
          name: 'Jacques (with Jax Jones)',
          artist: 'Tove Lo',
          album:  'Sunshine Kitty',
          id: 3
        }
      ]
    };
  }

  render()
  {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
         <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}/>
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
