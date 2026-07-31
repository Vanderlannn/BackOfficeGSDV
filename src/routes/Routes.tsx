import { BrowserRouter, Route, Routes } from "react-router-dom";
import Autenticacao from "../pages/Autenticacao";

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Autenticacao/>} />
            </Routes>  
        </BrowserRouter>
    );
};
export default RoutesApp