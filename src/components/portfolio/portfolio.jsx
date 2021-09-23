import './portfolio.scss'
import GitHubIcon from '@mui/icons-material/GitHub';
import {data} from '../../data';
export const Portfolio = () => {
    return(
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <div className="container">
                {data.map(d=>(
                    <div className="item">
                        <img src={d.src} alt=""/>
                        <div>
                            <h3><a href={d.url}>{d.name}</a></h3>
                            <a href={d.github}><GitHubIcon className="icon"/></a>
                        </div>
                    </div> 
                ))}
            </div>
        </div>
    )
}