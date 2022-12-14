import CardWrapper from "../components/CardWrapper"
import EjemploEvento from "../components/EjemploEvento"

export default function Home () {
    return (
        <>
            <h1>Estás en la home</h1>
            <EjemploEvento />
            <CardWrapper
                titulo={'Ofertas'}
            />
        </>
    )
}