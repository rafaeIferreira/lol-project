import React from "react";
import "../../MatchInfo.scss";
import {capitalizeFirstLetter, switchspell} from "../../MatchInfo";

const WinEN = ({queueId, res, id, runes, dateGame})=>{

    
    function perksSelectPrimary(runes, id){
        let i =0;
        let j = 0;
    
        for (i of runes.data){
            if(i.id === id.perks.styles[0].style){
                for(j of i.slots[0].runes ){
                    if(j.id === id.perks.styles[0].selections[0].perk){
                        return(j.icon)
                    }
                }
            }
        }
    }


    function perksSelectSecondary(runes, id){
        let i =0;

        for(i of runes.data){
            if (i.id === id.perks.styles[1].style){
                return(i.icon);
            }
        }
    }

    return(
        <div className="match__container-box win__box">
                    {(queueId !== '' &&
                    <>
                        {queueId.data.map((qid)=>
                        <> 
                        {(res.data.info.queueId === qid.queueId && res.data.info.queueId !== 0 &&
                        <> 
                            <p className="queueType">{qid.description.replace(' games', '')}</p>
                        </>
                        )}
                        {(res.data.info.queueId === qid.queueId && res.data.info.queueId === 0 && <p className="queueType">Custom Game</p> )}
                        </>
                        )}
                    </>
                    )}
                    <p>Win</p>
                    <p>{id.summonerName}</p>
                        <div className="match__container__info">
                            <img className="match__container__info-image" src={`http://ddragon.leagueoflegends.com/cdn/12.11.1/img/champion/${capitalizeFirstLetter(id.championName)}.png`}/>
                            
                            
                            <div className="match__container__info--spells">
                                <img className="match__container__info--spells-image" src={`https://ddragon.leagueoflegends.com/cdn/12.11.1/img/spell/${switchspell(id.summoner1Id)}.png`}/>
                                <img className="match__container__info--spells-image" src={`https://ddragon.leagueoflegends.com/cdn/12.11.1/img/spell/${switchspell(id.summoner2Id)}.png`}/>
                            </div>
                                                    
                            <div className="match__container__info-kda">
                            <p>K/D/A</p>
                            <p>{id.kills}/{id.deaths}/{id.assists}</p>
                            </div>

                            <div className="match__container--info--items">
                                <div className="match__container--info--items-up">
                                    {(id.item0 !== 0 &&
                                    <img className="match__container--info--items-image" src={`http://ddragon.leagueoflegends.com/cdn/12.11.1/img/item/${id.item0}.png`}/>
                                    )}
                                    {(id.item0 === 0 &&
                                        <div className="empty"></div>
                                    )}

                                    {(id.item1 !== 0 &&
                                    <img className="match__container--info--items-image" src={`http://ddragon.leagueoflegends.com/cdn/12.11.1/img/item/${id.item1}.png`}/>
                                    )}
                                    {(id.item1 === 0 &&
                                        <div className="empty"></div>
                                    )}

                                    {(id.item2 !== 0 &&
                                    <img className="match__container--info--items-image" src={`http://ddragon.leagueoflegends.com/cdn/12.11.1/img/item/${id.item2}.png`}/>
                                    )}
                                    {(id.item2 === 0 &&
                                        <div className="empty"></div>
                                    )}
                                </div>
                                
                                <div className="match__container--info--items-down">
                                    {(id.item3 !== 0 &&
                                    <img className="match__container--info--items-image" src={`http://ddragon.leagueoflegends.com/cdn/12.11.1/img/item/${id.item3}.png`}/>
                                    )}
                                    {(id.item3 === 0 &&
                                        <div className="empty"></div>
                                    )}

                                    {(id.item4 !== 0 &&
                                    <img className="match__container--info--items-image" src={`http://ddragon.leagueoflegends.com/cdn/12.11.1/img/item/${id.item4}.png`}/>
                                    )}
                                    {(id.item4 === 0 &&
                                        <div className="empty"></div>
                                    )}

                                    {(id.item5 !== 0 &&
                                    <img className="match__container--info--items-image" src={`http://ddragon.leagueoflegends.com/cdn/12.11.1/img/item/${id.item5}.png`}/>
                                    )}
                                    {(id.item5 === 0 &&
                                        <div className="empty"></div>
                                    )}
                                 </div>
                            </div>

                        </div>

                        <div className="runes__container">
                            <div className="primary">
                                <img className="runes__primary" src={`https://ddragon.canisback.com/img/${perksSelectPrimary(runes, id)}`}/>
                            </div>
                        
                            <div className="secondary">
                                <img src={`https://ddragon.canisback.com/img/${perksSelectSecondary(runes,id)}`}/>
                            </div>

                        </div>

                        <>
                            {dateGame.map((dates)=>
                                <>
                                    {(dates[1] === res.data.info.gameEndTimestamp &&
                                    <p className="gameDate">{dates[0]}</p>
                                    )}
                                </>
                            )}
                        </>

                        <p>{Math.round(res.data.info.gameDuration / 60)}m {res.data.info.gameDuration % 60}s</p>

                    </div>
    )
}

export default WinEN;