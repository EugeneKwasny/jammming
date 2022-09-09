import React  from "react";
import './Track.css';

class Track extends React.Component
{
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
            <button className="Track-action">{isRemoval ? '-' : '+'}</button>
        )
    }
}

export default Track;