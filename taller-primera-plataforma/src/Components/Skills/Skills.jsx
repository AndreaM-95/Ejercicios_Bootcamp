import React from 'react';
import hardSkills from '../../../src/Data/hard.json';
import softSkills from '../../../src/Data/soft.json';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons';

export default function Skills() {
    return (
        <section className="text-gray-400 w-full mt-[30px] flex m-auto space-x-9 justify-center">
            <div className="p-4 flex flex-wrap bg-gray-900 bg-opacity-80 w-[20%] border-2 rounded-lg">
                <h2 className="font-medium  text-white mb-4 text-2xl text-center w-full">Hard Skills</h2>
                {hardSkills.map((row)=>(
                    <a key = {row.hard} className="w-full text-lg">
                        <FontAwesomeIcon icon={faCircleCheck} className='icon mr-2'/>
                        {row.hard}
                    </a>
                ))}
            </div>

            <div className="p-4 flex flex-wrap bg-gray-900 bg-opacity-80 w-[20%] border-2 rounded-lg">
                <h2 className="font-medium  text-white mb-4 text-2xl text-center w-full">Soft Skills</h2>
                {softSkills.map((row)=>(
                    <a key = {row.soft} className="w-full text-lg">
                        <FontAwesomeIcon icon={faCircleCheck} className='icon mr-2'/>
                        {row.soft}
                    </a>
                ))}
            </div>
        </section>
    );
}
