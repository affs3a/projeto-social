import {
    createBrowserRouter,
} from "react-router-dom";


//Páginas das rotas
import App from "../App";
import Home from "/src/pages/Home"


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
                path: "/",
                element: <Home />,
            }
        ]
    }
])