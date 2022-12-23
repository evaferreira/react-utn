import { useState, useEffect } from "react"

export default function Clima () {
    // Apenas carga el componente muestro el "Cargando..."
    const [cargando, setCargando] = useState(true);
    const [clima, setClima] = useState({});

    const URL = "https://api.openweathermap.org/data/2.5/weather?lat=-41.155047050887816&lon=-71.88736757608339&appid=0df39b4b9d9ed1e00543bfc269eb773f&units=metric&lang=es";

    useEffect(() => {
        fetch(URL).then(respuesta => {
            if (respuesta.ok) {
                respuesta.json().then(clima => {
                    setClima(clima);
                    setCargando(false);
                });
            } else {
                console.error("Oops, algo falló", respuesta.statusText);
            }
        });

    }, []);

    // (cargando === true) es igual a (cargando)
    if (cargando) {
        return (
            <p>Cargando...</p>
        )
    }

    return (
        <>
            <h2>{clima.name}</h2>
            <p>La temperatura en {clima.name} es de {clima.main.temp}°C y {clima.weather[0].description}</p>
        </>
    )
}