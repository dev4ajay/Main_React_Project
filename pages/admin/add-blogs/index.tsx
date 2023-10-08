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


export default function Bookings() {

    const [car, setcar] = React.useState('');

    const handleCars = (event: SelectChangeEvent) => {
        setcar(event.target.value as string);
    };

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <AdminHeader />
                <Box sx={{ flexGrow: 1 }} className='pt-3 px-5 castomRight'>
                    <Grid container>
                        <Grid item xs={12}>
                            <div className='bg-[#ecf2ff] m-5  p-7 rounded-2xl'>
                                <h1 className='text-xl font-extrabold text-[#34609d] '>Add Blogs</h1>
                                <p className='py-2 font-semibold text-xs text-[#34609d]'>Home <FiberManualRecordIcon className='text-sm px-1' />Cars</p>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={6} xl={6} className='py-5'>
                            <div className='m-5 block sm:block md:flex lg:flex xl:flex'>
                                <h4 className='text-lg py-2'>Blog Heading</h4>
                                <TextField
                                    className='ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%]'
                                    size='small'
                                    placeholder='Blog Heading'
                                    id="outlined-basic"
                                    variant="outlined"
                                />
                            </div>
                            <div className='m-5 block sm:block md:flex lg:flex xl:flex'>
                                <h4 className='text-lg py-2'>Blog Content</h4>
                                <TextField
                                    className='ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%]'
                                    size='small'
                                    placeholder='Blog Content'
                                    id="outlined-basic"
                                    variant="outlined"
                                    sx={{
                                        width: '60%'
                                    }}
                                />
                            </div>
                            <div className='m-5 block sm:block md:flex lg:flex xl:flex'>
                                <h4 className='text-lg py-2' >Blog Image</h4>
                                <div className='ml-[auto] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%] relative'>
                                    <div className='border-dotted border-2 border-[#000] p-3 text-center'>
                                        <input type="file" />
                                    </div>
                                </div>
                            </div>
                            <div className='m-5 text-right'>
                                <Button className='bg-[#34609d] hover:bg-[#34609d] hover:opacity-75 px-5 text-white'>Submit</Button>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    );
}