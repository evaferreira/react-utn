import CardWrapper from "../components/CardWrapper"
// import EjemploEvento from "../components/EjemploEvento"
// import EjemploState from "../components/EjemploState"
import Contador from "../components/Contador"
import Clima from "../components/Clima"

export default function Home () {
    return (
        <>
            <h1>Estás en la home</h1>
            <Clima />
            <Contador />
            {/* <EjemploState />
            <EjemploEvento /> */}
            <CardWrapper
                titulo={'Ofertas'}
            />
        </>
    )
}