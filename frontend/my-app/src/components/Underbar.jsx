import React from "react";
import { AppBar, Toolbar, Button, TextField } from "@mui/material";

function Underbar() {
  return (

    <AppBar 
      position="static"
      sx={{ 
        backgroundColor: 'white', 
        boxShadow: 'none', 
        borderBottom: '1px solid #D3D3D3' 
      }} 
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Button color="inherit" sx={{ color: '#ef7022', textTransform: 'none',  border: '1.5px solid #ef7022'}}>
          <img 
            src="/filter.svg" 
            alt="filter Icon" 
            style={{ width: 24, height: 24 }} 
          ></img>
          Filters
        </Button>

        <TextField
          variant="outlined"
          placeholder="Search for a building..."
          sx={{ 
            width: '50%', 
            margin: '10px auto',
            '& .MuiInputBase-input': {
              fontSize: '12px', 
            }
          }}
        />

        <Button color="inherit" sx={{ color: '#ef7022', textTransform: 'none', border: '1.5px solid #ef7022'}}>
          <img 
            src="/list.svg" 
            alt="list Icon" 
            style={{ width: 24, height: 24 }} 
          ></img>
          Sort
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Underbar;
