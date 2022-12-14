import { useState } from "react";

export default function EjemploState () {
    //            Entre () puedo setear el predeterminado
    // const [numero, setNumero] = useState(45);
    const [mostrar, setMostrar] = useState(false);

    return (
        <>
            <button onClick={() => setMostrar(!mostrar)}>
                Mostrar
            </button>
            {mostrar &&
                <p>¡Hola mundo!</p>
            }
        </>
    )
}