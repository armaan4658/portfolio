import React, {useState} from 'react'
import './Slider.css'
import BtnSlider from './BtnSlider'
import {data} from '../../data.js';
import { Link } from '@mui/material';

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
                    >
                        <h2> {obj.name} </h2>
                        <h4>
                            <Link onClick={()=>openGithub(data[slideIndex-1]['github'])}>Github url</Link>
                        </h4>
                        <h4>
                            <Link onClick={()=>openWebSite(data[slideIndex-1]['url'])}>Live project url</Link>
                        </h4>
                        <img 
                        src={process.env.PUBLIC_URL + `/assets/project${index + 1}.png`} 
                        alt=""
                        />
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