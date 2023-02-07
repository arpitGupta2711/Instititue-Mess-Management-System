import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import useStyles from './styles'
import { Menu ,MenuItem} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{ backgroundColor:'white' }}>
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,color:'black' ,fontWeight:'600',letterSpacing:'2px'}}>
            IMMS
          </Typography>
            {/* <Menu open>  

<MenuItem> */}
<Button variant="contained"  sx={{margin:'10px' }}>Admin</Button>
            <Button variant="contained" sx={{margin:'10px'}}>
                <AccountCircleIcon/>
            </Button>
            <Button variant="contained" sx={{margin:'10px', backgroundColor:'black' }}>Login</Button>
            <Button variant="contained" sx={{ backgroundColor:'black' }}>SignUp</Button>
            {/* </MenuItem>
            </Menu> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
