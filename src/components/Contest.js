import React,{ Component,PropTypes } from 'react';

class Contest extends Component
{
    render()
    {
        return(
            <div className="contest">
                <div className="contest-description">
                        {this.props.description}
                </div>
                <div className="home-link link" onClick={this.props.contestListClick}>
                Contest list
                </div>
            </div>
        )
    }
}

Contest.propTypes = {
    //d:PropTypes.number.isRequired,
    description:PropTypes.string.isRequired,
    contestListClick:PropTypes.func.isRequired
};

export default Contest;