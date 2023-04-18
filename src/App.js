import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Main } from './Main';
import { Top } from "./Top";
import { useState } from 'react';

function App() {
  const [shopData,setShopData] = useState([]);
  return (
    <>
        <BrowserRouter>
        <div className="App" >
        <Routes>
        <Route path="/" element={<Top setShopData={setShopData}/>} />
        <Route path="main" element={<Main shopData={shopData}/>} />
        </Routes>
        </div>
        </BrowserRouter>
    </>
  );
}

export default App;
