import React from 'react';
import '../estilos/perfil.css';

function Perfil(props){
    return(
        <div className='contenedor-perfil'>
            <img
            className='imagen-perfil'
            src={require(`../imagenes/perfil-${props.imagen}.png`)}
            alt='foto de Brais'
            />

            <div className='contenedor-texto-perfil'>      
                <p className='pais-perfil'>
                    {props.nombre} en {props.pais}
                </p>

                <p className='cargo-perfil'>
                    {props.cargo} en {props.empresa}
                </p>

                <p className='resena-perfil'>
                    {props.resena}
                </p>
            </div>
        </div>
    )
};

export default Perfil;