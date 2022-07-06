import React, {useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';

import { useDispatch } from 'react-redux';

import {getPosts} from './actions/posts'
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import insta from './images/insta.png';
import useStyles from './styles';
import { StyledEngineProvider } from '@mui/material/styles';
import Demo from './demo';

const App = () => {
    const [currentId,setCurrentId]=useState(null);
  const classes = useStyles();
 const dispatch=useDispatch();

 useEffect(()=>{
    dispatch(getPosts());
 },[currentId,dispatch]);

return(
    <Container maxWidth="lg" >
        <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <Demo />
    </StyledEngineProvider>
  </React.StrictMode>
    <Grow in>
        <Container> 
            <Grid container justify="space-between" alignItems="stretch" spacing={3} >
                <Grid item xs={12} sm={4}> 
                <Form currentId={currentId}  setCurrentId={setCurrentId}/>
                </Grid>

                <Grid item xs={12} sm={8}> 
                  <Posts setCurrentId={setCurrentId}/>
                </Grid>
            </Grid>
        </Container>
    </Grow>
    </Container>
);
};

export default App