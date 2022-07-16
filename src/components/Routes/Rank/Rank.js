import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Rank.scss';
import axios from 'axios';
import SummonerInfo from "./SummonerInfo";

const Rank = ({KEY})=>{
    const API_KEY = KEY;
    const [lang,setLang] = useState('en-usa');


    const [page, setPage] = useState(1);

    const [prevRes, setPrevRes] = useState('');
    const [nextRes, setNextRes] = useState('');

    const [url, setUrl] = useState('')
    const [region, setRegion] = useState('br1');
    const [continent, setContinent] = useState('americas');
    const [buttonRegion, setButtonRegion] = useState('BR');
    const [queue, setQueue] = useState('RANKED_SOLO_5x5');
    const [queueBtn, setQueueBtn] = useState('solo');
    const [tier, setTier] = useState('Select Tier');
    const [division, setDivision] = useState('I');
    const [res, setRes] = useState('');
    const [summ, setSumm] = useState('');
    const [count, setCount] = useState([]);
    const [seeMore, setSeeMore] = useState(50);

    useEffect(()=>{
        setPrevRes('');
        setNextRes('');
        checkFirst();
    },[page]);


    const checkFirst = ()=>{
        setPrevRes('');
        setNextRes('');
        if(page >= 1 && tier !== 'Select Tier'){
            fetchUrl();
        }
    }

    const fetchUrl = async ()=>{
        const seila= [];
        try{
        const ress =await axios.get(`https://${region}.api.riotgames.com/lol/league-exp/v4/entries/${queue}/${tier}/${division}?page=${page}&api_key=${API_KEY}`);
        setRes(ress);
        
        

        }catch(err){

        }

        try{
            const ressPrev = await axios.get(`https://${region}.api.riotgames.com/lol/league-exp/v4/entries/${queue}/${tier}/${division}?page=${page - 1}&api_key=${API_KEY}`);
            setPrevRes(ressPrev);

        }catch(err){
            setPrevRes('');
        }
        try{
            const ressNext = await axios.get(`https://${region}.api.riotgames.com/lol/league-exp/v4/entries/${queue}/${tier}/${division}?page=${page + 1}&api_key=${API_KEY}`);
            setNextRes(ressNext);

        }catch(err){
            setNextRes('');
        }


    }

    return(
    <div className="rank__section">
        <div className="container__nav">

                {(lang === 'en-usa' &&
                <nav className="champion__nav"><Link className="nav__item" to="/">Home</Link> &#62; <Link className="nav__item" to="/Rank">Rank</Link></nav>
                )}
                {(lang === 'pt-br' &&
                <nav className="champion__nav"><Link className="nav__item" to="/">Inicio</Link> &#62; <Link className="nav__item" to="/Rank">Ranques</Link></nav>
                )}

                <div className="dropdown">
                    <button className="btn" type="button" id="languages" data-bs-toggle="dropdown" aria-expanded="false">
                        {lang}
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="languages">
                        <li><button onClick={()=>setLang('pt-br')} className="dropdown-item" href="#">PT BR</button></li>

                        <li><button onClick={()=>setLang('en-usa')} className="dropdown-item" href="#">EN USA</button></li>
                    </ul>
                </div>

        </div>

        <div className="offcanva__container">
            {lang === 'en-usa' && <button class="btn offcanva__btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Select tier</button>}
            {lang === 'pt-br' && <button class="btn offcanva__btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Selecionar Divisão</button>}

            <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
            <div class="offcanvas-header">
                {lang === 'en-usa' && <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Tier Select</h5>}
                {lang === 'pt-br' && <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Selecionar Elo</h5>}
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <div class="offcanvas-body">

                {/*REGION SECTION OFFCANVA ---------------------- */}
                <div className="offcanvas__region-btn">
                    {lang === 'en-usa' && <h3>Region</h3>}
                    {lang === 'en-usa' && <h3>Região</h3>}
                    <div class="dropdown">
                        <a class="btn btn-secondary btn-sm  dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="true">
                            {buttonRegion}
                        </a>

                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <li><button class="dropdown-item" onClick={()=>{setRegion('br1'); setContinent('americas'); setButtonRegion('BR')}} href="#">BR</button></li>
                        <li><button class="dropdown-item" onClick={()=>{setRegion('eun1'); setContinent('europe'); setButtonRegion('EUN')}} href="#">EUN</button></li>
                        <li><button class="dropdown-item" onClick={()=>{setRegion('euw1'); setContinent('europe'); setButtonRegion('EUW')}} href="#">EUW</button></li>
                        <li><button class="dropdown-item" onClick={()=>{setRegion('kr'); setContinent('asia'); setButtonRegion('KR')}} href="#">KR</button></li>
                        <li><button class="dropdown-item" onClick={()=>{setRegion('jp1'); setContinent('asia'); setButtonRegion('JP')}} href="#">JP</button></li>
                        <li><button class="dropdown-item" onClick={()=>{setRegion('la1'); setContinent('americas'); setButtonRegion('LAN')}} href="#">LAN</button></li>
                        <li><button class="dropdown-item" onClick={()=>{setRegion('la2'); setContinent('americas'); setButtonRegion('LAS')}} href="#">LAS</button></li>
                        <li><button class="dropdown-item" onClick={()=>{setRegion('na1'); setContinent('americas'); setButtonRegion('NA')}} href="#">NA</button></li>
                        <li><button class="dropdown-item" onClick={()=>{setRegion('oc1'); setContinent('americas'); setButtonRegion('OC')}} href="#">OC</button></li>
                        <li><button class="dropdown-item" onClick={()=>{setRegion('tr1'); setContinent('europe'); setButtonRegion('TR')}} href="#">TR</button></li>
                        <li><button class="dropdown-item" onClick={()=>{setRegion('ru'); setContinent('europe'); setButtonRegion('RU')}} href="#">RU</button></li>
                        </ul>
                    </div>
                </div>

                <div className="queue__type">
                    {lang === 'en-usa' && <h3>Queue Type</h3>}
                    {lang === 'pt-br' && <h3>Tipo de Fila</h3>}
                    <div class="dropdown">
                    <a class="btn btn-secondary btn-sm dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="true">
                        {queueBtn.toUpperCase()}
                    </a>

                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li><button class="dropdown-item" onClick={()=>{setQueue('RANKED_SOLO_5x5'); setQueueBtn('solo')}} href="#">SOLO</button></li>
                    <li><button class="dropdown-item" onClick={()=>{setQueue('RANKED_FLEX_SR'); setQueueBtn('flex')}} href="#">FLEX</button></li>
                    </ul>
                    </div>
                </div>

                <div className="tier">
                    {lang === 'en-usa' && <h3>Tier</h3>}
                    {lang === 'pt-br' && <h3>Elo</h3>}
                    <div class="dropdown">
                    <a class="btn btn-secondary btn-sm dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="true">
                        {tier}
                    </a>

                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li><button class="dropdown-item" onClick={()=>{setTier('CHALLENGER'); setDivision('I')}} href="#">Challenger</button></li>
                    <li><button class="dropdown-item" onClick={()=>{setTier('GRANDMASTER')}} href="#">GrandMaster</button></li>
                    <li><button class="dropdown-item" onClick={()=>{setTier('MASTER')}} href="#">Master</button></li>
                    <li><button class="dropdown-item" onClick={()=>{setTier('DIAMOND')}} href="#">Diamond</button></li>
                    <li><button class="dropdown-item" onClick={()=>{setTier('PLATINUM')}} href="#">Platinum</button></li>
                    <li><button class="dropdown-item" onClick={()=>{setTier('GOLD')}} href="#">Gold</button></li>
                    <li><button class="dropdown-item" onClick={()=>{setTier('SILVER')}} href="#">Silver</button></li>
                    <li><button class="dropdown-item" onClick={()=>{setTier('BRONZE')}} href="#">Bronze</button></li>
                    <li><button class="dropdown-item" onClick={()=>{setTier('IRON')}} href="#">Iron</button></li>
                    </ul>
                    </div>
                </div>

                {(tier !== 'Select Tier' &&
                <div className="division">
                    {lang === 'en-usa' && <h3>Division</h3>}
                    {lang === 'pt-br' && <h3>Divisão</h3>}
                    <div class="dropdown">
                    <a class="btn btn-secondary btn-sm dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="true">
                        {division}
                    </a>

                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li><button class="dropdown-item" onClick={()=>{setDivision('I')}} href="#">I</button></li>

                    {/*MASTER OR HIGHER TIERS HAS ONLY I DIVISION */}
                    {(tier !== 'CHALLENGER' && tier !== 'GRANDMASTER' && tier !== 'MASTER' &&
                    <>
                    <li><button class="dropdown-item" onClick={()=>{setDivision('II')}} href="#">II</button></li>
                    <li><button class="dropdown-item" onClick={()=>{setDivision('III')}} href="#">III</button></li>
                    <li><button class="dropdown-item" onClick={()=>{setDivision('IV')}} href="#">IV</button></li>
                    </>
                    )}
                    </ul>
                    </div>
                </div>
                )}

                {lang === 'en-usa' && <button onClick={()=>{setPage(1);fetchUrl(); setRes('')}} className="btn filter__btn" data-bs-dismiss="offcanvas">Filter</button>}
                {lang === 'pt-br' && <button onClick={()=>{setPage(1);fetchUrl(); setRes('')}} className="btn filter__btn" data-bs-dismiss="offcanvas">Filtrar</button>}

                </div>
            </div>

        </div>
        {(res !== '' && nextRes !== '' &&
        <>
            <div className="podium">
                <div className="first__place">
                <SummonerInfo summonerId={res.data[0].summonerId} region={region} API_KEY={API_KEY} />
                <Link className="first__place-link" to="/Search" state={[res.data[0].summonerName, region,continent,buttonRegion,queueBtn]}>{res.data[0].summonerName}</Link>
                <h6 className="one">1st</h6>
                </div>

                <div className="sec-thrd__place">
                    <div className="second__place">
                    <SummonerInfo summonerId={res.data[1].summonerId} region={region} API_KEY={API_KEY} />
                    <Link className="second__place-link" to="/Search" state={[res.data[1].summonerName, region,continent,buttonRegion,queueBtn]}>{res.data[1].summonerName}</Link>
                    <h6 className="two">2nd</h6>
                    </div>
                    <div className="third__place">
                    <SummonerInfo summonerId={res.data[2].summonerId} region={region} API_KEY={API_KEY} />
                    <Link className="third__place-link" to="/Search" state={[res.data[2].summonerName, region,continent,buttonRegion,queueBtn]}>{res.data[2].summonerName}</Link>
                    <h6 className="three">3rd</h6>
                    </div>

                </div>
            </div>

            <div className="rankDown">
            {lang === 'en-usa' &&
            <div className="rankDown__example">
                <h6>#</h6>
                <h6>player</h6>
                <h6>Tier</h6>
            </div>}
            {lang === 'pt-br' &&
            <div className="rankDown__example">
                <h6>#</h6>
                <h6>Jogador</h6>
                <h6>Elo</h6>
            </div>}
            {res.data.map((result,i)=>
            <>
            {(page === 1 &&
            <> 
            {(i>2 &&
                <div className="rankDown__players">
                    <h6>{i+1}</h6>
                    <Link className="rankDown__players-player" to="/Search" state={[result.summonerName, region,continent,buttonRegion,queueBtn]}>{result.summonerName}</Link>
                    <h6>{tier} {division}</h6>
                    
                </div>
            )}
            </>
            )}
            </>
            )}
            </div>

        </>
        )}

    </div>
    );
}

export default Rank;