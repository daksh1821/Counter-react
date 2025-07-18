import RefreshIcon from '@mui/icons-material/Refresh';
import { Button } from '@mui/material';
import React from 'react';
import {useState} from 'react';
import './App.css';

function App() {
  const [counter,setCounter] = useState(0);
  const handleclick1 = ()=>{
    setCounter(counter + 1);
    console.log("Incremented Counter:", counter + 1);
  }
  const handleclick2 = ()=>{
    setCounter(counter - 1);
    console.log("Decremented Counter:", counter - 1);
  }
  return (
    <div className="app">
      <div className="container">
        <div className="total_amount_card" style={{backgroundImage:`linear-gradient(to right,rgba(253,230,90,100%),rgba(204,254,87,100%))`}}>
        <div>
          <h2>{counter}</h2>
        </div>
        </div>
        <div className="button_group">
  <Button onClick={handleclick1}
    variant="contained"
    sx={{
      background: 'linear-gradient(to right, #00c6ff, #0072ff)',
      color: 'white',
      fontWeight: 'bold',
      textTransform: 'none',
      borderRadius: '12px',
      paddingX: 3,
      paddingY: 1.5,
      boxShadow: '0px 4px 20px rgba(0, 114, 255, 0.4)',
    }}
  >
    +
  </Button>
  <Button onClick={handleclick2}
    variant="contained"
    sx={{
      background: 'linear-gradient(to right, #00c6ff, #0072ff)',
      color: 'white',
      fontWeight: 'bold',
      textTransform: 'none',
      borderRadius: '12px',
      marginLeft: '30px',
      paddingX: 3,
      paddingY: 1.5,
      boxShadow: '0px 4px 20px rgba(0, 114, 255, 0.4)',
    }}
  >
    -
  </Button>
</div>

        </div>
        <RefreshIcon
    onClick={() => setCounter(0)}
    sx={{
      fontSize: 40,
      color: 'black',
      marginTop: '20px',
      cursor: 'pointer',
      transition: 'transform 0.3s ease-in-out',
      '&:hover': {
        transform: 'rotate(90deg)',
      },
    }}
  />
      </div>
  );
}

export default App;
