import * as React from "react";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { StaticImageData } from "next/image";
import Image from "next/image";
import CallIcon from "@mui/icons-material/Call";
import DelhiToManali from "../../public/packageImages/Delhi To Manali.png";
import DelhitoShimla from "../../public/packageImages/Delhi To Shimla.png";
import DelhitoJaipur from "../../public/packageImages/Delhi To Jaipur.png";
import ChandigarhtoManali from "../../public/packageImages/Chandigarh To Manali.png";
import DelhitoAgra from "../../public/packageImages/Delhi To Agra.png";
import ChandigarhtoDharamshala from "../../public/packageImages/Chandigarh To Dharamshala.png";
import ChandigarhtoAmritsar from "../../public/packageImages/Chandigarh To Amritsar.png";
import DelhitoAmritsar from "../../public/packageImages/Delhi To Amritsar.png";
import DelhitoNainital from "../../public/packageImages/Delhi To Nainital.png";
import DelhitoMussoorie from "../../public/packageImages/Delhi To Mussoorie.png";
import BannerFirst from "../../public/mainbanner.jpg";
import Populer from "../../public/Top Notch Destinations/Manali.png";
import Tempel from "../../public/Top Notch Destinations/Amritsar.png";
import Mussoori from "../../public/Top Notch Destinations/Mussoorie.png";
import NewDelhi from "../../public/Top Notch Destinations/Delhi.png";
import Discount from "../../public/More Destination/Amritsar.png";
import Delhi from "../../public/More Destination/Delhi.png";
import Agra from "../../public/More Destination/Agra.png";
import Chandigarh from "../../public/More Destination/Chandigarh.png";
import Jaipur from "../../public/More Destination/Jaipur.png";
import Manali from "../../public/More Destination/Manali.png";
import Mussoorie from "../../public/More Destination/Mussoorie.png";
import Nainital from "../../public/More Destination/Nainital.png";
import Shimla from "../../public/More Destination/Shimla.png";
import AboutBack from "../../public/aboutback.jpg";
// import AboutBack from "../../public/aboutback.jpg";
import Rectangle from "../../public/Rectanglese.jpg";
import Swift from "../../public/Swift.jpg";
import Nova from "../../public/Nova.jpg";
import Ertiga from "../../public/Ertiga.jpg";
import Nexon from "../../public/Nexon.png";
import Alto from "../../public/Alto.jpg";
import Etios from "../../public/Etios.jpg";
import Fortuner from "../../public/Fortuner.jpg";
import Swiftpng from "../../public/swiftpng.png";
// import Ellipseone from "../../public/Ellipseone.png";
import DelhiImg from "../../public/Our Packages - Icons/delhi To manali.svg";
import ShimlaImg from "../../public/Our Packages - Icons/delhi To manali.svg";
import NaintalImg from "../../public/Our Packages - Icons/6. Delhi to Nainital/Black _ Route Icon.svg";
import MussoorieImg from "../../public/Our Packages - Icons/5. Delhi to Mussoorie/White _ Arrow Icon.svg";
import JaipurImg from "../../public/Our Packages - Icons/7. Delhi to Jaipur/White _ Arrow Icon.svg";
import AmritsarImg from "../../public/Our Packages - Icons/9. Chandigarh to Amritsar/Black _ Arrow Icon.svg";
import manaliImg from "../../public/Our Packages - Icons/8. Delhi to Amritsar/Black _ Route Icon.svg";
import DharamshalaImg from "../../public/Our Packages - Icons/chandigarh Dharamshala.svg";
import AgraImg from "../../public/Our Packages - Icons/4. Delhi to Agra/Black _ Arrow Icon.svg";
import chandigiarhImg from "../../public/Our Packages - Icons/2. Chandigarh to Manali/Black _ Arrow Icon.svg";
import Ellipsetwo from "../../public/Ellipsetwo.png";
import Ellipsethree from "../../public/Ellipsethree.png";
// import Ellipsefourth from "../../public/Ellipsefourth.png";
import Grid from "@mui/material/Grid";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import TextField from "@mui/material/TextField";
import { Autoplay } from "swiper";
import "swiper/css";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputAdornment from "@mui/material/InputAdornment";
import { Autocomplete, Typography } from "@mui/material";
import { axiosInstance } from "../_app";
import { Form, useFormik } from "formik";
import * as yup from "yup";
import _ from "lodash";
import { toast } from "react-toastify";
// import Mainform from "../../components/mainform";
import LocationFiled from "../../components/googlefiled";
import Head from "next/head";
import MobileBanner from "../../public/mobilebanner.jpg";
import Avtar2 from "../../public/avtar.jpg";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import CircularProgress from "@mui/material/CircularProgress";

interface Cars {
  id: string;
  carUrl: string;
  carName: string;
}

interface Packages {
  id: string;
  carName: string;
  carUrl: StaticImageData;
  from: string;
  to: string;
  price: string;
}

