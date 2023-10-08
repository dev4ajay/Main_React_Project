import { Grid } from '@mui/material';
import * as React from 'react';
import Image from 'next/image';
import Banner from '../../public/blog/banner.jpg'
import { useState } from 'react';

const FAQ = () => {
    return(
        <div>
            <Grid container>
                <Grid item xs={12} className='relative'>
                <div>
                    <Image
                    className='relative'
                    style={{
                        width: '100%',
                        height: '400px'
                    }}
                    src={Banner}
                    alt="Picture of the author"
                    />
                </div>
                <div className='text-left absolute bottom-32  px-5 sm:px-5 md:px-5 lg:px-44 xl:px-44'>
                    <h1 className='text-center text-white text-4xl sm:text-4xl md:text-4xl lg:text-6xl xl:text-6xl font-semibold uppercase'>F
 <span className='text-[#67b5fe]'>AQ</span></h1>
                </div>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} className='text-center pt-10'>
                    <h3 className='text-2xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-4xl uppercase leading-snug font-black py-1'>Frequently Asked Questions</h3>
                </Grid>
            </Grid>
            <Grid container className='px-5 sm:px-5 md:px-5 lg:px-5 xl:px-44 justify-center py-10'>
              <Grid item xs={12} sm={12} md={6} lg={12} xl={6} >
                <div className='py-5 px-2'>
                 <h3 className='font-bold text-2xl'>How to book a cab to Tripecca?</h3>
                 <p>Booking a cab on Tripecca is an easy task. All you have to do is visit the website and get in touch with our team. Our team will revert back soon and help you in selecting the best available package with the cab.</p>
                 </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={12} xl={6} >
                <div className='py-5 px-2'>
                 <h3 className='font-bold text-2xl'>Can you book a cab in advance for convenience?</h3>
                 <p>Absolutely, you can book a cab in advance for convenience. You can visit the website for the same. By booking in advance you can have peace of mind. Tripecca is committed to providing reliable convenient booking services. </p>
                 </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={12} xl={6} >
                <div className='py-5 px-2'>
                 <h3 className='font-bold text-2xl'>What are some tips for having a successful trip?</h3>
                 <p>Here are some tips to make your trip memorable and successful: </p>
                 <ul className='list-disc pl-5'>
                    <li>Research your destination well with all the accommodation options.</li>
                    <li>Set realistic and budget-friendly expectations.</li>
                    <li>Get in touch with the car rental services company to explore the best cabs for the available routes.</li>
                    <li>Adhere to the local guidelines and ensure your personal safety.</li>
                    <li>Stay updated on local news and culture.</li>
                 </ul>
                 </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={12} xl={6} >
                <div className='py-5 px-2'>
                 <h3 className='font-bold text-2xl'>What are some tips for booking a cab?</h3>
                 <p>Here are some of the tips that you should consider before booking a cab: </p>
                 <ul className='list-disc pl-5'>
                    <li>Make sure you explore enough options.</li>
                    <li>Compare the price among different vehicles.</li>
                    <li>Making advanced booking as soon as possible.</li>
                 </ul>
                 </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={12} xl={6} >
                <div className='py-5 px-2'>
                 <h3 className='font-bold text-2xl'>How do I choose a tour package provided by Tripecca?</h3>
                 <p>You can decide on your interests and consider the budget accordingly before choosing a tour package provided by Tripecca. Don’t hesitate to contact Tripecca customer services. We will be more than happy to help you choose the perfect package for your needs</p>
                 </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={12} xl={6} >
                <div className='py-5 px-2'>
                 <h3 className='font-bold text-2xl'>What makes Tripecca different from other rental car services?</h3>
                 <p>Tripecca is a user-friendly platform that offers customisation and flexible rental options. We have a wide range of vehicle options ensuring that the customers can find a car that suits their needs and preferences. Furthermore, we prioritise customer safety above all.</p>
                 </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={12} xl={6} >
                <div className='py-5 px-2'>
                 <h3 className='font-bold text-2xl'>What types of vehicles are available for taxi services?</h3>
                 <p>We have a wide range of options when it comes to the availability of taxi services. Some of our cars include SUVs, luxury cars, and economy cars. You can book an appointment with us to learn more about our services.</p>
                 </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={12} xl={6} >
                <div className='py-5 px-2'>
                 <h3 className='font-bold text-2xl'>What are the different services provided by Tripecca?</h3>
                 <p>Tripecca offers a range of services to meet your transportation needs. Here are some of them:</p>
                 <ul className='list-disc pl-5'>
                    <li>Taxi Services</li>
                    <li>Cab Booking</li>
                    <li>Car rental services</li>
                    <li>Outstation cabs</li>
                 </ul>
                 </div>
            </Grid>
            </Grid>
        </div>
    )
}

export default FAQ;