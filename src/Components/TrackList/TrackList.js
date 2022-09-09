import React from 'react';
import Track from '../Track/Track';
import './TrackList.css';

class TrackList extends React.Component
{
    render(){
        return(
            <div className="TrackList">
                <Track />
                {/* <!-- You will add a map method that renders a set of  components  --> */}
            </div>
        )
    }
}

export default TrackList;