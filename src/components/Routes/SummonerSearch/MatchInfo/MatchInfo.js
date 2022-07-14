import React from "react";
import {useState} from "react";
import './MatchInfo.scss';
import MatchInfoEN from "./EN-USA/MatcInfoEN";
import MatchInfoPT from "./PT-BR/MatchInfoPT";

     {/*FiddleSticks has a name problems with de link in API return, so we have to change "FiddleSticks" to "Fiddlesticks" */}
    export function capitalizeFirstLetter(string) {
        if (string === 'FiddleSticks'){
        const res = string.toLowerCase();
        return res.charAt(0).toUpperCase() + res.slice(1);
        }else{
            return string;
        }
    }

    

    {/*SWITCH SPELL ID */}
    export function switchspell(int){
        switch(int){
            case 21:
                return 'SummonerBarrier';
            break;
            case 1:
                return 'SummonerBoost';
            break;
            case 14:
                return 'SummonerDot';
            break;
            case 3:
                return 'SummonerExhaust';
            break;
            case 4:
                return 'SummonerFlash';
            break;
            case 6:
                return 'SummonerHaste';
            break;
            case 7:
                return 'SummonerHeal';
            break;
            case 13:
                return 'SummonerMana';
            break;
            case 30:
                return 'SummonerPoroRecall';
            break;
            case 31:
                return 'SummonerPoroThrow';
            break;
            case 11:
                return 'SummonerSmite';
            break;
            case 39:
                return 'SummonerSnowURFSnowball_Mark';
            break;
            case 32:
                return 'SummonerSnowball';
            break;
            case 12:
                return 'SummonerTeleport';
            break;
            case 54:
                return 'Summoner_UltBookPlaceholder';
            break;
            case 55:
                return 'Summoner_UltBookSmitePlaceholder';
            break;
        }
    }

const MatchInfo = (props)=>{
    const [date, setDate] = useState();

    const match = props.match;
    const puuid = props.puuid;
    const lang = props.lang;
    const runes = props.runes;
    const queueId = props.queueId;
    const dateGame = [];


    if (match !== '' && lang === 'en-usa' && match.length !== 0){
    for(let i =0; i<10; i++){
        dateGame.push([`${new Date(match[i].data.info.gameEndTimestamp).getMonth()+1}/${new Date(match[i].data.info.gameEndTimestamp).getDate()}/${new Date(match[i].data.info.gameEndTimestamp).getFullYear()}`, match[i].data.info.gameEndTimestamp])
    }
    }
    if (match !== '' && lang === 'pt-br' && match.length !== 0){
    for(let i =0; i<10; i++){
        dateGame.push([`${new Date(match[i].data.info.gameEndTimestamp).getDate()}/${new Date(match[i].data.info.gameEndTimestamp).getMonth()+1}/${new Date(match[i].data.info.gameEndTimestamp).getFullYear()}`, match[i].data.info.gameEndTimestamp])
    }
    }

    return(
        <>
        {/*---------------------------MATCH SECTION EN-USA-----------------------------------------*/}
        {(lang === 'en-usa' && match !== '' && <MatchInfoEN match={match} puuid={puuid} lang={lang} runes={runes} queueId={queueId} dateGame={dateGame}/>)}
                        


                                {/*MATCH SECTION  PTT*/}
        {(lang === 'pt-br' && match !== '' && <MatchInfoPT match={match} puuid={puuid} lang={lang} runes={runes} queueId={queueId} dateGame={dateGame} /> )}
                      

        </>
    );

}

export default MatchInfo;