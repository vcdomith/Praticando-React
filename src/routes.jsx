import Cabecalho from "./components/Cabecalho/Cabecalho"
import Container from "./components/Container/Container"
import Rodape from "./components/Rodape/Rodape"
import Favoritos from "./pages/Inicio/Favoritos/Favoritos"
import Inicio from "./pages/Inicio/Inicio"
import { BrowserRouter, Routes, Route } from "react-router-dom"


function AppRoutes() {

    return (

        <BrowserRouter>
            <Cabecalho />
            <Container >
                <Routes>
                    <Route 
                        path='/'
                        element={<Inicio/>}
                    >
                    </Route>
                    <Route 
                        path='favoritos'
                        element={<Favoritos/>}
                    >
                    </Route>
                </Routes>
            </Container >
            <Rodape />
        </BrowserRouter>

    )

}

export default AppRoutes