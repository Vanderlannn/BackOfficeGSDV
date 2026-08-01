import { BrowserRouter, Route, Routes } from "react-router-dom";  
import Autenticacao from "../Pages/Autenticacao";
import { AutenticacaoAula } from "../Pages/AutenticacaoAula";

const RoutersApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Autenticacao />} /> 
                <Route path="/aula" element={<AutenticacaoAula />} />     
            </Routes> 
        </BrowserRouter>
    );
};

export default RoutersApp;