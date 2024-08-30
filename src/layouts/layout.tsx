import { Outlet } from "react-router-dom"
import Header from "../components/header"
import DialogReceta from "../components/dialogReceta";
import useAppStore from "../stores/useAppStore";
import { useMemo } from "react";

const Layout = () => {
    const muestraDialogoReceta: boolean = useAppStore( (state) => state.muestraDialogoReceta );
    const openDialogoReceta = useMemo(() => muestraDialogoReceta === true, [muestraDialogoReceta]);
    
    return(
        <>
            <Header/>
            <main className="container mx-auto py-16 px-16">
                <Outlet/>
            </main>
            {openDialogoReceta && <DialogReceta/>}
        </>
    )
}

export default Layout