import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Main } from './Main';
import { Top } from "./Top";
import { useState } from 'react';

function App() {
  const SampleResult = [];
  const [selectedShop, setSelectedShop] = useState("");
  return (
    <>
        <BrowserRouter>
        <div className="App" >
        <Routes>
        <Route path="/" element={<Top />} />
        <Route path="main" element={<Main />} />
        </Routes>
        </div>
        </BrowserRouter>
    </>
  );
}

export default App;
