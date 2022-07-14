import React from "react";
import '../ProfileInfo.scss';

import FLEX0EN from "./EN-USA/Flex/Flex0EN";
import Flex1EN from "./EN-USA/Flex/Flex1EN";
import NoResultsEN from "./EN-USA/NoResultsEN";
import SoloQ0EN from "./EN-USA/SoloQ/SoloQ0EN";
import SoloQ1EN from "./EN-USA/SoloQ/SoloQ1EN";

import Flex0PT from "./PT-BR/Flex/Flex0PT";
import Flex1PT from "./PT-BR/Flex/Flex1PT";
import NoResultsPT from "./PT-BR/NoResultsPT";
import SoloQ0PT from "./PT-BR/SoloQ/SoloQ0PT";
import SoloQ1PT from "./PT-BR/SoloQ/SoloQ1PT";

const SoloQnFlex = ({res, summ,lang,queue, error})=>{

    return(
        <div className="container__profile">
        <div className="profile__info">
        
        <h4 className="profile__name">{res.data.name}</h4>
        <img className="profile__img" src={`http://ddragon.leagueoflegends.com/cdn/12.11.1/img/profileicon/${res.data.profileIconId}.png`}/>
        <p className="profile__level">{res.data.summonerLevel}</p>
        </div>
        {/*---------------------- EN-USA SECTION -------------------------- */}
        {/* Ranked Solo inside index 0 in data EN-USA*/}
        {(summ.data.length != 0 && lang === 'en-usa' && summ.data[0].queueType === "RANKED_SOLO_5x5" && queue === 'solo' && <SoloQ0EN summ={summ}/>)}
        
        {/* Ranked Solo inside index 1 in data EN-USA*/}
        {(summ.data.length != 0 && lang === 'en-usa' && summ.data[1].queueType === "RANKED_SOLO_5x5" && queue === 'solo' && <SoloQ1EN summ={summ}/>)}
        
        {/* FLEX INDEX 1 EN-USA*/}
        {(summ.data.length != 0 && lang === 'en-usa' && summ.data[1].queueType === "RANKED_FLEX_SR" && queue === 'flex' && <Flex1EN summ={summ}/>)}

        {/* FLEX INDEX 0 EN-USA*/}
        {(summ.data.length != 0 && lang === 'en-usa' && summ.data[0].queueType === "RANKED_FLEX_SR" && queue === 'flex' && <FLEX0EN summ={summ}/>)}

        
        {/*---------------------- PT-BR SECTION -------------------------- */}
        {/* FLEX INDEX 0 PT-BR */}
        {(summ.data.length != 0 && lang === 'pt-br' && summ.data[0].queueType === "RANKED_FLEX_SR" && queue === 'flex' && <Flex0PT summ={summ}/>)}
        
        {/* FLEX INDEX 1 PT-BR */}
        {(summ.data.length != 0 && lang === 'pt-br' && summ.data[1].queueType === "RANKED_FLEX_SR" && queue === 'flex' && <Flex1PT summ={summ}/> )}

        {/*SOLO INDEX 1 PT-BR*/}
        {(summ.data.length != 0 && lang === 'pt-br' && summ.data[1].queueType === "RANKED_SOLO_5x5" && queue === 'solo' && <SoloQ1PT summ={summ}/>)}

        {/*SOLO INDEX 0 PT-BR*/}
        {(summ.data.length != 0 && lang === 'pt-br' && summ.data[0].queueType === "RANKED_SOLO_5x5" && queue === 'solo' && <SoloQ0PT summ={summ}/>)}
    
        {(summ.data.length === 0 && lang == 'en-usa' && <NoResultsEN/> )}

        {(summ.data.length === 0 && lang == 'pt-br' && <NoResultsPT/>)}
    </div>
    )
}

export default SoloQnFlex;