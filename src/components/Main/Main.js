import React from "react";
import './Main.scss';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
  import Default from '../Routes/Default/Default'
  import SummonerSearch from '../Routes/SummonerSearch/SummonerSearch';
  import Rank from '../Routes/Rank/Rank';
  const API_KEY = "RGAPI-e36a0ea4-025c-4639-a261-f484404f9e15";
const Main = ()=>{
    return(
        <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Default/>}/>
          <Route path="/Search" element={<SummonerSearch API_KEY={API_KEY}/>}/>
          <Route path="/Rank" element={<Rank KEY={API_KEY}/>}/>
        </Routes>
      </BrowserRouter>
      </div>
    );
}

export default Main;