interface review {
  id: string;
  Avtar: StaticImageData;
  reviewName: string;
  // reviewid: string;
  // Avtar: string;
  reviewmessage: string;
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Home() {
  const router = useRouter();
  const [tripId, setTripId] = useState("");
  const [vendorId, setVendorId] = useState("");
  const [carOptions, setCarOptions] = useState<any[]>([]);
  const [from, setfrom] = React.useState("");
  const [to, setto] = React.useState("");
  const [selectedTripValue, setSelectedTripValue] = useState("one_way");
  const [showDiv, setShowDiv] = useState(false);
  const [contactNumber, setContactNumber] = useState("");
  const [pickLocation, setPickLocation] = useState("");
  const [dropLocation, setDropLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [ourCars, setOurCars] = useState<any[]>([]);
  const [filteredData2, setFilteredData] = useState([]);
  const [filteredTrips, setFilteredTrips] = useState(null);
  const [loading, setLoading] = useState(false);

  const [selectedTime, setSelectedTime] = useState(null);
  const handleTimeChange = (time) => {
    setSelectedTime(time);
    setPickupTime(time);
  };

  const [selectedDate, setSelectedDate] = useState(null);
  const handleDateChange = (isPuckup, date) => {
    const dateString = `${date.$y}-${date.$M + 1}-${date.$d.getDate()}`;
    isPuckup ? setPickupDate(dateString) : setReturnDate(dateString);
  };

  const getCars = async () => {
    try {
      const result = await axiosInstance.get("/api/cars/car");
      // console.log("home", result.data);
      setOurCars(result.data);
    } catch (error) {
      console.error("Error fetching car data:", error);
    }
  };
  const showPackages = async () => {
    try {
      const result = await axiosInstance.get(
        "/api/trips/trip?tripType=round_trip"
      );
      // let trips = result.data.map((item)=> {
      //   let tripPackages: Packages = {
      //       id: item.id,
      //       carName: item?.car?.car_name,
      //       carUrl: JSON.parse(item?.car?.exterior_images)[0],
      //       from: item?.pick_location,
      //       to: item?.drop_location,
      //       price: item?.total_price
      //   }
      //   return tripPackages
      // })
      setPackages(result.data);
    } catch (error) {
      console.error("Error fetching car data:", error);
    }
  };

  useEffect(() => {
    // Fetch car data from the API endpoint
    getCars();
    showPackages();
  }, []);

  const [allTrips, setAllTrips] = useState(null);
  var PicklocationFilter = "";
  var DropLocationFilter = "";

  useEffect(() => {
    if (pickLocation) {
      const inputString = pickLocation.toString();
      const delimiter = ",";
      const parts = inputString?.split(delimiter);
      if (parts.length > 1) {
        let valueBeforeDelimiter = parts[0].trim(); // Use trim to remove leading/trailing spaces
        PicklocationFilter = valueBeforeDelimiter;
        console.log("PicklocationFilter", PicklocationFilter); // Output: "Hisar"
      }
    } else if (dropLocation) {
      const inputString = dropLocation.toString();
      const delimiter = ",";
      const parts = inputString?.split(delimiter);
      if (parts.length > 1) {
        let valueBeforeDelimiter = parts[0].trim(); // Use trim to remove leading/trailing spaces
        DropLocationFilter = valueBeforeDelimiter;
        console.log("DropLocationFilter", DropLocationFilter); // Output: "Hisar"
      }
    }
  }, [dropLocation]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axiosInstance
          .get(`/api/trips/trip?tripType=${selectedTripValue}`)
          .then((res) => {
            if (res.status == 200) {
              setFilteredData(res.data);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.error("Error fetching car data:", error);
        setLoading(false); // Set loading before sending API request
      }
    };

    fetchData();
  }, [selectedTripValue]);

  useEffect(() => {
    setTimeout(() => {
      const filterdata = filteredData2?.filter((item) => {
        console.log(item.pick_location, PicklocationFilter);
        return (
          item.pick_location.toLowerCase() ===
            PicklocationFilter.toLowerCase() ||
          item.drop_location.toLowerCase() === DropLocationFilter.toLowerCase()
        );
      });
      console.log(filterdata, "filtered data", filteredData2);
      setFilteredTrips(filterdata);
    }, 50);
  }, [pickLocation, dropLocation]);

  const getUniquePickLocation = () => {
    const uniquePickLocation: string[] = [];
    allTrips?.forEach((trip: any) => {
      const carPickLocation = trip?.pick_location;
      if (carPickLocation && !uniquePickLocation.includes(carPickLocation)) {
        uniquePickLocation.push(carPickLocation);
      }
    });
    return uniquePickLocation;
  };

  function getUniqueDropLocation() {
    let uniqueDropLocation: string[] = [];
    allTrips?.forEach((trip: any) => {
      const carDropLocation = trip?.drop_location;
      if (carDropLocation && !uniqueDropLocation.includes(carDropLocation)) {
        uniqueDropLocation.push(carDropLocation);
      }
    });
    return uniqueDropLocation;
  }

  const [carPackages, setPackages] = useState<Packages[]>([]);
  const [overpack, setOverpack] = useState([
    {
      name: " Delhi to Manali",
      Time: "4 Days / 3 Nights",
      Suv: "INR 21999",
      image: DelhiImg,
      background_img: DelhiToManali,
      path: "/DelhiToManali",
    },
    {
      id: 2,
      name: "Chandigarh to Manali",
      Time: "3 Days / 2 Nights",
      image: chandigiarhImg,
      Suv: "INR 14499",
      background_img: ChandigarhtoManali,
      path: "/ChandigarhToservice",
    },
    {
      id: 3,
      name: " Delhi to Shimla",

      Time: "3 Days / 2 Nights",

      image: ShimlaImg,
      Suv: "INR 14499",
      background_img: DelhitoShimla,
      path: "/DelhitoShimla",
    },

    {
      name: "Delhi to Agra ",
      Time: " 1 Day Trip ",
      image: AgraImg,
      Suv: "INR 7499",
      background_img: DelhitoAgra,
      path: "/DelhitoAgra",
    },
    {
      name: "Delhi to Mussoorie  ",
      Time: "2 Days / 1 Nights",
      image: MussoorieImg,
      Suv: "INR 10999",
      background_img: DelhitoMussoorie,
      path: "/DelhitoMussoorie",
    },
    {
      name: "Delhi to Nainital  ",
      Time: "2 Days / 1 Nights",
      image: NaintalImg,
      Suv: "INR 10999",
      background_img: DelhitoNainital,
      path: "/DelhitoNainital",
    },
    {
      name: "Delhi to Jaipur ",
      Time: "2 Days / 1 Nights",
      image: JaipurImg,
      Suv: "INR 9499",
      background_img: DelhitoJaipur,
      path: "/DelhitoJaipur",
    },
    {
      name: " Delhi to Amritsar",
      Time: "3 Days / 2 Nights",
      image: AmritsarImg,
      Suv: " INR 16999",
      background_img: DelhitoAmritsar,
      path: "/DelhitoAmritsar",
    },
    {
      name: " Chandigarh to Amritsar ",
      Time: "1 Day Trip ",
      image: manaliImg,
      Suv: "INR 7999",
      background_img: ChandigarhtoAmritsar,
      path: "/ChandigarhtoAmritsar",
    },
    {
      name: " Chandigarh to Dharamshala",
      Time: "2 Days / 1 Nights",
      image: DharamshalaImg,
      Suv: "INR 9499",
      background_img: ChandigarhtoDharamshala,
      path: "/ChandigarhtoDharamshala",
    },
  ]);

  const [clintreview, setreview] = useState<review[]>([
    {
      id: "1",
      Avtar: Avtar2,
      reviewName: "Himanshu Tiwari",
      reviewmessage:
        "Great experience with Tripecca for the first time. Picked up from delhi railway station then went to Mathura, vrindavan nd then back to delhi. Our Sarathi( Virendra bhai) was nice to us nd a good man with good driving skills. Love to travel with him throughout the journey.",
    },
    {
      id: "2",
      Avtar: Avtar2,
      reviewName: "utsav selarka",
      reviewmessage:
        "Driver is very professional, clean taxi and before time I reach even with normal speed. Driver knows all route and everything. I booked it from website where I paid only Rs. 500 rest I paid to driver. Thanks a lot Tripecca",
    },
    {
      id: "3",
      Avtar: Avtar2,
      reviewName: "Pallavi Mishra",
      reviewmessage:
        "I had to take my Dog from Delhi to Lucknow and back, I was struggling to find a cab service that would allow him, even if I could find a few, they were quoting exorbitant rate. Thanks to Tripecca who came to my rescue. They are highly pet friendly, pocket friendly and very reliable. Highly recommended basis my experience",
    },
    {
      id: "4",
      Avtar: Avtar2,
      reviewName: "Pratik Agarwal",
      reviewmessage:
        "Recently we needed a to-and-fro cab for Delhi to Vrindavan and we want others to know we really had a good experience. Good condition cab, professional driver and safe driving. Special thanks to Varun, for his instant reply and continuous help whenever we needed him. Good service and man Varun doing a good job. Totally recommended.",
    },
  ]);

  const [phonenoError, setPhonenoError] = React.useState("");

  const onKeyPress = (e) => {
    const charCode = e.which ? e.which : e.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      e.preventDefault();
    }
  };

  const triphandleChange = (event) => {
    setSelectedTripValue(event.target.value);
    setShowDiv(event.target.value === "option2");
  };

  const handleCars = (event) => {
    const selectedTripId = event.target.value;
    // Find the selected car object based on the selected car id
    const selectedCar = carOptions.find((car) => car.id === selectedTripId);
    if (selectedCar) {
      setTripId(selectedCar.id);
      setVendorId(selectedCar.vendor_id);
    }
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
      setLoading(true);
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

  // console.log(pickLocation);

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta key="Trips Cab Booking Tour packages Taxi services Car rental Taxi near me Taxi booking Outstation cabs Cab services Car rental services Trip packages " />
      </Head>
      <div className="hidden sm:hidden md:hidden lg:block xl:block">
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
                className="relative"
                style={{
                  width: "100%",
                  height: "98vh",
                }}
                src={BannerFirst}
                alt="Picture of the author"
              />
              <div
                style={{
                  position: "absolute",
                  left: "0%",
                  right: "0%",
                  top: "0",
                  display: "flex",
                  height: "100vh",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
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
                className="relative"
                style={{
                  width: "100%",
                  height: "98vh",
                }}
                src={BannerFirst}
                alt="Picture of the author"
              />
              <div
                style={{
                  position: "absolute",
                  left: "0%",
                  right: "0%",
                  top: "0",
                  display: "flex",
                  height: "100vh",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
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
                className="relative"
                style={{
                  width: "100%",
                  height: "98vh",
                }}
                src={BannerFirst}
                alt="Picture of the author"
              />
              <div
                style={{
                  position: "absolute",
                  left: "0%",
                  right: "0%",
                  top: "0",
                  display: "flex",
                  height: "100vh",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
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
      <Grid container className="block sm:block md:block lg:hidden xl:hidden">
        <Grid item xs={12}>
          <Image
            className="relative mobile_bar"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "0 0px 30px 30px",
            }}
            src={MobileBanner}
            alt="Picture of the author"
          />
        </Grid>
      </Grid>
      <div className="block sm:block md:block lg:hidden xl:hidden">
        {/* <Mainform /> */}
      </div>
      <Grid container className=" lg:block xl:block">
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={9}
          xl={9}
          className="relative sm:relative md:relative lg:absolute xl:absolute  z-50 left-0 right-0 mx-0  sm:mx-5 md:mx-5 xl:mx-auto xl:lg-auto my-0 bottom-[-22px] sm:bottom-[-100px] md:bottom-[-100px] lg:bottom-[-40px]  xl:bottom-[-40px] "
          style={{ padding: "0px 10px 5px 6px" }}
        >
          <>
            <div className="drop-shadow-xl px-6 py-6  bg-white rounded-md border-2 border-[#67b5fe] ">
              <div className="flex flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap xl:flex-nowrap justify-center w-full">
                <div className="flex trip_button ">
                  <RadioGroup
                    name="use-radio-group"
                    defaultValue="first"
                    className="table_trip"
                  >
                    <button onClick={triphandleChange} type="button">
                      <div>
                        <MenuItem value="one_way" className="onetrip ">
                          <div
                          // className={
                          //   selectedTripValue === "one_way" ? "bg-gray-500" : ""
                          // }
                          >
                            <div
                              className={
                                selectedTripValue === "one_way"
                                  ? "border-sky-500 border-2 border_radio"
                                  : ""
                              }
                            >
                              {" "}
                              <label htmlFor="card" className="cards">
                                <input
                                  id="card"
                                  type="radio"
                                  value="one_way"
                                  className="radio_input"
                                  checked={selectedTripValue === "one_way"}
                                  style={{ margin: "3px" }}
                                />

                                <span
                                  className={
                                    selectedTripValue === "one_way"
                                      ? "text-sky-500"
                                      : ""
                                  }
                                >
                                  One Way
                                </span>
                              </label>
                            </div>
                          </div>
                        </MenuItem>
                      </div>
                    </button>
                    <button onClick={triphandleChange} type="button">
                      <div>
                        <MenuItem value="round_trip" className="onetrip ">
                          {" "}
                          <div>
                            {" "}
                            <div
                              className={
                                selectedTripValue === "round_trip"
                                  ? "border-sky-500 border-2 border_radio"
                                  : ""
                              }
                            >
                              {" "}
                              <label htmlFor="card" className="cards">
                                <input
                                  id="card"
                                  type="radio"
                                  value="round_trip"
                                  className="radio_input"
                                  checked={
                                    selectedTripValue == "round_trip"
                                      ? true
                                      : false
                                  }
                                  onClick={triphandleChange}
                                />

                                <span
                                  className={
                                    selectedTripValue === "round_trip"
                                      ? "text-sky-500"
                                      : ""
                                  }
                                >
                                  {" "}
                                  Round Trip
                                </span>
                              </label>
                            </div>
                          </div>
                        </MenuItem>
                      </div>
                    </button>
                    <button onClick={triphandleChange} type="button">
                      <div>
                        <MenuItem value="airport_transfer" className="onetrip">
                          <div>
                            <div
                              className={
                                selectedTripValue === "airport_transfer"
                                  ? "border-sky-500 border-2 border_radio"
                                  : ""
                              }
                            >
                              <label htmlFor="card" className="cards">
                                <input
                                  id="card"
                                  type="radio"
                                  className="radio_input"
                                  value="airport_transfer"
                                  checked={
                                    selectedTripValue === "airport_transfer"
                                  }
                                />

                                <span
                                  className={
                                    selectedTripValue === "airport_transfer"
                                      ? "text-sky-500"
                                      : ""
                                  }
                                >
                                  Airport Transfer
                                </span>
                              </label>
                            </div>
                          </div>
                        </MenuItem>
                      </div>
                    </button>
                  </RadioGroup>
                </div>

                <div className="w-full sm:w-full md:w-4/12 lg:w-3/12 xl:w-3/12 px-2 py-3  main_trip">
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
                      <MenuItem value="round_trip"> Round Way</MenuItem>
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
                <div className="w-full sm:w-full md:w-4/12 lg:w-3/12 xl:w-3/12 px-2 py-3">
                  <label>PICK - UP DATE</label>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      sx={{
                        width: "100%",
                        // Add any additional styling here if needed
                      }}
                      value={selectedDate}
                      onChange={(date) => {
                        console.log("dateChange", date);
                        handleDateChange(true, date); // Ensure this function is implemented correctly
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
                    {" "}
                    {loading ? (
                      <>
                        <CircularProgress />
                        Please Wait...
                      </>
                    ) : (
                      <>SEARCH CABS</>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </>
        </Grid>
      </Grid>

      <section className="relative my-5">
        <div className="hidden sm:hidden md:block lg:block xl:block">
          <Image
            style={{
              width: "100%",
              height: "600px",
            }}
            className="relative"
            src={AboutBack}
            alt="Picture of the author"
          />
        </div>
        <Grid
          container
          className="px-5 sm:px-5 md:px-5 lg:px-44 xl:px-44 justify-center absolute top-5 "
        >
          <h3 className=" text-2xl border-2 px-4 py-1 sm:my-1 lg:my-8 border-black rounded ">
            ABOUT <span className="text-[#67b5fe]"> US</span>
          </h3>
        </Grid>
        <Grid
          container
          className="px-5 sm:px-5 md:px-5 lg:px-44 xl:px-44 relative sm:relative md:absolute
        lg:absolute xl:absolute top-28"
        >
          <Grid item sm={6} xs={12} lg={6} xl={6} md={6}>
            <Image
              className="relative"
              src={Discount}
              alt="Picture of the author"
            />
          </Grid>
          <Grid item sm={6} xs={12} lg={6} xl={6} md={6}>
            <div className="py-5 sm:py-5 md:py-0 lg:py-0 xl:py-0 mb-12 sm:mb-12 md:mb-12 lg:mb-12 xl:mb-12">
              <h3 className="text-black font-bold text-2xl">Why Tripecca?</h3>
              <h3 className="text-black font-bold text-2xl">
                Because it&apos;s easy-peasy.{" "}
              </h3>
              <p className="py-2 text-justify">
                We understand the importance of stress-free travel. Our car
                rental services ensure that you have hassle-free travel for your
                trip. Outstation cabs and taxi booking are readily available for
                those long journeys.{" "}
              </p>
              <p>
                And yes, we have a dedicated team to craft the best trip
                packages for you.{" "}
              </p>
              <h3 className="text-black font-bold text-2xl py-2">
                We offer a plethora of services. Have a look for yourself:{" "}
              </h3>
              <ul className="list-disc	pl-5">
                <li>Taxi Services</li>
                <li>Cab Booking</li>
                <li>Car rental services</li>
                <li>Outstation cabs</li>
              </ul>
            </div>
          </Grid>
        </Grid>
      </section>
      <Grid
        container
        className="px-5 sm:px-5 md:px-5 lg:px-44 xl:px-44 justify-center relative"
      >
        <h3 className=" text-2xl border-2 px-4 py-1 my-12  border-black rounded ">
          OUR <span className="text-[#67b5fe]"> CARS </span>
        </h3>
      </Grid>
      <Grid
        container
        className="px-5 sm:px-5 md:px-5 lg:px-44 xl:px-44 justify-center"
      >
        {ourCars.map((car) => {
          return (
            <Grid
              key={car.id}
              item
              sm={6}
              xs={6}
              lg={4}
              xl={4}
              md={6}
              className="relative"
              onClick={() => {
                router.push("/ourcars");
              }}
            >
              <div className="border-2 border-black hover:border-[#e8dd34] m-5 p-0 sm:p-0 md:p-5 xl:p-5 lg:p-5 relative cursor-pointer">
                <Image
                  width={1000}
                  height={1000}
                  className="relative"
                  src={car?.exterior_images?.[0]}
                  alt="Picture of the author"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 text-center">
                <button className=" rounded bg-[#1e2938] text-sm sm:text-sm md:text-xl lg:text-xl xl:text-xl my-3 py-1 px-5 text-white">
                  {car.car_name}
                </button>
              </div>
            </Grid>
          );
        })}
      </Grid>
      <Grid
        container
        className="px-5 sm:px-5 md:px-5 lg:px-44 xl:px-44 justify-center"
      >
        <h3 className=" text-2xl border-2 px-4 py-1 my-12 border-black rounded ">
          OUR <span className="text-[#67b5fe]"> PACKAGES </span>
        </h3>
      </Grid>
      <Grid
        container
        className="px-5 sm:px-5 md:px-5 lg:px-44 xl:px-44  justify-center"
      >
        {overpack.map((Packages) => {
          // console.log(Packages.backgrsound_img.src);
          return (
            <Grid key={Packages.id} item sm={6} xs={6} lg={3} xl={3} md={6}>
              <div
                onClick={() => router.push(Packages.path)}
                className="drop-shadow-md text-center p-3 m-3 cursor-pointer"
                style={{
                  marginBottom: "35px",
                  background: `url("${Packages.background_img.src}")`,
                  backgroundSize: "cover",
                }}
              >
                {" "}
                <div className="mui_icons ">
                  <Image
                    src={Packages.image}
                    alt="Picture of the"
                    style={{ transform: "rotate(130deg)" }}
                  />
                </div>
                <h6 className="text-xl sm:text-xl md:text-xl lg:text-xl xl:text-xl text-white  font-bold py-3 ">
                  {Packages.name}
                </h6>
                {/* <Image
                  className="relative"
                  width={300}
                  height={220}
                  src={Nova}
                  alt="Picture of the author"
                /> */}
                <h6 style={{ letterSpacing: "0px", color: "white" }}>
                  {Packages?.["pick_location"]} {Packages.Time}
                </h6>
                <h6 className="  text-[#e8dd34] py-1">{Packages.Suv}</h6>
              </div>
              {/* <div className='drop-shadow-md bg-white text-center p-3 m-3 '>
                <h4 className='text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl font-bold py-3'>{Packages?.['car']?.['car_name']}</h4>
                <Image
                  className='relative'
                  width={300}
                  height={220}
                  src={Packages?.['car']?.['exterior_images']?.[0]}
                  alt="Picture of the author"
                />
                <p className='py-2'>{Packages?.['pick_location']} - {Packages?.['drop_location']}kkkk</p>
                <p className='text-sm'>{Packages?.['drop_location']} - {Packages?.['pick_location']}</p>
                <h4 className='text-xl font-bold text-[#e8dd34] py-3'>₹{Packages?.['total_price']}</h4>
              </div> */}
            </Grid>
          );
        })}
      </Grid>

      <Grid
        container
        className="px-5 sm:px-5 md:px-5 lg:px-44 xl:px-44 justify-center  md:flex xl:flex lg:flex"
      >
        <h3 className=" text-2xl border-2 px-4 py-1 my-12 border-black rounded ">
          MORE <span className="text-[#67b5fe]"> DESTINATION</span>
        </h3>
      </Grid>
      <Grid
        container
        className="px-5 sm:px-5 md:px-5 lg:px-44 xl:px-44 relative sm:flex md:flex xl:flex lg:flex"
      >
        <Grid item sm={5} xs={12} lg={4} xl={4} md={4} className="relative ">
          <Image
            className="relative p-4 cursor-pointer"
            src={Discount}
            alt="Picture of the author"
            onClick={() => {
              router.push("/AmritsarData");
            }}
          />
          <div className="absolute bottom-10 p-8">
            <h3 className="text-white font-bold text-2xl">Amritsar</h3>
            <p className="text-white text-justify">
              Founded by the fourth Sikh guru, Guru Ram Das Ji in 1574, Amritsar
              is the city of nectar, faith, and spirituality. It’s a site of
              many historical events like the Jallianwala Bagh Massacre
            </p>
            <button className="rounded bg-[#e8dd34] text-sm my-3 py-1 px-5">
              Discover More
            </button>
          </div>
        </Grid>
        {/* <Grid
          item
          sm={7}
          xs={12}
          lg={8}
          xl={8}
          md={8}
          className="relative cursor-pointer"
          onClick={() => {
            router.push("/blog");
          }}
        > */}
        {/* <Image
            className="relative pt-4 pl-2"
            src={Rectangle}
            alt="Picture of the author"
          /> */}
        {/* <div className="absolute bottom-[-30px] sm:bottom-[-30px] md:bottom-10 lg:bottom-10 xl:bottom-10 p-8">
            <h3 className="text-white font-bold text-2xl">New Destination</h3>
            <p className="text-white">
              Join the journey with Tripecca, where the unexplored becomes a
              playground for the curious traveler.Discover the thrill of
              exploration as Tripecca takes you to unexplored horizons,
              unveiling a new destination like never before.Unlock the secrets
              of a mesmerizing new destination handpicked by Tripecca, where
              every moment is filled with awe and discovery.
            </p>
            <button className="rounded bg-[#e8dd34] text-sm my-3 py-1 px-5">
              Discover More
            </button>
          </div> */}

        {/* </Grid> */}

        <Grid item sm={5} xs={12} lg={4} xl={4} md={4} className="relative ">
          <Image
            className="relative p-4 cursor-pointer"
            src={Shimla}
            alt="Picture of the author"
            onClick={() => {
              router.push("/ShimlaData");
            }}
          />
          <div className="absolute bottom-10 p-8">
            <h3 className="text-white font-bold text-2xl">Shimla </h3>
            <p className="text-white text-justify">
              If the lush evergreen surroundings with the majestic Himalayas
              excite you, then Shimla must be your next go-to destination. Once
              a dense forest named after the Hindu Goddess
            </p>
            <button className="rounded bg-[#e8dd34] text-sm my-3 py-1 px-5">
              Discover More
            </button>
          </div>
        </Grid>

        <Grid item sm={5} xs={12} lg={4} xl={4} md={4} className="relative ">
          <Image
            className="relative p-4 cursor-pointer"
            src={Manali}
            alt="Picture of the author"
            onClick={() => {
              router.push("/ManaliData");
            }}
          />
          <div className="absolute bottom-10 p-8">
            <h3 className="text-white font-bold text-2xl">Manali</h3>
            <p className="text-white text-justify">
              Nestled in the heart of the breathtaking Kullu Valley, Manali has
              earned its reputation as one of the most visited and loved
              attractions of north India in Himachal Pradesh. If we trace its
            </p>
            <button className="rounded bg-[#e8dd34] text-sm my-3 py-1 px-5">
              Discover More
            </button>
          </div>
        </Grid>
      </Grid>

      <Grid
        container
        className="px-5 sm:px-5 md:px-5 lg:px-44 xl:px-44 relative  sm:flex md:flex xl:flex lg:flex"
      >
        <Grid item sm={5} xs={12} lg={4} xl={4} md={4} className="relative ">
          <Image
            className="relative p-4 cursor-pointer"
            src={Jaipur}
            alt="Picture of the author"
            onClick={() => {
              router.push("/JaipurData");
            }}
          />
          <div className="absolute bottom-10 p-8">
            <h3 className="text-white font-bold text-2xl">Jaipur</h3>
            <p className="text-white text-justify">
              If you love the language of vibrant culture, traditional music,
              dance, and cuisines then Jaipur is your place. Often referred to
              as “Pink City”, it was founded in 1727 by Maharaja Sawai Jai
            </p>
            <button className="rounded bg-[#e8dd34] text-sm my-3 py-1 px-5">
              Discover More
            </button>
          </div>
        </Grid>
        <Grid item sm={5} xs={12} lg={4} xl={4} md={4} className="relative ">
          <Image
            className="relative p-4 cursor-pointer"
            src={Mussoorie}
            alt="Picture of the author"
            onClick={() => {
              router.push("/MussoorieData");
            }}
          />
          <div className="absolute bottom-10 p-8">
            <h3 className="text-white font-bold text-2xl">Mussoorie </h3>
            <p className="text-white text-justify">
              Known as the “Queen of the Hills”, Mussoorie hill station offers a
              pleasant scenic beauty and climate throughout the year. Mussoorie
              was discovered in 1825 by Captain Young, a British
            </p>
            <button className="rounded bg-[#e8dd34] text-sm my-3 py-1 px-5">
              Discover More
            </button>
          </div>
        </Grid>

        <Grid item sm={5} xs={12} lg={4} xl={4} md={4} className="relative ">
          <Image
            className="relative p-4 cursor-pointer"
            src={Nainital}
            alt="Picture of the author"
            onClick={() => {
              router.push("/NainitalData");
            }}
          />
          <div className="absolute bottom-10 p-8">
            <h3 className="text-white font-bold text-2xl">Nainital</h3>
            <p className="text-white text-justify">
              Located in the Kumaun region of Uttrakhand, Nainital is a famous
              tourist attraction for its picturesque lake, lush hills, and
              colonial architecture. Founded by the British in 1841
            </p>
            <button className="rounded bg-[#e8dd34] text-sm my-3 py-1 px-5">
              Discover More
            </button>
          </div>
        </Grid>
      </Grid>

      <Grid
        container
        className="px-5 sm:px-5 md:px-5 lg:px-44 xl:px-44 relative  sm:flex md:flex xl:flex lg:flex"
      >
        <Grid item sm={5} xs={12} lg={4} xl={4} md={4} className="relative ">
          <Image
            className="relative p-4 cursor-pointer"
            src={Agra}
            alt="Picture of the author"
            onClick={() => {
              router.push("/AgraData");
            }}
          />
          <div className="absolute bottom-10 p-8">
            <h3 className="text-white font-bold text-2xl"> Agra</h3>
            <p className="text-white text-justify">
              Are you a lowkey romantic person who wishes to take your partner
              to the most mesmerizing lovely gateway? Well, pack your bags and
              book our Taxi service in Agra to visit the epitome
            </p>
            <button className="rounded bg-[#e8dd34] text-sm my-3 py-1 px-5">
              Discover More
            </button>
          </div>
        </Grid>

        <Grid item sm={5} xs={12} lg={4} xl={4} md={4} className="relative ">
          <Image
            className="relative p-4 cursor-pointer"
            src={Chandigarh}
            alt="Picture of the author"
            onClick={() => {
              router.push("/ChandigarhData");
            }}
          />
          <div className="absolute bottom-10 p-8">
            <h3 className="text-white font-bold text-2xl">Chandigarh</h3>
            <p className="text-white text-justify">
              Do you know of a city that boasts a planned layout that’s both
              functional and aesthetic? Well, you guessed it right. It’s “The
              City Beautiful - Chandigarh”. The well-organized sectors,
            </p>
            <button className="rounded bg-[#e8dd34] text-sm my-3 py-1 px-5">
              Discover More
            </button>
          </div>
        </Grid>
        {/* <Grid
          item
          sm={7}
          xs={12}
          lg={8}
          xl={8}
          md={8}
          className="relative cursor-pointer"
          onClick={() => {
            router.push("/blog");
          }}
        >
          <Image
            className="relative pt-4 pl-2"
            src={Rectangle}
            alt="Picture of the author"
          />
          <div className="absolute bottom-[-30px] sm:bottom-[-30px] md:bottom-10 lg:bottom-10 xl:bottom-10 p-8">
            <h3 className="text-white font-bold text-2xl">New Destination</h3>
            <p className="text-white">
              Join the journey with Tripecca, where the unexplored becomes a
              playground for the curious traveler.Discover the thrill of
              exploration as Tripecca takes you to unexplored horizons,
              unveiling a new destination like never before.Unlock the secrets
              of a mesmerizing new destination handpicked by Tripecca, where
              every moment is filled with awe and discovery.
            </p>
            <button className="rounded bg-[#e8dd34] text-sm my-3 py-1 px-5">
              Discover More
            </button>
          </div>
        </Grid> */}
        <Grid item sm={5} xs={12} lg={4} xl={4} md={4} className="relative ">
          <Image
            className="relative p-4 cursor-pointer"
            src={Delhi}
            alt="Picture of the author"
            onClick={() => {
              router.push("/DelhiData");
            }}
          />
          <div className="absolute bottom-10 p-8">
            <h3 className="text-white font-bold text-2xl">Delhi</h3>
            <p className="text-white text-justify">
              Delhi has served as the capital of various powerful dynasties and
              has always been a focal point in the Indian Independence era. From
              India Gate - a tribute to the fallen soldiers
            </p>
            <button className="rounded bg-[#e8dd34] text-sm my-3 py-1 px-5">
              Discover More
            </button>
          </div>
        </Grid>
      </Grid>

      <Grid
        container
        className="mt-10 sm:mt-10 md:mt-10 lg:mt-32 xl:mt-32 px-5 sm:px-5 md:px-5 lg:px-44 xl:px-44
         text-center sm:text-center md:text-center lg:text-left xl:text-left"
      >
        <Grid item sm={12} xs={12} lg={6} xl={6} md={6}>
          <p>Popular Destination</p>
          <h2 className="text-4xl font-bold text-[#67b5fe]">
            TOP-NOTCH DESTINATION
          </h2>
        </Grid>
        <Grid item sm={12} xs={12} lg={6} xl={6} md={6}>
          <p>
            Prepare to be mesmerized by the unrivaled beauty and charm of a
            top-notch destination that will leave you spellbound. Experience the
            epitome of travel excellence with Tripecca, which captivates the
            senses and leaves an everlasting impression.{" "}
          </p>
        </Grid>
      </Grid>

      <Grid container className="px-5 sm:px-5 md:px-5 lg:px-44 xl:px-44">
        <Grid
          item
          sm={12}
          xs={12}
          lg={7}
          xl={7}
          md={7}
          className="flex mt-8 justify-center"
        >
          <div className="relative ">
            <Image
              className=" px-2 cursor-pointer"
              src={Populer}
              alt="Picture of the author "
              onClick={() => {
                router.push("/ManaliData");
              }}
            />
            <p className="bg-[#e8dd34] text-black absolute top-3 left-5 px-4 rounded">
              Manali
            </p>
          </div>
          <div className="relative ">
            <Image
              className="relative px-2 cursor-pointer"
              src={Tempel}
              alt="Picture of the author"
              onClick={() => {
                router.push("/AmritsarData");
              }}
            />
            <p className="bg-[#e8dd34] text-black absolute top-3 left-5 px-4 rounded">
              Amritsar
            </p>
          </div>
        </Grid>
        <Grid
          item
          sm={12}
          xs={12}
          lg={5}
          xl={5}
          md={5}
          className="mt-8 block sm:block md:flex lg:block xl:block"
        >
          <div className="relative ">
            <Image
              className="relative px-2 sm:px-2 md:pt-0 lg:pt-0 xl:pt-0 cursor-pointer"
              src={Mussoori}
              alt="Picture of the author"
              onClick={() => {
                router.push("/MussoorieData");
              }}
            />
            <p className="bg-[#e8dd34] text-black absolute top-3 left-8 px-4 rounded">
              Mussoorie
            </p>
          </div>
          <div className="relative mt-4 sm:mt-4 md:mt-0 lg:mt-0 xl:mt-0 ">
            <Image
              className="relative px-2 sm:px-2 md:pt-0 lg:pt-6 xl:pt-0 cursor-pointer"
              src={NewDelhi}
              alt="Picture of the author"
              onClick={() => {
                router.push("/DelhiData");
              }}
            />
            <p className="bg-[#e8dd34] text-black absolute top-9 left-8 px-4 rounded">
              NewDelhi
            </p>
          </div>
        </Grid>
      </Grid>

      <Grid
        container
        className="px-5 sm:px-5 md:px-5 lg:px-44 xl:px-44 justify-center"
      >
        <h3 className=" text-2xl px-4 py-1 my-4">READ WHAT OUR USER SAYS</h3>
      </Grid>
      <Grid container className="px-5 sm:px-5 md:px-5 lg:px-44 xl:px-44">
        {clintreview.map((review) => {
          return (
            <Grid key={review.id} item sm={6} xs={12} lg={6} xl={6} md={6}>
              <div className="bg-[#f5f5f5] m-6 py-6 px-6 text-justify">
                <ul className="flex">
                  <li>
                    <Image
                      className="relative"
                      src={review.Avtar}
                      alt="Picture of the author"
                      style={{ width: "47px", borderRadius: "60%" }}
                    />
                  </li>
                  <li className="py-3 pl-3">
                    <p className="text-lg font-bold m-0">{review.reviewName}</p>
                    {/* <p className="font-xl font-bold">{review.reviewid}</p> */}
                  </li>
                </ul>
                <p className="text-xs py-3">{review.reviewmessage}</p>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
