import * as React from "react";
import { useRouter } from "next/router";
import Grid from "@mui/material/Grid";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";

export default function ButtonAppBar() {
  const router = useRouter();
  return (
    <>
      <Grid container className="bg-[#e8dd34] mt-5">
        <Grid
          container
          className="px-10 sm:px-10 md:px-10 lg:px-44 xl:px-44 justify-center"
        >
          <h3 className=" text-xl px-4 py-3 font-bold">
            We are Ready to Take Your Call 24 Hours, 7 Days!
          </h3>
        </Grid>
      </Grid>
      <Grid
        container
        className="bg-[#1e2938] px-10 sm:px-10 md:px-10 lg:px-44 xl:px-44 pt-12 pb-5"
      >
        {/* <Grid item xs={12} sm={6} md={6} lg={3} xl={3} >
          <h3 className='font-bold text-white text-xl '>Delhi/NCR One-way</h3>
          <ul className='py-8'>
            <li className='text-white text-sm cursor-pointer'  onClick={() => router.push('/services')}>
              Noida to Chandigarh
            </li>
            <li className='text-white text-sm py-2 cursor-pointer' onClick={() => router.push('/services')}>
              Chandigarh to Noida
            </li>
            <li className='text-white text-sm py-2 cursor-pointer' onClick={() => router.push('/services')}>
              Gurgaon to Chandigarh
            </li>
            <li className='text-white text-sm py-2 cursor-pointer' onClick={() => router.push('/services')}>
              Chandigarh to Gurgaon
            </li>
            <li className='text-white text-sm py-2 cursor-pointer' onClick={() => router.push('/services')}>
              Ghaziabad to Chandigarh
            </li>
            <li className='text-white text-sm py-2 cursor-pointer' onClick={() => router.push('/services')}>
              Chandigarh to Ghaziabad
            </li>
            <li className='text-white text-sm py-2 cursor-pointer' onClick={() => router.push('/services')}>
              Chandigarh to Faridabad
            </li>
          </ul>
        </Grid> */}
        <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
          <h3 className="font-bold text-white text-xl ">POPULAR LOCATION</h3>
          <ul className="py-8">
            <li
              className="text-white text-sm cursor-pointer"
              onClick={() => router.push("/blog")}
            >
              Amritsar
            </li>
            <li
              className="text-white text-sm cursor-pointer  py-2"
              onClick={() => router.push("/blog")}
            >
              Shimla
            </li>
            <li
              className="text-white text-sm cursor-pointer  py-2"
              onClick={() => router.push("/blog")}
            >
              Manali
            </li>
            <li
              className="text-white text-sm cursor-pointer  py-2"
              onClick={() => router.push("/blog")}
            >
              Delhi
            </li>
            <li
              className="text-white text-sm cursor-pointer  py-2"
              onClick={() => router.push("/blog")}
            >
              Mussoorie
            </li>
            <li
              className="text-white text-sm cursor-pointer  py-2"
              onClick={() => router.push("/blog")}
            >
              Jaipur
            </li>
            <li
              className="text-white text-sm cursor-pointer  py-2"
              onClick={() => router.push("/blog")}
            >
              Nainital
            </li>
            <li
              className="text-white text-sm cursor-pointer  py-2"
              onClick={() => router.push("/blog")}
            >
              Chandigarh
            </li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
          <h3 className="font-bold text-white text-xl ">QUICK LINKS</h3>
          <ul className="py-8">
            <li
              className="text-white text-sm cursor-pointer"
              onClick={() => router.push("/about-us")}
            >
              About Us
            </li>
            <li
              className="text-white text-sm py-2 cursor-pointer"
              onClick={() => router.push("/faq")}
            >
              FAQ
            </li>
            <li
              className="text-white text-sm py-2 cursor-pointer"
              onClick={() => router.push("/privacy-policy")}
            >
              Privacy Policy
            </li>
            <li
              className="text-white text-sm py-2 cursor-pointer"
              onClick={() => router.push("/contact-us")}
            >
              Contact Us
            </li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
          <h3 className="font-bold text-white text-xl ">STAY CONNECTED</h3>
          <ul className="py-8">
            <li className="text-white text-sm">
              252, Kirpal Nagar, Paradise Colony, Chheharta, Amritsar, Punjab
              143105
            </li>
            <li className="text-white text-sm py-2">
              <a href={`tel:${7973062126}`}>Call +91 9888234767</a>
            </li>
            <li className="text-white text-sm py-2">
              <a href={`mailto:${" comapny@domain.com"}`}>
                {" "}
                Email - info@tripecca.com
              </a>
            </li>
          </ul>
        </Grid>
      </Grid>
      <Grid
        container
        className="bg-[#2e3846] py-5 px-10 sm:px-10 md:px-10 lg:px-44 xl:px-44"
      >
        <Grid item xs={12} sm={8} md={8} lg={8} xl={8}>
          <ul className="block sm:block md:flex lg:flex xl:flex">
            <li className="text-white text-xs">
              <a href={`tel:${9888234767}`}>
                <LocalPhoneIcon /> +91 9888234767
              </a>{" "}
            </li>
            <li
              className="text-white text-xs	py-5 sm:py-5 md:py-0 lg:py-0 xl:py-0
            px-0 sm:px-0 md:px-0 lg:px-5 xl:px-5"
            >
              <a href={`mailto:${" info@tripecca.com"}`}>
                {" "}
                <MailOutlineIcon /> info@tripecca.com{" "}
              </a>
            </li>
            <li className="text-white text-xs	">
              <a
                href={`${"https://goo.gl/maps/2PudXdghDyHd2YzLA"}`}
                target="blak"
              >
                <AddLocationAltIcon /> Paradise Colony, 252 Kirpal Nagar,
                Chheharta, Amritsar, Punjab
              </a>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
          <p className="text-white text-xs text-right">
            Copyright © 2023 All Rights Reserved
          </p>
        </Grid>
      </Grid>
    </>
  );
}
