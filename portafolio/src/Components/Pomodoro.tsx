'use client'
import { useState, useEffect } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStopwatch} from '@fortawesome/free-solid-svg-icons';


const PomodoroTimer = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
          } else {
            setMinutes((prev) => prev - 1);
            setSeconds(59);
          }
        } else {
          setSeconds((prev) => prev - 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, minutes, seconds]);

  const toggleTimer = () => {
    setIsActive((prev) => !prev);
  };

  const resetTimer = () => {
    setIsActive(false);
    setMinutes(25);
    setSeconds(0);
  };

  return (
    <div className='w-[350px] bg-gray-900 bg-opacity-70 text-center py-3 border-2 rounded-lg animate-fade'>
      <h2 className='text-gray-300 m-4 text-2xl'>TEMPORIZADOR</h2>
      <FontAwesomeIcon icon={faStopwatch} className='mr-2 w-[50px] h-[50px] mb-6 text-gray-300'/>
      
      <div>
        <span className='text-gray-300 mx-1 text-xl text-bold'>{minutes < 10 ? `0${minutes}` : minutes}</span>:
        <span className='text-gray-300 mx-1 text-xl text-bold'>{seconds < 10 ? `0${seconds}` : seconds}</span>
      </div>
      <div>
        <button className='p-2 w-[100px] mx-3 mt-5 bg-gray-900 bg-opacity-80 rounded text-white hover:bg-gray-700 hover:text-amber-300' onClick={toggleTimer}>{isActive ? 'Pausar' : 'Iniciar'}</button>
        <button className='p-2 w-[100px] mx-3 mt-5 bg-gray-900 bg-opacity-80 rounded text-white hover:bg-gray-700 hover:text-amber-300' onClick={resetTimer}>Reiniciar</button>
      </div>
      <p className='text-gray-300 italic w-full p-5 mt-3 text-sm'>Inicia un periodo de concentración de solo 25 minutos</p>
    </div>
  );
};

export default PomodoroTimer;


