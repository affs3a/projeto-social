import {
    createBrowserRouter,
} from "react-router-dom";


//Páginas das rotas
import App from "../App";
import Home from "@/pages/Home"
import Login from "@/pages/Login"


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "servicos",
                element: (
                    <h1>Serviços</h1>
                )
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
                path: "registroconfig",
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