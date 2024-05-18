import { Route, Routes} from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Plan from './pages/plan/Plan';
import Terms from './pages/terms/Terms';
import Faq from './pages/faq/Faq';
import Sidebar from './components/Sidebar';
import { DataProvider } from './context/DataContext';

import LoginPage from './auth/LoginPage';
import RegisterPage from './auth/RegisterPage';

function App() {
  return (
    <DataProvider>
        <Sidebar />
        <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="about"  element={<About />} />
        <Route path="contact"  element={<Contact />} />
        <Route path="plan"  element={<Plan />} />
        <Route path="terms"  element={<Terms />} />
        <Route path="faq"  element={<Faq />} />
        <Route path="register"  element={<RegisterPage />} />
        <Route path="login"  element={<LoginPage />} />
        </Routes>
    </DataProvider>
  );
}

export default App;
