import React from "react";
import '../../../ProfileInfo.scss';

const SoloQ1PT = ({summ})=>{
    return(
        <div className="container__profile-tier">
            <div className="container__profile-tier--rank">
            <h5 class="card-title">{summ.data[1].tier} {summ.data[1].rank}</h5>
            <h6>{summ.data[1].leaguePoints} PDL</h6>
            <img  src={require(`../../../../../../../assets/Emblem_${summ.data[1].tier}.png`)} class="card-img-bottom" alt="..."/>
            </div>

            <div className="container__profile-statistics">
                <p>Jogos = {summ.data[1].wins + summ.data[1].losses}</p>
                <p>Vitorias = {summ.data[1].wins}</p>
                <div className="progress">
                <div className="progress-bar bg-success" role="progressbar" style={{width: `${Math.round((summ.data[1].wins * 100)/(summ.data[1].wins + summ.data[1].losses))}%`}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">{Math.round((summ.data[1].wins * 100)/(summ.data[1].wins + summ.data[1].losses))}%</div>
                </div>
                <p>Derrotas = {summ.data[1].losses}</p>
                <div className="progress">
                <div className="progress-bar bg-danger" role="progressbar" style={{width: `${Math.round((summ.data[1].losses * 100)/(summ.data[1].wins + summ.data[1].losses))}%`}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">{Math.round((summ.data[1].losses * 100)/(summ.data[1].wins + summ.data[1].losses))}%</div>
                </div>
            </div>
        </div>
    )
}

export default SoloQ1PT;