import React from 'react';
import Menu1 from './Menu1.jsx';

class Menu1 extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      visible :falseb
    }
  }
  render() {
    return (
      <div className='Menu'>
        <li>
          <h3>{this.props.name}</h3>
          <ul>
          </ul>
        </li>
      </div>
    )
  }
}

export default Menu1;