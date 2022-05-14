import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{backgroundColor: '3029FF'}}>
        <Toolbar disableGutters={true} sx={{paddingLeft: 2}}>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1, }}>
            <Button href = "/" sx={{color: '#fff', fontWeight: 'bold', fontSize: '1.8rem' }}>Connect</Button>
          </Typography>
          <Button href= "/contribute" sx={{color: '#fff', marginRight: '1rem',fontSize: '0.9rem'}} >Contribute</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
