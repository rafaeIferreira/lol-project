import React, { useEffect, useState } from "react";
import "../../MatchInfo.scss";
import {capitalizeFirstLetter, switchspell} from "../../MatchInfo";

const WinPT = ({queueId, res, id, runes, dateGame})=>{
    const [primary, setPrimary] = useState('');
    const [secondary, setSecondary] = useState('');
    
    useEffect(()=>{
            
        switch(id.perks.styles[0].style){
            case 8100:
                switch(id.perks.styles[0].selections[0].perk){
                    case 8112:
                        setPrimary("perk-images/Styles/Domination/Electrocute/Electrocute.png");
                        break;
                    case 8124:
                        setPrimary("perk-images/Styles/Domination/Predator/Predator.png");
                        break;
                    case 8128:
                        setPrimary("perk-images/Styles/Domination/DarkHarvest/DarkHarvest.png");
                        break;
                    case 9923:
                        setPrimary("perk-images/Styles/Domination/HailOfBlades/HailOfBlades.png");
                        break;
                }
            break;
            case 8300:
                switch(id.perks.styles[0].selections[0].perk){
                    case 8351:
                        setPrimary("perk-images/Styles/Inspiration/GlacialAugment/GlacialAugment.png")
                        break;
                    case 8360:
                        setPrimary("perk-images/Styles/Inspiration/UnsealedSpellbook/UnsealedSpellbook.png")
                        break;
                    case 8358:
                        setPrimary("perk-images/Styles/Inspiration/MasterKey/MasterKey.png")
                        break;
                }
            break;
            case 8000:
                switch(id.perks.styles[0].selections[0].perk){
                    case 8005:
                        setPrimary("perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png")
                        break;
                    case 8008:
                        setPrimary("perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.png")
                        break;
                    case 8021:
                        setPrimary("perk-images/Styles/Precision/FleetFootwork/FleetFootwork.png")
                        break;
                    case 8010:
                        setPrimary("perk-images/Styles/Precision/Conqueror/Conqueror.png")
                        break;
                }
            break;
            case 8400:
                switch(id.perks.styles[0].selections[0].perk){
                    case 8437:
                        setPrimary("perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png")
                        break;
                    case 8439:
                        setPrimary("perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png")
                        break;
                    case 8465:
                        setPrimary("perk-images/Styles/Resolve/Guardian/Guardian.png")
                        break;
                }
            break;
            case 8200:
                switch(id.perks.styles[0].selections[0].perk){
                    case 8214:
                        setPrimary("perk-images/Styles/Sorcery/SummonAery/SummonAery.png")
                        break;
                    case 8229:
                        setPrimary("perk-images/Styles/Sorcery/ArcaneComet/ArcaneComet.png")
                        break;
                    case 8230:
                        setPrimary("perk-images/Styles/Sorcery/PhaseRush/PhaseRush.png")
                        break;
                }
            break;
        }

        switch(id.perks.styles[0].style){
            case 8100:
                setSecondary("perk-images/Styles/7200_Domination.png")
            break;
            case 8300:
                setSecondary("perk-images/Styles/7203_Whimsy.png")
                break;
                case 8000:
                    setSecondary("perk-images/Styles/7201_Precision.png")
                break;
                case 8400:
                    setSecondary("perk-images/Styles/7204_Resolve.png")
                break;
                case 8200:
                    setSecondary("perk-images/Styles/7202_Sorcery.png")
                break;
        }

    },[])

    return(
        <div className="match__container-box win__box">

                    {(queueId !== '' &&
                     <>
                        {queueId.data.map((qid)=>
                        <> 
                        {(res.data.info.queueId === qid.queueId && res.data.info.queueId !== 0 &&
                        <> 
                             <p className="queueType">{qid.description.replace(' games', '').replace('Ranked', 'Ranqueada')}</p>
                        </>
                        )}
                        {(res.data.info.queueId === qid.queueId && res.data.info.queueId === 0 && <p className="queueType">Custom Game</p> )}
                        </>
                        )}
                    </>
                    )}
                    <p>Vitoria</p>
                    <p>{id.summonerName}</p>
                        <div className="match__container__info">
                            <img className="match__container__info-image" src={`http://ddragon.leagueoflegends.com/cdn/12.11.1/img/champion/${capitalizeFirstLetter(id.championName)}.png`}/>
                            <div className="match__container__info--spells">
                                <img className="match__container__info--spells-image" src={`https://ddragon.leagueoflegends.com/cdn/12.11.1/img/spell/${switchspell(id.summoner1Id)}.png`}/>
                                <img className="match__container__info--spells-image" src={`https://ddragon.leagueoflegends.com/cdn/12.11.1/img/spell/${switchspell(id.summoner2Id)}.png`}/>
                            </div>

                            <div className="match__container__info-kda">
                            <p>A/M/A</p>
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
                        {primary !== '' &&
                            <div className="primary">
                                <img className="runes__primary" src={`https://ddragon.canisback.com/img/${primary}`}/>
                            </div>}
                        
                            {secondary !== '' &&
                            <div className="secondary"> 
                                <img src={`https://ddragon.canisback.com/img/${secondary}`}/>

                            </div>}
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

export default WinPT;