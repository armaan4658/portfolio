import './topBar.scss'
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
export const TopBar = ({menuOpen,setMenuOpen}) => {
    return(
        <div className={menuOpen ? "topbar active" : "topbar"}>
            <div className="wrapper">
                <div className="left">
                    <a href="#into" className="logo">Armaan</a>
                    <div className="itemContainer">
                        <PersonIcon className="icon"/>
                        <span>+91 7010170109</span>
                    </div>
                    <div className="itemContainer">
                        <MailIcon className="icon"/>
                        <span>armaan4658@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}