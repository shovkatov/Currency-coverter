import { AppBar, Box, Button, ButtonGroup, Toolbar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Header = () => {
   const navigate = useNavigate()
   return (
      <Box sx={{ flexGrow: 1 }}>
         <AppBar position="static" color="primary">
            <Toolbar>
               <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                  CURRENCY CONVERTER
               </Typography>
               <ButtonGroup color="warning" variant="contained" aria-label="outlined button group">
                  <Button onClick={()=>navigate('/')}>Home</Button>
                  <Button onClick={()=>navigate('/history')}>History</Button>
               </ButtonGroup>
            </Toolbar>
         </AppBar>
      </Box>
   );
};

export default Header;
