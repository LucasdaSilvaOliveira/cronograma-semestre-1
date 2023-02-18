import Buttons from '../buttons/Buttons'
import styles from '../components/Calendar.module.css'

export default function Março() {
    return (
        <>
            <Buttons setLinkPrev='/' setLinkNext='/abril'/>
            <table className={styles.calendar_container}>
                <caption>Março - 2023</caption>
                <thead>
                    <tr>
                        <th>Dom</th>
                        <th>Seg</th>
                        <th>Ter</th>
                        <th>Qua</th>
                        <th>Qui</th>
                        <th>Sex</th>
                        <th>Sab</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={styles.day_disabled}>26</td>
                        <td className={styles.day_disabled}>27</td>
                        <td className={styles.day_disabled}>28</td>
                        <td className={styles.azul}>1</td>
                        <td className={styles.azul}>2</td>
                        <td className={styles.azul}>3</td>
                        <td className={styles.azul}>4</td>
                    </tr>
                    <tr>
                        <td className={styles.azul}>5</td>
                        <td className={styles.azul}>6</td>
                        <td className={styles.azul}>7</td>
                        <td className={styles.azul}>8</td>
                        <td className={styles.azul}>9</td>
                        <td className={styles.azul}>10</td>
                        <td className={styles.azul}>11</td>
                    </tr>
                    <tr>
                        <td className={styles.vermelho}>12</td>
                        <td className={styles.vermelho}>13</td>
                        <td className={styles.rosa}>14</td>
                        <td className={styles.vermelho}>15</td>
                        <td className={styles.vermelho}>16</td>
                        <td className={styles.vermelho}>17</td>
                        <td className={styles.vermelho}>18</td>
                    </tr>
                    <tr>
                        <td className={styles.vermelho}>19</td>
                        <td className={styles.vermelho}>20</td>
                        <td className={styles.vermelho}>21</td>
                        <td className={styles.vermelho}>22</td>
                        <td className={styles.vermelho}>23</td>
                        <td className={styles.vermelho}>24</td>
                        <td className={styles.vermelho}>25</td>
                    </tr>
                    <tr>
                        <td className={styles.vermelho}>26</td>
                        <td className={styles.vermelho}>27</td>
                        <td className={styles.vermelho}>28</td>
                        <td className={styles.vermelho}>29</td>
                        <td className={styles.amarelo}>30</td>
                        <td className={styles.amarelo}>31</td>
                        <td className={styles.day_disabled}>1</td>
                    </tr>
                    <tr>
                        <td className={styles.day_disabled}>2</td>
                        <td className={styles.day_disabled}>3</td>
                        <td className={styles.day_disabled}>4</td>
                        <td className={styles.day_disabled}>5</td>
                        <td className={styles.day_disabled}>6</td>
                        <td className={styles.day_disabled}>7</td>
                        <td className={styles.day_disabled}>8</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}