import * as React from 'react';
import { useState } from 'react';
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
import { useFormik } from 'formik';
import * as yup from 'yup';
import { axiosInstance } from '@/pages/_app';
import router from 'next/router';
import { InputAdornment } from '@mui/material';
import Loader from '@/components/loader';

const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  contact_number: yup.string().required('Contact Number is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  commission_rate: yup
    .number()
    .typeError('Commission Rate must be a number')
    .required('Commission Rate is required'),
  address: yup.string().required('Address is required'),
});

export default function Bookings() {
  const [isLoading, setIsLoading] = useState(false);
  const [car, setcar] = React.useState('');

  const formik = useFormik({
    initialValues: {
      name: '',
      contact_number: '',
      email: '',
      commission_rate: '',
      address: '',
    },

    validationSchema: validationSchema,
    onSubmit: (values) => {
      setIsLoading(true)
      // Handle API call to create vendor with form values
      console.log(values);
      axiosInstance
      .post('/api/vendors/vendor', values)
      .then((response) => {
        // Handle successful response
        setIsLoading(false)
        router.replace('/admin/vendors')
      })
      
      .catch((error) => {
        // Handle error
        setIsLoading(false)
        console.error(error);
      });
    },
  });
  const onKeyPress = (e) => {
    const charCode = e.which ? e.which : e.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      e.preventDefault();
    }
  };

  
  if(isLoading) {
    return (
      <Loader isLoading={isLoading} />
    )
  }
  
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <AdminHeader />
        <div className="pt-3 px-5 castomRight w-full">
          <Grid container>
            <Grid item xs={12}>
              <div className="bg-[#ecf2ff] m-5 p-7 rounded-2xl">
                <h1 className="text-xl font-extrabold text-[#34609d] ">
                  Add Vendors
                </h1>
                <p className="py-2 font-semibold text-xs text-[#34609d]">
                  Home <FiberManualRecordIcon className="text-sm px-1" />
                  Vendors
                </p>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6} className="py-0 sm:py-0 md:py-0 lg:py-5 xl:py-5">
              <form onSubmit={formik.handleSubmit}>
                <div className="m-5 block sm:block md:flex lg:flex xl:flex">
                  <h4 className="text-lg py-2">Name</h4>
                  <TextField
                    placeholder="Name"
                    className="ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%]"
                    size="small"
                    id="name"
                    name="name"
                    variant="outlined"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                  />
                </div>
                <div className="m-5 block sm:block md:flex lg:flex xl:flex">
                  <h4 className="text-lg py-2">Contact Number</h4>
                  <TextField
                    inputProps={{ maxLength: 10 }}
                    type='tel'
                    placeholder="Contact Number"
                    className="ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%]"
                    size="small"
                    id="contact_number"
                    name="contact_number"
                    variant="outlined"
                    value={formik.values.contact_number}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.contact_number &&
                      Boolean(formik.errors.contact_number)
                    }
                    helperText={
                      formik.touched.contact_number &&
                      formik.errors.contact_number
                    }
                    InputProps={{
                      startAdornment: <InputAdornment position="start">+91</InputAdornment>,
                    }}
                    onKeyDown={(e)=> onKeyPress(e)}
                  />
                </div>
                <div className="m-5 block sm:block md:flex lg:flex xl:flex">
                  <h4 className="text-lg py-2">Email</h4>
                  <TextField
                    placeholder="Email"
                    className="ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%]"
                    size="small"
                    id="email"
                    name="email"
                    variant="outlined"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                </div>
              </form>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6} className="py-0 sm:py-0 md:py-0 lg:py-5 xl:py-5">
            <form onSubmit={formik.handleSubmit}>
            <div className="m-5 block sm:block md:flex lg:flex xl:flex">
                  <h4 className="text-lg py-2">Commission Rate</h4>
                  <TextField
                    placeholder="Commission Rate"
                    className="ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%]"
                    size="small"
                    id="commission_rate"
                    name="commission_rate"
                    variant="outlined"
                    value={formik.values.commission_rate}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.commission_rate &&
                      Boolean(formik.errors.commission_rate)
                    }
                    helperText={
                      formik.touched.commission_rate &&
                      formik.errors.commission_rate
                    }
                  />
              </div>
              <div className="m-5 block sm:block md:flex lg:flex xl:flex">
                <h4 className="text-lg py-2">Address</h4>
                <TextField
                  placeholder="Address"
                  className="ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%]"
                  size="small"
                  id="address"
                  name="address"
                  variant="outlined"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  error={formik.touched.address && Boolean(formik.errors.address)}
                  helperText={formik.touched.address && formik.errors.address}
                />
              </div>
              <div className="m-5 text-right">
                <Button
                  type="submit"
                  className="bg-[#34609d] hover:bg-[#34609d] hover:opacity-75 px-5 text-white"
                       
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
