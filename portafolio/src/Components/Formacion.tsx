import React from 'react';
import estudios from '../Data/formacion.json';

export default function Formacion() {  
    return (
    <section className='flex flex-wrap mt-[30px] space-x-4 space-y-4 justify-center bg-gray-900 bg-opacity-90 pb-6'>
          <h2 className='text-white bold w-full text-center py-4 text-3xl font-bold'>Formación</h2>
            {estudios.map((row)=>(
              <div key = {row.titulo} className='p-4 flex flex-wrap  w-[25%] border-2 rounded-lg'>
                <h2 className="font-medium text-white mb-4 text-center w-full text-2xl">{row.titulo}</h2>
                <h3 className='text-gray-200 w-full text-center text-xl'>{row.institucion}</h3>
                <h4 className='text-gray-300 w-full text-center text-lg'>{row.fecha}</h4>
              </div>
            ))}  
    </section>
  );
}
