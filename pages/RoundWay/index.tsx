import * as React from "react";
import { useState } from "react";
import Head from "next/head";
import Grid from "@mui/material/Grid";
import Banner from "../../public/services/banner.jpg";
import Map from "../../public/services/Map.png";
import Rectangle from "../../public/services/Rectangle.png";
import Image, { StaticImageData } from "next/image";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useRouter } from "next/router";
import { axiosInstance } from "../_app";
import { Swiper, SwiperSlide } from "swiper/react";
import TextField from "@mui/material/TextField";
import { Autoplay } from "swiper";
import BannerFirst from "../../public/mainbanner.jpg";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import "swiper/css";
import LocationFiled from "../../components/googlefiled";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import InputAdornment from "@mui/material/InputAdornment";
import _ from "lodash";

import Chandigarh from "../../public/More Destination/Chandigarh.png";
import Jaipur from "../../public/More Destination/Jaipur.png";
import Manali from "../../public/More Destination/Manali.png";
interface Services {
  id: string;
  ServicesUrl: StaticImageData;
  ServicesName: string;
  ServicesContent: string;
}
interface Blog {
  id: string;
  BlogUrl: StaticImageData;
  BlogMaintitel: string;
  path: string;
  Title: string;
}

export default function RoundWay() {
  const router = useRouter();
  const [selectedTripValue, setSelectedTripValue] = useState("one_way");
  const [pickLocation, setPickLocation] = useState("");
  const [dropLocation, setDropLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [selectedTime, setSelectedTime] = useState(null);
  const [showDiv, setShowDiv] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [Blog, setBlog] = useState<Blog[]>([
    {
      id: "3",
      BlogUrl: Chandigarh,
      BlogMaintitel:
        "  Do you know of a city that boasts a planned layout that’s both functional and aesthetic? Well, you guessed it right. ",
      Title: "Chandigarh",
      path: "/ChandigarhData",
    },
    {
      id: "4",
      BlogUrl: Jaipur,
      BlogMaintitel:
        " If you love the language of vibrant culture, traditional music dance, and cuisines then Jaipur is your place. ",
      Title: "Jaipur",
      path: "/JaipurData",
    },
    {
      id: "5",
      BlogUrl: Manali,
      BlogMaintitel:
        "   Nestled in the heart of the breathtaking Kullu Valley, Manali has earned its reputation as one of the most ",
      Title: "Manali",
      path: "/ManaliData",
    },
  ]);
  const [Services, setServices] = useState<Services[]>([
    {
      id: "1",
      ServicesUrl: Map,
      ServicesName: "One Way",
      ServicesContent:
        "Step into the world of luxury and convenience with our fleet of Innova cars. Designed with your utmost comfort in mind, our cars boast plush interiors, ample legroom, and sophisticated features that make every journey a delightful experience. ",
    },

    {
      id: "2",
      ServicesUrl: Rectangle,
      ServicesName: "Round Trip ",
      ServicesContent:
        "Navigate the city in style with Tripecca. Unlock the city s wonders with City Transport—your trusted companion for urban adventures.",
    },

    {
      id: "3",
      ServicesUrl: Map,
      ServicesName: "Airport Transport",
      ServicesContent:
        "Experience seamless airport transfers with Tripecca s efficient transport solutions. Say goodbye to airport woes. Tripecca ensures a smooth and convenient journey.",
    },

    // {
    //   id: "4",
    //   ServicesUrl: Rectangle,
    //   ServicesName: "Business Transport",
    //   ServicesContent:
    //     "Discover the power of simplicity as you explore our user-friendly platform. Say goodbye to long waits and hello to instant bookings. Tripecca ensures a prompt and reliable ride tailored to your business travel requirements.",
    // },

    // {
    //   id: "5",
    //   ServicesUrl: Map,
    //   ServicesName: "Regular Transport",
    //   ServicesContent:
    //     "Unleash your inner explorer. Tripecca takes you on a ride through the heart of your destination, allowing you to soak in the local sights, sounds, and flavors.",
    // },
    // {
    //   id: "6",
    //   ServicesUrl: Rectangle,
    //   ServicesName: "Tour Transport",
    //   ServicesContent:
    //     "Experience unforgettable adventures, from captivating city tours to breathtaking countryside getaways. With Tripecca, your travel dreams come alive at the tap of a button.",
    // },
  ]);

  const onKeyPress = (e) => {
    const charCode = e.which ? e.which : e.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      e.preventDefault();
    }
  };
  const handleDateChange = (isPuckup, date) => {
    const dateString = `${date.$y}-${date.$M + 1}-${date.$d.getDate()}`;
    isPuckup ? setPickupDate(dateString) : setReturnDate(dateString);
  };

  function parseDateString(dateString) {
    const dateParts = dateString.split("-");
    const year = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]) - 1; // Adjusted month value
    const day = parseInt(dateParts[2]);
    const date = new Date(year, month, day);
    console.log("date", dateString, date);
    return date;
  }
  const handleTimeChange = (time) => {
    setSelectedTime(time);
    setPickupTime(time);
  };
  async function handleSubmit() {
    console.log(
      "contact",
      contactNumber,
      pickLocation,
      dropLocation,
      pickupDate,
      pickupTime
    );
    if (_.isEmpty(pickLocation)) {
      alert("Please enter pickup location");
    } else if (_.isEmpty(dropLocation)) {
      alert("Please enter drop location");
    } else if (_.isEmpty(contactNumber)) {
      alert("Please enter valid contact number");
    } else if (_.isEmpty(pickupDate)) {
      alert("Please select pickup date");
    } else if (selectedTripValue === "round_trip" && _.isEmpty(returnDate)) {
      alert("Please select return date");
    } else {
      try {
        const response = await axiosInstance.post("api/bookings/booking", {
          pickup_address: pickLocation,
          drop_address: dropLocation,
          customer_contact_number: contactNumber,
          pickup_date: parseDateString(pickupDate),
          return_date: parseDateString(returnDate),
          pick_time: pickupTime,
          trip_type: selectedTripValue,
          trip_id: "",
          vendor_id: "",
          booking_status: "pending",
          payment_status: "pending",
          payment_method: "online",
        });
        console.log("response", response.data);
        selectedTripValue === "round_trip"
          ? router.push(`/ourcars?tripType=${selectedTripValue}&pLocation=${pickLocation}&dLocation=${dropLocation}
                &pDate=${pickupDate}&bookingId=${response.data.id}&rDate=${returnDate}`)
          : router.push(`/ourcars?tripType=${selectedTripValue}&pLocation=${pickLocation}&dLocation=${dropLocation}
                &pDate=${pickupDate}&bookingId=${response.data.id}`);
      } catch (error) {
        console.error(error);
      }
    }
  }
  const triphandleChange = (event) => {
    setSelectedTripValue(event.target.value);
    setShowDiv(event.target.value === "option2");
  };
  return (
    <>
      <Head>
        <title>RoundWay</title>
      </Head>
      <div className=" lg:block xl:block">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2000,
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <div>
              <Image
                className="slider_width"
                src={BannerFirst}
                alt="Picture of the author"
              />
              <div className="main_slider">
                <div className="w-full sm:w-full md:px-5 md:w-full lg:w-3/5 xl-w-3/5 text-center">
                  <h1 className="text-center text-white text-xl sm:text-xl md:text-4xl lg:text-6xl xl:text-6xl font-semibold font-[Cardo_serif]">
                    Traveling around the world with Tripecca
                  </h1>
                  <p
                    className="font-thin leading-2 sm:leading-2 md:leading-7 xl:leading-7 lg:leading-7
                  text-sm text-center text-white py-3 px-3 mt-0 sm:mt-0 md:mt-5 xl:mt-5 lg:mt-5 bg-none sm:bg-none md:bg-none lg:bg-[#1e2938] xl:bg-[#1e2938]"
                  >
                    Unleash your inner explorer and join the Tripecca
                    revolution, where every journey is a story waiting to be
                    told.
                  </p>
                  <button
                    className="rounded bg-[#e8dd34] text-xl my-3 py-1 px-5"
                    onClick={() => router.push("/ourcars")}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                className="slider_width"
                src={BannerFirst}
                alt="Picture of the author"
              />
              <div className="main_slider">
                <div className="w-full sm:w-full md:px-5 md:w-full lg:w-3/5 xl-w-3/5 text-center">
                  <h1 className="text-center text-white text-xl sm:text-xl md:text-4xl lg:text-6xl xl:text-6xl font-semibold font-[Cardo_serif]">
                    Look around, your perfect travel companion is here.
                  </h1>
                  <p
                    className="font-thin leading-2 sm:leading-2 md:leading-7 xl:leading-7 lg:leading-7
                  text-sm text-center text-white py-3 px-3 mt-0 sm:mt-0 md:mt-5 xl:mt-5 lg:mt-5 bg-none sm:bg-none md:bg-none lg:bg-[#1e2938] xl:bg-[#1e2938]"
                  >
                    We are aware that the wanderer in you craves endless
                    adventures. Hence our special trip packages with taxi
                    booking services are solely fashioned keeping you in mind.{" "}
                  </p>
                  <button
                    className="rounded bg-[#e8dd34] text-xl my-3 py-1 px-5"
                    onClick={() => router.push("/ourcars")}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                className="slider_width"
                src={BannerFirst}
                alt="Picture of the author"
              />
              <div className="main_slider">
                <div className="w-full sm:w-full md:px-5 md:w-full lg:w-3/5 xl-w-3/5 text-center">
                  <h1 className="text-center text-white text-xl sm:text-xl md:text-4xl lg:text-5xl xl:text-5xl font-semibold font-[Cardo_serif]">
                    When you are beyond an extraordinary traveler how can your
                    trip be an ordinary one?
                  </h1>
                  <p
                    className="font-thin leading-2 sm:leading-2 md:leading-7 xl:leading-7 lg:leading-7
                  text-sm text-center text-white py-3 px-3 mt-0 sm:mt-0 md:mt-5 xl:mt-5 lg:mt-5 bg-none sm:bg-none md:bg-none lg:bg-[#1e2938] xl:bg-[#1e2938]"
                  >
                    Tripecca your way to unforgettable experiences. Our car
                    rental services along with other cabs and taxi services are
                    your pieces of fun to explore for the next picnic.{" "}
                  </p>
                  <button
                    className="rounded bg-[#e8dd34] text-xl my-3 py-1 px-5"
                    onClick={() => router.push("/ourcars")}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <Grid container className="  lg:block xl:block">
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={9}
          xl={9}
          className="relative sm:relative md:relative lg:absolute xl:absolute  z-50 left-0 right-0 mx-5 sm:mx-5 md:mx-5 xl:mx-auto xl:lg-auto my-0 bottom-[-50px] sm:bottom-[-100px] md:bottom-[-100px] lg:bottom-[-40px]  xl:bottom-[-40px] "
        >
          <>
            <div className="drop-shadow-xl px-6 py-6  bg-white rounded-md border-2 border-[#67b5fe] ">
              <div className="flex flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap xl:flex-nowrap justify-center w-full">
                <div className="w-full sm:w-full md:w-4/12 lg:w-3/12 xl:w-3/12 px-2 py-3 ">
                  <FormControl fullWidth>
                    <label>Trip Type</label>
                    <Select
                      id="trip_id"
                      name="trip_id"
                      labelId="demo-simple-select-label"
                      value={selectedTripValue}
                      onChange={triphandleChange}
                      size="small"
                    >
                      <MenuItem value="one_way">One Way</MenuItem>
                      <MenuItem value="round_trip">Round Way</MenuItem>
                      <MenuItem value="airport_transfer">
                        Airport Transfer
                      </MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="w-full sm:w-full md:w-4/12 lg:w-3/12 xl:w-3/12 px-2 py-3 ">
                  <label>From</label>
                  <FormControl fullWidth>
                    {/* <Autocomplete
              disablePortal
              options={getUniquePickLocation()}
              value={pickLocation}
              onChange={(event, newValue) => setPickLocation(newValue)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  id="pick_location"
                  name="pick_location"
                  value={pickLocation}
                />
              )}
            /> */}
                    <LocationFiled
                      onLocChange={(newValue) => {
                        setPickLocation(newValue?.description);
                      }}
                    />
                  </FormControl>
                </div>
                <div className="w-full sm:w-full md:w-4/12 lg:w-3/12 xl:w-3/12 px-2 py-3 ">
                  <label>To</label>
                  <FormControl fullWidth>
                    {/* <Autocomplete
              disablePortal
              options={getUniqueDropLocation() }
              value={dropLocation}
              onChange={(event, newValue) => setDropLocation(newValue)}
              renderInput={(params) => <TextField {...params}
              id='drop_location'
              name='drop_location'
              variant='outlined'
              value={dropLocation}             
              />}
            /> */}
                    <LocationFiled
                      onLocChange={(newValue) => {
                        setDropLocation(newValue?.description);
                      }}
                    />
                  </FormControl>
                </div>
                <div className="w-full sm:w-full md:w-4/12 lg:w-3/12 xl:w-3/12 px-2 py-3 ">
                  <label>PICK - UP DATE</label>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      sx={{
                        width: "100%",
                      }}
                      // id='pick_date'
                      // name='pick_date'
                      // variant='outlined'
                      value={selectedDate}
                      onChange={(date) => {
                        console.log("datChange", date);
                        handleDateChange(true, date);
                      }}
                    />
                  </LocalizationProvider>
                </div>
              </div>
              <div className="flex flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap xl:flex-nowrap justify-center w-full mt-2">
                <div className="w-full sm:w-full md:w-4/12 lg:w-3/12 xl:w-3/12 px-2 py-3">
                  <label>PICKUP TIME</label>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimePicker
                      sx={{
                        width: "100%",
                      }}
                      value={selectedTime}
                      onChange={handleTimeChange}
                    />
                  </LocalizationProvider>
                </div>
                <div className="w-full sm:w-full md:w-4/12 lg:w-3/12 xl:w-3/12 px-2 py-3 ">
                  <label>CONTACT NUMBER</label>
                  <TextField
                    inputProps={{ maxLength: 10 }}
                    size="small"
                    fullWidth
                    variant="outlined"
                    type="tel"
                    placeholder="Phone Number"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">+91</InputAdornment>
                      ),
                    }}
                    onKeyDown={(e) => onKeyPress(e)}
                    id="customer_contact_number"
                    name="customer_contact_number"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                  />
                </div>
                {selectedTripValue === "round_trip" ? (
                  <div className="w-full sm:w-full md:w-4/12 lg:w-3/12 xl:w-3/12 px-2 py-3 ">
                    <label>RETURN - DATE</label>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        sx={{
                          width: "100%",
                        }}
                        // id='drop_date'
                        // name='drop_date'
                        // variant='outlined'
                        value={selectedDate}
                        onChange={(date) => handleDateChange(false, date)}
                      />
                    </LocalizationProvider>
                  </div>
                ) : (
                  ""
                )}
                {/* <div className="w-full sm:w-full md:w-4/12 lg:w-3/12 xl:w-3/12 px-2 py-3 mt-6">
                  {selectedTripValue === "one_way" ? (
                    <button
                      className="w-full bg-[#1e2938] text-white py-2 rounded"
                      onClick={() => setSelectedTripValue("round_trip")}
                    >
                      BOOK RETURN
                    </button>
                  ) : (
                    ""
                  )}
                </div> */}
                <div className="w-full sm:w-full md:w-4/12 lg:w-3/12 xl:w-3/12 px-2 py-3 mt-6">
                  <button
                    type="submit"
                    className="w-full bg-[#1e2938] text-white py-2 rounded"
                    onClick={async () => {
                      handleSubmit();
                    }}
                  >
                    SEARCH CABS
                  </button>
                </div>
              </div>
            </div>
          </>
        </Grid>
      </Grid>

      {/* <Grid container>
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
                        <h1 className='text-center text-white text-2xl sm:text-2xl md:text-4xl lg:text-6xl xl:text-6xl font-semibold'>OUR  <span className='text-[#67b5fe]'>SERVICES</span></h1>
                    </div>
                </Grid>
            </Grid> */}
      <Grid container>
        <Grid item xs={12} className="text-center py-4 mt-20">
          <p className="text-lg font-extrabold text-[#ffb300]">Services</p>
          <h3 className="text-xl sm:text-xl md:text-4xl lg:text-4xl xl:text-4xl uppercase leading-snug font-black py-1">
            Our Best Services For You
          </h3>
        </Grid>
      </Grid>
      <Grid container className="px-5 sm:px-5 md:px-5 lg:px-5 xl:px-44">
        {Services.map((Services) => {
          return (
            <Grid
              key={Services.id}
              item
              xs={12}
              sm={6}
              md={4}
              lg={4}
              xl={4}
              className="relative"
            >
              <div className="bg-white drop-shadow-md p-5 m-8 relative">
                <div className="absolute top-[-40px]">
                  <Image
                    className="relative"
                    src={Services.ServicesUrl}
                    alt="Picture of the author"
                  />
                </div>
                <div className="mt-40">
                  <h3 className="text-xl font-extrabold">
                    {Services.ServicesName}
                  </h3>
                  <p className="text-sm py-2 h-24 overflow-y-scroll text-justify">
                    {Services.ServicesContent}
                  </p>
                  <button
                    className="rounded-md bg-[#ffb300] py-1 px-3 my-3"
                    onClick={() => router.push("/RoundWay")}
                  >
                    Read More
                    <KeyboardArrowRightIcon />
                  </button>
                </div>
              </div>
            </Grid>
          );
        })}
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <h4 className="text-4xl font-bold pt-10 text-center">Related Blogs</h4>
      </Grid>

      <Grid container className="sm:px-0 md:px-0 lg:px-44 justify-center">
        {Blog.map((Blog) => {
          return (
            <Grid
              key={Blog.id}
              item
              sm={12}
              md={6}
              lg={4}
              xl={4}
              className="relative"
            >
              <div className="rounded-xl bg-white drop-shadow-md p-5 m-8 relative">
                <div className="pb-3">
                  <Image
                    className="relative"
                    src={Blog.BlogUrl}
                    alt="Picture of the author"
                  />
                </div>
                <div>
                  <ul className="flex justify-center py-3">
                    <h3 className="text-xl font-black ">{Blog.Title}</h3>
                  </ul>
                  <span className="flex justify-content-center text-justify font-black color">
                    {Blog.BlogMaintitel}
                  </span>
                  <button
                    className="rounded-full bg-[#ffd50f] py-1 px-3 my-3 flex justify-center"
                    style={{ margin: "7px auto" }}
                    onClick={() => router.push(Blog.path)}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
