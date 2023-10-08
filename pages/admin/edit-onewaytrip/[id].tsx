import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { axiosInstance } from '@/pages/_app';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import AdminHeader from 'components/adminheader';
import Grid from '@mui/material/Grid';
import Loader from '@/components/loader';

const TripPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    const fetchTrip = async () => {
      try {
        const response = await axiosInstance.get(`/api/trips/trip?tripType=one_way`);
        setTrip(response.data?.filter((item) => item.id.toString() === id)[0]);

      } catch (error) {
        console.error('Error fetching Trip:', error);
      }
    };

    if (id) {
      fetchTrip();
    }
  }, [id]);

  const handleSubmit = async (updatedTrip) => {
    setIsLoading(true)
    try {
      const response = await axiosInstance.put(`/api/trips/trip?tripType=one_way&id=${id}`, updatedTrip);
      // Handle success or navigation to another page
      if(response.status === 200) {
        setIsLoading(false)
        router.back()
      }
    } catch (error) {
      setIsLoading(false)
      console.error('Error updating Trip:', error);
    }
  };

  if (!trip) {
    return ;
  }

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
      <h1 className='text-lg'>Car Id : <span className='font-bold	'>{trip.car_id}</span> </h1>
      <h1  className='ml-[auto] text-lg'>Trip ID: {id}</h1>
      </div>
    </Grid>
    <Grid item xs={12} sm={12} md={12} lg={6} xl={6} className="py-0 sm:py-0 md:py-0 lg:py-5 xl:py-5">
      <div className="m-5 block sm:block md:flex lg:flex xl:flex">
      <h4 className="text-lg py-2">Trip Type</h4>
        <TextField
          className="ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%]"
          size='small'
          value={trip.trip_type}
          disabled
        />
        </div>
        <div className="m-5 block sm:block md:flex lg:flex xl:flex">
        <h4 className="text-lg py-2">Car Id</h4>
        <TextField
          className="ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%]"
          size='small'
          value={trip.car_id}
          disabled
        />
        </div>
        <div className="m-5 block sm:block md:flex lg:flex xl:flex">
        <h4 className="text-lg py-2">Vendor Id</h4>
        <TextField
          className="ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%]"
          size='small'
          value={trip.vendor_id}
          disabled
        />
        </div>   
        <div className="m-5 block sm:block md:flex lg:flex xl:flex">
        <h4 className="text-lg py-2">Pick Location</h4>
        <TextField
         className="ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%]"
          size='small'
          value={trip.pick_location}
          onChange={(e) => setTrip({ ...trip, pick_location: e.target.value })}
        />
        </div>  
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={6} xl={6} className="py-0 sm:py-0 md:py-0 lg:py-5 xl:py-5">
      
        <div className="m-5 block sm:block md:flex lg:flex xl:flex">
        <h4 className="text-lg py-2">Drop Location</h4>
        <TextField
          className="ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%]"
          size='small'
          value={trip.drop_location}
          onChange={(e) => setTrip({ ...trip, drop_location: e.target.value })}
        />
        </div>
        <div className="m-5 block sm:block md:flex lg:flex xl:flex">
        <h4 className="text-lg py-2">Total Distance (km)</h4>
        <TextField
            className="ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%]"
          size='small'
          value={trip.total_distance_km}
          onChange={(e) => setTrip({ ...trip, total_distance_km: e.target.value })}
        />
        </div>
        <div className="m-5 block sm:block md:flex lg:flex xl:flex">
        <h4 className="text-lg py-2">Total Price</h4>
        <TextField
            className="ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%]"
          size='small'
          value={trip.total_price}
          disabled
        />
        </div>  
      {/* Render other booking fields for editing */}

      {/* Update form */}
      <form onSubmit={() => handleSubmit(trip)} className='text-end m-5'>
        {/* Render input fields for updating booking */}
        <Button type="submit" variant="contained" className='bg-[#34609d] hover:bg-[#34609d] hover:opacity-50 m-0 px-5 text-white'>
          Update Trip
        </Button>
      </form>
      </Grid>
      </Grid>
    </div>
    </Box>
    </>
  );
};

export default TripPage;
