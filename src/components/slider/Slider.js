import React, {useState} from 'react'
import './Slider.css'
import BtnSlider from './BtnSlider'
import {data} from '../../data.js';
import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export function Slider() {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== data.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === data.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(data.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }
    const openGithub = (d) => {
        window.open(d,"_blank");
    }
    const openWebSite = (d) => {
        window.open(d,"_blank");
    }
    return (
        <div className="container-slider">
            {data.map((obj, index) => {
                return (
                    <div
                    // key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    style={{
                        // background:`rgba(0 0 0 0.7)`,
                        backgroundImage:`url(assets/project${index+1}.png)`,
                        backgroundSize:'contain',
                        backgroundBlendMode:'darken'
                    }}
                    >
                        <h2> {obj.name} </h2>
                        <p> {obj.description}  </p>
                        <ul style={{
                            display:'flex',
                            flexDirection:'row',
                            flexWrap:'wrap',
                            color:'#00FF7F',
                            fontWeight:'300'
                        }}>
                            {obj.tech.map(d=>(
                                <li> {d} </li>
                            ))}
                        </ul>
                        <div>
                                <IconButton
                                style={{color:'white'}}
                                onClick={()=>openGithub(data[slideIndex-1]['github'])}
                                >
                                    <GitHubIcon />
                                </IconButton>
                                <IconButton
                                style={{color:'white'}}
                                onClick={()=>openWebSite(data[slideIndex-1]['url'])}
                                >
                                    <OpenInNewIcon />
                                </IconButton>
                        </div>
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots">
                {Array.from({length: 6}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}