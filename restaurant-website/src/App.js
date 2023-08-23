import './App.css';
import Footer from './Components/Footer';
import { Navbar } from './Components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import MenuPage from './Pages/MenuPage';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>

          <Route
            exact path='/'
            element={<HomePage />}
          />

          <Route
            exact path='/about'
            element={<AboutPage />}
          />

          <Route
            exact path='/contact'
            element={<ContactPage />}
          />

          <Route
            exact path='/menu'
            element={<MenuPage />}
          >
          </Route>

        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
