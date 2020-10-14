import React from 'react';
import MenuItem from './MenuItem.jsx';
import {Icon} from 'react-fa';
import '../Components/styles/Menu.css'

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    handleClick(event) {
        event.preventDefault();
        this.setState({
            visible: !this.state.visible
        })
    }

    render() {
        return (
            <div className='Categoty'>

                <li>
        <h3 onClick={this.handleClick.bind(this)}> <Icon  className= "icon" name={this.props.icon}/> {this.props.name}</h3>
                    <ul className="{this.state.visible? 'visible' :'no-visible'}">
                        {this.props.items.map((item) => {
                        return <MenuItem mene={item} key={item} />
                    })}
                    </ul>
                </li>

                <div className='Insignia__footer'>
                    Página móvil web de nuestro proyecto escolar 11°
                <br />
                Mariana Acevedo - KatherineZapata - Maria Camila - Veronica Arcila
                </div>
            </div>
        )
    }
}

export default Menu;