import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import ResponsiveTable from 'components/responsivetable';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Button from '@mui/material/Button';
import {  useRouter } from 'next/router';
import AdminHeader from 'components/adminheader';
import { Checkbox, CircularProgress, Drawer, IconButton } from '@mui/material';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { axiosInstance } from '@/pages/_app';
import { FilterAlt } from '@mui/icons-material';
import Filter from '@/components/bookingfilter';
import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;

export default function Bookings() {
  const router = useRouter();
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({
    bookingStatus: '',
    paymentStatus: '',
    vendorId: '',
    dateRange: null,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('api/bookings/booking');
        const data = response.data;
        setBookings(data);
        setFilteredBookings(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching bookings:', error);
        setLoading(false);
        alert('Error fetching bookings');
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [filters]);

  const handleSearch = (requestString) => {
    setSearch(requestString);
    if (requestString !== null || requestString !== undefined) {
      const filteredData = bookings.filter((booking) =>
        booking.customer_name?.toLowerCase().includes(requestString.toLowerCase())
      );
      setFilteredBookings(filteredData);
    } else {
      setFilteredBookings(bookings);
    }
  };

  const applyFilters = () => {
    let filteredData = bookings;

    if (filters.bookingStatus) {
      filteredData = filteredData.filter((booking) => booking.booking_status === filters.bookingStatus);
    }

    if (filters.paymentStatus) {
      filteredData = filteredData.filter((booking) => booking.payment_status === filters.paymentStatus);
    }

    if (filters.vendorId) {
      filteredData = filteredData.filter((booking) => booking.vendor_id === filters.vendorId);
    }

    if (filters.dateRange) {
      filteredData = filteredData.filter(
        (booking) =>
          new Date(booking.created_at) >= filters.dateRange[0] && new Date(booking.created_at) <= filters.dateRange[1]
      );
    }

    setFilteredBookings(filteredData);
  };

  const handleClearFilters = () => {
    setFilters({
      bookingStatus: '',
      paymentStatus: '',
      vendorId: '',
      dateRange: null,
    });
  };

  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

  const toggleFilterDrawer = () => {
    setIsFilterDrawerOpen(!isFilterDrawerOpen);
  };

  const columnHeadersMap = {
    id: 'ID',
    customer_name: 'Customer Name',
    customer_contact_number: 'Contact Number',
    customer_email: 'Email',
    trip_id: 'Trip ID',
    vendor_id: 'Vendor ID',
    trip_type: 'Trip Type',
    pickup_address: 'Pickup Address',
    drop_address: 'Drop Address',
    pickup_date: 'Pickup Date',
    return_date: 'Return Date',
    pickup_time: 'Pickup Time',
    booking_status: 'Booking Status',
    payment_status: 'Payment Status',
    payment_method: 'Payment Method',
    total_distance_km: 'Total Distance (km)',
    customer_address: 'Customer Address',
    created_at: 'Created At',
    updated_at: 'Updated At',
  };
  
  const headers = bookings.length > 0 ? Object.keys(bookings[0]).map((key) => {
    return { key, value: columnHeadersMap[key] || key }
  }) : [];

  async function deleteUser(id)
  {
    let result = await axiosInstance.delete(`api/bookings/booking?id=${id}`)
    .then((response) => {
      // Handle successful response
      console.log(response.data);
      router.replace('/admin/bookings');
    })
      console.log('response', result)
  }

  const handleEditClick = (row) => {
    router.push(`/admin/edit-booking/${row?.id}?tripType=${row?.trip_type}`);
  };



  return (
    <>
    <Box sx={{ display: 'flex' }}>
      <AdminHeader />
      <div className='pt-3  px-0 sm:px-0 md:px-0 lg:px-5 xl:px-5 castomRight w-full overflow-hidden'>
        <Grid container>
          <Grid item xs={12}>
            <div className='bg-[#ecf2ff] m-5 p-7 rounded-2xl'>
              <h1 className='text-xl font-extrabold text-[#34609d] '>Bookings</h1>
              <p className='py-2 font-semibold text-xs text-[#34609d]'>
                Home <FiberManualRecordIcon className='text-sm px-1' /> Bookings
              </p>
            </div>
          </Grid>
          <Grid xs={12} className='py-2 px-5'>
            <div className='block sm:block md:flex lg:flex xl:flex justify-between'>
              <TextField
                value={search}
                onChange={(event) => handleSearch(event.target.value)}
                placeholder='Search by customer name'
                variant='outlined'
                size='small'
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <IconButton className="text-blue-500 hover:text-blue-700" onClick={toggleFilterDrawer}
                               >
               <FilterAlt color='primary'/>
             </IconButton>
            </div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid xs={12} >
            <div className='px-0 py-5 border-[1px] m-6 rounded-lg'>
            <div className='flex justify-between px-5'>
                  <h1 className='text-xl font-extrabold'>Recent Bookings</h1>
                  <RangePicker
                    onChange={(dates) => setFilters({ ...filters, dateRange: dates })}
                    value={filters.dateRange}
                  />
                </div>
            <Drawer anchor="right" open={isFilterDrawerOpen} onClose={toggleFilterDrawer}>
                    <Filter
                       bookingStatus={filters.bookingStatus}
                       paymentStatus={filters.paymentStatus}
                       setFilters={setFilters}
                       open={isFilterDrawerOpen}
                       onClose={toggleFilterDrawer}
                    />
              </Drawer>
              {loading ? (
                  <div className='text-center py-5'>
                    <CircularProgress />
                  </div>
                ) : filteredBookings.length > 0 ? (
                  <ResponsiveTable
                    rows={filteredBookings}
                    headers={headers}
                    onEditClick={(row)=>handleEditClick(row)}
                    onDeleteClick={(row)=>deleteUser(row?.id)}
                  />
                ) : (
                  <div className='bg-[#ebf3fe] text-center m-5 py-5 text-[#6ca8fb]'>
                    <p>
                      <SentimentVeryDissatisfiedIcon />
                    </p>
                    <p className='text-center pt-3 text-xl text-[#6ca8fb]'>No Records Found</p>
                  </div>
                )}
            </div>
          </Grid>
        </Grid>
      </div>
    </Box>
  </>
  
  );
}
