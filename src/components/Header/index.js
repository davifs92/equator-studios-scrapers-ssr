import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';


function ResponsiveAppBar() {

   
  return (
    <AppBar position="static" color="primary" enableColorOnDark>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="img"
            sx={{
            height: 64,
            }}
            alt="Your logo."
            src="/logo.png"
        />

         
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;