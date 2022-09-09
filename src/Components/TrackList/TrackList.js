import React from 'react';
import Track from '../Track/Track';
import './TrackList.css';

class TrackList extends React.Component
{
    render(){
        return(
            <div className="TrackList">
                {this.props.tracks.map(trackItem => <Track onAdd={this.props.onAdd} onRemove={this.props.onRemove} isRemoval={this.props.isRemoval} key={trackItem.id} track={trackItem} />)}
            </div>
        )
    }
}

export default TrackList;