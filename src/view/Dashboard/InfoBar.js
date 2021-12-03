import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

export default function Banner() {
  return (
  	<Grid container sx={{minHeight: '163px', mt: {md: 5, xs: 5}}} textAlign="center" backgroundColor='#FFCB44'>
		  <Grid item xs={4} sx={{borderRight: {md: '1px solid black', xs: 0} }}>
        <Box display="inline-flex" sx={{height: '100%'}}>
          <Stack alignItems="center" justifyContent="center">
            <Typography
              variant="h4" component="h4"
              sx={{fontSize: {md: '40px', xs: '15px'} }}
            >
              Art & Tech
            </Typography>

            <Typography
              sx={{fontSize: {md: '15px', xs: '10px'}, mt: '20px', px: {md: 5, xs: 2} }}
            >
              Over 5000 attributes run trough the genes in this Hive, resulting in a spectrum of unique characteristics with each Bee
            </Typography>
          </Stack>
        </Box>
		  </Grid>
		  <Grid item xs={4} sx={{borderRight: {md: '1px solid black', xs: 0} }}>
        <Box display="inline-flex" sx={{height: '100%'}}>
  		    <Stack alignItems="center" justifyContent="center">
            <Typography
              variant="h4" component="h4"
              sx={{fontSize: {md: '40px', xs: '15px'} }}
            >
              1 NFT = 10000 lives
            </Typography>

            <Typography
              sx={{fontSize: {md: '15px', xs: '10px'}, mt: '20px', px: {md: 5, xs: 2} }}
            >
              Our collaboration with BeetheCure - Australia, will ensure that the funds raised from this project will be directly allocated towards improving the life quality of locally produced bees. 
            </Typography>
          </Stack>
        </Box>
		  </Grid>
      <Grid item xs={4}>
        <Box display="inline-flex" sx={{height: '100%'}}>
          <Stack alignItems="center" justifyContent="center">
            <Typography
              variant="h4" component="h4"
              sx={{fontSize: {md: '40px', xs: '15px'} }}
            >
              Exclusive User Benefits
            </Typography>

            <Typography
              sx={{fontSize: {md: '15px', xs: '10px'}, mt: '20px', px: {md: 5, xs: 2} }}
            >
              With Generating an NFT, the original owner will retain 10% of each upcoming trade, forever .
            </Typography>
          </Stack>
        </Box>
      </Grid>
		</Grid>
  );
}
