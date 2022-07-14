import React from "react";
import '../ProfileInfo.scss';

const NoDataFound = ({res, summ,lang,queue, error})=>{

    return(
        <div className="container__profile">
        <div className="profile__info">
        <h4 className="profile__name">{res.data.name}</h4>
        <img className="profile__img" src={`http://ddragon.leagueoflegends.com/cdn/12.11.1/img/profileicon/${res.data.profileIconId}.png`}/>
        <p className="profile__level">{res.data.summonerLevel}</p>
        </div>

        {(summ.data.length === 0 && lang == 'en-usa' &&

        <div><h4>There are no results recorded.</h4> </div>
        )}

        {(summ.data.length === 0 && lang == 'pt-br' &&

        <div><h4>Não foram encontrados resultados.</h4> </div>
        )}

    </div>
    );

}

export default NoDataFound;