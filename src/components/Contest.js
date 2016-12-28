import React,{ Component,PropTypes } from 'react';

class Contest extends Component
{
    render()
    {
        return(
            <div className="Contest">
            {this.props.id}
            {this.props.description}
            </div>
        )
    }
}

Contest.propTypes = {
    id:PropTypes.number.isRequired,
    description:PropTypes.string.isRequired
};

export default Contest;