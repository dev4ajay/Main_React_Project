import Grid from '@mui/material/Grid';
import React from 'react';
import Banner from '../../public/services/banner.jpg'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import Image from 'next/image';

const myData = () =>{

    return(
        <>
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
            <div className='text-left absolute bottom-32 px-5 sm:px-5 md:px-5 lg:px-5 xl:px-44'>
                <h1 className='text-center text-white text-2xl sm:text-2xl md:text-4xl lg:text-6xl xl:text-6xl font-semibold'>Innova<span className='text-[#67b5fe]'> Crysta</span></h1>
            </div>
        </Grid>
    </Grid>
    <Grid container>
        <Grid item xs={12} className='text-center py-10'>
            <h3 className='text-xl sm:text-xl md:text-4xl lg:text-4xl xl:text-4xl uppercase leading-snug font-black py-1'>Our Best Services For You</h3>
        </Grid>
    </Grid>
    <Grid container className='px-[100px]'>
    <Grid item xs={2} className='text-center'>
        <span className='bg-[#e8dd34] hover:bg-[#e8dd34] p-3 cursor-pointer hover:opacity-75 rounded'>
        <FacebookOutlinedIcon className='my-3'/>
        </span>
        <br />
        <span className='bg-[#e8dd34] hover:bg-[#e8dd34] p-3 cursor-pointer hover:opacity-75 rounded'>
        <InstagramIcon className='my-3'/>
        </span>
        <br />
        <span  className='bg-[#e8dd34] hover:bg-[#e8dd34] p-3 cursor-pointer hover:opacity-75 rounded'>
        <TwitterIcon className='my-3'/>
        </span>
        <br />
        <span className='bg-[#e8dd34] hover:bg-[#e8dd34] p-3 cursor-pointer hover:opacity-75 rounded'>
        <WhatsAppIcon className='my-3'/>
        </span>
    </Grid>
        <Grid item xs={10}>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <br />
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <br />
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </Grid>
    </Grid>
    </>
    )
}

export default myData;