import React from 'react';
import Contador from './contador';
import '../estilos/Perfil.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay} from '@fortawesome/free-solid-svg-icons';
import {faBriefcase} from '@fortawesome/free-solid-svg-icons';

function Perfil(props){
    const{imagen, nombre, pais, cargo, empresa, perfil, linkedin, youtube, twitter} = props;

    return(
        <div className='contenedor-perfil'>
            <img className='imagen-perfil'
                src={require(`../imagenes/perfil-${imagen}.png`)}
                alt='Foto de desarrollador'
            />

            <div className='contenedor-texto-perfil'>
                <p className='nombre-perfil'>
                    <strong>{nombre}</strong> en {pais}
                </p>  

                <p className='cargo-perfil'>
                    <FontAwesomeIcon icon={faBriefcase} className='icon'>Linkedin</FontAwesomeIcon>
                    {cargo} en 
                    <strong>{empresa}</strong>
                </p>

                <p className='texto-perfil'>"{perfil}"</p>
            </div>

            <div className='caja-redes'>
                <h2 className='titulo-redes'>
                    <FontAwesomeIcon icon={faPlay} className='icon'>YouTube</FontAwesomeIcon>
                    Visita sus redes sociales
                </h2>
                <Contador
                    urlRed = {linkedin} 
                    nombreRed = 'Linkedin'  
                />
                <Contador
                    urlRed = {youtube} 
                    nombreRed = 'YouTube'  
                />
                <Contador 
                    urlRed = {twitter} 
                    nombreRed = 'Twitter'  
                />
            </div>
        </div>
    );
}
export default Perfil;