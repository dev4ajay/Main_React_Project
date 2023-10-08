import { useState } from 'react';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import ResponsiveTabel from 'components/responsivetable'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import Filter from 'components/filtersidebar';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import AdminHeader from 'components/adminheader'
import Button from '@mui/material/Button';
import { Checkbox } from '@mui/material';
import Image from 'next/image'
import Avtar from '../../../public/avtar.jpg'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

export default function Bookings() {

    const[search, setSearch] = useState('')
    const rows = [
        { id: 1, blogImage: <div className='flex'>
        <Image src={Avtar} width={50} height={30} alt='' />
        </div>, blogHeading: 'kurukshetra', blogContent: 'Lorm Ipsum is Dummy', Blogdate: '13-05-2023', },
        { id: 2, blogImage: <div className='flex'>
        <Image src={Avtar} width={50} height={30} alt='' />
        </div>, blogHeading: 'Mumbai', blogContent: 'Lorm Ipsum is Dummy', Blogdate: '12-05-2023', },
        { id: 3, blogImage: <div className='flex'>
        <Image src={Avtar} width={50} height={30} alt='' />
        </div>, blogHeading: 'Vaishno devi', blogContent: 'Lorm Ipsum is Dummy', Blogdate: '11-05-2023', },
        { id: 4, blogImage: <div className='flex'>
        <Image src={Avtar} width={50} height={30} alt='' />
        </div>, blogHeading: 'Amritsar', blogContent: 'Lorm Ipsum is Dummy', Blogdate: '11-05-2023', },
        { id: 5, blogImage: <div className='flex'>
        <Image src={Avtar} width={50} height={30} alt='' />
        </div>, blogHeading: 'Shimla', blogContent: 'Lorm Ipsum is Dummy', Blogdate: '11-05-2023', },
        { id: 6, blogImage: <div className='flex'>
        <Image src={Avtar} width={50} height={30} alt='' />
        </div>, blogHeading: 'Delhi', blogContent: 'Lorm Ipsum is Dummy', Blogdate: '11-05-2023', },
        { id: 7, blogImage: <div className='flex'>
        <Image src={Avtar} width={50} height={30} alt='' />
        </div>, blogHeading: 'Solan', blogContent: 'Lorm Ipsum is Dummy', Blogdate: '11-05-2023', },
      ];
      
      const [filteredRows, setFilteredRows] = useState(rows)      

      const headers = [
        { key: 'blogImage', value: "Blog Image"},
        { key: 'blogHeading', value: 'Blog Heading' },
        { key: 'blogContent', value: 'Blog Content' },
        { key: 'Blogdate', value: 'Blog Date' },
        { key: '', value: '' }, // empty header for actions column
      ];

    
    const router = useRouter();

    const handleSearch = (requestString) => {
        if(requestString !== null || requestString !== undefined) {
            setSearch(requestString)
            const filteredData =  rows.filter((item)=> {
             return item.blogHeading.includes(requestString)
            })
            setFilteredRows(filteredData)
        } else {
            setFilteredRows(rows)
        }           
      }

      const filterData = [
        {
            type: "radio",
            data: [
                { id: 1, fromCity: 'Delhi' },
                { id: 2, fromCity: 'chandigarh' },
                { id: 3, fromCity: 'Panchkula' },
                { id: 4, fromCity: 'Zirakpur' },
                { id: 5, fromCity: 'Banur' },
                { id: 6, fromCity: 'Patiala' },
                { id: 7, fromCity: 'Ludhiana' },
                { id: 8, fromCity: 'Mandi' },
                { id: 8, fromCity: 'Solan' },
            ]
        },
        {
            type: 'radio',
            data: [
                { id: 1, toCity: 'Amritsar' },
                { id: 2, toCity: 'Patiala' },
                { id: 3, toCity: 'Panchkula' },
            ]
        },
        {
            type: 'checkbox',
            data: [
                { id: 1, carName: 'Swift' },
                { id: 2, carName: 'Inova' },
                { id: 3, carName: 'Brezza' },
                { id: 3, carName: 'i20' },
            ]
        }
    ]

    const filterHeaders = [
        { key: 'fromCity', value: "From City" },
        { key: 'toCity', value: "To City" },
        { key: 'carName', value: "Cars" },
    ];

    return (
        <>
        <Box sx={{display:'flex'}}>
            <AdminHeader/>
            <div className='pt-3 px-5 castomRight w-full'>
                <Grid container>
                    <Grid item xs={12}>
                        <div className='bg-[#ecf2ff] m-5 p-7 rounded-2xl'>
                            <h1 className='text-xl font-extrabold text-[#34609d] '>Blogs</h1>
                            <p className='py-2 font-semibold text-xs text-[#34609d]'>Home <FiberManualRecordIcon className='text-sm px-1' /> Blogs</p>
                        </div>
                    </Grid>
                    <Grid xs={12} className='py-2 px-5'>
                        <div className='block sm:block md:flex lg:flex xl:flex justify-between'>
                        <TextField
                                    onChange={(e) => handleSearch(e.target.value)}
                                    id="outlined-start-adornment"
                                    sx={{ width: '30ch' }}
                                    size='small'
                                    placeholder='Search Blogs'
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
                                    }}

                                />
                            <div className='ml-[auto] flex justify-between'>
                            <Button className='bg-[#34609d] hover:bg-[#34609d] hover:opacity-50 m-0 px-5 text-white rounded-xl' onClick={() => router.push('/admin/add-blogs')}>Add Blogs</Button>   
                              <div className='hidden'>
                              <Filter filterRows={filterData} filterHeaders={filterHeaders} />
                              </div>    
                            </div>
                        </div>
                    </Grid>
                </Grid>
                <Grid container >
                    <Grid xs={12}>
                        <div className='px-0 py-5 border-[1px] m-6 rounded-lg' >
                        {
                            filteredRows.length > 0 ?  <ResponsiveTabel 
                            rows={filteredRows} headers={headers}                                    
                            /> :
                            <>
                            <div className='bg-[#ebf3fe] text-center m-5 py-5 text-[#6ca8fb]'>
                                <p><SentimentVeryDissatisfiedIcon/></p>
                                <p className='text-center pt-3 text-xl text-[#6ca8fb]'>No Records Found</p>
                            </div>
                            </>
                        }
                        </div>
                    </Grid>
                </Grid>
            </div>
            </Box>
        </>
    );
}