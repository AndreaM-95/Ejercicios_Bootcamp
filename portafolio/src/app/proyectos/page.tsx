import Proyectos from '@/Components/Proyectos';
import React from 'react';

function Page() {
  return (
    <div className='h-[570px]'>
      <h1 className='text-2xl text-gray-200 text-center w-full mt-7 font-bold'>ALGUNOS DE MIS PROYECTOS</h1>
      <Proyectos/>
    </div>
  );
}

export default Page;
