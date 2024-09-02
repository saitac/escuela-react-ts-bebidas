import { Outlet } from "react-router-dom"
import Header from "../components/header"
import DialogReceta from "../components/dialogReceta";
import useAppStore from "../stores/useAppStore";
import { useEffect } from "react";
import Notification from "../components/notification";

const Layout = () => {
    
    const loadFromStorage = useAppStore((state) => state.loadFromStorage);
    useEffect(() => {loadFromStorage()}, []);

    return(
        <>
            <Header/>
            <main className="container mx-auto py-16 px-16">
                <Outlet/>
            </main>
            <DialogReceta/>
            <Notification/>
        </>
    )
}

export default Layout