import { Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/loginPage';
import Dashboard from './components/Dashboard';
import Employee from './components/Employee';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path={["/", "/login"]} element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/employee"
          element={
            <ProtectedRoute>
              <Employee />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
