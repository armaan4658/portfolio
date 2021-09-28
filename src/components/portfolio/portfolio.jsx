import './portfolio.scss'
import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
// import {Slider} from '../slider/Slider.js';
import {data} from '../../data';
export const Portfolio = () => {
    const openGithub = (d) => {
        window.open(d,"_blank");
    }
    const openWebSite = (d) => {
        window.open(d,"_blank");
    }
    return(
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            {/* <div>
                <Slider/>
            </div> */}
            <div>
                {data.map(d=>(
                    <div style={{
                        backgroundImage:`url(${d.src})`
                    }}>
                        <h2> {d.name} </h2>
                        <p> {d.description} </p>
                        <ul>
                            {d.tech.map(t=>(
                                <li> {t} </li>
                            ))}
                        </ul>
                        <span>
                                <IconButton onClick={()=>openGithub(d.github)}>
                                    <GitHubIcon/>
                                </IconButton>
                                <IconButton onClick={()=>openWebSite(d.url)}>
                                    <OpenInNewIcon/>
                                </IconButton>
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}