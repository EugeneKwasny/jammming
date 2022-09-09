import React from 'react';
import Track from '../Track/Track';
import './TrackList.css';

class TrackList extends React.Component
{
    render(){
        return(
            <div className="TrackList">
                {this.props.tracks?.map(track => <Track onAdd={this.props.onAdd} key={track.id} trackData={track} />)}
            </div>
        )
    }
}

export default TrackList;