import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Main } from './Main';
import { Top } from "./Top";
import { useState } from 'react';

function App() {
  const [shopData,setShopData] = useState([]);
  return (
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Top setShopData={setShopData}/>} />
        <Route path="main" element={<Main shopData={shopData}/>} />
        </Routes>
        </BrowserRouter>
  );
}

export default App;
