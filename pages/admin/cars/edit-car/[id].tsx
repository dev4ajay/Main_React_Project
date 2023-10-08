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

const CarPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  const [car, setCar] = useState(null);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const response = await axiosInstance.get(`/api/cars/car`);
        setCar(response.data?.filter((item) => item.id.toString() === id)[0]);

      } catch (error) {
        console.error('Error fetching car:', error);
      }
    };

    if (id) {
      fetchCar();
    }
  }, [id]);

  const handleSubmit = async (updatedCar) => {
    setIsLoading(true)
    try {
      const response = await axiosInstance.put(`/api/cars/car?id=${id}`, updatedCar);
      if(response.status === 200) {
        setIsLoading(false)
      }
      
    } catch (error) {
      setIsLoading(false)
      console.error('Error updating car:', error);
    }
  };

  if (!car) {
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
      <h1 className='text-lg'>Car Name : <span className='font-bold	'>{car.car_name}</span> </h1>
      <h1  className='ml-[auto] text-lg'>Car ID: {id}</h1>
      </div>
    </Grid>
    <Grid item xs={12} sm={12} md={12} lg={6} xl={6} className="py-0 sm:py-0 md:py-0 lg:py-5 xl:py-5">
      <div className="m-5 block sm:block md:flex lg:flex xl:flex">
      <h4 className="text-lg py-2">Vendor</h4>
        <TextField
          className="ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%]"
          size='small'
          value={car. vendor_id}
          onChange={(e) => setCar({ ...car, vendor_id: e.target.value })}
        />
        </div>
        <div className="m-5 block sm:block md:flex lg:flex xl:flex">
        <h4 className="text-lg py-2">Car Name</h4>
        <TextField
          className="ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%]"
          size='small'
          value={car.car_name}
          onChange={(e) => setCar({ ...car, car_name: e.target.value })}
        />
        </div>
        <div className="m-5 block sm:block md:flex lg:flex xl:flex">
        <h4 className="text-lg py-2">Model</h4>
        <TextField
          className="ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%]"
          size='small'
          value={car.model}
          onChange={(e) => setCar({ ...car, model: e.target.value })}
        />
        </div>
        <div className="m-5 block sm:block md:flex lg:flex xl:flex">
        <h4 className="text-lg py-2">Year</h4>
        <TextField
         className="ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%]"
          size='small'
          value={car.year}
          onChange={(e) => setCar({ ...car, year: e.target.value })}
        />
        </div>
       
        
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={6} xl={6} className="py-0 sm:py-0 md:py-0 lg:py-5 xl:py-5">
        
      <div className="m-5 block sm:block md:flex lg:flex xl:flex">
        <h4 className="text-lg py-2">License Plate</h4>
        <TextField
         className="ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%]"
          size='small'
          value={car.license_plate}
          onChange={(e) => setCar({ ...car, license_plate: e.target.value })}
        />
        </div>
        <div className="m-5 block sm:block md:flex lg:flex xl:flex">
        <h4 className="text-lg py-2">Color</h4>
        <TextField
         className="ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%]"
          size='small'
          value={car.color}
          onChange={(e) => setCar({ ...car, color: e.target.value })}
        />
        </div>
        <div className="m-5 block sm:block md:flex lg:flex xl:flex">
        <h4 className="text-lg py-2">Seats</h4>
        <TextField
          className="ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%]"
          size='small'
          value={car.seats}
          onChange={(e) => setCar({ ...car, seats: e.target.value })}
        />
        </div>
        <div className="m-5 block sm:block md:flex lg:flex xl:flex">
        <h4 className="text-lg py-2">Price</h4>
        <TextField
            className="ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%]"
          size='small'
          value={car.price}
          onChange={(e) => setCar({ ...car, price: e.target.value })}
        />
        </div>
      {/* Render other booking fields for editing */}

      {/* Update form */}
      <form onSubmit={() => handleSubmit(car)} className='text-end m-5'>
        {/* Render input fields for updating booking */}
        <Button type="submit" variant="contained" className='bg-[#34609d] hover:bg-[#34609d] hover:opacity-50 m-0 px-5 text-white'>
          Update Car
        </Button>
      </form>
      </Grid>
      </Grid>
    </div>
    </Box>
    </>
  );
};

export default CarPage;
