
export default function Mascota () {
    let mascota = {
        nombre: 'Chipa',
        edad: 2,
        tipo: 'gato',
        colores: [
            'blanco',
            'negro'
        ]
    }

    return (
        <div>
            <h2>{mascota.nombre}</h2>
            <p>
                Edad: {mascota.edad} <br />
                Tipo: {mascota.tipo}
            </p>
        </div>
    )
}