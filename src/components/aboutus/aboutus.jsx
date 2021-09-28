import {timeLineData} from '../../timelinedata.js';
import {VerticalTimeline,VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import BackpackOutlinedIcon from '@mui/icons-material/BackpackOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import './aboutus.scss';
export const AboutUs = () => {
    let schoolIconStyle = {
        background:'#06D6A0'
    }
    let collegeIconStyle = {
        background:'#f9c74f'
    }
    return(
        <div className="aboutus" id="aboutus">
            <h1>About us</h1>
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
        </div>
    )
}