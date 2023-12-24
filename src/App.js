import { Box, Stack } from '@mui/material';
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

function App() {
  return (
   <>
   <Box>

    <Navbar/>
    
    {/* <Stack direction={'column'} spacing={5}>
        <Section/>
        <Services/>
        <Footer/>
    </Stack> */}

    {/* <OurTeam/> */}

    {/* <Contact/> */}
    {/* <DragonTalksPage/> */}
    {/* <MarketSavvyPage/> */}
    {/* <StockGyrationsPage/> */}

   </Box>
   </>
  );
}

export default App;
