import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';


function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                </Routes>
            </Router>
            <div>
                
            </div>
        </div>
    );
}

export default App;
