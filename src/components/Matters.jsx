import styles from './Matters.module.css'

export default function Matters() {
    return (
        <div className={styles.matters_container}>
            <h2><span className={styles.azul}></span>Arquitetura de Computadores <span className={styles.temas}>(6 temas)</span></h2>
            <h2><span className={styles.vermelho}></span>Desenv. Web em HTML, CSS, Javascript e PHP <span className={styles.temas}>(6 temas)</span></h2>
            <h2><span className={styles.amarelo}></span>Introdução á Segurança da Informação <span className={styles.temas}>(6 temas)</span></h2>
            <h2><span className={styles.verde}></span>Paradigmas de Linguagens de Programação em Python <span className={styles.temas}>(5 temas)</span></h2>
            <h2><span className={styles.roxo}></span>Pensamento Computacional <span className={styles.temas}>(6 temas)</span></h2>
            <h2><span className={styles.rosa}></span>Início das Provas/Término das Provas (AV)</h2>
            <h2><span className={styles.cinza}></span>Início das Provas/Término das Provas (AVS)</h2>
        </div>
    )
}