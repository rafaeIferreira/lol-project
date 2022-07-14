import React from "react";
import '../MatchInfo.scss';
import WinPT from "./WinPT/WinPT";
import LosePT from "./LosePT/LosePT";

const MatchInfoPT = ({match, puuid, runes, queueId, dateGame}) =>{


    return(
        <div className="match__container-general">
        {(match !== '' && 
            match.map((res)=>
            
            <div className="match__container">
                {res.data.info.participants.map((id)=>
                <div>
                    {(id.puuid === puuid && id.win === true && <WinPT queueId={queueId} res={res} id={id} runes={runes} dateGame={dateGame}/>)}

                    {(id.puuid === puuid && id.win === false && <LosePT queueId={queueId} res={res} id={id} runes={runes} dateGame={dateGame} />)}
                </div>
                )}
            </div>
            )
        )}
        </div>
    )
}   

export default MatchInfoPT;