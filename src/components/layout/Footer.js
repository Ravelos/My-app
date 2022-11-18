import {FaFacebook, FaLinkedin, FaInstagram} from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer(){
    return (
    <Footer>
        <ul className={styles.social_list}>
            <li><FaFacebook/></li>
            <li><FaLinkedin/></li>
            <li><FaInstagram/></li>
        </ul>
        <p>Our footer</p>
    </Footer>)
}

export default Footer