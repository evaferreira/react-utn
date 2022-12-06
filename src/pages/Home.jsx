import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <h1>Estas en la home</h1>
            <Link to="/mascota">Mascota</Link>
        </>
    )
}