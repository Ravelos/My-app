import {Link} from 'react-router-dom'
import styles from './Navbar.module.css'
function NavBar(){
    return(
        <ul className={styles.list}>
            <li className={styles.item}>
                <Link to="/">Home</Link>
            </li>
            <li className={styles.item}>
                <Link to="/company">Company
            </Link></li>
            <li className={styles.item}>
                <Link to="/contact">Contact us</Link>
            </li>
        </ul>
    )
}
export default NavBar