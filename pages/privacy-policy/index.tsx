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
                    <h1 className='text-center text-white text-4xl sm:text-4xl md:text-4xl lg:text-6xl xl:text-6xl font-semibold uppercase'>Privacy<span className='text-[#67b5fe]'> Policy</span></h1>
                </div>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} className='text-center pt-10'>
                    <p className='text-lg font-extrabold text-[#ffb300]'>Lorem Ipsum</p>
                    <h3 className='text-2xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-4xl uppercase leading-snug font-black py-1'>Privacy Policy</h3>
                </Grid>
            </Grid>
            <Grid container className='px-5 sm:px-5 md:px-5 lg:px-5 xl:px-44 justify-center py-10'>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
                <div className='py-2'>
                 <h3 className='font-bold text-2xl'>What is Lorem Ipsum?</h3>
                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                 </div>
                 <div className='py-2'>
                 <h3 className='font-bold text-2xl'>What is Lorem Ipsum?</h3>
                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                 </div>
                 <div className='py-2'>
                 <h3 className='font-bold text-2xl'>What is Lorem Ipsum?</h3>
                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                 </div>
                 <div className='py-2'>
                 <h3 className='font-bold text-2xl'>What is Lorem Ipsum?</h3>
                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                 </div>
            </Grid>
            </Grid>
        </div>
    )
}

export default FAQ;