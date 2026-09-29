import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Fiszki from './components/fiszki';
import Quiz from './components/quiz';
import Test from './components/test';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        <div className='d-flex justify-content-around p-3'>
          <h1 className='text-center'>Nauka słówek</h1>
          <div>
            <Link to="/fiszki"><button className='btn btn-primary m-2'>Fiszki</button></Link>
            <Link to="/quiz"><button className='btn btn-warning m-2'>Quiz</button></Link>
            <Link to="/test"><button className='btn btn-danger m-2'>Test</button></Link>
          </div>
        </div>

        <Routes>
          <Route path="fiszki" element={<Fiszki />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="test" element={<Test />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
