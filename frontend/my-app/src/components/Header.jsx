import React from "react";
import { useState } from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

function Header() {

  const [isDoorClosed, setIsDoorClosed] = useState(false);

  const toggleDoor = () => {
    setIsDoorClosed(prevState => !prevState);
  }

  return (
    <AppBar 
      position="sticky" 
      sx={{ backgroundColor: 'white', boxShadow: 'none', borderBottom: '1px solid #D3D3D3'}} 
    >
      <Toolbar sx={{ '@media (min-width:0px)': {
        paddingLeft: 0,  
        paddingRight: "24px",
      }}}>
        <Button onClick={toggleDoor}>
          <img 
            src={isDoorClosed ? './assets/freeroomsDoorClosed.png' : './assets/freeRoomsLogo.png'} 
            alt="Logo" 
            style={{ width: 40, height: 40 }} 
          />
        </Button>

        
        <Typography variant="h6" sx={{ flexGrow: 1, color: '#ef7022' }}>
          Freerooms
        </Typography>
        
        <Button color="inherit" sx={{ color: '#ef7022', border: '1px solid #ef7022', marginRight: '5px', minWidth: "0px"}}>
          <img 
              src="/search.svg" 
              alt="Search Icon" 
              style={{ width: 24, height: 24 }} 
          ></img>
        </Button>

        <Button color="inherit" sx={{ color: '#ef7022', border: '1px solid #ef7022', backgroundColor: '#ef7022', marginRight: '5px', minWidth: "0px"}}>
          <img 
              src="/grid.svg" 
              alt="grid Icon" 
              style={{ width: 24, height: 24 }} 
          ></img>
        </Button>

        <Button color="inherit" sx={{ color: '#ef7022', border: '1px solid #ef7022', marginRight: '5px', minWidth: "0px"}}>
          <img 
              src="/map.svg" 
              alt="map Icon" 
              style={{ width: 24, height: 24 }} 
          ></img>
        </Button>

        <Button color="inherit" sx={{ color: '#ef7022', border: '1px solid #ef7022', minWidth: "0px"}}>
          <img 
              src="/moon.svg" 
              alt="moon Icon" 
              style={{ width: 24, height: 24 }} 
          ></img>
        </Button>

      </Toolbar>
    </AppBar>
  );
}

export default Header;
