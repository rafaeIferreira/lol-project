import React from "react";
import '../ProfileInfo.scss';

const OnlySoloQ = ({res, summ,lang,queue, error})=>{

    return(
        <div className="container__profile">
        <div className="profile__info">

        <h4 className="profile__name">{res.data.name}</h4>
        <img className="profile__img" src={`http://ddragon.leagueoflegends.com/cdn/12.11.1/img/profileicon/${res.data.profileIconId}.png`}/>
        <p className="profile__level">{res.data.summonerLevel}</p>
        </div>

        {(summ.data.length != 0 && lang === 'en-usa' &&  queue === 'solo' &&
        <div className="container__profile-tier">
            <div className="container__profile-tier--rank">
            <h5 class="card-title">{summ.data[0].tier} {summ.data[0].rank}</h5>
            <h6>{summ.data[0].leaguePoints} LP</h6>
            <img  src={require(`../../../../../assets/Emblem_${summ.data[0].tier}.png`)} class="card-img-bottom" alt="..."/>
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
        )}
        
        {(summ.data.length != 0 && lang === 'en-usa' &&  queue === 'flex' &&
        <div>
            <h4>There is no flex game registered.</h4>
        </div>
        )}



        {(summ.data.length !== 0 && lang === 'pt-br' &&  queue === 'solo' &&
        <div className="container__profile-tier">
            <div className="container__profile-tier--rank">
            <h5 class="card-title">{summ.data[0].tier} {summ.data[0].rank}</h5>
            <h6>{summ.data[0].leaguePoints} PDL</h6>
            <img  src={require(`../../../../../assets/Emblem_${summ.data[0].tier}.png`)} class="card-img-bottom" alt="..."/>
            </div>

            <div className="container__profile-statistics">
                <p>Jogos = {summ.data[0].wins + summ.data[0].losses}</p>
                <p>Vitorias = {summ.data[0].wins}</p>
                <div className="progress">
                <div className="progress-bar bg-success" role="progressbar" style={{width: `${Math.round((summ.data[0].wins * 100)/(summ.data[0].wins + summ.data[0].losses))}%`}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">{Math.round((summ.data[0].wins * 100)/(summ.data[0].wins + summ.data[0].losses))}%</div>
                </div>
                <p>Derrotas = {summ.data[0].losses}</p>
                <div className="progress">
                <div className="progress-bar bg-danger" role="progressbar" style={{width: `${Math.round((summ.data[0].losses * 100)/(summ.data[0].wins + summ.data[0].losses))}%`}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">{Math.round((summ.data[0].losses * 100)/(summ.data[0].wins + summ.data[0].losses))}%</div>
                </div>
            </div>
        </div>
        )}

        {(summ.data.length != 0 && lang === 'pt-br' &&  queue === 'flex' &&
        <div>
            <h4>Não há nenhum jogo flex registrado.</h4>
        </div>
        )}

        {(summ.data.length === 0 && lang == 'en-usa' &&

        <div><h4>There are no results recorded.</h4> </div>
        )}

        {(summ.data.length === 0 && lang == 'pt-br' &&

        <div><h4>Não foram encontrados resultados.</h4> </div>
        )}



    </div>
    )
}

export default OnlySoloQ;