import './menu.scss';
export const Menu = ({menuOpen,setMenuOpen}) => {
    const closeMenu = () => {
        setMenuOpen(false);
    }
    return(
        <div className={menuOpen? "menu active" : "menu"}>
            <ul>
                <li onClick={closeMenu}>
                    <a href="#into">Home</a>
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
            </ul>
        </div>
    )
}