import React  from "react";
import './Track.css';

class Track extends React.Component
{
    constructor(props)
    {
        super(props);

        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }
    render()
    {
        return(
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist} | {this.props.track.album}</p>
                </div>
                {this.renderAction(this.props.isRemoval)}
            </div>
        )
    }

    renderAction(isRemoval)
    {
        return(
            isRemoval ? (<button onClick={this.removeTrack} className="Track-action">-</button>) : (<button onClick={this.addTrack} className="Track-action">+</button>)
        )
    }

    addTrack()
    {
        this.props.onAdd(this.props.track)
    }

    removeTrack()
    {
        this.props.onRemove(this.props.track)
    }
}

export default Track;