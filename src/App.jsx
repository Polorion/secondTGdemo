import './App.css'
import {Header} from "./components/Header/Header.jsx";
import {InfoBusiness} from "./components/InfoBusiness/InfoBusiness.jsx";
import {ChoicePlatform} from "./components/ChoisePlatform/ChoicePlatform.jsx";
import {useState} from "react";

function App() {
    const [next, setNext] = useState(false)

    return (
        <div className="container">
            <Header/>
            {!next && <InfoBusiness next={setNext}/>}
            {next && <ChoicePlatform next={setNext}/>}
        </div>
    )
}

export default App
