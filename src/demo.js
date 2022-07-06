import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import insta from './images/insta.png';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar  position="static"  style={{ background: 'transparent', boxShadow: 'none'}}  >
        <Toolbar >
         
          <Typography style={{textAlignVertical: "center",textAlign: "center",fontWeight: 'bold', color:'white'}} variant="h2" component="div" sx={{ flexGrow: 1 }}>
          <img  src={insta}    alt="cur"

    style={{ alignSelf: 'center' }} height="60" width="60"  />
       <br/>  Social Media
          </Typography>
     
        </Toolbar>
      </AppBar>
    </Box>
  );
}