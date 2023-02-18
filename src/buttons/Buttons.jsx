import { Link } from "react-router-dom"
import styles from './Buttons.module.css'

export default function Buttons({setLinkPrev, setLinkNext}) {
    return (
        <div className={styles.buttons_container}>
            <Link to={setLinkPrev}>Voltar</Link>
            <Link to={setLinkNext}>Avançar</Link>
        </div>
    )
}