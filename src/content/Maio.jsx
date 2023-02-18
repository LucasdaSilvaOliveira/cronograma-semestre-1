import Buttons from '../buttons/Buttons'
import styles from '../components/Calendar.module.css'

export default function Maio() {
    return (
        <>
            <Buttons setLinkPrev='/abril' setLinkNext='/junho' />
            <table className={styles.calendar_container}>
                <caption>Maio - 2023</caption>
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
                        <td className={styles.day_disabled}>30</td>
                        <td className={styles.verde}>1</td>
                        <td className={styles.verde}>2</td>
                        <td className={styles.verde}>3</td>
                        <td className={styles.verde}>4</td>
                        <td className={styles.roxo}>5</td>
                        <td className={styles.roxo}>6</td>
                    </tr>
                    <tr>
                        <td className={styles.roxo}>7</td>
                        <td className={styles.roxo}>8</td>
                        <td className={styles.roxo}>9</td>
                        <td className={styles.roxo}>10</td>
                        <td className={styles.roxo}>11</td>
                        <td className={styles.roxo}>12</td>
                        <td className={styles.roxo}>13</td>
                    </tr>
                    <tr>
                        <td className={styles.roxo}>14</td>
                        <td className={styles.roxo}>15</td>
                        <td className={styles.roxo}>16</td>
                        <td className={styles.roxo}>17</td>
                        <td className={styles.roxo}>18</td>
                        <td className={styles.roxo}>19</td>
                        <td className={styles.roxo}>20</td>
                    </tr>
                    <tr>
                        <td className={styles.roxo}>21</td>
                        <td className={styles.roxo}>22</td>
                        <td>23</td>
                        <td>24</td>
                        <td>25</td>
                        <td>26</td>
                        <td>27</td>
                    </tr>
                    <tr>
                        <td>28</td>
                        <td>29</td>
                        <td>30</td>
                        <td>31</td>
                        <td className={styles.day_disabled}>1</td>
                        <td className={styles.day_disabled}>2</td>
                        <td className={styles.day_disabled}>3</td>
                    </tr>
                    <tr>
                        <td className={styles.day_disabled}>4</td>
                        <td className={styles.day_disabled}>5</td>
                        <td className={styles.day_disabled}>6</td>
                        <td className={styles.day_disabled}>7</td>
                        <td className={styles.day_disabled}>8</td>
                        <td className={styles.day_disabled}>9</td>
                        <td className={styles.day_disabled}>10</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}