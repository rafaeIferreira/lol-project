import React from "react";
import './Main.scss';
import {
    HashRouter,
    Routes,
    Route,
  } from "react-router-dom";
  import Default from '../Routes/Default/Default'
  import SummonerSearch from '../Routes/SummonerSearch/SummonerSearch';
  import Rank from '../Routes/Rank/Rank';
  const API_KEY = "RGAPI-b6ed46c5-f79a-4890-9917-ccd7b3849d41";
const Main = ()=>{
    return(
        <div>
        <HashRouter>
        <Routes>
          <Route path="/" element={<Default/>}/>
          <Route path="/Search" element={<SummonerSearch API_KEY={API_KEY}/>}/>
          <Route path="/Rank" element={<Rank KEY={API_KEY}/>}/>
        </Routes>
      </HashRouter>
      </div>
    );
}

export default Main;