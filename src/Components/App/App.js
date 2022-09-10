import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';

class App extends React.Component{
  constructor(props)
  {
    super(props);

    this.state = {
      playlistName: 'New Playlist',
      playlistTracks: [],
      searchResults: []
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
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

    const trackURIs = this.state.playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(this.state.playlistName, trackURIs).then(()=>{
      this.setState({
        playlistName: 'New Playlist',
        playlistTracks: []
      })
    })
  }

  search(term)
  {
    Spotify.search(term).then(searchResultsResponse => {
      this.setState({searchResults: searchResultsResponse});
    })
  }

  render()
  {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
         <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults onAdd={this.addTrack} searchResults={this.state.searchResults}/>
            <Playlist onSave={this.savePlaylist} onNameChange={this.updatePlaylistName} onRemove={this.removeTrack} playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
