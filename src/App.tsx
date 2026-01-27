import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import './App.css';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Lessons from './pages/Lessons';
import Roleplay from './pages/Roleplay';
import Immersion from './pages/Immersion';
import CommuteMode from './pages/CommuteMode';
import Translator from './pages/Translator';
import Profile from './pages/Profile';
import LanguageSelection from './pages/LanguageSelection';
import AITutor from './pages/AITutor';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="app">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
            <Route path="/language-selection" element={<LanguageSelection />} />
            <Route path="/lessons" element={<Lessons />} />
            <Route path="/ai-tutor" element={<AITutor />} />
            <Route path="/roleplay" element={<Roleplay />} />
            <Route path="/immersion" element={<Immersion />} />
            <Route path="/commute" element={<CommuteMode />} />
            <Route path="/translator" element={<Translator />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;



