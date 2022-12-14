import CardWrapper from "../components/CardWrapper"
import EjemploEvento from "../components/EjemploEvento"
import EjemploState from "../components/EjemploState"

export default function Home () {
    return (
        <>
            <h1>Estás en la home</h1>
            <EjemploState />
            <EjemploEvento />
            <CardWrapper
                titulo={'Ofertas'}
            />
        </>
    )
}