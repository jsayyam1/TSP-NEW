import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';
import { Box, Stack } from '@mui/material';
import './App.css';
import Navbar from './Components/Navbar';
import OurTeam from './Components/OurTeam';
import Contact from './Components/Contact';
import DragonTalksPage from './Components/DragonTalks';
import MarketSavvyPage from './Components/MarketSavvy';
import Payments from './Components/Payments';
import StockGyrationsPage from './Components/StockGyrations';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Footer from './Components/Footer';

// Replace 'Measurement_Id' with your actual Measurement ID
ReactGA.initialize('G-HLTBP4WRFD');

function App() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  return (
    <>
      <Box>
        <Stack direction={'column'} spacing={5}>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/OurTeam" element={<OurTeam />} />
            <Route path="/DragonTalksPage" element={<DragonTalksPage />} />
            <Route path="/StockGyrationsPage" element={<StockGyrationsPage />} />
            <Route path="/MarketSavvyPage" element={<MarketSavvyPage />} />
            <Route path="/Payments" element={<Payments />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </Stack>
        <Footer/>
{/* 
        <Stack direction={'column'} spacing={5}>
          <Routes>
            
            
          </Routes>
        </Stack> */}
      </Box>
    </>
  );
}

export default App;
