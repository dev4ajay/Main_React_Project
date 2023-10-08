import * as React from "react";
import { useState, useRef } from "react";
import Grid from "@mui/material/Grid";
import Banner from "../../public/Contactus/banner.jpg";
import TextField from "@mui/material/TextField";
import Image, { StaticImageData } from "next/image";
import Head from "next/head";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Service() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();
  const showToastMessage = () => {
    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const sendEmail = (e) => {
    e.preventDefault();
    if (
      name == "" &&
      email == "" &&
      subject == "" &&
      phone == "" &&
      message == ""
    ) {
      toast.error("error notification !");
    } else {
      emailjs
        .sendForm(
          "service_yc2y6hh",
          "template_beenuvo",
          form.current,
          "OD-rfP1rgRNVbXyER"
        )
        .then(
          (result) => {
            console.log(result);
            if (result.status === 200) {
              showToastMessage();
            }
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <Grid container>
        <Grid item xs={12} className="relative">
          <div>
            <Image
              className="relative"
              style={{
                width: "100%",
                height: "400px",
              }}
              src={Banner}
              alt="Picture of the author"
            />
          </div>
          <div className="text-left absolute bottom-32  px-5 sm:px-5 md:px-5 lg:px-5 xl:px-44">
            <h1 className="text-center text-white text-2xl sm:text-2xl md:text-4xl lg:text-6xl xl:text-6xl font-semibold">
              CONTACT <span className="text-[#67b5fe]">US</span>
            </h1>
          </div>
        </Grid>
      </Grid>
      <Grid container className="px-5 sm:px-5 md:px-5 lg:px-5 xl:px-44">
        <Grid item xs={12} className="text-center py-10">
          <h3 className="text-4xl text-[#1c4680] uppercase leading-snug font-black py-1">
            GET IN TOUCH
          </h3>
          <p className="text-sm">
            Please Feel Free To Contact With Us For Any Query in Taxi Booking
          </p>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <form ref={form} onSubmit={sendEmail}>
            <div className="p-3">
              <div className="flex">
                <TextField
                  className="p-2"
                  size="small"
                  fullWidth
                  placeholder="Enter Your FullName"
                  name="from_name"
                  onChange={(e) => setName(e.target.value)}
                />
                <TextField
                  className="p-2"
                  size="small"
                  fullWidth
                  placeholder="Your E-mail*"
                  name="from_email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <TextField
                className="p-2"
                size="small"
                fullWidth
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter Phone Number"
                name="from_phone"
              />
              <TextField
                className="p-2"
                size="small"
                fullWidth
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Enter Your Subject "
                name="from_subject"
              />
              <TextField
                className="p-2"
                size="small"
                multiline
                rows={4}
                fullWidth
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter Your Message "
                name="from_message"
              />{" "}
              <button className="text-sm rounded-full bg-[#1c4680] text-white py-2 px-5 my-3">
                SEND MESSAGE
              </button>
              <ToastContainer />
            </div>
          </form>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <div className="p-5">
            <div className="p-2">
              <h5 className="font-bold">Our Address</h5>
              <p>
                252, Kirpal Nagar, Paradise Colony, Chheharta, Amritsar, Punjab
                143105
              </p>
            </div>
            <div className="p-2">
              <h5 className="font-bold">Contact no.</h5>
              <p>
                <a href={`tel:${7973062126}`}>+91 9888234767</a> <br />
              </p>
            </div>
            <div className="p-2">
              <h5 className="font-bold">Email Address</h5>
              <p>
                {" "}
                <a href={`mailto:${" comapny@domain.com"}`}>
                  {" "}
                  info@tripecca.com
                </a>
              </p>
            </div>
            <div className="p-2">
              <h5 className="font-bold">Website</h5>
              <p>www.tripecca.com</p>
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} className="my-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212.3236697124077!2d74.78492620538968!3d31.628956817223767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391965e78a40ee0b%3A0x51aeac8cf0cf34fe!2sSafe%20Drive%20Cabs!5e0!3m2!1sen!2sin!4v1687466721624!5m2!1sen!2sin"
            width="100%"
            height="450"
            loading="lazy"
          ></iframe>
        </Grid>
      </Grid>
    </>
  );
}
