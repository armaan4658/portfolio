import { useState } from 'react';
import './skills.scss';
export const Skills = () => {
    const [web,setWeb] = useState(true);
    const [programming,setProgramming] = useState(false);
    return(
        <div className="skills" id="skills">
            <h1>skills</h1>
            <ul>
                <li onClick={()=>{
                    setProgramming(false);
                    setWeb(true);
                }} 
                className={web ? "list1 active" : "list1"}>Web</li>
                <li onClick={()=>{
                    setWeb(false);
                    setProgramming(true);
                }} className={programming ? "list2 active" : "list2"}>Programming</li>
            </ul>
            {web ? (
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <h4>React</h4>
                        </div>
                        <div className="right">
                            <span>90%</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="left">
                            <h4>Node Js</h4>
                        </div>
                        <div className="right">
                            <span>90%</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="left">
                            <h4>Express Js</h4>
                        </div>
                        <div className="right">
                            <span>90%</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="left">
                            <h4>MongoDB</h4>
                        </div>
                        <div className="right">
                            <span>90%</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="left">
                            <h4>MySQL</h4>
                        </div>
                        <div className="right">
                            <span>90%</span>
                        </div>
                    </div>
                </div>
            ):(
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <h4>JavaScript</h4>
                        </div>
                        <div className="right">
                            <span>90%</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="left">
                            <h4>C</h4>
                        </div>
                        <div className="right">
                            <span>85%</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="left">
                            <h4>C++</h4>
                        </div>
                        <div className="right">
                            <span>85%</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="left">
                            <h4>Python</h4>
                        </div>
                        <div className="right">
                            <span>60%</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="left">
                            <h4>Java</h4>
                        </div>
                        <div className="right">
                            <span>65%</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}