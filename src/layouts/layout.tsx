import { Outlet } from "react-router-dom"
import Header from "../components/header"

const Layout = () => {
    return(
        <>
            <Header/>
            <main className="container mx-auto py-16 px-16">
                <Outlet/>
            </main>
        </>
    )
}

export default Layout