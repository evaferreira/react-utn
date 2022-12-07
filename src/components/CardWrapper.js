import './CardWrapper.css';
import tarjetas from '../data/tarjetas.json';
import Card from './Card';

export default function CardWrapper ({titulo}) {
    console.log(tarjetas);
    // JSX fragments, para evitar escribir tantos divs
    // <React.Fragment> (requiere un import de react)
    return (
        <>
            <h2>{titulo}</h2>
            <div className="grilla">
                {/* recorrer con un .map tarjetas
                mostrar en un párrafo cada titulo 
                numeros[indice]
                */}

                {/* 
                    Cuando usamos un .map los elementos internos necesitan una propiedad "key" con un valor único. Podemos utilizar un ID o el índice del array

                    <p key={index}>
                        {tarjeta.titulo}
                    </p>
                */}
                {tarjetas.map((tarjeta, index) => (
                    <Card 
                        key={index}
                        card={tarjeta}
                    />
                ))}


                {/* <Card id="1234"/>
                <Card id="567567" />
                <Card id="678678" />
                <Card id="23423" /> */}
            </div>
        </>
    )
}
