import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import { BrowserRouter, Link, Routes, Route} from "react-router-dom";
import { App2 } from './App2';

function App() {
  const [string, setString] = useState('');
  const [string2, setString2] = useState('');

  return (
 
    <div className="App">
      <p>隠れ名店.com ちょっと更新</p>
      <input placeholder="場所を入力" onChange={(e) => {setString(e.target.value)}}>
      </input>
      <input placeholder="ジャンルを入力" onChange={(e) => {setString2(e.target.value)}}>
      </input>
      <button className="search" >検索</button>
     {/* <BrowserRouter>
     <Link to="/main">メインページへ</Link>
      <Routes>
          <Route path="/main">
            <App2 />
          </Route>
      </Routes>
    </BrowserRouter> */}
    </div>

  );
}

export default App;
