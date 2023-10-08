import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import ResponsiveTabel from 'components/responsivetable'
import { DatePicker } from 'antd';
import Filter from 'components/bookingfilter';
import AdminHeader from 'components/adminheader';
import Image from 'next/image'
import Avtar from '../../../public/avtar.jpg'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
const { RangePicker } = DatePicker;
import { axiosInstance } from '@/pages/_app';
import { Drawer, IconButton } from '@mui/material';
import FilterAlt from '@mui/icons-material/FilterAlt';
import router from 'next/router';



export default function AdminHome() {
    const [bookings, setBookings] = useState([]);
    const [allTrips, setAllTrips] = useState([]);
    const [allCars, setAllCars] = useState([]);
    const [filteredBookings, setFilteredBookings] = useState([]);
    const [search, setSearch] = useState('');
    const [filters, setFilters] = useState({
      bookingStatus: '',
      paymentStatus: '',
      vendorId: '',
      dateRange: null,
    });
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axiosInstance.get('api/bookings/booking');
          const data = response.data;
          setBookings(data);
          console.log("booking", data)
          setFilteredBookings(data)
        } catch (error) {
          console.error('Error fetching bookings:', error);
        }
      };

      const fetchTrips = async () => {
        try {
          const response = await axiosInstance.get('api/trips/trip');
          const data = response.data;
          setAllTrips(data);
        } catch (error) {
          console.error('Error fetching bookings:', error);
        }
      };

      const fetchCars = async () => {
        try {
          const response = await axiosInstance.get('api/cars/car');
          const data = response.data;
          setAllCars(data);
        } catch (error) {
          console.error('Error fetching bookings:', error);
        }
      };
  
      fetchData();
      fetchTrips();
      fetchCars();
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
          router.replace('/admin/home');
        })
      }
      

      const handleEditClick = (row) => {
        router.push(`/admin/edit-recent-booking/${row?.id}?tripType=${row?.trip_type}`);
      };
    

    return (
        <>
            <Box sx={{ display: 'flex' }} >
                <AdminHeader />
                <div className='pt-3 px-0 sm:px-0 md:px-0 lg:px-5 xl:px-5 w-full castomRight w-full overflow-hidden'>
                    <Grid container>
                        <Grid item xs={12} md={3}>
                            <div className='bg-[#ecf2ff] m-5 text-center py-8 rounded-xl'>
                                <h1 className='text-6xl font-extrabold text-[#598dff]'>{bookings ? bookings.length : 0}</h1>
                                <p className='font-bold text-xl py-2 text-[#598dff]'>{bookings?.length < 2 ? 'Total Booking' : 'Total Bookings'}</p>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <div className='bg-[#fdede8] m-5 text-center py-8 rounded-xl'>
                                <h1 className='text-6xl font-extrabold text-[#fd8c68]'>{allTrips ? allTrips.length : 0}</h1>
                                <p className='font-bold text-xl py-2 text-[#fd8c68]'>{allTrips?.length < 2 ? 'Total Destination' : 'Total Destinations'}</p>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <div className='bg-[#e6fffa] m-5 text-center py-8 rounded-xl'>
                                <h1 className='text-6xl font-extrabold text-[#51fad8]'>89</h1>
                                <p className='font-bold text-xl py-2 text-[#51fad8]'>Top Blogs</p>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <div className='bg-[#ebf3fe] m-5 text-center py-8 rounded-xl'>
                                <h1 className='text-6xl font-extrabold text-[#6ca8fb]'>{allCars ? allCars.length : 0}</h1>
                                <p className='font-bold text-xl py-2 text-[#6ca8fb]'>{allCars?.length < 2 ? 'Total Car' : 'Total Cars'}</p>
                            </div>
                        </Grid>
                        <Grid xs={12} className='py-2 px-5'>
                            <div className='flex justify-between '>
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
            <Grid xs={12}>
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

                {filteredBookings.length > 0 ? (
                  <ResponsiveTabel 
                  rows={filteredBookings} 
                  headers={headers}
                  onEditClick={(row)=>handleEditClick(row)}
                  onDeleteClick={(row)=>deleteUser(row?.id)} />
                ) : (
                  <>
                    <div className='bg-[#ebf3fe] text-center m-5 py-5 text-[#6ca8fb]'>
                      <p>
                        <SentimentVeryDissatisfiedIcon />
                      </p>
                      <p className='text-center pt-3 text-xl text-[#6ca8fb]'>No Records Found</p>
                    </div>
                  </>
                )}
              </div>
            </Grid>
          </Grid>
                </div>
            </Box>
        </>
    );
}  