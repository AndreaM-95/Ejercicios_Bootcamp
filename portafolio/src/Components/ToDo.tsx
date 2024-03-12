'use client'
import React from 'react';
import {useDragAndDrop } from "@formkit/drag-and-drop/react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSquareCheck} from '@fortawesome/free-solid-svg-icons';
import {faSquare} from '@fortawesome/free-solid-svg-icons';


function ToDo() {
    const todoItems = ["Hacer las compras", "Pagar cuentas", "Ir por los niños", "Lavar el carro", "Pasear al perro", "Ir al gimnasio"];
    const doneItems = ["Terminar la tesis"];

    const [ todoList, todos] = useDragAndDrop<HTMLUListElement, string>(
        todoItems,
        { 
            group: "todoList",
            sortable: false
        }
    );

    const [ doneList, dones] = useDragAndDrop<HTMLUListElement, string>(    
        doneItems,
        {   
            group: "todoList",
            sortable: false
        }
    );

    return (
        <div className="kanban-board animate-fade">
            <ul className='w-[400px] my-2 ml-3 p-3 border-2 flex flex-wrap rounded-lg bg-gray-900 bg-opacity-70' ref={todoList}>
                {todos.map((todo) => (
                    <>
                        <FontAwesomeIcon icon={faSquare} className='w-[20px] h-[20px] text-gray-300 mr-2'/>
                        <li className="kanban-item w-[90%] text-gray-400 hover:text-amber-300 cursor-pointer" key={todo}>{todo}</li>
                    </>
                ))}
            </ul>

            <ul className='w-[400px] my-2 ml-3 p-3 border-2 flex flex-wrap rounded-lg bg-gray-900 bg-opacity-70' ref={doneList}>
                <h3 className='w-full text-center text-2xl text-gray-200 italic mb-3'>Completadas</h3>
                {dones.map((done) => (
                    <>
                        <FontAwesomeIcon icon={faSquareCheck} className='w-[20px] h-[20px] text-green-300 mr-2'/>
                        <li className="kanban-item line-through w-[90%] text-gray-500" key={done}>{done}</li>
                    </>
                ))}
            </ul>
        </div>
    );
}

export default ToDo;
