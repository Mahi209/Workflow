import { Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/loginPage';
import Dashboard from './components/Dashboard';
import Employee from './components/Employee';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/register" element={<Register />} />
        <Route path={["/", "/login"]} element={<Login />} />

      </Routes>
    </div>
  );
}

export default App;
