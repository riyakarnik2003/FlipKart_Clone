

import './App.css';
import Header from './components/header/Header';
import { Box } from '@mui/material';
import Home from './components/home/Home';
import DataProvider from './context/DataProvider';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Details from './components/details/Details';
import Cart from './components/cart/Cart';

function App() {
  return (
   <DataProvider>
    <BrowserRouter>
      <Header/>

      <Box style={{marginTop:54}}>
        
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product/:id' element={<Details/>}/>
      <Route path='/cart' element={<Cart/>}/>
      </Routes>
      </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
