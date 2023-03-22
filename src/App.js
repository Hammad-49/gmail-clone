import React from 'react';
import './App.css';
import Header from './Header';
import MenuIcon from '@mui/icons-material/Menu';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='header__left'>
          <MenuIcon />
      </div>
      <div className='header__middle'>

      </div>
      <div className='header__right'>

      </div>
    </div>
  );
}

export default App;
