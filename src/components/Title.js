import './Title.css';

// Exportamos nuestro componente Title
// Los componentes son funciones
export default function Title ({
    titulo,
    subtitulo
}) {
    // const titulo = "contenido";

    // switch

    return (
        // className es el equivalente a class en JSX
        <div>
            <h1 className="title">
                {titulo}
            </h1>
            {/* 
                opción 1:
                Pregunto si se recibió un subtitulo
                si es así lo muestro, sino muestro un texto predeterminado

                ternary / condicional ternario
            */}
            <p>{subtitulo ? subtitulo : 'predeterminado'}</p>

            {/* 
                Opción 2:
                si el subtítulo se envió, lo muestro, sino no hago nada:
            {subtitulo &&
                <p>{subtitulo}</p>
            } */}
        </div>
    )
}

/*
    if (subtitulo) {
        mostrar subtitulo
    } else {
        mostrar "predetermiando"
    }
*/

