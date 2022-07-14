import React from "react";
import './ProfileInfo.scss';
import NoDataFound from "./NoDataFound/NoDataFound";
import OnlySoloQ from "./OnlySoloQ/OnlySoloQ";
import OnlyFlex from "./OnlyFlex/OnlyFlex";
import SoloQnFlex from "./SoloQnFlex/SoloQnFlex";

const ProfileInfo = (props)=>{

    const res = props.res;
    const summ = props.summ;
    const lang = props.lang;
    const queue = props.queue; 
    const error = props.error;
    const status = props.status;

    return(
        <div>
         {/* NO SOLOQ DATA FOUND*/}
         {(res !== '' && summ !== '' && summ.data.length === 0 && <NoDataFound res={res} summ={summ} lang={lang} queue={queue} error={error}/>)}

             {/* SOLOQ SELECTED // SUMM DATA LENGHT = 1 // ONLY SOLOQ PLAYER ON QUEUE TYPE*/}
         {(res !== '' && summ !== '' && summ.data.length === 1 && summ.data[0].queueType === "RANKED_SOLO_5x5" && <OnlySoloQ res={res} summ={summ} lang={lang} queue={queue} error={error}/>)}

         {/*ONLY FLEX PLAYER */}
         {(res !== '' && summ !== '' && summ.data.length === 1 && summ.data[0].queueType === "RANKED_FLEX_SR" && <OnlyFlex res={res} summ={summ} lang={lang} queue={queue} error={error}/>)}


         {/* SoloQ and Flex Player */}
         {(res !== '' && summ !== '' && summ.data.length === 2 && <SoloQnFlex res={res} summ={summ} lang={lang} queue={queue} error={error} /> )}

         {(error !== null && lang === 'en-usa' &&
             <h4 className="error__title">This profile does not exist</h4>
         )}
         {(error !== null && lang === 'pt-br' &&
             <h4 className="error__title">Este perfil não existe.</h4>
         )}


         </div>
    );
}

export default ProfileInfo;