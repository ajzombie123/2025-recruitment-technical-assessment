import React from "react";
import { Paper, Typography, Box } from "@mui/material";
import buildings from "../Appendix"

function BuildingGrid() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "repeat(1, 1fr)", 
          sm: "repeat(2, 1fr)", 
          md: "repeat(3, 1fr)", 
          lg: "repeat(5, 1fr)", 
        },
        gap: 2,
        padding: "20px",
      }}
    >
      {buildings.map((building, index) => (
        <Paper
          key={index}
          sx={{
            height: { xs: "70px", sm: "150px", md: "200px" }, 
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            borderRadius: "8px",
            boxShadow: 3,
            padding: 2,
          }}
        >
            <img
              src={`./assets/${building.building_picture}`} 
              alt={building.name}
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",  
                height: "100%", 
                objectFit: "cover", 
              }}
            />

          <Typography variant="body2" sx={{ display: "flex", justifyContent: "center", borderRadius: "10px", width: "90%", padding: "5px", backgroundColor: "#ef7022", position: "absolute", color: "white", fontSize: { xs: "10px", md: "14px" }, bottom: "10px" }}>
            {building.name}
          </Typography>
          <Typography variant="body2" sx={{ display:"flex", gap: "5px", alignItems: "center", padding: "5px", position: "absolute", top: "10px", right: "10px", borderRadius: "10px", backgroundColor: "white"}}>
            <img 
              src="/green.svg" 
              alt="green Icon" 
              style={{ width: 10, height: 10 }} 
            ></img>
            {building.rooms_available} rooms available
          </Typography>
        </Paper>
      ))}
    </Box>
  );
}

export default BuildingGrid;
