import './intro.scss';
import {init} from 'ityped';
import * as React from 'react';
export const Intro = () => {
    const textRef = React.useRef();
    const typing = () => {
        init(textRef.current,{
            showCursor:true,
            backDelay:1500,
            backSpeed:60,
            strings:["Developer"]
        })
    }
    try{
        React.useEffect(typing,[]);
    }catch(e){
        console.log(e);
    }
    return(
        <div className="intro" id="into">
            <div className="left">
                <div class="imgContainer">
                    <img src="assets/man1.png" alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Armaan</h1>
                    <h3>Full Stack <span ref={textRef}></span></h3>
                </div>
                <a href="#aboutus">
                    <img src="assets/down.png" alt=""/>
                </a>
            </div>
        </div>
    )
}