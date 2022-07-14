import React from "react";
import "./ChampionMastery.scss";

const ChampionMastery = (props)=>{
    const mastery= props.mastery;
    const champion = props.champion;
    const rows= []
    for(var i=0; i<5; i++){
        for(var j=0; j<champion.length; j++){
            if(mastery.data[i].championId === parseInt(champion[j][1].key,10)){
                rows.push([mastery.data[i],champion[j][1]]);
            }
        }
    }


    return(
        <div className="championMastery__container">
            {rows.map((res,i)=>
                <div key={i}  className="championMastery__box">
                    <h6 className="championMastery__box-title">{res[1].name}</h6>
                    <img className="championMastery__box-avatar" src={`http://ddragon.leagueoflegends.com/cdn/12.11.1/img/champion/${res[1].image.full}`}/>
                    {(res[0].championLevel >= 4 &&
                    <img className="maestry" src={`https://lolg-cdn.porofessor.gg/img/s/masteries/lvl${res[0].championLevel}.png`}/>
                    )}
                    <h6 className="championMastery__box-points">{res[0].championPoints} pts</h6>
                </div>
            )}
        </div>
    );
}

export default ChampionMastery;