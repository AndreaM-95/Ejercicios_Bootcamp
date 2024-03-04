import React from 'react';

export default function Descripcion() {
  return (
    <div className='bg-gray-900 bg-opacity-90 mt-5 flex flex-wrap items-center justify-center py-5'>
        <h1 className='text-center w-full text-white font-bold text-5xl'>Andrea Mejia</h1>
        <img src="./public/Mi Foto.jpg" className="w-[15%] rounded-full"></img>
        <p className="p-8 text-gray-400 w-[42%] ml-4 text-lg">
            Estoy formada como desarrolladora de sofware junior en la Universidad Tecnológica de Pereira y Alura Latam. Empecé mi trayectoria profesional con el procesamiento de alimentos. Hice parte del primer grupo en Colombia del programa Desarrollador Jr en Unity realizado por Generation y Unity donde tuve la oportunidad de presentarme en diferentes jams y crear diversos juegos.
            <br></br>
            Referente al desarrollo de software, como Front end, también he podido programar diferentes plataformas con distintos lenguajes de programación, mencionando algunos de ellos que me llenan de orgullo son los videojuegos Mystical World, Rescue at sea, y las páginas Rescatando patitas y Tocando el alma.
        </p>
    </div>
  );
}
