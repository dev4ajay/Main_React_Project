import * as React from 'react';
import Grid from '@mui/material/Grid';
import Swift from '../../public/ourcars/swiftpng.png'
import Image, { StaticImageData } from 'next/image'
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { axiosInstance } from '../_app';
import _ from 'lodash';


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <div>{children}</div>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function PaymentPage() {

    const router = useRouter()

    let {tripId} = router.query
    let {bookingId} = router.query

    const [booking_id, setBookingId] = useState(bookingId);
    const [trip, setTrip] = useState(null);
    const [booking, setBooking] = useState(null);
    const [customerName, setCustomerName] = useState('')
    const [customerEmail, setCustomerEmail] = useState('')
    const [customerPickLocation, setCustomerPickLocation] = useState('')
    const [customerDropLocation, setCustomeDropLocation] = useState('')


    const onKeyPress = (e) => {
        const charCode = e.which ? e.which : e.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
          e.preventDefault();
        }
      };

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    function setContactNumber(value: string): void {
        throw new Error('Function not implemented.');
    }


    useEffect(() => {
        const fetchData = async () => {
          try {
            let result =  await axiosInstance.get(`/api/trips/trip?tripId=${tripId}`)  
            setTrip(result.data?.[0]);
            // setAllTrips(result.data);
          } catch (error) {
            console.error('Error fetching car data:', error);
          }
        };
      
        fetchData();
      },[]);

      useEffect(() => {
        const fetchData = async () => {
          try {
            let result =  await axiosInstance.get(`/api/bookings/booking?bookingId=${booking_id}`)  
            setBooking(result.data)     
            // setAllTrips(result.data);
          } catch (error) {
            console.error('Error fetching car data:', error);
          }
        };
      
        fetchData();
      },[]);

      async function updateBooking() {
        if(_.isEmpty(customerName)) {
            alert('Please enter name')
        }
        else if(_.isEmpty(customerEmail)) {
            alert('Please enter email')
        }
        else if(_.isEmpty(customerPickLocation)) {
            alert('Please enter pick location')
        }
        else if(_.isEmpty(customerDropLocation)) {
            alert('Please enter drop location')
        } else {
            let updateBookingReq = {
                customer_name: customerName,
                customer_email: customerEmail,
                trip_id: trip?.id,
                vendor_id: trip?.vendor_id,
                pickup_address: customerPickLocation,
                drop_address: customerDropLocation,
                booking_status: 'pending',
                payment_status: 'pending',
                payment_method: 'Online',
                total_distance_km: trip?.total_distance_km,
                customer_address: customerPickLocation,

            }
            try {
                const result = await axiosInstance.put(`/api/bookings/booking?id=${bookingId}`, updateBookingReq);
                if(result.status === 200) {
                  alert(`${result?.data?.message}`)
                  router.replace('/')
                } else {
                  alert(`${result?.data?.message}`)
                }
                // Handle success or navigation to another page
              } catch (error) {
                console.error('Error updating booking:', error);
              }
        }        
      }

    return (
        <>
            <Grid container className='drop-shadow-xl px-2 p-3 rounded bg-white px-5 sm:px-5 md:px-5 lg:px-5 xl:px-44'>
                <Grid item xs={6}>
                    <div className='mt-20'>
                        <h5 className='text-xl font-bold text-[#1c4680]'>Review your Booking</h5>
                        <h5 className='text-xl font-bold text-[#1c4680]'>{trip?.pick_location} - {trip?.drop_location} | Outstation {trip?.trip_type === 'one_way' ? 
                        'Oneway' : trip?.trip_type === 'round_trip' ? 'Round Trip' : 'Airport Transfer'} | {booking?.pickup_date}</h5>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className='mt-20 text-right'>
                        <p className='py-4 text-[#ff6d38] font-bold'>Hurry! Limited cars left</p>
                    </div>
                </Grid>
            </Grid >
            <Grid container className='px-5 sm:px-5 md:px-5 lg:px-5 xl:px-44 mt-10'>
                <Grid item xs={12} sm={7} md={8} lg={8} xl={8}>
                    <Grid container className='drop-shadow-md bg-white px-5 sm:px-5 md:px-8 lg:px-8 xl:px-8 py-5 my-5 rounded '>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className='px-3' >
                            <Image
                                width={100}
                                height={100}
                                src={!_.isEmpty(trip) ? trip?.car?.exterior_images[0]: ''}
                                alt='scweew3'
                            />
                            <p className='text-xs text-[#12ab68]'>Reasons you&apos;ve made a good choice</p>
                            <button className='bg-[#12ab68] text-white my-2 px-4 rounded-lg'>Free waiting upto 45 minutes</button>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className='px-3'>
                            <p className='text-xl font-bold'>{trip?.car?.car_name}</p>
                            <ul>
                                <li className='flex py-2 border-b-2'>
                                    <p>{trip?.car?.model}</p>
                                    <p className='px-5'>AC</p>
                                    <p>{trip?.car?.seats} passengers allowed</p>
                                </li>
                                <li className='flex py-2'>
                                    <p>{trip?.total_distance_km} kms included. After that ₹{trip?.car?.price}/km</p>
                                </li>
                            </ul>
                        </Grid>
                    </Grid>
                    <Grid container className='drop-shadow-md bg-white px-5 sm:px-5 md:px-8 lg:px-8 xl:px-8 py-5 my-5 rounded '>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <p className='text-xl font-bold'>Cab & driver details</p>
                            <Image
                                width={100}
                                height={100}
                                src={!_.isEmpty(trip) ? trip?.car?.exterior_images[0]: ''}
                                alt='scweew3'
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <p className='text-md py-5'>
                                Your cab and driver details will be shared via Whatsapp & SMS on your
                                registered mobile number.
                            </p>
                        </Grid>
                    </Grid>
                    <p>Images of selected vehicle category</p>
                    <p className='text-sm bg-[#fef8e5] p-1 m-1'>Car images shown here are for representation purpose only. Actual car will belong to the same
                        model but may not be the exact one as shown in the images</p>
                    <div className='my-2'>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="ALL" {...a11yProps(0)} />
                            <Tab label="INTERIOR" {...a11yProps(1)} />
                            <Tab label="EXTERIOR" {...a11yProps(2)} />
                        </Tabs>
                        <TabPanel value={value} index={0}>
                            <div className='p-4 flex flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap xl:flex-nowrap bg-[#a1cbf1] bg-[#a1cbf1]'>
                                <Image
                                     width={100}
                                     height={100}
                                     src={!_.isEmpty(trip) ? trip?.car?.exterior_images[0]: ''}
                                    alt='scweew3'
                                />
                                <Image
                                     width={100}
                                     height={100}
                                     src={!_.isEmpty(trip) ? trip?.car?.interior_images[1]: ''}
                                    alt='scweew3'
                                />
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <div className='p-4 flex flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap xl:flex-nowrap bg-[#a1cbf1]'>
                                <Image
                                    width={100}
                                    height={100}
                                    src={!_.isEmpty(trip) ? trip?.car?.interior_images[0]: ''}
                                    alt='scweew3'
                                />
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <div className='p-4 flex flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap xl:flex-nowrap bg-[#a1cbf1]'>
                                <Image
                                     width={100}
                                     height={100}
                                     src={!_.isEmpty(trip) ? trip?.car?.exterior_images[0]: ''}
                                    alt='scweew3'
                                />
                            </div>
                        </TabPanel>
                    </div>
                    <Grid container className='drop-shadow-md bg-white px-5 sm:px-5 md:px-8 lg:px-8 xl:px-8 py-5 my-5 rounded '>
                        <Grid item xs={12}>
                            <p className='text-xl font-bold'> Inclusions & exclusions</p>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <p className='font-bold py-2'>Included in your fare</p>
                        <li className='py-2'>{trip?.total_distance_km} Kms </li>
                         <li className='py-2'> {trip?.trip_type === "one_way" ? 'Only One Pickup and Drop'
                         : trip?.trip_type === "round_trip" ? 'Only Two Pickup and Drop' : 'Only One Pickup and Drop'
                        }</li> 
                         </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
                            <p className='font-bold py-2'>Excluded in your fare</p>
                            <li className='py-2'>State Taxes </li>
                            <li className='py-2'>Toll Charges</li>
                            <li className='py-2'>Fare beyond {trip?.total_distance_km} Kms: Rs{trip?.car?.price}/Km</li>
                            <li className='py-2'>Waiting charges ₹100/60 mins after 45 minutes</li>
                        </Grid>
                    </Grid>
                    <Grid container className='drop-shadow-md bg-white px-5 sm:px-5 md:px-8 lg:px-8 xl:px-8 py-5 my-5 rounded '>
                        <Grid item xs={12}>
                            <p className='text-xl font-bold'> Contact Detail</p>
                        </Grid>
                        <Grid item xs={12}>
                            <div className='flex'>
                            <div className='p-2 w-full'>
                            <label>Name</label>
                                <TextField
                                    size='small'
                                    id="outlined-basic"
                                    fullWidth
                                    placeholder='Enter Your Name'
                                    value={customerName}
                                    onChange={(e)=> setCustomerName(e.target.value)}
                                />
                                </div>
                            </div>
                            <div className='flex'>
                            <div className='p-2 w-full'>
                                    <label>Email (Your E-ticket and updates will be sent here)</label>
                                    <TextField
                                        size='small'
                                        id="outlined-basic"
                                        fullWidth
                                        placeholder='Enter Email'
                                        value={customerEmail}
                                        onChange={(e)=> setCustomerEmail(e.target.value)}
                                    />
                                </div>
                                <div className='p-2 w-full'>
                                    <label>Contact Number</label>
                                    <TextField
                                    inputProps={{ maxLength: 10 }}
                                        size='small'
                                        fullWidth
                                        variant='outlined'
                                        type='tel'
                                        value={booking?.customer_contact_number}
                                        placeholder='Contact Number'
                                        InputProps={{
                                        startAdornment: <InputAdornment position="start">+91</InputAdornment>,
                                        }}
                                        onKeyDown={(e)=> onKeyPress(e)}
                                        id='customer_contact_number'
                                        name='customer_contact_number'
                                        disabled
                                    />
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container className='drop-shadow-md bg-white px-5 sm:px-5 md:px-8 lg:px-8 xl:px-8 py-5 my-5 rounded '>
                        <Grid item xs={12}>
                            <p className='text-xl font-bold'> Pickup Location</p>
                        </Grid>
                        <Grid item xs={12}>
                            <p className='py-2'>Enter Pickup Location</p>
                            <TextField
                                fullWidth
                                size='small'
                                id="outlined-basic"
                                placeholder='Enter Pickup Location'
                                value={customerPickLocation}
                                onChange={(e)=> setCustomerPickLocation(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <Grid container className='drop-shadow-md bg-white px-5 sm:px-5 md:px-8 lg:px-8 xl:px-8 py-5 my-5 rounded '>
                        <Grid item xs={12}>
                            <p className='text-xl font-bold'> Drop Location</p>
                        </Grid>
                        <Grid item xs={12}>
                            <p className='py-2'>Enter Drop Location</p>
                            <TextField
                                fullWidth
                                size='small'
                                id="outlined-basic"
                                placeholder='Enter Drop Location'
                                value={customerDropLocation}
                                onChange={(e)=> setCustomeDropLocation(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <Grid container className='drop-shadow-md bg-white px-5 sm:px-5 md:px-8 lg:px-8 xl:px-8 py-5 my-5 rounded '>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <p className='text-xl font-bold'> Cancellation Policy</p>
                            <p className='text-md'> Safety precautions</p>
                            <p>
                                Our cabs are sanitised before pickup however you may request driver to sanitise before your board

                                Maintain social distancing, wear mask & avoid touching your mouth, eyes, nose without sanitising your hands

                                Avoid travel in case you’re experiencing covid-19 symptoms

                                Download Aarogya Setu app on phone for your safety</p>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={5} md={4} lg={4} xl={4}>
                    <Grid item xs={12}>
                        <div className='drop-shadow-md bg-white px-8 py-5 mx-0 sm:mx-0 md:mx-0 lg:mx-10 xl:mx-10 rounded'>
                            <div className='flex justify-between'>
                                <div>
                                    <h3 className='text-lg font-bold'>Total Amount</h3>
                                    <p className='text-xs'>Inclusive of GST</p>
                                </div>
                                <div className='text-right'>
                                    <h3 className='text-lg font-bold'>Rs- {trip?.total_price}</h3>
                                    <p className='text-xs text-[#2276e3]'>View details</p>
                                </div>
                            </div>
                            <div>
                                <FormControl>
                                    <RadioGroup

                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="female"
                                        name="radio-buttons-group"
                                    >
                                        <FormControlLabel value="female" control={<Radio />}
                                            label={`Pay Rs${trip?.total_price} Now`} className='pt-3' />
                                        <p className='text-xs'>Remaining to driver</p>

                                    </RadioGroup>
                                </FormControl>
                            </div>
                            <div className='text-center my-3'>
                                <button className='py-2 text-[#fff] bg-[#ff6d38] w-full rounded-lg'
                                onClick={()=> updateBooking()}
                                >Pay  {trip?.total_price} Now & Confirm Now</button>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Grid >
        </>
    );
}