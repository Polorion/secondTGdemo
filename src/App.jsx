import './App.css'
import {Header} from "./components/Header/Header.jsx";
import {InfoBusiness} from "./components/InfoBusiness/InfoBusiness.jsx";
import {Route, Routes} from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import {ChoicePlatform} from "./components/ChoisePlatform/ChoicePlatform.jsx";

function App() {

    return (
        <div className="container">
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    <Route path={""} element={<InfoBusiness/>}/>
                    <Route path={"next"} element={<ChoicePlatform/>}/>
                </Route>
            </Routes>
        </div>
    )
}

export default App
