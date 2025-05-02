// App.jsx
import { Routes, Route, Navigate } from 'react-router-dom';
import RegistrationForm from './main/RegistrationForm';
import Home from './main/home';

function App() {
  const registrationDeadline = new Date("2025-05-05T00:00:00");
  const currentDate = new Date();
  const isRegistrationClosed = currentDate > registrationDeadline;
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} /> 
      <Route path="/main" element={<Home />} />
      <Route path="/register" element={isRegistrationClosed ? <Navigate to="/" /> : <RegistrationForm />} />
    </Routes>
  );
}

export default App;
