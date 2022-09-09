import React  from "react";
import './Track.css';

class Track extends React.Component
{
    constructor(props)
    {
        super(props);

        this.addTrack = this.addTrack.bind(this);
    }
    render()
    {
        return(
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.trackData.name}</h3>
                    <p>{this.props.trackData.artist} | {this.props.trackData.album}</p>
                </div>
                {this.renderAction(this.props.isRemoval)}
            </div>
        )
    }

    renderAction(isRemoval)
    {
        return(
            isRemoval ? (<button className="Track-action">-</button>) : (<button onClick={this.addTrack} className="Track-action">+</button>)
        )
    }

    addTrack()
    {
        this.props.onAdd(this.props.track)
    }
}

export default Track;