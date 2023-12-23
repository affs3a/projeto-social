import {
    createBrowserRouter,
} from "react-router-dom";

//Páginas das rotas
import App from "../App";
import Home from "@/pages/Home"
import Login from "@/pages/Login"
import Categorias from "@/pages/Categorias";
import Admin from "@/pages/Admin";
import Prestador from "@/pages/Prestador";
import Usuarios from "@/pages/Admin/pages/Usuarios";
import Servicos from "@/pages/Admin/pages/Servicos";
import AdminCategorias from "@/pages/Admin/pages/Categorias";


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
                path: "admin",
                element: <Admin />,
            },
            {
                path: 'admin/usuarios',
                element: <Usuarios />
            },
            {
                path: 'admin/servicos',
                element: <Servicos />
            },
            {
                path: 'admin/categorias',
                element: <AdminCategorias />
            },
            {
                path: "prestador",
                element: <Prestador />
            },
            {
                path: "/",
                element: <Home />,
            }
        ]
    }
])