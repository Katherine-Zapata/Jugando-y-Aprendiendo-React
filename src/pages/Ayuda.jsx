import React from 'react';

class Ayuda extends React.Component {
    render() {
        return (
            <div className='Ayuda'>
                <div className='Ayuda_header'>
                    <nav>
                        <ul>
                            <li>
                                <a class="header__link" href="Inicio">Inicio</a>
                            </li>
                            <li>
                                <a class="header__link" href="Explicación">Explicación</a>
                            </li>
                            <li>
                                <a class="header__link" href="Progreso">Progreso</a>
                            </li>
                            <li>
                                <a class="header__link" href="Ayuda">Ayuda</a>
                            </li>
                            <li>
                                <a class="header__link" href="Ajustes">Ajustes</a>
                            </li>
                        </ul>
                    </nav>
                    <br />
                    <p>
                        <br /><h1>Ayuda</h1>
                        <br/>
                        <img src="https://img2.freepng.es/20180613/yii/kisspng-computer-icons-icon-design-help-icon-5b210a9577f528.4284229615288920534914.jpg" width="100" height="100"></img>
                        <br />
                        <br/>
                        <h2>Usar Jugando y Aprendiendo</h2>
                        Primero debes crear una cuenta, segundo debes hacer un repaso de la historia, herramientas y exponentes tecnológicos y por último debes hacer una evaluación de los temas mencionados anteriormente.
                        <br/>
                        <br/>
                        <h2>Privacidad y Seguridad</h2>
                        Nos preocupamos por la seguridad de nuestros estudiantes y docentes, por eso ofrecemos herramientas para ayudar a mantener tu cuanta segura y tu privacidad protegida.
                        <br/>
                        <br/>
                        <h2>Administrar tu cuenta</h2>
                        <h3>Inicio de sisión y contraseña</h3>
                        Si conoces la contraseña actual, puedes cambiarla.<br/>
                        Para crear o cambiar la contraseña debes de tener en cuanta los 
                        siguiqntes aspectos:
                        <ul>
                        <li>-La contraseña debe tener 8 caracteres.</li>
                        <li>Debe ser fácil de recordar para ti, pero difícil de adivinar para otros.</li>
                       <li>-La contraseña de Jugando y Aprendiendo debe ser distinta
                        de las que usas para iniciar sesión en otras cuentas, como  el 
                        correo electrónico.</li>
                        </ul>
                    </p>
                    <br />

                </div>
            </div>
        )
    }
}

export default Ayuda;