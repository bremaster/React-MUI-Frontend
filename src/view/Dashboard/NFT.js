import React, { useEffect } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function NFT() {
  return (
    <Box sx={{backgroundImage: 'url(/assets/BG_Hatchling.png)'}}>
      <Typography
        color="#FFCB44"
        sx={{pt: 5, fontSize: {md: '80px', sm: '60px', xs: '30px'}, fontWeight: 800}}
        textAlign="center"
      >
        <span style={{color: '#FFF'}}>Hatch your Custom </span>NFT
      </Typography>
      <Typography
        color="#FFF"
        sx={{pt: 3, px: {md: 10, sm: 7, xs: 3}, fontSize: {md: '18px', sm: '15px', xs: '12px'}, fontWeight: 800}}
        textAlign="center"
      >
        Pssst.. before you wake it up, keep in mind that regardless of what type of purpose the hatchling has.. <br/> it will always have a place in its heart for it’s original owner. 
      </Typography>
      <Stack justifyContent="center" alignItems="center">
        <Box
          component="img"
          src="/assets/Design/HatchlingAsset .png"
          sx={{mt: 5, maxWidth: '360px', width: '80%'}}
        />

        <Button>
          <Box
            component="img"
            src="/assets/Generate_Button.png"
            sx={{mt: 5, maxWidth: '260px', width: '80%'}}
          />
        </Button>
      </Stack>
       
      <Typography
        color="#FFF"
        sx={{pt: 5, fontSize: {md: '18px', sm: '15px', xs: '12px'}, fontWeight: 800}}
        variant="h5" component="h5"
        textAlign="center"
      >
        <span style={{color: '#FFCB44'}}>20% </span>value of the NFT will belong to you, forever
      </Typography>

      <Box sx={{mt: 3, display: 'flex', justifyContent: 'center'}}>
        <Typography
          color="#9f7926"
          textAlign="center"
          backgroundColor="#dfbd7f"
          sx={{mb: 2, px: {md: 10, sm: 7, xs: 3}, py: 1, fontSize: {md: '15px', sm: '12px', xs: '8px'}, borderRadius: 3, fontWeight: 600}}
        >
          If this buttons is unavailable, you first need to login with MetaMask and you are all set.<br/>MetaMask plug-in can be found at the menu bar
        </Typography>
      </Box>
  	</Box>
  );
}
