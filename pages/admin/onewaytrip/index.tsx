import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import ResponsiveTable from 'components/responsivetabletwo';
import Filter from 'components/filtersidebar';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Button from '@mui/material/Button';
import AdminHeader from 'components/adminheader';
import { Checkbox, CircularProgress } from '@mui/material';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { axiosInstance } from '@/pages/_app';
import row from 'antd/es/row';
import { METHODS } from 'http';


export default function Trips() {
  const [search, setSearch] = useState('');
  const [rows, setRows] = useState([]);
  const [filteredRows, setFilteredRows] = useState([]);
  const [headers, setHeaders] = useState([]);

  const router = useRouter();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('/api/trips/trip?tripType=one_way');
        const data = response.data;
           
        // Extract the headers from the data
        const headers = [
          { key: 'id', value: 'Id' },
          { key: 'trip_type', value: 'Trip Type' },
          { key: 'car_id', value: 'Car Id' },
          { key: 'vendor_id', value: 'Vendor Id' },
          { key: 'pick_location', value: 'Pick Location' },
          { key: 'drop_location', value: 'Drop Location' },
          { key: 'total_distance_km', value: 'Total Distance (km)' },
          { key: 'total_price', value: 'Total Price' },
        ];

        setHeaders(headers);
        setRows(data);
        setFilteredRows(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error('Error fetching trip data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (requestString) => {
    if (requestString) {
      setSearch(requestString);
      const filteredData = rows.filter((item) =>
        item.pick_location.toLowerCase().includes(requestString.toLowerCase())
      );
      setFilteredRows(filteredData);
    } else {
      setFilteredRows(rows);
    }
  };

  const filterData = [
    {
      type: 'radio',
      data: [
        { id: 1, fromCity: 'Delhi' },
        { id: 2, fromCity: 'Chandigarh' },
        { id: 3, fromCity: 'Panchkula' },
        { id: 4, fromCity: 'Zirakpur' },
        { id: 5, fromCity: 'Banur' },
        { id: 6, fromCity: 'Patiala' },
        { id: 7, fromCity: 'Ludhiana' },
        { id: 8, fromCity: 'Mandi' },
        { id: 9, fromCity: 'Solan' },
      ],
    },
    {
      type: 'radio',
      data: [
        { id: 1, toCity: 'Amritsar' },
        { id: 2, toCity: 'Patiala' },
        { id: 3, toCity: 'Panchkula' },
        { id: 4, toCity: 'Zirakpur' },
        { id: 5, toCity: 'Banur' },
        { id: 6, toCity: 'Mohali' },
        { id: 7, toCity: 'Delhi' },
        { id: 8, toCity: 'Chandigarh' },
        { id: 9, toCity: 'Ludhiana' },
      ],
    },
  ];

  const handleRowClick = (rowData) => {
    router.push(`/trip/${rowData.id}`);
  };

  // async function deleteUser(id)
  // {
  //   let result = await axiosInstance.delete(`/api/trips/trip?id=${id}`)
  //   .then((response) => {
  //     // Handle successful response
  //     console.log(response.data);
  //     router.replace('/admin/onewaytrip');
  //   })
  //     console.log('response', result)
  // }

    return (
        <>
        <Box sx={{display:'flex'}}>
            <AdminHeader/>
            <Box className='pt-3 px-5 w-full castomRight'>
                <Grid container>
                    <Grid item xs={12}>
                        <div className='bg-[#ecf2ff] m-5 p-7 rounded-2xl'>
                            <h1 className='text-xl font-extrabold text-[#34609d] '>One Way Trip</h1>
                            <p className='py-2 font-semibold text-xs text-[#34609d]'>Home <FiberManualRecordIcon className='text-sm px-1' /> Destinations
                            <FiberManualRecordIcon className='text-sm px-1' />One Way Trip</p>
                        </div>
                    </Grid>
                    <Grid xs={12} className='py-2 px-5'>
                        <div className='block sm:block md:flex lg:flex xl:flex justify-between'>
                        <TextField
                                    onChange={(e) => handleSearch(e.target.value)}
                                    id="outlined-start-adornment"
                                    sx={{ width: '30ch' }}
                                    size='small'
                                    placeholder='Search Trip'
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
                                    }}

                                />
                            <div className='ml-[auto] flex justify-between'>
                             <Button className='bg-[#34609d] hover:bg-[#34609d] hover:opacity-50 m-0 px-5 text-white rounded-xl' onClick={() => router.push('/admin/add-onewaytrip')}>Add OneWay Trip</Button>   
                              <div className='hidden'>
                              {/* <Filter filterRows={filterData} filterHeaders={filterHeaders} /> */}
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
                                )  :filteredRows.length > 0 ? (
                                  <ResponsiveTable 
                                    rows={filteredRows}
                                    headers={headers}
                                    onEditClick={(row) => {router.push(`/admin/edit-onewaytrip/${row?.id}`)
                                      }                  
                                    } 
                                    // onDeleteClick={(row)=> deleteUser(row?.id)}                                    
                                    /> 
                                   ) : (
                                    <div className='bg-[#ebf3fe] text-center m-5 py-5 text-[#6ca8fb]'>
                                        <p><SentimentVeryDissatisfiedIcon/></p>
                                        <p className='text-center pt-3 text-xl text-[#6ca8fb]'>No Records Found</p>
                                    </div>
                               ) }
                        </div>
                    </Grid>
                </Grid>
            </Box>
            </Box>
        </>
    );
}
