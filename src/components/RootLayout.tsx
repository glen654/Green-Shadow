import { Outlet } from "react-router";
import { Sidebar } from "./Sidebar";


export function RootLayout(){
    return(
        <>
            <Sidebar></Sidebar>
            <Outlet></Outlet>
        </>
    )
}