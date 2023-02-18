import { Link } from "react-router-dom"
import styles from './Buttons.module.css'

export default function Buttons({setLinkPrev, setLinkNext}) {
    return (
        <>
            <div className={styles.buttons_container}>
                <Link to={setLinkPrev}>Voltar</Link>
                <Link to={setLinkNext}>Avançar</Link>
            </div>
            <p className={styles.media}>Média de 1 tema a cada 3 dias. Sobrando 15 dias no final até o término da Prova AV, sobrando tempo para revisar as matérias.</p>
        </>
    )
}