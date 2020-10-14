 import React from 'react';

class MenuItem extends React.Component {
    render() {
        return (
            <div className='MenuItem'>
                <li>
                    <a href="#">{this.props.name}</a>
                </li>
            </div>
        )
    }
}

export default MenuItem; 