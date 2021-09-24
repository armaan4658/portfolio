import './portfolio.scss'
import GitHubIcon from '@mui/icons-material/GitHub';
import {data} from '../../data';
export const Portfolio = () => {
    const openProject = (u) => {
        window.open(u.url,'_blank');
    }
    const openGitHub = (u) => {
        window.open(u.github,'_blank');
    }
    return(
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <div className="container">
                {data.map(d=>(
                    <div className="item">
                        <img src={d.src} alt=""/>
                        <div>
                            <h3 onClick={()=>openProject(d)}>{d.name}</h3>
                            <span onClick={()=>openGitHub(d)}><GitHubIcon className="icon"/></span>
                        </div>
                    </div> 
                ))}
            </div>
        </div>
    )
}