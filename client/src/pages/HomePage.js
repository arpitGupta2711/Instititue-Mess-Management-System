import React from 'react'
import {Typography,Stack,Button} from '@mui/material'
import Navbar from '../components/Navbar/Navbar'
import { manageHomePageNavbar } from '../features/manageNavSlice';
import { useDispatch } from 'react-redux';

const HomePage = () => {

  const dispatch = useDispatch();
  dispatch(manageHomePageNavbar())
  return (
    <>
    <Navbar></Navbar>
    </>

  )
}

export default HomePage