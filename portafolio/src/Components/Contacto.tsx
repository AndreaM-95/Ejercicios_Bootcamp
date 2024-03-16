import React from 'react';

function Contacto() {
  return (
    <section className='w-full flex justify-center flex-wrap align-center'>
        <form className="font-bold w-[600px] p-5 bg-gray-900 bg-opacity-80 border-2 rounded-lg flex items-center flex-col animate-fade">
            <h1 className='text-white w-full text-center pb-7 pt-2 text-3xl font-bold'>Contáctame</h1>
            <div className='w-[90%] mb-3'>
                <input
                    type="text"
                    placeholder='Escribe aquí tu nombre'
                    name='name'
                    className='w-full italic placeholder-gray-400 rounded-lg p-2' 
                />
            </div>
            <div className='w-[90%] mb-3'>
                <input type= "text" 
                    placeholder='Escribe aquí tu correo'
                    name='email'
                    className='w-full italic placeholder-gray-400 rounded-lg p-2'
                />
            </div>
            <div className='w-[90%] mb-3'>
                <input type= "text" 
                    placeholder='Escribe aquí tu mensaje'
                    name='message'
                    className='w-full italic placeholder-gray-400 rounded-lg p-2'
                />
            </div>
            <button className='font-bold bg-gray-700 rounded-lg text-white mt-3 p-2 w-[30%] hover:bg-gray-300 hover:text-black'>
                Enviar mensaje
            </button>
        </form>
    </section>
  );
}

export default Contacto;
