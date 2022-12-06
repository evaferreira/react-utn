import { Outlet, Link } from "react-router-dom";

export default function Layout() {
    return (
        <>
            Principal template layout
            <Link to="/">Home</Link>
            <Link to="/mascotas">Mascotas</Link>
            <Outlet />
        </>
    )
}