import React from 'react';
import '../Components/styles/Login.css';

class Login extends React.Component {

    render() {
        return (
            <div className='Bienvenida'>
                <div className='container-fluid'>
                    <h3>Iniciar sesión</h3>
                    <br/>
                    <img src="https://cdn.icon-icons.com/icons2/936/PNG/512/user-shape_icon-icons.com_73346.png" width="100" height="100"></img>
                    <br/>
                    <br/>
                    <form>
                        <label for="Gmail">Gmail: (Campo Obligatorio)</label>
                        <br />
                        <input type="text" name="Gmail" id="Gmail" required />
                        <br /><br />
                        <label for="Contraseña Nueva">Contraseña Nueva</label>
                        <br />
                        <input type="text" name="Contraseña" id="Contraseña" required />
                        <br/>
                        <br/>
                        <input type="submit" value="Login" />
                    </form>
                </div>
            </div>
        )
    }
}


export default Login;