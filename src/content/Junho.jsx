import Buttons from '../buttons/Buttons'
import styles from '../components/Calendar.module.css'

export default function Junho() {
    return (
        <>
            <Buttons setLinkPrev='/maio' setLinkNext='/junho' />
            <table className={styles.calendar_container}>
                <caption>Junho - 2023</caption>
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
                        <td className={styles.day_disabled}>28</td>
                        <td className={styles.day_disabled}>29</td>
                        <td className={styles.day_disabled}>30</td>
                        <td className={styles.day_disabled}>31</td>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td className={styles.rosa}>7</td>
                        <td>8</td>
                        <td>9</td>
                        <td className={styles.cinza}>10</td>
                    </tr>
                    <tr>
                        <td>11</td>
                        <td>12</td>
                        <td>13</td>
                        <td>14</td>
                        <td>15</td>
                        <td>16</td>
                        <td>17</td>
                    </tr>
                    <tr>
                        <td>18</td>
                        <td>19</td>
                        <td>20</td>
                        <td>21</td>
                        <td>22</td>
                        <td>23</td>
                        <td>24</td>
                    </tr>
                    <tr>
                        <td>25</td>
                        <td className={styles.cinza}>26</td>
                        <td>27</td>
                        <td>28</td>
                        <td>29</td>
                        <td>30</td>
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