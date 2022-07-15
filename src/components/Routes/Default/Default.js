import React, {useEffect, useState} from "react";
import './Default.scss';
import Footer from "../../Footer/Footer";
import axios from "axios";
import WidthMore from "./1030W/WidthMore";
import WidthBetween from "./400w1030w/WidthBetween";
import WidthLess from "./400w/WidthLess";

const Default=()=>{
    const [splash, setSplash] = useState('');
    const [splashNum, setSplashNum] = useState(Math.round(Math.random() * (160 - 1) + 1));
    const [splashName, setSplashName] = useState('');
    const [width, setWidth] = useState(window.innerWidth);

    const detectWidth = ()=>{
        setWidth(window.innerWidth);
    }

    useEffect(()=>{
        window.addEventListener('resize', detectWidth)

    return () => {
      window.removeEventListener('resize', detectWidth)
    }
    },[width])

    useEffect(()=>{
        const load= async ()=>{
            const res = await axios.get('ddragon.json');
            setSplash(res);
            console.log(res)
            var i = 1;
            
            for (var [key, value] of Object.entries(res.data.data)) {
                if(i === splashNum){
                    setSplashName(key);
                }
                i++;
            }
        }
        load();

    }, [])
    

    return(
        <div>
        {width >= 1030 && <WidthMore splashName={splashName}/>}

        { width > 400 && width < 1030 && <WidthBetween splashName={splashName}/>}
        
        
        {width <= 400 && <WidthLess splashName={splashName}/>}
        <Footer/>
        </div>
    );

}

export default Default;