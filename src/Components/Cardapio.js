import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import img1 from '../assets/pt1.jpg'
import img2 from '../assets/pt2.jpg'
import img3 from '../assets/back.jpg'



const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: "0",
  textAlign: 'center',
  color: theme.palette.text.secondary,
  marginBottom: "-0.5rem",
  backgroundColor: "#1c1324"
}));

export default function FullWidthGrid() {
  return (
    <Box sx={{ flexGrow: 1 }} style={{backgroundColor: "#2d1f40"}}>
      <Grid>
        <Grid item xs={12} md={8} >
            <Item>
              <img src={img1} style={{width: "100%"}}></img>
            </Item>
        </Grid>
        <Grid item xs={12} md={8} >
          <Item 
          ><img src={img2} style={{width: "100%"}}></img></Item>
        </Grid>
        <Grid item xs={12} md={8} >
          <Item 
          ><img src={img3} style={{width: "100%", marginTop: "1rem", marginBottom:"-5px"}}></img></Item>
        </Grid>
      </Grid>
    </Box>
  );
}
