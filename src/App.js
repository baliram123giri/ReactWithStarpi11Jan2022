
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Form from './components/Form';
import Student from './components/Student';

function App() {
  return (
     <BrowserRouter>
         <Header />
          <div className="container my-5">
          <Routes>
           <Route path="/addstudent" element={<Form />} />
           <Route exact path="/"  element={< Student/>} />
         </Routes>
          </div>
     </BrowserRouter>
  )
}

export default App;
