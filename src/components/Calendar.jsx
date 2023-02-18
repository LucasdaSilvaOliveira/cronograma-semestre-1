import Buttons from '../buttons/Buttons';

import styles from './Calendar.module.css';
import Fevereiro from '../content/Fevereiro';
import Março from '../content/Março';
import Abril from '../content/Abril';
import Maio from '../content/Maio';
import Junho from '../content/Junho';
import { Routes, Route } from 'react-router-dom';

export default function Calendar() {
    return (
        <>
            <Routes>
                <Route exact path='/' element={<Fevereiro />}/>
                <Route exact path='/março' element={<Março />}/>
                <Route exact path='/abril' element={<Abril />}/>
                <Route exact path='/maio' element={<Maio />}/>
                <Route exact path='/junho' element={<Junho />}/>
            </Routes>
        </>
    )
}