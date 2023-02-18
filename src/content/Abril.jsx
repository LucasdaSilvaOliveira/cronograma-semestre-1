import Buttons from '../buttons/Buttons'
import styles from '../components/Calendar.module.css'

export default function Abril() {
    return (
        <>
            <Buttons setLinkPrev='/março' setLinkNext='/maio'/>
            <table className={styles.calendar_container}>
                <caption>Abril - 2023</caption>
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
                        <td className={styles.day_disabled}>29</td>
                        <td className={styles.day_disabled}>30</td>
                        <td className={styles.day_disabled}>31</td>
                        <td className={styles.amarelo}>1</td>
                    </tr>
                    <tr>
                        <td className={styles.amarelo}>2</td>
                        <td className={styles.amarelo}>3</td>
                        <td className={styles.amarelo}>4</td>
                        <td className={styles.amarelo}>5</td>
                        <td className={styles.amarelo}>6</td>
                        <td className={styles.amarelo}>7</td>
                        <td className={styles.amarelo}>8</td>
                    </tr>
                    <tr>
                        <td className={styles.amarelo}>9</td>
                        <td className={styles.amarelo}>10</td>
                        <td className={styles.amarelo}>11</td>
                        <td className={styles.amarelo}>12</td>
                        <td className={styles.amarelo}>13</td>
                        <td className={styles.amarelo}>14</td>
                        <td className={styles.amarelo}>15</td>
                    </tr>
                    <tr>
                        <td className={styles.amarelo}>16</td>
                        <td className={styles.verde}>17</td>
                        <td className={styles.verde}>18</td>
                        <td className={styles.verde}>19</td>
                        <td className={styles.verde}>20</td>
                        <td className={styles.verde}>21</td>
                        <td className={styles.verde}>22</td>
                    </tr>
                    <tr>
                        <td className={styles.verde}>23</td>
                        <td className={styles.verde}>24</td>
                        <td className={styles.verde}>25</td>
                        <td className={styles.verde}>26</td>
                        <td className={styles.verde}>27</td>
                        <td className={styles.verde}>28</td>
                        <td className={styles.verde}>29</td>
                    </tr>
                    <tr>
                        <td className={styles.verde}>30</td>
                        <td className={styles.day_disabled}>1</td>
                        <td className={styles.day_disabled}>2</td>
                        <td className={styles.day_disabled}>3</td>
                        <td className={styles.day_disabled}>4</td>
                        <td className={styles.day_disabled}>5</td>
                        <td className={styles.day_disabled}>6</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}