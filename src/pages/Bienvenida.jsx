import React from 'react';

class Bienvenida extends React.Component {
    render() {
        return (
            <div className='Bienvenida'>
                <div className='container-fluid'>
                    <a className='Bienvenida__brand'>
                       
                            <h1>Beinvenid@s a Jugando y Aprendiendo.</h1>

                            <h2> ¿Estás listo para acompañarnos en este viaje tecnológico?</h2>
                            <img src="https://i.pinimg.com/originals/f6/d7/ef/f6d7ef4b5b015be7cf607e2087c0a244.png" width="200" height="200"></img>
                            <h3>Me llamo Ángel</h3>
                            <h4>Primero, tienes que elegir sí quieres registrarte o iniciar sesión con tu cuenta</h4>
                            <a class="header__link" href="Registro">Registarse</a>
                            
                        
                    </a>
                </div>
            </div>
        )
    }
}

export default Bienvenida;
