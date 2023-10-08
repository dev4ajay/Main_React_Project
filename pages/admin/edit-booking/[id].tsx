import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { axiosInstance } from '@/pages/_app';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import AdminHeader from 'components/adminheader';
import Grid from '@mui/material/Grid';
import { MenuItem, Select } from '@mui/material';
import { toast } from 'react-toastify';
import Loader from '@/components/loader';

const BookingPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  const {tripType} = router.query;
  const [booking, setBooking] = useState(null);
  const [trips, setTrips] = useState([]);
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const response = await axiosInstance.get(`/api/bookings/booking`);
        setBooking(response.data?.filter((item) => item.id.toString() === id)[0]);

      } catch (error) {
        console.error('Error fetching booking:', error);
      }
    };

    const fetchTrips = async () => {
      try {
        const response = await axios.get(`/api/trips/trip?tripType=${tripType}`);
        setTrips(response.data);
        console.log('trips',response.data)
      } catch (error) {
        console.error('Error fetching trips:', error);
      }
    };

    const fetchVendors = async () => {
      try {
        const response = await axios.get('/api/vendors/vendor');
        setVendors(response.data);
      } catch (error) {
        console.error('Error fetching vendors:', error);
      }
    };

    if (id) {
      fetchBooking();
    }
    
    fetchTrips();
    fetchVendors();
  }, [id]);

  const handleBookingStatusChange = (event) => {
    const value = event.target.value;
    setBooking({ ...booking, booking_status: value });
  };

  const handlePaymentStatusChange = (event) => {
    const value = event.target.value;
    setBooking({ ...booking, payment_status: value });
  };

  const handleSubmit = async (updatedBooking) => {
    setIsLoading(true)
    try {
      const result = await axiosInstance.put(`/api/bookings/booking?id=${id}`, updatedBooking);
      console.log("updateBooking", result)
      if(result.status === 200) {
        router.push('/admin/bookings')
      } else {
        toast(`${result?.data?.message}`)
      }
      // Handle success or navigation to another page
    } catch (error) {
      setIsLoading(false)
      console.error('Error updating booking:', error);
    }
  };

  if (!booking) {
    return null;
  }

  const handleTripIdChange = (event) => {
    const selectedTrip = trips.find((trip) => trip.id === event.target.value);
    setBooking({ ...booking, trip_id: selectedTrip.id, pick_location: selectedTrip.pick_location, drop_address: selectedTrip.drop_address });
  };

  const handleVendorIdChange = (event) => {
    const selectedVendor = vendors.find((vendor) => vendor.id === event.target.value);
    setBooking({ ...booking, vendor_id: selectedVendor.id });
  };

    
  if(isLoading) {
    return (
      <Loader isLoading={isLoading} />
    )
  }
  
  return (
    <>
      <Box sx={{display:'flex'}}>
    <AdminHeader/>
    <div className='pt-3 px-5 w-full castomRight'>
    <Grid container>
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className="py-0 sm:py-0 md:py-0 lg:pt-5 xl:pt-5">
    <div className='mx-5 flex p-7 bg-[#ecf2ff] rounded-2xl'>
      <h1 className='text-lg'>Customer Name : <span className='font-bold	'>{booking.customer_name}</span> </h1>
      <h1  className='ml-[auto] text-lg'>Booking ID: {id}</h1>
      </div>
    </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6} className="py-0 sm:py-0 md:py-0 lg:py-5 xl:py-5">
            <div className="m-5 block sm:block md:flex lg:flex xl:flex">
            <h4 className="text-lg py-2">Customer Name</h4>
            <TextField
            className="ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%]"
            size='small'
            value={booking.customer_name}
            onChange={(e) => setBooking({ ...booking, customer_name: e.target.value })}
            disabled
            />
            </div>
            <div className="m-5 block sm:block md:flex lg:flex xl:flex">
            <h4 className="text-lg py-2">Customer Email</h4>
            <TextField
            className="ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%]"
            size='small'
            value={booking.customer_email}
            onChange={(e) => setBooking({ ...booking, customer_email: e.target.value })}
            />
            </div>
            <div className="m-5 block sm:block md:flex lg:flex xl:flex">
            <h4 className="text-lg py-2">From city</h4>
            <TextField
            className="ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%]"
            size='small'
            value={booking.pickup_address}
            onChange={(e) => setBooking({ ...booking, pickup_address: e.target.value })}
            />
            </div>
            <div className="m-5 block sm:block md:flex lg:flex xl:flex">
            <h4 className="text-lg py-2">Pickup Date</h4>
            <TextField
              className="ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%]"
            size='small'
            value={booking.pickup_date}
            onChange={(e) => setBooking({ ...booking, pickup_date: e.target.value })}
            />
            </div>
            <div className="m-5 block sm:block md:flex lg:flex xl:flex">
            <h4 className="text-lg py-2">Pickup Address</h4>
            <TextField
              className="ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%]"
            size='small'
            // value={booking.pickup_date}
            // onChange={(e) => setBooking({ ...booking, pickup_date: e.target.value })}
            />
            </div>
            <div className="m-5 block sm:block md:flex lg:flex xl:flex">
            <h4 className="text-lg py-2">Sedan Price</h4>
            <TextField
              className="ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%]"
            size='small'
            // value={booking.pickup_date}
            // onChange={(e) => setBooking({ ...booking, pickup_date: e.target.value })}
            />
            </div>
            <div className="m-5 block sm:block md:flex lg:flex xl:flex">
            <h4 className="text-lg py-2">Suv Price</h4>
            <TextField
              className="ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%]"
            size='small'
            // value={booking.pickup_date}
            // onChange={(e) => setBooking({ ...booking, pickup_date: e.target.value })}
            />
            </div>
            <div className="m-5 block sm:block md:flex lg:flex xl:flex">
            <h4 className="text-lg py-2">Vendor Id</h4>
            <TextField
                  className="ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%]"
                  size='small'
                  select
                  value={booking.vendor_id}
                  onChange={handleVendorIdChange}
                >
                  {vendors.map((vendor) => (
                    <MenuItem key={vendor.id} value={vendor.id}>
                      {vendor.name}
                    </MenuItem>
                  ))}
                </TextField>
            </div>
            <div className="m-5 block sm:block md:flex lg:flex xl:flex">
            <h4 className="text-lg py-2">Vendor Name</h4>
            <TextField
              className="ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%]"
            size='small'
            // value={booking.pickup_date}
            // onChange={(e) => setBooking({ ...booking, pickup_date: e.target.value })}
            />
            </div>
            <div className="m-5 block sm:block md:flex lg:flex xl:flex">
            <h4 className="text-lg py-2">Vendor Number</h4>
            <TextField
              className="ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%]"
            size='small'
            // value={booking.pickup_date}
            // onChange={(e) => setBooking({ ...booking, pickup_date: e.target.value })}
            />
            </div>
            <div className="m-5 block sm:block md:flex lg:flex xl:flex">
            <h4 className="text-lg py-2">commission</h4>
            <TextField
              className="ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%]"
            size='small'
            // value={booking.pickup_date}
            // onChange={(e) => setBooking({ ...booking, pickup_date: e.target.value })}
            />
            </div>
            <div className="m-5 block sm:block md:flex lg:flex xl:flex">
              <h4 className="text-lg py-2">Payment Method</h4>        
              <TextField
              className="ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%]"
                size='small'
                value={booking.payment_method}
                onChange={(e) => setBooking({ ...booking, payment_method: e.target.value })}
              />
              </div>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6} className="py-0 sm:py-0 md:py-0 lg:py-5 xl:py-5">
          
        <div className="m-5 block sm:block md:flex lg:flex xl:flex">
        <h4 className="text-lg py-2">Contact Number</h4>
          <TextField
            className="ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%]"
            size='small'
            value={booking.customer_contact_number}
            onChange={(e) => setBooking({ ...booking, customer_contact_number: e.target.value })}
            disabled
          />
          </div>
          <div className="m-5 block sm:block md:flex lg:flex xl:flex">
          <h4 className="text-lg py-2">Trip Type</h4>
          <TextField
          className="ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%]"
          size='small'
          value={booking.trip_type}
          onChange={(e) => setBooking({ ...booking, trip_type: e.target.value })}
          disabled
          />
          </div>
          <div className="m-5 block sm:block md:flex lg:flex xl:flex">
          <h4 className="text-lg py-2">To city</h4>
          <TextField
          className="ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%]"
          size='small'
          value={booking.drop_address}
          onChange={(e) => setBooking({ ...booking, drop_address: e.target.value })}
          />
          </div>
          <div className="m-5 block sm:block md:flex lg:flex xl:flex">
          <h4 className="text-lg py-2">Return Date</h4>
          <TextField
          className="ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%]"
          size='small'
          value={booking.return_date}
          onChange={(e) => setBooking({ ...booking, return_date: e.target.value })}
          />
          </div>
          <div className="m-5 block sm:block md:flex lg:flex xl:flex">
            <h4 className="text-lg py-2">Drop address</h4>
            <TextField
              className="ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%]"
            size='small'
            // value={booking.pickup_date}
            // onChange={(e) => setBooking({ ...booking, pickup_date: e.target.value })}
            />
          </div>
          {/* <div className="m-5 block sm:block md:flex lg:flex xl:flex">
          <h4 className="text-lg py-2">Pickup Time</h4>
          <TextField
          className="ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%]"
          size='small'
          value={booking.pickup_time}
          onChange={(e) => setBooking({ ...booking, pickup_time: e.target.value })}
          />
          </div> */}
          <div className="m-5 block sm:block md:flex lg:flex xl:flex">
            <h4 className="text-lg py-2">Total Distance KM</h4>
            <TextField
              className="ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%]"
            size='small'
            // value={booking.pickup_date}
            // onChange={(e) => setBooking({ ...booking, pickup_date: e.target.value })}
            />
          </div>
          <div className="m-5 block sm:block md:flex lg:flex xl:flex">
            <h4 className="text-lg py-2">Vehicle</h4>
            <TextField
              className="ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%]"
            size='small'
            // value={booking.pickup_date}
            // onChange={(e) => setBooking({ ...booking, pickup_date: e.target.value })}
            />
          </div>
          <div className="m-5 block sm:block md:flex lg:flex xl:flex">
            <h4 className="text-lg py-2">Driver Name</h4>
            <TextField
              className="ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%]"
            size='small'
            // value={booking.pickup_date}
            // onChange={(e) => setBooking({ ...booking, pickup_date: e.target.value })}
            />
          </div>
          <div className="m-5 block sm:block md:flex lg:flex xl:flex">
            <h4 className="text-lg py-2">Driver Number</h4>
            <TextField
              className="ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%]"
            size='small'
            // value={booking.pickup_date}
            // onChange={(e) => setBooking({ ...booking, pickup_date: e.target.value })}
            />
          </div>
          <div className="m-5 block sm:block md:flex lg:flex xl:flex">
            <h4 className="text-lg py-2">Cab Number</h4>
            <TextField
              className="ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%]"
            size='small'
            // value={booking.pickup_date}
            // onChange={(e) => setBooking({ ...booking, pickup_date: e.target.value })}
            />
          </div>
          <div className="m-5 block sm:block md:flex lg:flex xl:flex">
          <h4 className="text-lg py-2">Payment Status</h4>
          <Select
          className="ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%]"
          size='small'
          value={booking.payment_status}
          onChange={handlePaymentStatusChange}
        >
          <MenuItem value="" disabled>Select Payment Status</MenuItem>
          <MenuItem value="pending">Pending</MenuItem>
          <MenuItem value="paid">Paid</MenuItem>
          <MenuItem value="refunded">Refunded</MenuItem>
        </Select>
          </div>
          
          <div className="m-5 block sm:block md:flex lg:flex xl:flex">
            <h4 className="text-lg py-2">Booking Status</h4>
            <Select
              className="ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%]"
              size='small'
              value={booking.booking_status}
              onChange={handleBookingStatusChange}
            >
              <MenuItem value="" disabled>Select Booking Status</MenuItem>
              <MenuItem value="pending">Pending</MenuItem>
              <MenuItem value="confirmed">Confirmed</MenuItem>
              <MenuItem value="cancelled">Cancelled</MenuItem>
              <MenuItem value="completed">Completed</MenuItem>
              {/* Add more MenuItem components for each status option */}
            </Select>
            </div>
          
        {/* Render other booking fields for editing */}

        {/* Update form */}
       
        </Grid>
        <Grid xs={12}>
        <div  className='text-Center m-5 flex justify-center'>
        <Button type="submit" variant="contained" className='bg-[#34609d] hover:bg-[#34609d] hover:opacity-50 m-0 px-5 text-white'
        onClick={()=> handleSubmit(booking)}
        >
            Update Booking
          </Button>
        </div>
        </Grid>
      </Grid>
    </div>
    </Box>
    </>
  );
};

export default BookingPage;