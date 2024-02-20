import React, {useState} from "react";
import '../estilos/Perfil.css';

export default function Contador(props){
    const[numero, setNumero]=useState(0);

    const aumentar = (url)=>{
        setNumero(numero + 1);
        window.open(url, '_blank')
    };

    const disminuir = () =>{
        setNumero(numero - 1);
    };

    return(
        <div className="box-contador">
            <p className="texto-contador">Número de clicks: {numero}</p>
            <button onClick={()=>aumentar(props.urlRed)}>{props.nombreRed}</button>
            <button onClick={disminuir}>Restar click</button>
        </div>
    );
}