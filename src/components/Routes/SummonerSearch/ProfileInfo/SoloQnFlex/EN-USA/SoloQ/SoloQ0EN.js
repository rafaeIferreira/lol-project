import React from "react";
import '../../../ProfileInfo.scss';

const SoloQ0EN = ({summ})=>{
    return(
        <div className="container__profile-tier">
        <div className="container__profile-tier--rank">
        <h5 class="card-title">{summ.data[0].tier} {summ.data[0].rank}</h5>
        <h6>{summ.data[0].leaguePoints} LP</h6>
        <img  src={require(`../../../../../../../assets/Emblem_${summ.data[0].tier}.png`)} class="card-img-bottom" alt="..."/>
        </div>

        <div className="container__profile-statistics">
            <p>Games = {summ.data[0].wins + summ.data[0].losses}</p>
            <p>Wins = {summ.data[0].wins}</p>
            <div className="progress">
            <div className="progress-bar bg-success" role="progressbar" style={{width: `${Math.round((summ.data[0].wins * 100)/(summ.data[0].wins + summ.data[0].losses))}%`}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">{Math.round((summ.data[0].wins * 100)/(summ.data[0].wins + summ.data[0].losses))}%</div>
            </div>
            <p>Losses = {summ.data[0].losses}</p>
            <div className="progress">
            <div className="progress-bar bg-danger" role="progressbar" style={{width: `${Math.round((summ.data[0].losses * 100)/(summ.data[0].wins + summ.data[0].losses))}%`}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">{Math.round((summ.data[0].losses * 100)/(summ.data[0].wins + summ.data[0].losses))}%</div>
            </div>
        </div>
    </div>
    );
}

export default SoloQ0EN;