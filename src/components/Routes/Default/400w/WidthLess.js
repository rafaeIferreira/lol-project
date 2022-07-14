import React from "react";
import { Link } from "react-router-dom";

const WidthLess = ({splashName})=>{

    return(
        <div className="general" style={{backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${splashName}_0.jpg`}}>

        <div className="left">
        <nav className="champion__nav"><Link className="nav__item" to="/">Home</Link></nav>
        <section className="default">
            <h2>LOL PROJECT</h2>
            <nav className="default__nav">
                <ul className="default__nav-list">
                    <Link className="default__nav-list--item" to="/Search">Summoner Search</Link>
                    <Link className="default__nav-list--item" to="/Rank">Rank</Link>
                </ul>
            </nav>
        </section>
        </div>


        {splashName === '' && <div className="right"/>}
        {splashName !== '' && <div className="right" style={{backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${splashName}_0.jpg)`}}/>}

        </div>
    )
}

export default WidthLess;