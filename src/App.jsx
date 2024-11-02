import './App.css'
import Employeedit from './Employeedit'
import { Route, Routes } from 'react-router-dom'
import Emptable from "./Emptable";
import EditEmp from './EditEmp';

function App() {


  return (
<>
<Routes>
<Route path='/' element={<Emptable/>}/>
    <Route path='/Add' element={<Employeedit/>} />  
    <Route path="/Edit/:id" element={<EditEmp/>}/>

   </Routes>
    
</>


)
}

export default App
