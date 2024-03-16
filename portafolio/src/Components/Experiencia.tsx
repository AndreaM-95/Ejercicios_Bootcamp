import React from 'react';
import experiencia from '../Data/experiencia.json';

export default function Experiencia() {
    return (
        <section className='flex flex-wrap mt-[30px] space-x-9 justify-center w-full animate-fade'>
            <h2 className='text-white bold w-full text-center py-4 text-4xl font-bold'>Experiencia laboral</h2>
            {experiencia.map((row)=>(
                <div key = {row.empresa} className='p-4 flex flex-wrap bg-gray-900 bg-opacity-80 w-[28%] border-2 rounded-lg'>
                    <h2 className="font-medium text-white mb-4 text-center w-full text-2xl">{row.cargo}</h2>
                    <h3 className='text-gray-200 w-full text-center text-xl'>{row.empresa}</h3>
                    <h4 className='text-gray-300 w-full text-center text-xl'>{row.tiempo}</h4>
                    <p className='text-gray-400 text-lg'>{row.descripción}</p>
                </div>
            ))}  
        </section>
    );
}
