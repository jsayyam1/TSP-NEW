import { Box, Stack, Switch } from '@mui/material';
import './App.css';
import Navbar from './Components/Navbar';
import Section from './Components/Section';
import Services from './Components/Services';
import Footer from './Components/Footer';
import OurTeam from './Components/OurTeam';
import Contact from './Components/Contact';
import DragonTalksPage from './Components/DragonTalks';
import MarketSavvyPage from './Components/MarketSavvy';
import StockGyrationsPage from './Components/StockGyrations';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function App() {
  return (
   <>
   <Box>

    <Navbar/>
    
    <Stack direction={'column'} spacing={5}>

      <Routes>
      <Route exact path="/" element= {<Services/>} />
      </Routes>

    </Stack>

    <Routes>

          <Route path="/OurTeam" element= {<OurTeam/>} />
          <Route path="/DragonTalksPage" element= {<DragonTalksPage/>} />
          <Route path="/StockGyrationsPage" element= {<StockGyrationsPage/>} />
          <Route path="/MarketSavvyPage" element= {<MarketSavvyPage/>}  />
          <Route path="/Contact" element= {<Contact/>}  />
      
    </Routes>

   </Box>
   </>
  );
}

export default App;
