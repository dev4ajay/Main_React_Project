import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import ResponsiveTable from 'components/responsivetabletwo';
import Filter from 'components/filtersidebar';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import AdminHeader from 'components/adminheader';
import Button from '@mui/material/Button';
import { Checkbox, CircularProgress } from '@mui/material';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { axiosInstance } from '@/pages/_app';

export default function Vendors() {

    const[search, setSearch] = useState('')
    const [rows, setRows] = useState([]);
    const [filteredRows, setFilteredRows] = useState([]);   
    
    let rupee = new Intl.NumberFormat("en-IN", {
        style: 'currency',
        currency: 'INR'
    })
      
      const headers = [
        { key: 'id', value: "ID"},
        { key: 'name', value: "Name"},
        { key: 'number', value: 'Contact Number' },
        { key: 'email', value: 'Email' },
        { key: 'commission', value: 'Commission Rate' },
        { key: 'address', value: 'Address' },
        { key: '', value: '' }, // empty header for actions column
      ];

    
    const router = useRouter();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axiosInstance.get('/api/vendors/vendor');
            const data = response.data;
      
            // Transform the received data into the format expected by the component
            const transformedData = data.map((vendor) => {
              return {
                id: vendor.id,
                name: vendor.name,
                number: vendor.contact_number,
                email: vendor.email,
                commission: rupee.format(vendor.commission_rate),
                address: vendor.address,
              };
            });
      
            setRows(transformedData);
            setFilteredRows(transformedData);
            setLoading(false);
          } catch (error) {
            setLoading(false);
            console.error('Error fetching vendor data:', error);
          }
        };
      
        fetchData();
      }, []);

      const handleSearch = (requestString) => {
        setSearch(requestString);
        const filteredData = rows.filter((item) =>
          item.name.toLowerCase().includes(requestString.toLowerCase())
        );
        setFilteredRows(filteredData);
      };

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

    // async function deleteUser(id)
    // {
    //   let result = await axiosInstance.delete(`/api/vendors/vendor?id=${id}`)
    //   .then((response) => {
    //     // Handle successful response
    //     console.log(response.data);
    //     router.replace('/admin/vendors');
    //   })
    //     console.log('response', result)
    // }

    return (
        <>
        <Box sx={{display:'flex'}}>
            <AdminHeader/>
            <div className='pt-3 px-5 castomRight w-full'>
                <Grid container>
                    <Grid item xs={12}>
                        <div className='bg-[#ecf2ff] m-5 p-7 rounded-2xl'>
                            <h1 className='text-xl font-extrabold text-[#34609d] '>Vendors</h1>
                            <p className='py-2 font-semibold text-xs text-[#34609d]'>Home <FiberManualRecordIcon className='text-sm px-1' />Vendors</p>
                        </div>
                    </Grid>
                    <Grid xs={12} className='py-2 px-5'>
                        <div className='block sm:block md:flex lg:flex xl:flex justify-between'>
                        <TextField
                                    onChange={(e) => handleSearch(e.target.value)}
                                    id="outlined-start-adornment"
                                    sx={{ width: '30ch' }}
                                    size='small'
                                    placeholder='Search Vendors'
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
                                    }}

                                />
                            <div className='ml-[auto] flex justify-between'>
                            <Button className='bg-[#34609d] hover:bg-[#34609d] hover:opacity-50 m-0 px-5 text-white rounded-xl' onClick={() => router.push('/admin/add-vendors')}>Add Vendors</Button>   
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
                        { loading ? (
                            <div className='text-center py-5'>
                              <CircularProgress />
                            </div>
                          ) : filteredRows.length > 0 ? (
                            <ResponsiveTable 
                            rows={filteredRows}
                            headers={headers}
                            onEditClick={(row) => {router.push(`/admin/edit-vendors/${row?.id}`)}} 
                            //  onDeleteClick={(row)=> deleteUser(row?.id)}                                  
                            /> ) :
                            (
                            <div className='bg-[#ebf3fe] text-center m-5 py-5 text-[#6ca8fb]'>
                                <p><SentimentVeryDissatisfiedIcon/></p>
                                <p className='text-center pt-3 text-xl text-[#6ca8fb]'>No Records Found</p>
                            </div>
                            )
                        }
                        </div>
                    </Grid>
                </Grid>
            </div>
            </Box>
        </>
    );
}