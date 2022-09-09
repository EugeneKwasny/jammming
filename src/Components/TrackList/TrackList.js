import React from 'react';
import Track from '../Track/Track';
import './TrackList.css';

class TrackList extends React.Component
{
    render(){
        return(
            <div className="TrackList">
                {this.props.tracks?.map(track => <Track key={track.id} trackData={track} isRemoval={true} />)}
            </div>
        )
    }
}

export default TrackList;