import * as React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import AdminHeader from 'components/adminheader';
import { axiosInstance, storage } from '@/pages/_app';
import router from 'next/router';
import firebase from 'firebase/app';
import firebaseStorage, { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useState } from 'react';
import Loader from '@/components/loader';

export default function AddCar() {
  const [isLoading, setIsLoading] = useState(false);
  const [car, setCar] = React.useState('');
  const [vendors, setVendors] = React.useState([]);
  const [imageFiles, setImageFiles] = useState({
    interior: [],
    exterior: []
  });

  React.useEffect(() => {
    fetchVendors();
  }, []);

  const fetchVendors = async () => {
    try {
      const response = await axiosInstance.get('/api/vendors/vendor');
      setVendors(response.data);
    } catch (error) {
      console.error('Error fetching vendors:', error);
    }
  };

  const handleCars = (event: SelectChangeEvent) => {
    setCar(event.target.value as string);
  };

  const validationSchema = Yup.object({
    vendor_id: Yup.string().required('Vendor is required'),
    car_name: Yup.string().required('Car Name is required'),
    model: Yup.string().required('Model is required'),
    year: Yup.string().required('Year is required'),
    license_plate: Yup.string().required('License Plate is required'),
    color: Yup.string().required('Color is required'),
    seats: Yup.string().required('Seats is required'),
    interior_images: Yup.string().required('Interior Images is required'),
    exterior_images: Yup.string().required('Exterior Images is required'),
    price: Yup.string().required('Price is required'),
  });

  const addCarForm = useFormik({
    initialValues: {
      vendor_id: null,
      car_name: '',
      model: '',
      year: null,
      license_plate: '',
      color: '',
      seats: null,
      price: null,
    },
    validationSchema,
    onSubmit: async (values) => {
        
      }

});



type UploadImageProps = {
  carId: string;
  folder: 'interior' | 'exterior';
  images: File[];
};

const uploadImage = async ({ carId, folder, images }: UploadImageProps): Promise<string[] | null> => {
  const downloadURLs: string[] = [];

  try {
    for (const image of images) {
      const storageRef = ref(storage, `${carId}/${folder}/${image.name}`);
      await uploadBytes(storageRef, image);
      const downloadURL = await getDownloadURL(storageRef);
      downloadURLs.push(downloadURL);
    }
    return downloadURLs;
  } catch (error) {
    console.error('Error uploading images:', error);
    return null;
  }
};




  const handleFileChange = (event, folder) => {
    const files = event.target.files;
    setImageFiles(prevImageFiles => ({
      ...prevImageFiles,
      [folder]: Array.from(files)
    }));
  };


  const handleUploadImages = async (carId, imageFiles) => {    
    try {
      const putRequests = [];
  
      // Upload images for the interior folder
      const interiorDownloadURLs = await uploadImage({ carId, folder: 'interior', images: imageFiles.interior });
      if (interiorDownloadURLs) {
        console.log('Interior images uploaded successfully. Download URLs:', interiorDownloadURLs);
        const parsedValues = {
          ...addCarForm.values,
          interior_images: interiorDownloadURLs
        };
        const interiorPutRequest = axiosInstance.put(`/api/cars/car?id=${carId}`, parsedValues);
        putRequests.push(interiorPutRequest);
      } else {
        console.log('Interior image upload failed.');
      }
  
      // Upload images for the exterior folder
      const exteriorDownloadURLs = await uploadImage({ carId, folder: 'exterior', images: imageFiles.exterior });
      if (exteriorDownloadURLs) {
        console.log('Exterior images uploaded successfully. Download URLs:', exteriorDownloadURLs);
        const parsedValues = {
          ...addCarForm.values,
          exterior_images: exteriorDownloadURLs
        };
        const exteriorPutRequest = axiosInstance.put(`/api/cars/car?id=${carId}`, parsedValues);
        putRequests.push(exteriorPutRequest);
      } else {
        console.log('Exterior image upload failed.');
      }
  
      const responses = await Promise.all(putRequests);
      if (responses.every(response => response.status === 200)) {
        setIsLoading(false)
        // Route to the desired location
        router.replace('/admin/cars');
      }
    } catch (error) {
      setIsLoading(false)
      console.error(error);
    }
  };
  

  async function handleAddCarInDb() {
      setIsLoading(true)
      const parsedValues = {
        ...addCarForm.values,
        year: parseInt(addCarForm.values.year),
        seats: parseInt(addCarForm.values.seats),
        price: parseFloat(addCarForm.values.price),
      };
    try {
      const response = await axiosInstance.post('/api/cars/car', parsedValues);
      if(response.status === 201) {
        handleUploadImages(response.data.id, imageFiles)
      }
      //router.replace('/admin/cars');
    } catch (error) {
      setIsLoading(false)
      console.error(error);
    }
  }

  if(isLoading) {
    return (
      <Loader isLoading={isLoading} />
    )
  }

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <AdminHeader />
        <div className='pt-3 px-5 castomRight w-full'>
          <Grid container>
            <Grid item xs={12}>
              <div className='bg-[#ecf2ff] m-5 p-7 rounded-2xl'>
                <h1 className='text-xl font-extrabold text-[#34609d] '>Add Cars</h1>
                <p className='py-2 font-semibold text-xs text-[#34609d]'>
                  Home <FiberManualRecordIcon className='text-sm px-1' />Cars
                </p>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6} className='py-5'>
              <form>
                <div className='m-5 block sm:block md:flex lg:flex xl:flex'>
                  <h4 className='text-lg py-2'>Vendor</h4>
                  <FormControl
                    className='ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%]'
                    size='small'
                  >
                    <Select
                      labelId='vendor-label'
                      id='vendor_id'
                      name='vendor_id'
                      value={addCarForm.values.vendor_id}
                      onChange={addCarForm.handleChange}
                      onBlur={addCarForm.handleBlur}
                    >
                      {vendors.map((vendor) => (
                        <MenuItem key={vendor.id} value={vendor.id}>
                          {vendor.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                <div className='m-5 block sm:block md:flex lg:flex xl:flex'>
                  <h4 className='text-lg py-2'>Car Name</h4>
                  <TextField
                    className='ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%]'
                    size='small'
                    id='car_name'
                    name='car_name'
                    label='Car Name'
                    variant='outlined'
                    value={addCarForm.values.car_name}
                    onChange={addCarForm.handleChange}
                  />
                </div>
                <div className='m-5 block sm:block md:flex lg:flex xl:flex'>
                  <h4 className='text-lg py-2'>Model</h4>
                  <TextField
                    className='ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%]'
                    size='small'
                    id='model'
                    name='model'
                    label='Model'
                    variant='outlined'
                    value={addCarForm.values.model}
                    onChange={addCarForm.handleChange}
                  />
                </div>
                <div className='m-5 block sm:block md:flex lg:flex xl:flex'>
                  <h4 className='text-lg py-2'>Year</h4>
                  <TextField
                    className='ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%]'
                    size='small'
                    id='year'
                    name='year'
                    label='Year'
                    variant='outlined'
                    type='number'
                    value={addCarForm.values.year}
                    onChange={addCarForm.handleChange}
                  />
                </div>

                        <div className='m-5 block sm:block md:flex lg:flex xl:flex'>
                        <h4 className='text-lg py-2'>Car Interior Images</h4>
                        <div className='ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%] relative  w-[60%]'>
                          <div className='border-dotted border-2 border-[#000] p-3 text-center'>
                            <input type='file' id='interior_images' name='interior_images' onChange={(event)=> handleFileChange(event, 'interior')} multiple />
                          </div>
                        </div>
                      </div>
                      <div className='m-5 block sm:block md:flex lg:flex xl:flex'>
                        <h4 className='text-lg py-2'>Car Exterior Images</h4>
                        <div className='ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%] relative  w-[60%]'>
                          <div className='border-dotted border-2 border-[#000] p-3 text-center'>
                            <input type='file' id='exterior_images' name='exterior_images' onChange={(event)=> handleFileChange(event, 'exterior')} multiple />
                          </div>
                        </div>
                      </div>


              </form>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6} className='py-5'>
              <form>
                <div className='m-5 block sm:block md:flex lg:flex xl:flex'>
                  <h4 className='text-lg py-2'>License Plate</h4>
                  <TextField
                    className='ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%]'
                    size='small'
                    id='license_plate'
                    name='license_plate'
                    label='License Plate'
                    variant='outlined'
                    value={addCarForm.values.license_plate}
                    onChange={addCarForm.handleChange}
                  />
                </div>
                <div className='m-5 block sm:block md:flex lg:flex xl:flex'>
                  <h4 className='text-lg py-2'>Color</h4>
                  <TextField
                    className='ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%]'
                    size='small'
                    id='color'
                    name='color'
                    label='Color'
                    variant='outlined'
                    value={addCarForm.values.color}
                    onChange={addCarForm.handleChange}
                  />
                </div>
                <div className='m-5 block sm:block md:flex lg:flex xl:flex'>
                  <h4 className='text-lg py-2'>Seats</h4>
                  <TextField
                    className='ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%]'
                    size='small'
                    id='seats'
                    name='seats'
                    label='Seats'
                    variant='outlined'
                    type='number'
                    value={addCarForm.values.seats}
                    onChange={addCarForm.handleChange}
                  />
                </div>
                {/* <div className='m-5 block sm:block md:flex lg:flex xl:flex'>
                  <h4 className='text-lg py-2'>Car Interior Images</h4>
                  <div className='ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%] relative  w-[60%]'>
                    <div className='border-dotted border-2 border-[#000] p-3 text-center'>
                      <input type='file' id='interior_images' name='interior_images' onChange={addCarForm.handleChange} />
                    </div>
                  </div>
                </div>
                <div className='m-5 block sm:block md:flex lg:flex xl:flex'>
                  <h4 className='text-lg py-2'>Car Exterior Images</h4>
                  <div className='ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%] relative  w-[60%]'>
                    <div className='border-dotted border-2 border-[#000] p-3 text-center'>
                      <input type='file' id='exterior_images' name='exterior_images' onChange={addCarForm.handleChange} />
                    </div>
                  </div>
                </div> */}
                <div className='m-5 block sm:block md:flex lg:flex xl:flex'>
                  <h4 className='text-lg py-2'>Price</h4>
                  <TextField
                    className='ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%]'
                    size='small'
                    id='price'
                    name='price'
                    label='Price'
                    variant='outlined'
                    type='number'
                    value={addCarForm.values.price}
                    onChange={addCarForm.handleChange}
                  />
                </div>
                <div className='m-5 text-right'>
                  <Button
                    className='bg-[#34609d] hover:bg-[#34609d] hover:opacity-75 px-5 text-white'
                    onClick={()=> handleAddCarInDb()}                  
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </Grid>
          </Grid>
        </div>
      </Box>
    </>
  );
}
