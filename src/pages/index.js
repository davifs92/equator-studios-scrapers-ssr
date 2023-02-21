import './App.module.css';
import ResponsiveAppBar from '../components/Header';
import ScraperList from '../components/ScraperList';
import Container from '@mui/material/Container';


function App() {
  return ( 
  <>
<ResponsiveAppBar />
<Container sx={{pt: 3, pb: 2}}>
<ScraperList />  
</Container>
</>);
}

export default App;
