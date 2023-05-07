import { Link } from "react-router-dom"
import Container from "./Container"
import styles from "./Navbar.module.css"
import logo from "../../img/costs_logo.png"

function Navbar(){
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link>
                    <img src="{}" alt="Cost"/>
                </Link>
                <Link>
                    <ul class={styles.list}>
                        <li className={styles.item}><Link to="/">Home</Link></li>
                        <li className={styles.item}><Link to="/projects">Projects</Link></li>
                        <li className={styles.item}><Link to="/company">Company</Link></li>
                        <li className={styles.item}><Link to="/contact">Contact</Link></li>
                    </ul>
                </Link>
            </Container>
        </nav>
    )
}

export default Navbar