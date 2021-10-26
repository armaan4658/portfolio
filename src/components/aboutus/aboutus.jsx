import {timeLineData} from '../../timelinedata.js';
import {VerticalTimeline,VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import BackpackOutlinedIcon from '@mui/icons-material/BackpackOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import './aboutus.scss';
import Link from '@mui/material/Link';
export const AboutUs = () => {
    let schoolIconStyle = {
        background:'#06D6A0'
    }
    let collegeIconStyle = {
        background:'#f9c74f'
    }
    const resume = `https://drive.google.com/file/d/1k0-IYqFeLGAzVD3c--jEEdS4EcFt0RJE/view?usp=sharing`;
    return(
        <div className="aboutus" id="aboutus">
            <div className="one">
              <h1>About Us</h1>
            </div>
            <VerticalTimeline>
                {
                    timeLineData.map(e=>{
                        let isSchool = e.icon === "school";
                        return(
                            <VerticalTimelineElement
                            key={e.id}
                            date={e.date}
                            dateClassName="date"
                            iconStyle={isSchool ? schoolIconStyle : collegeIconStyle}
                            icon={isSchool ? <BackpackOutlinedIcon/> : <SchoolOutlinedIcon/>}
                            >
                                <h3 className="vertical-timeline-element-title" > {e.title} </h3>
                                <h5 className="vertical-timeline-element-subtitle" > {e.location} </h5>
                            </VerticalTimelineElement>
                        )
                    })
                }
            </VerticalTimeline>
            <div className="resume-div">
                <Link className="resume" onClick={()=>window.open(resume,"_blank")}>Resume</Link>
            </div>
        </div>
    )
}