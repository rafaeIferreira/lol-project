import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import './SummonerInfo.scss';

const SummonerInfo = (props)=>{
    const region = props.region;
    const API_KEY = props.API_KEY;
    const [res, setRes] = useState('');
    const [summonerId, setSummonerId] = useState(props.summonerId);


    const fetchSummonerId = async ()=>{
        try{
        const ress = await axios.get(`https://${region}.api.riotgames.com/lol/summoner/v4/summoners/${summonerId}?api_key=${API_KEY}`);
        setRes(ress);
        
        }catch(err){
            console.log('deu ruim')
        }
    }

    useEffect(()=>{
        fetchSummonerId();

    },[])


    return(
        <div className="podiumm">
            {(res !== '' &&
            <>
            <img className="podium__image" src={`http://ddragon.leagueoflegends.com/cdn/12.12.1/img/profileicon/${res.data.profileIconId}.png`}/>

            </>
            )}
        </div>
    );
}

export default SummonerInfo;