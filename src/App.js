import { Box, Stack } from '@mui/material';
import './App.css';
import Navbar from './Components/Navbar';
import Section from './Components/Section';
import Services from './Components/Services';

function App() {
  return (
   <>
   <Box>

    <Navbar/>
    
    <Stack direction={'column'} spacing={35}>
        <Section/>
        <Services/>
    </Stack>

   </Box>
   </>
  );
}

export default App;
