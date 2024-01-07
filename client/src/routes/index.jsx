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
import Servicos from "@/pages/Servicos";
import Loja from "@/pages/Loja";
import AdminUsuarios from "@/pages/Admin/pages/AdminUsuarios";
import AdminServicos from "@/pages/Admin/pages/AdminServicos";
import AdminCategorias from "@/pages/Admin/pages/AdminCategorias";
import Sobre from "@/pages/Sobre";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "localizar",
                element: <Categorias />
            },
            {
                path: "localizar/:id",
                element: <Servicos />
            },
            {
                path: "servico/:id",
                element: <Loja />
            },
            {
                path: "sobre",
                element: <Sobre />
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
                element: <AdminUsuarios />
            },
            {
                path: 'admin/servicos',
                element: <AdminServicos />
            },
            {
                path: 'admin/categorias',
                element: <AdminCategorias />
            },
            {
                path: "prestador",
                element: <Prestador />
            },
        ]
    }
])