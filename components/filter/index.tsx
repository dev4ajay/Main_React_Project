import * as React from 'react';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useEffect, useState } from 'react';
import { axiosInstance } from '@/pages/_app';



function valuetext(value: number) {
    return `${value}°C`;
  }

export default function OurCarsFilter({uniqueCars, passengerCapacity}) {

    const [value, setValue] = React.useState<number[]>([500, 20000]);

    const handleChange = (event: Event, newValue: number | number[]) => {
      setValue(newValue as number[]);
    }; 

    const [selectedCarModel, setSelectedCarModel] = useState<string[]>([]);
    const [selectedPassengerCapacities, setSelectedPassengerCapacities] = useState<string[]>([]);



    const handleCarModelSelection = (car: string) => {
        if (selectedCarModel.includes(car)) {
          setSelectedCarModel(selectedCarModel.filter((selected) => selected !== car));
        } else {
          setSelectedCarModel([...selectedCarModel, car]);
        }
      };
      
      const handlePassengerCapacitySelection = (capacity: string) => {
        if (selectedPassengerCapacities.includes(capacity)) {
          setSelectedPassengerCapacities(selectedPassengerCapacities.filter((selected) => selected !== capacity));
        } else {
          setSelectedPassengerCapacities([...selectedPassengerCapacities, capacity]);
        }
      };
 

    return (
        <>
            <Grid container >
                <Grid item xs={12}>
                    <div className='drop-shadow-md bg-white px-8 py-5 mx-0 sm:mx-0 md:mx-0 lg:mx-10 xl:mx-10 rounded'>
                        <h3 className='text-lg font-bold'>Why book one-way trip with us?</h3>
                    </div>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12}>
                    <div className='drop-shadow-md bg-white px-8 py-5 mx-0 sm:mx-0 md:mx-0 lg:mx-10 xl:mx-10 my-5 rounded'>
                        <div className='flex justify-between'>
                            <h3 className='text-lg font-bold'>Price Filter</h3>
                            {/* <p className='text-xs upercase py-1 font-bold'>RESET </p> */}
                        </div>
                        <div className='py-3'>
                            <Box sx={{ width: '100%' }}>
                            <Slider
                            getAriaLabel={() => 'Temperature range'}
                            value={value}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                            getAriaValueText={valuetext}
                            min={100}
                            max={50000}
                            />
                            </Box>
                        </div>
                        <div className='flex justify-between'>
                            <p className='text-xs upercase py-1 '>INR - 0.00</p>
                            <p className='text-xs upercase py-1 '>INR - 50,000 </p>
                        </div>
                    </div>

                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12}>
                    <div className='drop-shadow-md bg-white px-8 py-5 mx-0 sm:mx-0 md:mx-0 lg:mx-10 xl:mx-10 my-5 rounded'>
                        <div className='flex justify-between'>
                            <h3 className='text-lg font-bold'>Car model</h3>
                            <p className='text-xs upercase py-1 font-bold'>RESET </p>
                        </div>
                        <FormGroup>
                              {uniqueCars?.map((car, index) => (
                            <div key={index}>
                            <FormControlLabel
                                control={
                                <Checkbox
                                    checked={selectedCarModel.includes(car)}
                                    onChange={() => handleCarModelSelection(car)}
                                />
                                }
                                label={car}
                            />
                            </div>
                        ))}  
                        </FormGroup>

                    </div>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12}>
                    <div className='drop-shadow-md bg-white px-8 py-5 mx-0 sm:mx-0 md:mx-0 lg:mx-10 xl:mx-10 my-5 rounded'>
                        <div className='flex justify-between'>
                            <h3 className='text-lg font-bold'>Passenger capacity</h3>
                            <p className='text-xs upercase py-1 font-bold'>RESET </p>
                        </div>
                        <FormGroup>
                            {passengerCapacity.map((capacity, index) => (
                            <div key={index}>
                            <FormControlLabel
                                control={
                                <Checkbox
                                    checked={selectedPassengerCapacities.includes(capacity)}
                                    onChange={() => handlePassengerCapacitySelection(capacity)}
                                />
                                }
                                label={`${capacity} Passenger Seats`}
                            />
                            </div>
                        ))}
                        </FormGroup>
                    </div>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12}>
                    <div className='drop-shadow-md bg-white px-8 py-5 mx-0 sm:mx-0 md:mx-0 lg:mx-10 xl:mx-10 my-5 rounded text-center'>
                        <p className='font-bold'>Back to Top <span className='bg-[#29aae1] text-white py-1 rounded-full text-xs'><ArrowUpwardIcon /></span></p>
                    </div>
                </Grid>
            </Grid>
        </>
    );
}
