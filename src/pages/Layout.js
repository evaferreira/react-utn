import { Outlet } from "react-router-dom"

import Navegacion from "../components/Navegacion"

export default function Layout () {
    return (
        // Fragment
        <>
            <Navegacion />
            {/* El Outlet es el lugar donde
            se muestra el contenido de cada
            página */}
            <Outlet />
            FOOTER
        </>
    )
}