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
import { response } from 'express';

const VendorPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  const [vendor, setVendor] = useState(null);

  useEffect(() => {
    const fetchVendor = async () => {
      try {
        const response = await axiosInstance.get(`/api/vendors/vendor`);
        setVendor(response.data?.filter((item) => item.id.toString() === id)[0]);

      } catch (error) {
        console.error('Error fetching Vendor:', error);
      }
    };

    if (id) {
      fetchVendor();
    }
  }, [id]);

  const handleSubmit = async (updatedVendor) => {
    setIsLoading(true)
    try {
      const response = await axiosInstance.put(`/api/vendors/vendor?id=${id}`, updatedVendor);
      // Handle success or navigation to another page
      if(response.status === 200) {
        setIsLoading(false)
        router.back()
      }
    } catch (error) {
      setIsLoading(false)
      console.error('Error updating Vendor:', error);
    }
  };

  if (!vendor) {
    return ;
  }

  if(isLoading) {
    return (
      <>
      <Loader isLoading={isLoading} />
      </>
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
      <h1 className='text-lg'>Customer Name : <span className='font-bold	'>{vendor.name}</span> </h1>
      <h1  className='ml-[auto] text-lg'>Vendor ID: {id}</h1>
      </div>
    </Grid>
    <Grid item xs={12} sm={12} md={12} lg={6} xl={6} className="py-0 sm:py-0 md:py-0 lg:py-5 xl:py-5">
      <div className="m-5 block sm:block md:flex lg:flex xl:flex">
      <h4 className="text-lg py-2">Contact Number</h4>
        <TextField
          className="ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%]"
          size='small'
          value={vendor.contact_number}
          onChange={(e) => setVendor({ ...vendor, contact_number: e.target.value })}
        />
        </div>
        <div className="m-5 block sm:block md:flex lg:flex xl:flex">
        <h4 className="text-lg py-2">Customer Email</h4>
        <TextField
          className="ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%]"
          size='small'
          value={vendor.email}
          onChange={(e) => setVendor({ ...vendor, email: e.target.value })}
        />
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={6} xl={6} className="py-0 sm:py-0 md:py-0 lg:py-5 xl:py-5">
        
      <div className="m-5 block sm:block md:flex lg:flex xl:flex">
        <h4 className="text-lg py-2">Commission Rate</h4>
        <TextField
          className="ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%]"
          size='small'
          value={vendor.commission_rate}
          onChange={(e) => setVendor({ ...vendor, commission_rate: e.target.value })}
        />
        </div>
        <div className="m-5 block sm:block md:flex lg:flex xl:flex">
        <h4 className="text-lg py-2">Address</h4>
        <TextField
         className="ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%]"
          size='small'
          value={vendor. address}
          onChange={(e) => setVendor({ ...vendor, address: e.target.value })}
        />
        </div>
      {/* Render other booking fields for editing */}

      {/* Update form */}
      <form onSubmit={() => handleSubmit(vendor)} className='text-end m-5'>
        {/* Render input fields for updating booking */}
        <Button type="submit" variant="contained" className='bg-[#34609d] hover:bg-[#34609d] hover:opacity-50 m-0 px-5 text-white'>
          Update Vendor
        </Button>
      </form>
      </Grid>
      </Grid>
    </div>
    </Box>
    </>
  );
};

export default VendorPage;
