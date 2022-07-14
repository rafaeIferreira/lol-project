import React from "react";
import '../MatchInfo.scss';
import WinEN from "./WinEN/WinEN";
import LoseEN from "./LoseEN/LoseEN";

const MatchInfoEN = ({match, puuid, runes, queueId, dateGame})=>{
        {/*FiddleSticks has a name problems with de link in API return, so we have to change "FiddleSticks" to "Fiddlesticks" */}

    return(
        <div className="match__container-general">
        <h3>Last Matches</h3>
        {(match !== '' && 

            match.map((res,i)=>
            <div key={i} className="match__container">
                {res.data.info.participants.map((id,j)=>
                <div key={j}>
                    {(id.puuid === puuid && id.win === true && <WinEN  queueId={queueId} res={res} id={id} runes={runes} dateGame={dateGame}/>)}
                    
                    
                    {(id.puuid === puuid && id.win === false && <LoseEN  queueId={queueId} res={res} id={id} runes={runes} dateGame={dateGame} />)}
                </div>
                )}
            </div>
            )
        )}

        </div>
    )
}

export default MatchInfoEN;