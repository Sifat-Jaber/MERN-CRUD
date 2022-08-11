import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import StudentList from './components/StudentList';
import NavBar from './components/NavBar';
import CreateStudent from './components/CreateStudent';


function App() {

  return (
    
    <BrowserRouter>

      <div>

          <NavBar />

      </div>

      <Routes>

        <Route path="/" element={<StudentList />} />

        <Route path={"/create-student"} element={<CreateStudent />} />

      </Routes>

      
    </BrowserRouter>
  );
}

export default App;
