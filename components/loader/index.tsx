import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import { styled } from '@mui/system';
import loader from '../loader/loader.module.css'

const StyledBackdrop = styled(Backdrop)(({ theme }) => ({
  zIndex: 1000,
  background: '#FFF',
  opacity: 0.5,
}));

const Loader = ({ isLoading }) => {

  if (!isLoading) {
    return null; // Render nothing if isLoading is false
  }

  return (
    <div className={loader.circleLoader}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <p className="font-bold text-center">Loading</p>
  </div>
  );
};

export default Loader;
