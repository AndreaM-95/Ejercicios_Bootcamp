import React from 'react';
import PomodoroTimer from '@/Components/Pomodoro';
import ToDo from '@/Components/ToDo';

function page() {
  return (
    <div className='m-auto justify-center flex flex-wrap py-[100px]'>
      <h1 className='text-3xl w-full text-center text-gray-200 my-3 underline'>LISTA DE TAREAS</h1>
      <h2 className='text-2xl w-full text-center text-gray-300 my-3'>Arrastra las tareas a la sección - <em>Completadas -</em></h2>
      <PomodoroTimer/>
      <ToDo/>
    </div>
  );
}

export default page;
