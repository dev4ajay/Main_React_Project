import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import ResponsiveTabel from 'components/responsivetabletwo'
import Filter from 'components/filtersidebar';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import AdminHeader from 'components/adminheader'
import Button from '@mui/material/Button';
import { Checkbox, CircularProgress, Modal } from '@mui/material';
import Image from 'next/image'
import Avtar from '../../../public/avtar.jpg'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { axiosInstance } from '@/pages/_app';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';


export default function Cars() {
    const [rows, setRows] = useState([]);
    const [headers, setHeaders] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalImages, setModalImages] = useState([]);

    const[search, setSearch] = useState('')

    let rupee = new Intl.NumberFormat("en-IN", {
        style: 'currency',
        currency: 'INR'
    })

    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axiosInstance.get('/api/cars/car');
            const data = response.data;
      
            // Extract the headers from the first car object in the data array
            const car = data[0];
            const headers = Object.keys(car).map((key) => ({
              key,
              value: key
                .split('_')
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' '),
            }));
      
            // Remove createdAt and updatedAt headers if needed
            const excludedHeaders = ['createdAt', 'updatedAt'];
            const filteredHeaders = headers.filter(
              (header) => !excludedHeaders.includes(header.key)
            );
            setLoading(false);
            setHeaders(filteredHeaders);
      
            // Transform the received data into the format expected by the component
            const transformedData = data.map((car) => {
              const row = {};
              Object.keys(car).forEach((key) => {
                if (!excludedHeaders.includes(key)) {
                  if (key === 'interior_images' || key === 'exterior_images') {
                    // Convert the stringified array of image URLs to an actual array
                    const imageArray = car[key];
      
                    // Add a "View Images" button that opens a modal or navigates to a separate page
                    row[key] = (
                      <div>
                        {imageArray.length > 0 && (
                          <button onClick={() => handleViewImages(imageArray)}>
                            View Images
                          </button>
                        )}
                      </div>
                    );
                  } else {
                    row[key] = car[key];
                  }
                }
              });
              return row;
            });
      
            setFilteredRows(transformedData);
            setRows(transformedData);
            console.log('data', transformedData);
          } catch (error) {
            setLoading(false);
            console.error('Error fetching car data:', error);
          }
        };
      
        fetchData();
      }, []);
      
      const handleViewImages = (imageArray) => {
        // Prepare the images array for the react-image-gallery component
        const images = imageArray.map((imageUrl) => ({
          original: imageUrl,
          thumbnail: imageUrl,
        }));
      
        // Implement your logic to display the images, such as opening a modal or navigating to a separate page
        // Here, we'll use a simple modal example
        setIsModalOpen(true);
        setModalImages(images);
      };
      

      const [filteredRows, setFilteredRows] = useState(rows)     
      
    
    
    const router = useRouter();

    const handleSearch = (requestString) => {
        if (requestString !== null && requestString !== undefined) {
          setSearch(requestString);
          const filteredData = rows.filter((item) =>
            item.car_name.toLowerCase().includes(requestString.toLowerCase())
          );
          setFilteredRows(filteredData);
        } else {
          setFilteredRows(rows);
        }
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
    //   let result = await axiosInstance.delete(`/api/cars/car?id=${id}`)
    //   .then((response) => {
    //     // Handle successful response
    //     console.log(response.data);
    //     router.replace('/admin/cars');
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
                            <h1 className='text-xl font-extrabold text-[#34609d] '>Cars</h1>
                            <p className='py-2 font-semibold text-xs text-[#34609d]'>Home <FiberManualRecordIcon className='text-sm px-1' /> Cars</p>
                        </div>
                    </Grid>
                    <Grid xs={12} className='py-2 px-5'>
                        <div className='block sm:block md:flex lg:flex xl:flex justify-between'>
                        <TextField
                                    onChange={(e) => handleSearch(e.target.value)}
                                    id="outlined-start-adornment"
                                    sx={{ width: '30ch' }}
                                    size='small'
                                    placeholder='Search Cars'
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
                                    }}

                                />
                            <div className='ml-[auto] flex justify-between'>
                            <Button className='bg-[#34609d] hover:bg-[#34609d] hover:opacity-50 m-0 px-5 text-white rounded-xl' onClick={() => router.push('/admin/add-cars')}>Add Cars</Button>   
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
                        {loading ? (
                            <div className='text-center py-5'>
                              <CircularProgress />
                            </div>
                          )  : filteredRows.length > 0 ?
                            <ResponsiveTabel 
                            rows={filteredRows}
                            headers={headers}
                            onEditClick={(row) => {router.push(`cars/edit-car/${row?.id}`)}} 
                            // onDeleteClick={(row)=> deleteUser(row?.id)}                                      
                            /> :(
                            <div className='bg-[#ebf3fe] text-center m-5 py-5 text-[#6ca8fb]'>
                                <p><SentimentVeryDissatisfiedIcon/></p>
                                <p className='text-center pt-3 text-xl text-[#6ca8fb]'>No Records Found</p>
                            </div>
                        ) }
                        </div>
                    </Grid>
                </Grid>
            </div>
            </Box>

            {isModalOpen && (
                <Modal open={isModalOpen} onClose={()=> {
                    setIsModalOpen(false);
                    setModalImages([]);
                }}>
                    <div className="modal-wrapper flex justify-center items-center">
                    <div className="modal-content bg-white rounded-lg p-4">
                        <button
                        className="absolute top-2 right-2 bg-gray-500 text-white px-4 py-2 rounded-md"
                        onClick={() => {
                            setIsModalOpen(false);
                            setModalImages([]);
                        }}
                        >
                        Close
                        </button>
                        <div className='imageGallery'>
                        <ImageGallery items={modalImages}/>
                        </div>
                    </div>
                    </div>
                </Modal>
                )}
        </>
    );
}