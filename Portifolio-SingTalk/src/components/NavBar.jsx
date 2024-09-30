import { Link } from "react-router-dom"
import style from './css/NavBarStyle.module.css'
const NavBar = () =>{
    return(
        <div className={style.container}>
            <div className={style.tituo}>
                <h1><strong>Sing-Talk</strong></h1>
            </div>
            <div>   
                <nav className={style.navbar}>
                    <ul className={style.ul}>
                        <li className={style.li}>
                            <Link className={style.link} to='/'> Home</Link>
                        </li>
                        <li className={style.li}>
                            <Link className={style.link} to='/about'>Sobre</Link>
                        </li>

                        <li className={style.li}>
                            <Link className={style.link} to='/content'>Telas</Link>
                        </li>
                    </ul>
                </nav>
            </div>
           
        </div>
     
    )
}

export default NavBar
