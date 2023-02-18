import Buttons from '../buttons/Buttons'
import styles from '../components/Calendar.module.css'

export default function Fevereiro() {
    return (
        <>
        <Buttons setLinkPrev='/' setLinkNext='/março' />
            <table className={styles.calendar_container}>
                <caption>Fevereiro - 2023</caption>
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
                        <td className={styles.day_disabled}>29</td>
                        <td className={styles.day_disabled}>30</td>
                        <td className={styles.day_disabled}>31</td>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                        <td>8</td>
                        <td>9</td>
                        <td>10</td>
                        <td>11</td>
                    </tr>
                    <tr>
                        <td>12</td>
                        <td>13</td>
                        <td>14</td>
                        <td>15</td>
                        <td>16</td>
                        <td>17</td>
                        <td>18</td>
                    </tr>
                    <tr>
                        <td>19</td>
                        <td>20</td>
                        <td>21</td>
                        <td className={styles.azul}>22</td>
                        <td className={styles.azul}>23</td>
                        <td className={styles.azul}>24</td>
                        <td className={styles.azul}>25</td>
                    </tr>
                    <tr>
                        <td className={styles.azul}>26</td>
                        <td className={styles.azul}>27</td>
                        <td className={styles.azul}>28</td>
                        <td className={styles.day_disabled}>1</td>
                        <td className={styles.day_disabled}>2</td>
                        <td className={styles.day_disabled}>3</td>
                        <td className={styles.day_disabled}>4</td>
                    </tr>
                    <tr>
                        <td className={styles.day_disabled}>5</td>
                        <td className={styles.day_disabled}>6</td>
                        <td className={styles.day_disabled}>7</td>
                        <td className={styles.day_disabled}>8</td>
                        <td className={styles.day_disabled}>9</td>
                        <td className={styles.day_disabled}>10</td>
                        <td className={styles.day_disabled}>11</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}