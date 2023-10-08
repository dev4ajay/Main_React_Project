import React from 'react';
import { Drawer, FormControl, InputLabel, MenuItem, Select, Button, Typography, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';

const StyledDrawer = styled(Drawer)({
  '& .MuiDrawer-paper': {
    width: '320px',
    padding: '20px',
  },
});

const Filter = ({ bookingStatus, paymentStatus, setFilters, open, onClose }) => {
  const handleBookingStatusChange = (event) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      bookingStatus: event.target.value,
    }));
  };

  const handlePaymentStatusChange = (event) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      paymentStatus: event.target.value,
    }));
  };

  const handleVendorIdChange = (event) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      vendorId: event.target.value,
    }));
  };

  const handleClearFilters = () => {
    setFilters({
      bookingStatus: '',
      paymentStatus: '',
      vendorId: '',
    });
  };

  return (
    <StyledDrawer anchor="right" open={open} onClose={onClose}>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <Typography variant="h6" style={{ fontWeight: 'bold', color: '#333', letterSpacing: '0.5px' }}>
            Filters
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <FormControl fullWidth sx={{ marginBottom: '16px' }}>
          <InputLabel id='booking-status-label'>Booking Status</InputLabel>
          <Select
            labelId='booking-status-label'
            id='booking-status'
            value={bookingStatus}
            onChange={handleBookingStatusChange}
          >
            <MenuItem value=''>All</MenuItem>
            <MenuItem value='confirmed'>Confirmed</MenuItem>
            <MenuItem value='pending'>Pending</MenuItem>
            <MenuItem value='cancelled'>Cancelled</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: '16px' }}>
          <InputLabel id='payment-status-label'>Payment Status</InputLabel>
          <Select
            labelId='payment-status-label'
            id='payment-status'
            value={paymentStatus}
            onChange={handlePaymentStatusChange}
          >
            <MenuItem value=''>All</MenuItem>
            <MenuItem value='paid'>Paid</MenuItem>
            <MenuItem value='pending'>Pending</MenuItem>
            <MenuItem value='cancelled'>Cancelled</MenuItem>
          </Select>
        </FormControl>
        
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant="outlined" color="primary" onClick={handleClearFilters}>
            Clear Filters
          </Button>
        </div>
      </div>
    </StyledDrawer>
  );
};

export default Filter;
