import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

export default function Banner() {
  return (
  	<Grid container sx={{minHeight: '163px', mt: {md: 2, xs: 5}}} textAlign="center" backgroundColor='#FFCB44'>
		  <Grid item xs={4} sx={{borderRight: {md: '1px solid black', xs: 0}, py: 3 }}>
        <Box display="inline-flex" sx={{height: '100%'}}>
          <Stack>
            <Typography
              variant="h4" component="h4"
              sx={{height: {xs: '50px', sm: '70px', md: '90px', lg: 'auto'}, fontSize: {md: '40px', xs: '15px'}, fontFamily: 'grilled-cheese-toasted' }}
            >
              Art & Tech
            </Typography>

            <Typography
              sx={{fontSize: {md: '15px', xs: '10px'}, px: {md: 5, xs: 2}, fontFamily: 'somatic-rounded', minHeight: '100px' }}
            >
              Over 5000 attributes run trough the genes in this Hive, resulting in a spectrum of unique characteristics with each Bee
            </Typography>
          </Stack>
        </Box>
		  </Grid>
		  <Grid item xs={4} sx={{borderRight: {md: '1px solid black', xs: 0}, py: 3 }}>
        <Box display="inline-flex" sx={{height: '100%'}}>
  		    <Stack>
            <Typography
              variant="h4" component="h4"
              sx={{height: {xs: '50px', sm: '70px', md: '90px', lg: 'auto'}, fontSize: {md: '40px', xs: '15px'}, fontFamily: 'grilled-cheese-toasted' }}
            >
              1 NFT = 10000 lives
            </Typography>

            <Typography
              sx={{fontSize: {md: '15px', xs: '10px'}, px: {md: 5, xs: 2}, fontFamily: 'somatic-rounded', minHeight: '100px' }}
            >
              Our collaboration with BeetheCure - Australia, will ensure that the funds raised from this project will be directly allocated towards improving the life quality of locally produced bees. 
            </Typography>
          </Stack>
        </Box>
		  </Grid>
      <Grid item xs={4} sx={{py: 3 }}>
        <Box display="inline-flex" sx={{height: '100%'}}>
          <Stack>
            <Typography
              variant="h4" component="h4"
              sx={{height: {xs: '50px', sm: '70px', md: '90px', lg: 'auto'}, fontSize: {md: '40px', xs: '15px'}, fontFamily: 'grilled-cheese-toasted' }}
            >
              Exclusive User Benefits
            </Typography>

            <Typography
              sx={{fontSize: {md: '15px', xs: '10px'}, px: {md: 5, xs: 2}, fontFamily: 'somatic-rounded', minHeight: '100px' }}
            >
              With Generating an NFT, the original owner will retain 10% of each upcoming trade, forever .
            </Typography>
          </Stack>
        </Box>
      </Grid>
		</Grid>
  );
}
