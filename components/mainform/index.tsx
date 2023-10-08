import * as React from "react";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { StaticImageData } from "next/image";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Swiftpng from "../../public/swiftpng.png";
import oneway from "../../public/oneway.png";
import Roundway from "../../public/Round_way2-removebg-preview.png";
import AirportTransfer from "../../public/airport-removebg-preview.png";
import Ellipseone from "../../public/Ellipseone.png";
import Ellipsetwo from "../../public/Ellipsetwo.png";
import Ellipsethree from "../../public/Ellipsethree.png";
import Ellipsefourth from "../../public/Ellipsefourth.png";
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
import { Autocomplete } from "@mui/material";
import { axiosInstance } from "../../pages/_app";
import { Form, useFormik } from "formik";
import * as yup from "yup";
import Image from "next/image";
import _ from "lodash";
import { toast } from "react-toastify";
import Mainform from "../../components/mainform";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import LocationFiled from "../../components/googlefiled";

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
  reviewUrl: StaticImageData;
  reviewName: string;
  reviewid: string;
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
  console.log(pickLocation);
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  // console.log(pickupDate, ">>>>>>>>>>>>>>");

  const [ourCars, setOurCars] = useState<any[]>([]);

  const [selectedTime, setSelectedTime] = useState(null);
  const handleTimeChange = (time) => {
    setSelectedTime(time);
    setPickupTime(time);
  };

  const [selectedDate, setSelectedDate] = useState(null);
  const handleDateChange = (isPuckup, date) => {
    isPuckup ? setPickupDate(date) : setReturnDate(date);
  };

  const getCars = async () => {
    try {
      const result = await axiosInstance.get("/api/cars/car");
      console.log("home", result.data);
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        let result = await axiosInstance.get(
          `/api/trips/trip?tripType=${selectedTripValue}`
        );
        setAllTrips(result.data);
      } catch (error) {
        console.error("Error fetching car data:", error);
      }
    };

    fetchData();
  }, [selectedTripValue]);

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

  const [clintreview, setreview] = useState<review[]>([
    {
      id: "1",
      reviewUrl: Ellipseone,
      reviewName: "reviewName",
      reviewid: "@reviewid",
      reviewmessage:
        "Tripecca s taxi services made my travel experience seamless and convenient. The drivers were professional, punctual, and went above and beyond to ensure my comfort. Thanks to Tripecca, I could explore the city hassle-free and focus on creating lasting memories.",
    },
    {
      id: "2",
      reviewUrl: Ellipsetwo,
      reviewName: "Harry Potter",
      reviewid: "@Harry Potter",
      reviewmessage:
        "Tripecca s taxi services exceeded my expectations. The booking process was simple and efficient, and their drivers were friendly and professional. I appreciated their attention to detail, ensuring I reached my destinations on time while providing a smooth and enjoyable ride. Tripecca made transportation a stress-free part of my travel experience. I can t recommend Tripecca s taxi services enough!",
    },
    {
      id: "3",
      reviewUrl: Ellipsethree,
      reviewName: "John Potter",
      reviewid: "@johnpotter",
      reviewmessage:
        "Tripecca s dedication to providing seamless service played a significant role in the success of my trip. I wholeheartedly recommend their taxi services to business travelers seeking convenience, reliability, and exceptional customer care.",
    },
    {
      id: "4",
      reviewUrl: Ellipsefourth,
      reviewName: "Loren ",
      reviewid: "@loren ",
      reviewmessage:
        "Tripecca s taxi services have become an integral part of my travel experiences, and I highly recommend them to fellow explorers seeking comfort and reliability.",
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
      pickupTime,
      returnDate // Add returnDate here
    );

    if (_.isEmpty(pickLocation)) {
      alert("Please enter pickup location");
    } else if (_.isEmpty(dropLocation)) {
      alert("Please enter drop location");
    } else if (_.isEmpty(contactNumber)) {
      alert("Please enter a valid contact number");
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
          return_date:
            selectedTripValue === "round_trip"
              ? parseDateString(returnDate)
              : "", // Parse returnDate conditionally
          pick_time: pickupTime,
          trip_type: selectedTripValue,
          trip_id: "",
          vendor_id: "",
          booking_status: "pending",
          payment_status: "pending",
          payment_method: "online",
        });

        console.log("response", response.data);

        if (selectedTripValue === "round_trip") {
          router.push(
            `/ourcars?tripType=${selectedTripValue}&pLocation=${pickLocation}&dLocation=${dropLocation}&pDate=${pickupDate}&bookingId=${response.data.id}&rDate=${returnDate}`
          );
        } else {
          router.push(
            `/ourcars?tripType=${selectedTripValue}&pLocation=${pickLocation}&dLocation=${dropLocation}&pDate=${pickupDate}&bookingId=${response.data.id}`
          );
        }
      } catch (error) {
        console.error(error);
      }
    }
  }

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ paddingTop: "5px" }}>
            <div>{children}</div>
          </Box>
        )}
      </div>
    );
  }

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <div>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={9}
          xl={9}
          className="mt-[-109px] px-6 bg-[#fff]"
        >
          <div className=" px-0 pb-6 rounded-md bg-[#fff]">
            <Box sx={{ borderColor: "divider", justifyContent: "center" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                sx={{
                  "& button": {
                    background: "#fff",
                    borderRadius: "5px",
                    color: "gray",
                    border: "2px solid #fff",
                    fontSize: "12px",
                    padding: "0px 10px",
                    margin: "6px 10px",
                    textTransform: "capitalize",
                    fontWeight: "bold",
                    minWidth: "100px",
                    width: "100px",
                  },
                  "& button:active": {
                    background: "#0db1f7",
                    borderRadius: "5px",
                    color: "#fff",
                    border: "2px solid #0db1f7",
                  },
                  "& button:focus": {
                    background: "#0db1f7",
                    borderRadius: "5px",
                    color: "#fff",
                    border: "2px solid #0db1f7",
                  },
                  "& button.Mui-selected": {
                    background: "#0db1f7",
                    borderRadius: "5px",
                    color: "#fff",
                    border: "2px solid #0db1f7",
                  },
                }}
                TabIndicatorProps={{
                  sx: { display: "none" },
                }}
                centered
                className="drop-shadow-md"
              >
                <Tab
                  icon={
                    <Image
                      className=" p-4"
                      src={oneway}
                      width={70}
                      height={40}
                      alt="Picture of the author"
                    />
                    // <FiberManualRecordIcon className="text-sm border border-white rounded-full	" />
                  }
                  iconPosition="top"
                  label="One Way"
                  {...a11yProps(0)}
                />

                <Tab
                  icon={
                    <Image
                      className=" p-4"
                      src={Roundway}
                      width={70}
                      height={40}
                      alt="Picture of the author"
                    />
                    // <FiberManualRecordIcon className="text-sm border border-white rounded-full" />
                  }
                  iconPosition="top"
                  label="Round Trip"
                  {...a11yProps(1)}
                />

                <Tab
                  icon={
                    <Image
                      className=" p-4"
                      src={AirportTransfer}
                      width={70}
                      height={40}
                      alt="Picture of the author"
                    />
                    // <FiberManualRecordIcon className="text-sm border border-white rounded-full" />
                  }
                  iconPosition="top"
                  label="Airport Transfer"
                  {...a11yProps(2)}
                />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <div className="flex flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap xl:flex-nowrap justify-center w-full">
                <div className="w-full sm:w-full md:w-4/12 lg:w-3/12 xl:w-3/12 pt-3 rounded-md">
                  <label>From</label>
                  <FormControl fullWidth>
                    {/* <Autocomplete
                disablePortal
                options={getUniquePickLocation()}
                value={pickLocation}
                onChange={(event, newValue) => setPickLocation(newValue)}
                renderInput={(params) => (
                    <TextField
                    placeholder='From'
                    {...params}
                    id="pick_location"
                    name="pick_location"
                    value={pickLocation}
                    />
                )}
                /> */}
                    <LocationFiled
                      onLocChange={(newValue) => {
                        setPickLocation(newValue.description);
                      }}
                    />
                  </FormControl>
                </div>
                <div className="w-full sm:w-full md:w-4/12 lg:w-3/12 xl:w-3/12 py-3 rounded-md">
                  <label>To</label>
                  <FormControl fullWidth>
                    {/* <Autocomplete
                disablePortal
                options={getUniqueDropLocation() }
                value={dropLocation}
                onChange={(event, newValue) => setDropLocation(newValue)}
                renderInput={(params) => <TextField {...params}
                placeholder='To'
                id='drop_location'
                name='drop_location'
                variant='outlined'
                value={dropLocation}             
                />}
                /> */}
                    <LocationFiled
                      // value={pickLocation}
                      onLocChange={(newValue) => {
                        setDropLocation(newValue.description);
                      }}
                    />
                  </FormControl>
                </div>
                <div className="w-full sm:w-full md:w-4/12 lg:w-3/12 xl:w-3/12 rounded-md">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      sx={{
                        width: "100%",
                      }}
                      // id='pick_date'
                      // name='pick_date'
                      // variant="outlined"
                      // value={selectedDate}
                      onChange={(date) => {
                        console.log("datChange", date);
                        handleDateChange(true, date);
                      }}
                    />
                  </LocalizationProvider>
                </div>
              </div>
              <div className="flex flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap xl:flex-nowrap justify-center w-full">
                {selectedTripValue === "round_trip" ? (
                  <div className="w-full sm:w-full md:w-4/12 lg:w-3/12 xl:w-3/12 pt-3">
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
                <div className="w-full sm:w-full md:w-4/12 lg:w-3/12 xl:w-3/12 py-3 rounded-md">
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
                <div className="w-full sm:w-full md:w-4/12 lg:w-3/12 xl:w-3/12 rounded-md">
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
                {/* <div className="w-full sm:w-full md:w-4/12 lg:w-3/12 xl:w-3/12 pt-4">
                  {selectedTripValue === "one_way" ? (
                    <button
                      className="w-full bg-[#0db1f7] text-white py-2 rounded"
                      onClick={() => setSelectedTripValue("round_trip")}
                    >
                      BOOK RETURN
                    </button>
                  ) : (
                    ""
                  )}
                </div> */}
                <div className="w-full sm:w-full md:w-4/12 lg:w-3/12 xl:w-3/12 py-3">
                  <button
                    type="submit"
                    className="w-full bg-[#0db1f7] text-white py-2 rounded"
                    onClick={async () => {
                      handleSubmit();
                    }}
                  >
                    SEARCH CABS
                  </button>
                </div>
              </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <div className="flex flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap xl:flex-nowrap justify-center w-full">
                <div className="w-full sm:w-full md:w-4/12 lg:w-3/12 xl:w-3/12 pt-3 rounded-md">
                  <FormControl fullWidth>
                    <label>From</label>
                    {/* <Autocomplete
              disablePortal
              options={getUniquePickLocation()}
              value={pickLocation}
              onChange={(event, newValue) => setPickLocation(newValue)}
              renderInput={(params) => (
                  <TextField
                  placeholder='From'
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
                <div className="w-full sm:w-full md:w-4/12 lg:w-3/12 xl:w-3/12 rounded-md py-3">
                  <FormControl fullWidth>
                    <label>To</label>
                    {/* <Autocomplete
            disablePortal
            options={getUniqueDropLocation() }
            value={dropLocation}
            onChange={(event, newValue) => setDropLocation(newValue)}
            renderInput={(params) => <TextField {...params}
            placeholder='To'
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
                <div className="w-full sm:w-full md:w-4/12 lg:w-3/12 xl:w-3/12 rounded-md">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      sx={{
                        width: "100%",
                      }}
                      // id='pick_date'
                      // name='pick_date'
                      // variant='outlined'
                      // value={selectedDate}
                      onChange={(date) => {
                        console.log("datChange", date);
                        handleDateChange(true, date);
                      }}
                    />
                  </LocalizationProvider>
                </div>
              </div>
              <div className="flex flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap xl:flex-nowrap justify-center w-full mt-2">
                <div className="w-full sm:w-full md:w-4/12 lg:w-3/12 xl:w-3/12 rounded-md my-2">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      sx={{
                        width: "100%",
                      }}
                      // id='drop_date'
                      // name='drop_date'
                      // variant='outlined'
                      // value={selectedDate}
                      onChange={(date) => handleDateChange(false, date)}
                    />
                  </LocalizationProvider>
                </div>
                <div className="w-full sm:w-full md:w-4/12 lg:w-3/12 xl:w-3/12 py-3 rounded-md">
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
                <div className="w-full sm:w-full md:w-4/12 lg:w-3/12 xl:w-3/12 rounded-md my-2">
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
                <div className="w-full sm:w-full md:w-4/12 lg:w-3/12 xl:w-3/12 py-3">
                  <button
                    type="submit"
                    className="w-full bg-[#0db1f7] text-white py-2 rounded"
                    onClick={async () => {
                      handleSubmit();
                    }}
                  >
                    SEARCH CABS
                  </button>
                </div>
              </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <div className="flex flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap xl:flex-nowrap justify-center w-full">
                <div className="w-full sm:w-full md:w-4/12 lg:w-3/12 xl:w-3/12 pt-3 rounded-md">
                  <FormControl fullWidth>
                    <label>From</label>
                    {/* <Autocomplete
                disablePortal
                options={getUniquePickLocation()}
                value={pickLocation}
                onChange={(event, newValue) => setPickLocation(newValue)}
                renderInput={(params) => (
                    <TextField
                    placeholder='From'
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
                <div className="w-full sm:w-full md:w-4/12 lg:w-3/12 xl:w-3/12 rounded-md py-3">
                  <FormControl fullWidth>
                    <label>To</label>
                    {/* <Autocomplete
                disablePortal
                options={getUniqueDropLocation() }
                value={dropLocation}
                onChange={(event, newValue) => setDropLocation(newValue)}
                renderInput={(params) => <TextField {...params}
                placeholder='To'
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
                <div className="w-full sm:w-full md:w-4/12 lg:w-3/12 xl:w-3/12 rounded-md">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      sx={{
                        width: "100%",
                      }}
                      // id='pick_date'
                      // name='pick_date'
                      // variant='outlined'
                      // value={selectedDate}
                      onChange={(date) => {
                        console.log("datChange", date);
                        handleDateChange(true, date);
                      }}
                    />
                  </LocalizationProvider>
                </div>
              </div>
              <div className="flex flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap xl:flex-nowrap justify-center w-full mt-2">
                <div className="w-full sm:w-full md:w-4/12 lg:w-3/12 xl:w-3/12 rounded-md py-3">
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
                <div className="w-full sm:w-full md:w-4/12 lg:w-3/12 xl:w-3/12 rounded-md">
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
                <div className="w-full sm:w-full md:w-4/12 lg:w-3/12 xl:w-3/12 pt-3">
                  <button
                    type="submit"
                    className="w-full bg-[#0db1f7] text-white py-2 rounded"
                    onClick={async () => {
                      handleSubmit();
                    }}
                  >
                    SEARCH CABS
                  </button>
                </div>
              </div>
            </CustomTabPanel>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
