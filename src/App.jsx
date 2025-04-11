// App.jsx
import { Routes, Route } from 'react-router-dom';
import RegistrationForm from './main/RegistrationForm';
import Home from './main/home';
import Step1_Personal from './main/Step1_Personal';
import Step2_Team from './main/Step2_Team';
import Step3_Idea from './main/Step3_Idea';
import Step4_Payment from './main/Step4_Payment';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} /> 
      <Route path="/main" element={<Home />} />
      <Route path="/register" element={<RegistrationForm />} />
      <Route path="/step1_personal" element={<Step1_Personal />} />
      <Route path="/step2_team" element={<Step2_Team />} />
      <Route path="/step3_idea" element={<Step3_Idea />} />
      <Route path="/step4_payment" element={<Step4_Payment />} />
    </Routes>
  );
}

export default App;
