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
import { Link } from 'react-router-dom';
import { display } from '@mui/system';
import {useSelector,useDispatch} from 'react-redux'



export default function Navbar() {
  
  
  const {Admin,AccountIcon,Login,SignUp,UpdateMenu,UpdateFee} = useSelector((store)=>store.navbar)
  
  // console.log(Admin,AccountIcon,Login,SignUp)

  // const {,Account} = AdminPageButtons
 

  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{ backgroundColor:'white' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,color:'black' ,fontWeight:'700',letterSpacing:'2px'}}>
            IMMS
          </Typography>
            <Button variant="contained"  sx={{margin:'10px' ,display:`${UpdateMenu?'block':'none'}` }}>Update Menu</Button>
            <Button variant="contained"  sx={{margin:'10px' ,display:`${UpdateFee?'block':'none'}`}}>Update Fee</Button>
            <Button variant="contained"  sx={{margin:'10px' ,display:`${Admin?'block':'none'}` }}>Admin</Button>
            <Button variant="contained" sx={{margin:'10px' ,display:`${AccountIcon?'':'none'}`}}>
                <AccountCircleIcon/>
            </Button>
            <Button variant="contained" sx={{margin:'10px', backgroundColor:'black' ,display:`${Login?'block':'none'}`}}><Link to='/login' style={{
              color:'#fff',
              textDecoration:'none'
            }}>Login</Link></Button>
            <Button variant="contained" sx={{ backgroundColor:'black' ,display:`${SignUp?'block':'none'}`}}><Link to='/signup' style={{
              color:'#fff',
              textDecoration:'none'
            }}>Signup</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
