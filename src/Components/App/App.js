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
          id: 4
        },
        {
          name: 'Glad He\'s Gone',
          artist: 'Tove Lo',
          album:  'Sunshine Kitty',
          id: 5
        },
        {
          name: 'Jacques (with Jax Jones)',
          artist: 'Tove Lo',
          album:  'Sunshine Kitty',
          id: 6
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

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
  }

  addTrack(track)
  {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    const newPlaylistTracksState =  this.state.playlistTracks;
    newPlaylistTracksState.push(track);

    this.setState((state)=> {

      return {
        playlistTracks: newPlaylistTracksState
      }
    })

  }

  removeTrack(track)
  {
    const newPlaylistTracksState = this.state.playlistTracks.filter(savedTrack => savedTrack.id !== track.id);

    this.setState((state)=>{
      return {
        playlistTracks: newPlaylistTracksState
      }
    });
  }

  updatePlaylistName(name)
  {
    //this.state.playlistName

    this.setState((state)=>{
      return {
        playlistName: name
      }
    });
  }
  savePlaylist()
  {
    let trackURIs = [];

    trackURIs = this.state.playlistTracks.map(track => track);

    return trackURIs;
  }

  render()
  {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
         <SearchBar />
          <div className="App-playlist">
            <SearchResults onAdd={this.addTrack} searchResults={this.state.searchResults}/>
            <Playlist onSave={this.savePlaylist} playlistName={this.state.playlistName} onNameChange={this.updatePlaylistName} onRemove={this.removeTrack} playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
