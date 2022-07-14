import React from "react";
import moment from 'moment'
import './SummonerSearch.scss';
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Footer from "../../Footer/Footer";
import axios from "axios";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MatchInfo from "./MatchInfo/MatchInfo";
import ChampionMastery from "./ChampionMastery";

const situation = '';

const SummonerSearch = (props)=>{
    const API_KEY = props.API_KEY;
    const [lang, setLang] = useState('en-usa');
    const [inputt, setInputt] = useState('');
    const [region, setRegion] = useState('br1');
    const [continent, setContinent] = useState('americas');
    const [res, setRes] = useState('');
    const [summ, setSumm] = useState('');
    const [error, setError] = useState(null);
    const [queue, setQueue] = useState('solo');
    const [match, setMatch] = useState('');
    const [puuid, setPuuid] = useState('');
    const [buttonRegion, setButtonRegion] = useState('BR');
    const [count, setCount] = useState(10);
    const [mastery, setMastery] = useState('');
    const [champion, setChampion] = useState('');
    const [runes, setRunes] = useState('');
    const [queueId, setQueueId] = useState('');
    const [status, setStatus] = useState('')
    const location = useLocation();
    const [i, setI] = useState(0)

    const render = async ()=>{

        try{
            const ress  = await axios.get(`https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${inputt}?api_key=${API_KEY}`);
            setRes(ress);
            setPuuid(ress.data.puuid);

            try{
                        
            const summoner = await axios.get(`https://${region}.api.riotgames.com/lol/league/v4/entries/by-summoner/${ress.data.id}?api_key=${API_KEY}`);
            setSumm(summoner);
            try{
                const statuss = await axios.get(`https://${region}.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/${summoner.data[0].summonerId}?api_key=${API_KEY}`)
                setStatus(statuss);
            }catch(err){
                setStatus('');
            }
            try{
                const champApi = await axios.get(`http://ddragon.leagueoflegends.com/cdn/12.11.1/data/en_US/champion.json`);
                setChampion(champApi);
                
                try{
                    const runess = await axios.get(`http://ddragon.leagueoflegends.com/cdn/10.16.1/data/en_US/runesReforged.json`);
                    setRunes(runess);
                }catch(err){
                    setRunes('');
                }
                
                try{
                    const masteryy = await axios.get(`https://${region}.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${summoner.data[0].summonerId}?api_key=${API_KEY}`);
                    setMastery(masteryy);
                }catch(err){
                    setMastery('');
                } 
            }catch(err){

            }

                try{
                    
                const matches = await axios.get(`https://${continent}.api.riotgames.com/lol/match/v5/matches/by-puuid/${ress.data.puuid}/ids?start=0&count=${count}&api_key=${API_KEY}`);

                    try{
                    axios.all(matches.data.map((l)=> axios.get(`https://${continent}.api.riotgames.com/lol/match/v5/matches/${l}?api_key=${API_KEY}`)))
                    .then(axios.spread(function (...promise){
                        
                        setMatch(promise);
                    }));

                        try{
                            const queueIdd = await axios.get("https://static.developer.riotgames.com/docs/lol/queues.json");
                            setQueueId(queueIdd);
                        }catch(err){

                        }

                    }catch(err){
                        setMatch('');
                        console.log('Error on match getting ')
                    }
            
                }catch(err){
                    console.log("error in matches found");
                }
                
                
            }catch(err){
                console.log("Error in data player found");
            }

        }catch(err){
            setError(err.name);
            setMatch('');
            setRes('');
            setQueueId('');
            console.log('Error in player fetch');
        }

    } 
    {/* FUNCTION TO CONVERT THE CHAMPION NAME TO A FIRST LETTER UPPERCASE ONLY */}
    if(match !== '' && match[0] !== undefined){
        const dataGame = new Date(match[0].data.info.gameEndTimestamp)
        var dataGameF = moment(dataGame).format('MMMM Do YYYY, h:mm:ss a');
    }

    
    if (i===0 && location.state !== null){
        setInputt(location.state[0]);
        setRegion(location.state[1]);
        setContinent(location.state[2]);
        setButtonRegion(location.state[3]);
        setQueue(location.state[4]);
        setI(i+1);
    }

    const renderLocation = ()=>{
        if(location.state !== null){
            render();
        }
    }
    
    useEffect(()=>{
        renderLocation();

    }, [])
    
    return(
        <>
        <div className="search">
                <div className="container__nav">
                    {(location.state === null &&
                    <>
                    {(lang === 'en-usa' &&
                    <nav className="champion__nav"><Link className="nav__item" to="/">Home</Link> &#62; <Link className="nav__item" to="/Search">Search</Link></nav>
                    )}
                    {(lang === 'pt-br' &&
                    <nav className="champion__nav"><Link className="nav__item" to="/">Inicio</Link> &#62; <Link className="nav__item" to="/Search">Buscar</Link></nav>
                    )}
                    </>
                    )}
                    {(location.state !== null &&
                    <>
                    {(lang === 'en-usa' &&
                    <nav className="champion__nav"><Link className="nav__item" to="/">Home</Link> &#62; <Link className="nav__item" to="/Rank">Rank</Link> &#62; <Link className="nav__item" to="/Search">Search</Link></nav>
                    )}
                    {(lang === 'pt-br' &&
                    <nav className="champion__nav"><Link className="nav__item" to="/">Inicio</Link> &#62; <Link className="nav__item" to="/Rank">Ranque</Link> &#62; <Link className="nav__item" to="/Search">Buscar</Link></nav>
                    )}
                    </>
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

            <div className="form__container">
            <form onSubmit={(ev)=>{ev.preventDefault()
            }} className="searchForm">
                <div class="dropdown">
                <a class="btn" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
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
                {(lang === 'en-usa' &&
                <input className="searchForm__input" onChange={(ev)=>{setInputt(ev.target.value)}} placeholder="Search"/>
                )}
                {(lang === 'pt-br' &&
                <input className="searchForm__input" onChange={(ev)=>{setInputt(ev.target.value)}} placeholder="Buscar"/>
                )}

                {(lang === 'en-usa' && inputt != '' &&
                <button onClick={(ev)=>{
                render(region, inputt);
                setRes('');
                setError(null);
                setMatch('');
                }} className="searchForm__btn">Search</button>
                )}

                {(lang === 'en-usa' && inputt === '' &&
                <button className="searchForm__btn">Search</button>
                )}

                {(lang === 'pt-br' && inputt !== '' &&
                <button onClick={(ev)=>{
                render();
                setRes('');
                setError(null);
                setMatch('');
                }} className="searchForm__btn">Buscar</button>
                )}
                                
                {(lang === 'pt-br' && inputt === '' &&
                <button className="searchForm__btn">Buscar</button>
                )}
                
            </form>
            </div>

            <div className="dropdown queue__button">
            {(res !== '' &&
            <>
            {(status !== '' &&
                    <p className="status"><i class="fa-solid fa-circle online"></i>Playing</p>
                )}
                {(status === '' && moment(dataGameF, "MMMM Do YYYY, h:mm:ss a").fromNow() !== 'Invalid date' &&
                    <p className="status"><i class="fa-solid fa-circle offline"></i>{moment(dataGameF, "MMMM Do YYYY, h:mm:ss a").fromNow()}</p>
                )}
            </>
            )}
                <button className="btn" type="button" id="languages" data-bs-toggle="dropdown" aria-expanded="false">
                    {queue}
                </button>
                <ul className="dropdown-menu" aria-labelledby="languages">
                    <li><button onClick={()=>setQueue('solo')} className="dropdown-item" href="#">Solo Q</button></li>

                    <li><button onClick={()=>setQueue('flex')} className="dropdown-item" href="#">Flex</button></li>
                </ul>
                </div>
            
            
            <ProfileInfo status={status} res={res} summ={summ} lang={lang} queue={queue} error={error} />  
            {(champion !== '' && mastery !== '' && match !== '' &&
            <ChampionMastery  mastery={mastery} champion={Object.entries(champion.data.data)}/>
            )}

            {(match !== '' &&
            <MatchInfo queueId={queueId} match={match} puuid={puuid} lang={lang} runes={runes}/>
            
            )}
            
        </div>
        <Footer/>
        </>
    )
}

export default SummonerSearch;