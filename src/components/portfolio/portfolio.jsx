import './portfolio.scss'
import {Slider} from '../slider/Slider.js';
export const Portfolio = () => {
    return(
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <div>
                <Slider/>
            </div>
        </div>
    )
}