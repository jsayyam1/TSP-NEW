import { Box, Stack } from '@mui/material';
import './App.css';
import Navbar from './Components/Navbar';
import Section from './Components/Section';
import Services from './Components/Services';
import Footer from './Components/Footer';

function App() {
  return (
   <>
   <Box>

    <Navbar/>
    
    <Stack direction={'column'} spacing={5}>
        <Section/>
        <Services/>
        <Footer/>
    </Stack>

   </Box>
   </>
  );
}

export default App;
