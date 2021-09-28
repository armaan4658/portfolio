import './menu.scss';
import Link from '@mui/material/Link';
export const Menu = ({menuOpen,setMenuOpen}) => {
    const closeMenu = () => {
        setMenuOpen(false);
    }
    const resume = `https://drive.google.com/file/d/1ZwrDZHeE9YAYxEOsnumJgD83Pvx6H9zn/view?usp=sharing`;
    return(
        <div className={menuOpen? "menu active" : "menu"}>
            <ul>
                <li onClick={closeMenu}>
                    <a href="#into">Home</a>
                </li>
                <li onClick={closeMenu}>
                    <a href="#aboutus">About us</a>
                </li>
                <li onClick={closeMenu}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={closeMenu}>
                    <a href="#skills">Skills </a>
                </li>
                <li onClick={closeMenu}>
                    <a href="#contact">Contact</a>
                </li>
                <li onClick={closeMenu}>
                    <Link onClick={()=>window.open(resume,"_blank")}>Resume</Link>
                </li>
            </ul>
        </div>
    )
}