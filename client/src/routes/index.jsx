import {
    createBrowserRouter,
} from "react-router-dom";


//Páginas das rotas
import App from "../App";
import Home from "@/pages/Home"
import Login from "@/pages/Login"
import Categorias from "@/pages/Categorias";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "localizar",
                element: <Categorias />
                
            },
            {
                path: "sobre",
                element: (
                    <h1>Sobre</h1>
                )
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "registrar",
                element: (
                   <h1>Registro</h1>
                )
            },
            {
                path: "/",
                element: <Home />,
            }
        ]
    }
])