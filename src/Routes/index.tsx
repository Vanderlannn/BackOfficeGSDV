import { BrowserRouter, Route, Routes } from "react-router-dom";  
import Autenticacao from "../Pages/Autenticacao";
import { AutenticacaoAula } from "../Pages/AutenticacaoAula";
import { Home } from "../Pages/Home";

const RoutersApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Autenticacao />} /> 
                <Route path="/aula" element={<AutenticacaoAula />} />     
                <Route path="/home" element={<Home />} />     
            </Routes> 
        </BrowserRouter>
    );
};

export default RoutersApp;