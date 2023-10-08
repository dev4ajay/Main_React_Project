import * as React from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Image, { StaticImageData } from "next/image";
import Texi from "../../public/aboutus/texi.png";
import Banner from "../../public/aboutus/Rectangle 39.jpg";
import aboutgraphic from "../../public/aboutus/aboutgraphic.png";
import Rectangle from "../../public/aboutus/Rectangle.png";
import Clinte from "../../public/aboutus/clinte.png";
import Driver from "../../public/aboutus/Driver.png";
import RoadMap from "../../public/aboutus/RoadMap.png";
import Testmoniol from "../../public/aboutus/testmoniol.jpg";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Ellipseone from "../../public/Ellipseone.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import "swiper/css/pagination";
import "swiper/css";
import Avtar2 from "../../public/avtar.jpg";
interface Testimonial {
  id: string;
  testimonialUrl: StaticImageData;
  testimonialName: string;
  // testimonialid: string;
  testimonialcontent: string;
}

export default function AboutUs() {
  const [value, setValue] = React.useState<number | null>(5);

  const [Testimonial, setTestimonial] = useState<Testimonial[]>([
    {
      id: "1",
      testimonialUrl: Avtar2,
      testimonialName: "Himanshu Tiwari",
      testimonialcontent:
        "Great experience with Tripecca for the first time. Picked up from delhi railway station then went to Mathura, vrindavan nd then back to delhi. Our Sarathi( Virendra bhai) was nice to us nd a good man with good driving skills. Love to travel with him throughout the journey.",
    },
    {
      id: "2",
      testimonialUrl: Avtar2,
      testimonialName: "utsav selarka",
      testimonialcontent:
        "Driver is very professional, clean taxi and before time I reach even with normal speed. Driver knows all route and everything. I booked it from website where I paid only Rs. 500 rest I paid to driver. Thanks a lot Tripecca",
    },
    {
      id: "3",
      testimonialUrl: Avtar2,
      testimonialName: "Pallavi Mishra",
      testimonialcontent:
        "I had to take my Dog from Delhi to Lucknow and back, I was struggling to find a cab service that would allow him, even if I could find a few, they were quoting exorbitant rate. Thanks to Tripecca who came to my rescue. They are highly pet friendly, pocket friendly and very reliable. Highly recommended basis my experience",
    },
    {
      id: "4",
      testimonialUrl: Avtar2,
      testimonialName: "Pratik Agarwal",
      testimonialcontent:
        "Recently we needed a to-and-fro cab for Delhi to Vrindavan and we want others to know we really had a good experience. Good condition cab, professional driver and safe driving. Special thanks to Varun, for his instant reply and continuous help whenever we needed him. Good service and man Varun doing a good job. Totally recommended.",
    },
    // {
    //   id: "5",
    //   testimonialUrl: Ellipseone,
    //   testimonialName: "Gordo Novak",
    //   testimonialid: "Customer",
    //   testimonialcontent:
    //     "Tripecca s taxi services have become an integral part of my travel experiences, and I highly recommend them to fellow explorers seeking comfort and reliability.",
    // },
  ]);

  return (
    <>
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
          <div className="text-left absolute bottom-32  px-5 sm:px-5 md:px-5 lg:px-44 xl:px-44 top-0 ">
            <h1 className="text-center text-white text-4xl sm:text-4xl md:text-4xl lg:text-6xl xl:text-6xl font-semibold  my-0">
              ABOUT <span className="text-[#67b5fe]">US</span>
            </h1>
          </div>
        </Grid>
      </Grid>
      <Grid container className="px-5 sm:px-5 md:px-5 lg:px-44 xl:px-44 py-8">
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Image
            className="relative"
            style={{
              width: "100%",
            }}
            src={aboutgraphic}
            alt="Picture of the author"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <div className="py-5">
            <p className="text-lg font-extrabold text-[#ffb300]">About Us</p>
            <h3 className="text-4xl uppercase leading-snug font-black py-3 pr-12">
              We Provide Trusted Cab
              <span className="text-[#ffb300]"> Service</span> In The World
            </h3>
            <p className="font-semibold">
              Tripecca is not just a cab service; it&apos;s a gateway to
              unforgettable adventures and seamless travel experiences.
            </p>
            <ul className="py-3">
              <li className="font-semibold py-3">
                <span className="text-[#ffb300]">
                  <FiberManualRecordIcon />
                </span>{" "}
                Professional Chauffeurs, Personalized Service
              </li>
              <li className="font-semibold py-3">
                <span className="text-[#ffb300]">
                  <FiberManualRecordIcon />
                </span>{" "}
                Safety First, Always
              </li>
              <li className="font-semibold py-3">
                <span className="text-[#ffb300]">
                  <FiberManualRecordIcon />
                </span>{" "}
                Seamless Booking, Effortless Travel
              </li>
            </ul>
          </div>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <div className="text-justify">
            <p>
              Tripecca started administering the cab service across India to
              fulfill the requirements of all the travelers with the choicest
              services. We understand the importance of a comfortable ride and
              aim at rendering the safest, credible and worth-while trips to our
              customers. Tripecca, is an online cab booking portal offering you
              the best quality and reliable taxi services all day long. With a
              user-friendly website, Tripecca provide a convenient and
              comfortable way for your trouble-free taxi booking. Our website is
              very convenient to operate from any given gadget like smart
              phones, Tabs, and even PCs. Just simply visit the website, choose
              your favored destination, date and time, sit back and your cab
              will be at your doorstep waiting for you! We realize the
              importance of your every trip and value your time; hence we are
              here to offer you the best on-time services.
            </p>
            <br />
            <p>
              We all love to travel by road, as it helps us in exploring many
              new things. As it is said, ‘The journey matters, not the
              destination’, Tripecca, understand the value of the memorable
              journey and to ensure that for you, we provide you with the best
              services across the nation. With Tripecca at your service be
              assured of getting the best-in-class services at fares that won’t
              hurt your budget.Choose any destination to travel to, and
              Tripecca’ fleet will always be at your service to help make this
              journey convenient for you.
            </p>
            <br />
            <h2 className="font-bold text-2xl"> ENSURED BEST SERVICES </h2>
            <p>
              We can offer you the safest journey within your scheduled time.
              Tripecca is adequately equipped with the perfect taxi to give you
              the best traveling experience. Our company operates across the
              entire nation, to give you the special experience of traveling
              with ease and comfort. With Tripecca’ chauffeur-driven cabs you
              can reach to your destination in the most comfortable way in time.
              We believe that a perfect vacation cannot complete without a
              hassle-free and comfortable ride. With Tripecca, customers can
              find the most reliable taxi services as all our drivers are well
              trained to serve you in the best way. Our drivers are all
              professionally trained experts and are well-equipped to carry-out
              the most enjoyable trips for you. We undertake a special process
              while on-boarding our drivers, so be sure of getting a courteous
              chauffeur allocated for your trip with Tripecca.
            </p>
            <br />
            <h2 className="font-bold text-2xl "> BOOK ANYTIME AND ANYWHERE</h2>
            <p>
              We can always satisfy you with our 24 hours working schedule for
              your convenience. Our team is available 24/7 to help you with all
              your requirements. With Tripecca, customers can book a cab
              anywhere and anytime without any hassle. You can always count on
              us for providing the cab services to you whenever you require.
              Relax and leave it up to us for getting the most assured services.
              No matter where you go or at what time, we are always ready to
              help you with our premium services.
            </p>
            <br />
            <h2 className="font-bold text-2xl ">
              {" "}
              HIRE ONE-WAY AND ROUND TRIP TAXIS WITH Tripecca
            </h2>
            <p>
              Tripecca administers many great deals for your comfortable rides.
              Whether planning a trip with friends and family, or going solo for
              a business meeting, Tripecca is a travel partner for all your
              needs. We offer services like outstation cabs, and even airport
              transfers. So now you can fly from anywhere to your favored
              destination and Tripecca’ luxury vehicles and expert chauffeurs
              will pick you up from the airport and drop at your hotel or any
              location you choose. We offer the services to you in the most
              nominal pricing range. We also have one-way tours for your ease at
              reasonable expenses as we value your hard-earned money. With Safe
              Drive Cabs, you can book one-way cabs or hire a cab for a round
              trip, anywhere in India at the most moderate charges. Safe Drive
              Cabs offer a fixed price rate for your best understanding and good
              relationship with us.
            </p>
            <br />
            <h2 className="text-2xl uppercase leading-snug font-black py-3 pr-12  ">
              CHOOSE FROM A VARIETY OF LUXURY VEHICLES
            </h2>
            <p>
              We offer you various types of luxury vehicles to give you a
              pleasurable travel experience. Tripecca offers nothing but the
              best services and to ensure the same we have an extensive range of
              fleet for you to choose from. We extend cabs in categories like
              Sedans and SUVs. Customers can hire a Sedan car (Swift
              Dzire/Toyota etios) or book a SUV car (Innova/Ertiga) for a
              comfortable and luxurious journey. With Tripecca’ deluxe taxi
              services, you can travel with utmost style and satisfaction at
              pocket-friendly fares. We vow to serve you in the best way every
              time. With Safe Drive Cabs at your service, be sure of an
              experience worth reminiscing. Our team works dedicatedly to ensure
              that we provide the choicest services in India.
            </p>
            <br />
            <h2 className="text-2xl uppercase leading-snug font-black py-3 pr-12 ">
              WHY CHOOSE Tripecca AS YOUR TRAVEL PARTNER?
            </h2>
            <p>
              Tripecca is a startup that focuses on rendering the most
              trustworthy taxi services to the travelers, because we understand
              the value of a comfortable journey. We want to make sure that our
              customers feel safe while traveling and gain the best experiences
              on their journey. Tripecca, operate with a mission of rendering
              services to our customers that they will cherish for lifetime. At
              Tripecca, we don’t see our customers as just customers; we
              consider you all our family and want to make sure that you enjoy
              the most of trip with us. Our customers are our top priority. We
              want to secure the ultimate satisfaction of our clients with our
              services. There is nothing more important to us than our clients.
              Your safety, satisfaction and pleasure are our most important
              considerations. We are working non-stop to make sure that our
              services are up to the groove. We understand the value of
              standardized services and focus on rendering the same to you.
              Keeping our hard work up, Safe Drive Cabs is focused on
              guaranteeing the most exceptional services to our customers. Our
              clients are the most important beings for us and to ensure their
              pleasure and comfort on the trips is the primary goal which
              drives, Tripecca’ operations. So what are you waiting for? Book a
              taxi with Tripecca and fulfill all your fantasies of travelling
              with total comfort, pleasure and luxury at pocket-friendly fares.
              Customers can visit our website any time or reach to us at +91
              9888234767. Our customer support team is available 24/7 to answer
              all your queries. You can also mail us your query at
              info@safedrivecabs.com.
            </p>
          </div>
        </Grid>
      </Grid>
      <Grid
        container
        className="px-5 sm:px-5 md:px-5 lg:px-44 xl:px-44 py-8 bg-[#f7f7f7] py-16 relative"
      >
        <Grid item xs={12} className="relative">
          <div className="hidden sm:hidden md:hidden lg:hidden xl:block">
            <Image
              style={{
                width: "100%",
              }}
              className="relative"
              src={Rectangle}
              alt="Picture of the author"
            />
          </div>
          <Grid
            container
            className=" relative sm:relative md:relative lg:relative xl:absolute top-0 bg-black
          sm:bg-black md:bg-black lg:bg-[#000] xl:bg-[#0000] rounded-xl"
          >
            <Grid item xs={6} sm={6} md={6} lg={3} xl={3}>
              <div className="text-center py-10">
                <div className="flex justify-center">
                  <Image
                    style={{
                      width: "100px",
                    }}
                    src={Texi}
                    alt="Picture of the author"
                  />
                </div>
                <h4 className="text-4xl font-black text-white py-3">500</h4>
                <p className="font-medium text-white ">+ Available Taxi</p>
              </div>
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={3} xl={3}>
              <div className="text-center py-10">
                <div className="flex justify-center">
                  <Image
                    style={{
                      width: "100px",
                    }}
                    src={Clinte}
                    alt="Picture of the author"
                  />
                </div>
                <h4 className="text-4xl font-black text-white py-3">900</h4>
                <p className="font-medium text-white ">+ Happy Clients</p>
              </div>
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={3} xl={3}>
              <div className="text-center py-10">
                <div className="flex justify-center">
                  <Image
                    style={{
                      width: "100px",
                    }}
                    src={Driver}
                    alt="Picture of the author"
                  />
                </div>
                <h4 className="text-4xl font-black text-white py-3">700</h4>
                <p className="font-medium text-white ">+ Our Driverss</p>
              </div>
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={3} xl={3}>
              <div className="text-center py-10">
                <div className="flex justify-center">
                  <Image
                    style={{
                      width: "100px",
                    }}
                    src={RoadMap}
                    alt="Picture of the author"
                  />
                </div>
                <h4 className="text-4xl font-black text-white py-3">1800</h4>
                <p className="font-medium text-white ">+ Road Trip Done</p>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        className="relative my-12 sm:my-12 md:my-0 lg:my-0 xl:my-0"
      >
        <Grid item xs={12} className="relative">
          <Image
            className="relative"
            style={{
              width: "100%",
            }}
            src={Testmoniol}
            alt="Picture of the author"
          />
        </Grid>
        <Grid
          item
          xl={12}
          className="text-center absolute justify-center	w-full pt-10 sm:pt-10 md-10 
        lg:pt-10 xl:pt-32"
        >
          <p className="text-lg font-extrabold text-[#ffb300]">TESTIMONIALS</p>
          <h3 className="text-xl xl:text-4xl lg:text-4xl md:text-4xl sm:text-xl text-white uppercase leading-snug font-black py-2">
            What Our Client Service<span className="text-[#ffb300]"> Says</span>{" "}
          </h3>
        </Grid>
        <Grid
          item
          xs={12}
          className="px-5 sm:px-5 md:px-5 lg:px-44 xl:px-44 relative sm:relative md:absolute
        lg:absolute xl:absolute  w-full top-0 sm:top-0 md:top-32 lg:top-32 xl:top-72"
        >
          <Swiper
            slidesPerView={2}
            spaceBetween={50}
            // centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              1920: {
                slidesPerView: 3,
              },
              1440: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 2,
              },

              768: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 2,
              },
              425: {
                slidesPerView: 1,
              },
              360: {
                slidesPerView: 1,
              },
              320: {
                slidesPerView: 1,
              },
            }}
            loop={false}
            className="mySwiper"
            modules={[Autoplay, Pagination]}
          >
            {Testimonial.map((Testimonial) => {
              return (
                <SwiperSlide key={Testimonial.id}>
                  <div className="bg-white p-5 mb-12 rounded-lg text-justify">
                    <ul className="flex">
                      <li>
                        <Image
                          className="relative"
                          src={Testimonial.testimonialUrl}
                          alt="Picture of the author"
                          style={{ width: "47px", borderRadius: "60%" }}
                        />
                      </li>
                      <li className="py-3" style={{ padding: "7px 5px" }}>
                        <p className="text-lg font-bold m-0">
                          {Testimonial.testimonialName}
                        </p>
                        {/* <p className="text-left font-xl font-bold text-[#ffb300]">
                          {Testimonial.testimonialid}
                        </p> */}
                      </li>
                    </ul>
                    <p className="text-sm h-24 overflow-y-scroll ">
                      {Testimonial.testimonialcontent}
                    </p>
                    <Box
                      sx={{
                        "& > legend": { mt: 2 },
                      }}
                    >
                      <Rating
                        className="py-3"
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                      />
                    </Box>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Grid>
      </Grid>
    </>
  );
}
