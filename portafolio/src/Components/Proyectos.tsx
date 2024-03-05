import React from 'react';
import proyectos from '../Data/proyectos.json'

export default function Proyectos() {
  return (
    <section className='flex flex-wrap my-[30px] space-x-9 justify-center animate-fade'>
      {proyectos.map((item)=>(
        <div key = {item.title} className='p-4 flex flex-wrap bg-gray-900 bg-opacity-80 w-[28%] border-2 rounded-lg'>
          <h2 className="font-medium text-white mb-4 text-center w-full text-2xl">{item.title}</h2>
          <iframe width="560" height="315" src={item.video} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe>
          <div className="w-full flex gap-3 justify-center my-3">
            <p className="w-[15%] bg-gray-700 text-white text-center semibold rounded py-1">{item.tag1}</p>
            <p className="w-[15%] bg-gray-700 text-white text-center semibold rounded py-1">{item.tag2}</p>
            <p className="w-[15%] bg-gray-700 text-white text-center semibold rounded py-1">{item.tag3}</p>
          </div>
          <p className="text-lg text-gray-300">{item.description}</p>
        </div>
      ))}  
    </section>
  );
}
