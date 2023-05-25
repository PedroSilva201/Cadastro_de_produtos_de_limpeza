import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditarProduto from "../pages/EditarProduto/editarProduto";
import Home from "../pages/Home/home";
import NovoProduto from "../pages/NovoProduto/novoProduto";
import Produtos from "../pages/Produtos/produtos";

export default function Rotas () {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />

                <Route path='/produtos' element={<Produtos/>} />
                <Route path='/novo-produto' element={<NovoProduto/>} />
                <Route path='/editar-produto/:cod' element={<EditarProduto/>} />
            </Routes>
        </BrowserRouter>
    )
}