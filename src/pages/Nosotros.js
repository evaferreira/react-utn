import { useEffect, useState } from "react";

export default function Nosotros () {
    const [isLoading, setIsLoading] = useState(true);
    const [clima, setClima] = useState({});

    const URL = 'https://api.openweathermap.org/data/2.5/weather?lat=-41.155047050887816&lon=-71.88736757608339&appid=0df39b4b9d9ed1e00543bfc269eb773f&units=metric&lang=es';

    useEffect(() => {
        fetch(URL)
          .then((response) => response.json())
          .then(clima => {
            console.log(clima);
            setClima(clima);
            setIsLoading(false);
        });
    }, []);
    
    if (isLoading) {
        return (
            <div className="App">
                <h1>Cargando...</h1>
            </div>
        );
    }

    return (
        <>
            <h1>Estás en nosotros</h1>
            {clima.name}
        </>
    )
}