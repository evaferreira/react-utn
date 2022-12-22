import CardWrapper from "../components/CardWrapper"
import EjemploEvento from "../components/EjemploEvento"
import EjemploState from "../components/EjemploState"
import Contador from "../components/Contador"

export default function Home () {
    return (
        <>
            <h1>Estás en la home</h1>
            <Contador />
            <EjemploState />
            <EjemploEvento />
            <CardWrapper
                titulo={'Ofertas'}
            />
        </>
    )
}