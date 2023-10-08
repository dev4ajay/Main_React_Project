import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import AdminHeader from 'components/adminheader'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { axiosInstance } from '@/pages/_app';
import router from 'next/router';
import { useEffect, useState } from 'react';
import Loader from '@/components/loader';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const validationSchema = yup.object({
  pick_location: yup.string().required('Pick Location is required'),
  drop_location: yup.string().required('Drop Location is required'),
  total_distance_km: yup
    .number()
    .typeError('Total Distance (km) must be a number')
    .required('Total Distance (km) is required'),
});

export default function AddRoundTrip() {
  const [isLoading, setIsLoading] = useState(false);
  const [carId, setCarId] = useState('');
  const [carOptions, setCarOptions] = useState<any[]>([]);
  const [vendorId, setVendorId] = useState('');

  useEffect(() => {
    // Fetch car data from the API endpoint
    axiosInstance.get('/api/cars/car')
      .then(result => {
        // Assuming the API response is an array of car objects
        console.log("data",result.data)
        setCarOptions(result.data);
      })
      .catch(error => {
        console.error('Error fetching car data:', error);
      });
  }, []);

  const handleCars = event => {
    const selectedCarId = event.target.value;
    // Find the selected car object based on the selected car id
    const selectedCar = carOptions.find(car => car.id === selectedCarId);
    if (selectedCar) {
      setCarId(selectedCar.id)
      setVendorId(selectedCar.vendor_id);
    }
  };

  const formik = useFormik({
    initialValues: {
      car_id: '',
      pick_location: '',
      drop_location: '',
      total_distance_km: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setIsLoading(true)
      // Handle API call to create one-way trip with form values
      console.log(values);
      axiosInstance
        .post('/api/trips/trip', {
          ...values,
          trip_type: 'round_trip',
          car_id: carId,
          vendor_id: vendorId,
        })
        .then((response) => {
          // Handle successful response
          setIsLoading(false)
          router.replace('/admin/roundtrip');
        })
        .catch((error) => {
          // Handle error
          setIsLoading(false)
          console.error(error);
        });
    },
  });

  if(isLoading) {
    return (
      <Loader isLoading={isLoading} />
    )
  }
  
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <AdminHeader />
        <Box sx={{ flexGrow: 1 }} className='pt-3 px-5 castomRight w-full'>
          <Grid container>
            <Grid item xs={12}>
              <div className='bg-[#ecf2ff] m-5 p-7 rounded-2xl'>
                <h1 className='text-xl font-extrabold text-[#34609d] '>Add Round Trip</h1>
                <p className='py-2 font-semibold text-xs text-[#34609d]'>Home <FiberManualRecordIcon className='text-sm px-1' />Round Trip</p>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6} className="py-0 sm:py-0 md:py-0 lg:py-5 xl:py-5">
              <form onSubmit={formik.handleSubmit}>
              <div className='m-5 block sm:block md:flex lg:flex xl:flex'>
                  <h4 className='text-lg py-2'>Pick Location</h4>
                  <TextField
                    placeholder='Pick Location'
                    className='ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%]'
                    size='small'
                    id='pick_location'
                    name='pick_location'
                    variant='outlined'
                    value={formik.values.pick_location}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.pick_location && Boolean(formik.errors.pick_location)
                    }
                    helperText={formik.touched.pick_location && formik.errors.pick_location}
                  />
                </div>
                <div className='m-5 block sm:block md:flex lg:flex xl:flex'>
                  <h4 className='text-lg py-2'>Vendor ID</h4>
                  <TextField
                    placeholder='Vendor ID'
                    className='ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%]'
                    size='small'
                    id='vendor_id'
                    name='vendor_id'
                    variant='outlined'
                    disabled
                    value={vendorId}
                    onChange={formik.handleChange}
                  />
                </div>
                <div className='m-5 block sm:block md:flex lg:flex xl:flex'>
                  <h4 className='text-lg py-2'>Total Distance (km)</h4>
                  <TextField
                    placeholder='Total Distance (km)'
                    className='ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%]'
                    size='small'
                    id='total_distance_km'
                    name='total_distance_km'
                    variant='outlined'
                    type='number'
                    value={formik.values.total_distance_km}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.total_distance_km &&
                      Boolean(formik.errors.total_distance_km)
                    }
                    helperText={
                      formik.touched.total_distance_km && formik.errors.total_distance_km
                    }
                  />
                </div>
                <div className='m-5 justify-between	flex checkboxLabel'>
                <div>
                    <div>
                    <FormControlLabel control={<Checkbox defaultChecked sx={{color: '#34609d','&.Mui-checked': {color: "#34609d",},}}/>} label="Sedan" labelPlacement="start" className='flex justify-between m-0'/>
                    </div>
                    <div>
                    <FormControlLabel control={<Checkbox sx={{color: '#34609d','&.Mui-checked': {color: "#34609d",},}}/>} label="Toyota Innova" labelPlacement="start" className='flex justify-between m-0'/>
                    </div>
                    </div>
                <div>
                    <div>
                    <FormControlLabel control={<Checkbox sx={{color: '#34609d','&.Mui-checked': {color: "#34609d",},}}/>} label=" Suv" labelPlacement="start" className='flex justify-between m-0'/>
                    </div>
                    <div>
                    <FormControlLabel control={<Checkbox sx={{color: '#34609d','&.Mui-checked': {color: "#34609d",},}}/>} label="Innova Crysta" labelPlacement="start" className='flex justify-between m-0'/>
                    </div>
                    </div>
                    </div>
              </form>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6} className="py-0 sm:py-0 md:py-0 lg:py-5 xl:py-5">
              <form onSubmit={formik.handleSubmit}>
              <div className='m-5 block sm:block md:flex lg:flex xl:flex'>
                  <h4 className='text-lg py-2'>Drop Location</h4>
                  <TextField
                    placeholder='Drop Location'
                    className='ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%]'
                    size='small'
                    id='drop_location'
                    name='drop_location'
                    variant='outlined'
                    value={formik.values.drop_location}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.drop_location && Boolean(formik.errors.drop_location)
                    }
                    helperText={formik.touched.drop_location && formik.errors.drop_location}
                  />
                </div>
                <div className='m-5 block sm:block md:flex lg:flex xl:flex'>
                  <h4 className='text-lg py-2'>Car</h4>
                  <FormControl
                    className='ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%]'
                    size='small'
                    variant='outlined'
                  >
                    <InputLabel id='car-label'>Car</InputLabel>
                       <Select
                        labelId='car-label'
                        id='car_id'
                        name='car_id'
                        value={formik.values.car_id}
                        onChange={event => {
                            formik.handleChange(event);
                            handleCars(event);
                        }}
                        label='Car'                       
                        >
                        {carOptions.map(car => (
                            <MenuItem key={car.id} value={car.id}>
                            {car.car_name}
                            </MenuItem>
                        ))}
                        </Select>
                  </FormControl>
                </div>
                {/* <div className='m-5 block sm:block md:flex lg:flex xl:flex text-right justify-end'>
                  <Button variant='contained' color='primary' type='submit' className='bg-[#34609d] hover:bg-[#34609d] hover:opacity-75 px-5 text-white'>
                    Add Trip
                  </Button>
                </div> */}
              </form>
            </Grid>
            <Grid item xs={12}>
            <form onSubmit={formik.handleSubmit}>
            <div className='m-5 block sm:block md:flex lg:flex xl:flex text-right justify-center'>
                  <Button variant='contained' color='primary' type='submit' className='bg-[#34609d] hover:bg-[#34609d] hover:opacity-75 px-5 text-white'>
                    Add Trip
                  </Button>
                </div>
                </form>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
