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
                <Route path='/março' element={<Março />}/>
                <Route path='/abril' element={<Abril />}/>
                <Route path='/maio' element={<Maio />}/>
                <Route path='/junho' element={<Junho />}/>
            </Routes>
        </>
    )
}