import React, { useState, useEffect } from 'react'

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


import './Home.css';


function Home() {
  return (
    <Box sx={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '##ffefba',
      background: '-webkit-linear-gradient(to right, #ffefba, #ffffff)',
      background: 'linear-gradient(to right, #ffefba, #ffffff)'
    }}>

    <Container sx={{
      width: '140rem',
      height: '36rem',
      maxHeight: '34rem',
      borderRadius: '10px',
      py: 4,
      fontSize: '18px',
      backgroundColor: 'white',
      display: 'flex',
      flexDirection: 'column',
      mt: 6,
      boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
    }}>

      <h3>Bem-vindo(a) à nossa aplicação gerenciadora de biblioteca! </h3>
         
    </Container>

    </Box>
    );
}

export default Home;
