import * as React from "react";
import { useRouter } from "next/router";
import Grid from "@mui/material/Grid";
import Filter from "components/filter";
import Swift from "../../public/ourcars/swiftpng.png";
import Chir from "../../public/ourcars/chir.png";
import Fair from "../../public/ourcars/Fiar.png";
import Image, { StaticImageData } from "next/image";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import AdjustIcon from "@mui/icons-material/Adjust";
import CircularProgress from "@mui/material/CircularProgress";
import RadioGroup from "@mui/material/RadioGroup";
import {
  Autocomplete,
  FormControl,
  InputAdornment,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { axiosInstance } from "../_app";
import Nova from "../../public/Nova.jpg";
import _ from "lodash";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import dayjs, { Dayjs } from "dayjs";
import LocationFiled from "../../components/googlefiled";
// import Mainform from "../../components/mainform";
import { log } from "console";
import { useParams } from "react-router-dom";

// interface Cars {
//   id: string;
//   carUrl: string;
//   carName: string;
// }

export default function OurCars() {
  const router = useRouter();
  const { tripType, pLocation, dLocation, pDate, rDate, bookingId } =
    router.query;
  console.log(router.query, ">>>>>>>");
  const [selectedTripValue, setSelectedTripValue] = useState(tripType || null);
  const [pickupDate, setPickupDate] = useState(
    pDate ? dayjs(pDate as string) : null || null
  );
  const [pickLocation, setPickLocation] = useState(pLocationFilter || "");
  // const [PicklocationFilter, setPicklocationFilter] = useState();
  const [loading, setLoading] = useState(false);
  const [dropLocation, setDropLocation] = useState(dLocation || "");
  const [filteredData2, setFilteredData] = useState([]);

  const [allTrips, setAllTrips] = useState(null);
  const [filteredTrips, setFilteredTrips] = useState(null);
  const [contactNumber, setContactNumber] = useState("");
  const [booking_id, setBookingId] = useState(bookingId);
  const [returnDate, setReturnDate] = useState(
    rDate ? dayjs(rDate as string) : null || null
  );
  const [pickupTime, setPickupTime] = useState("");

  const triphandleChange = (event) => {
    setSelectedTripValue(event.target.value);
  };

  const onKeyPress = (e) => {
    const charCode = e.which ? e.which : e.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      e.preventDefault();
    }
  };

  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  const handleDateChange = (isPuckup, date) => {
    isPuckup ? setPickupDate(date) : setReturnDate(date);
  };

  var PicklocationFilter = "";
  var DropLocationFilter = "";
  var pLocationFilter = "";
  useEffect(() => {
    if (pickLocation) {
      const inputString = pickLocation.toString();
      const delimiter = ",";
      const parts = inputString?.split(delimiter);
      if (parts.length > 1) {
        let valueBeforeDelimiter = parts[0].trim(); // Use trim to remove leading/trailing spaces
        PicklocationFilter = valueBeforeDelimiter;
        console.log("PicklocationFilter>>>>>", PicklocationFilter); // Output: "Hisar"
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
    } else if (pLocation) {
      const inputString = pLocation.toString();
      const delimiter = ",";
      const parts = inputString?.split(delimiter);
      if (parts.length > 1) {
        let valueBeforeDelimiter = parts[0].trim(); // Use trim to remove leading/trailing spaces
        pLocationFilter = valueBeforeDelimiter;
        console.log("pLocationFilter", pLocationFilter); //
      }
    }
  }, [dropLocation, pLocation]);
  console.log(pLocationFilter);

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
      console.log(
        filterdata,

        filteredData2
      );
      setFilteredTrips(filterdata);
    }, 50);
  }, [pickLocation, dropLocation]);

  useEffect(() => {
    _.isEmpty(tripType) ? setOpen(false) : "";
  }, [tripType]);

  useEffect(() => {
    fetchData();
  }, [selectedTripValue]);

  const getUniqueCarModals = () => {
    const uniqueModals: string[] = [];
    allTrips?.forEach((trip: any) => {
      const carModal = trip?.car?.car_name;
      if (carModal && !uniqueModals.includes(carModal)) {
        uniqueModals.push(carModal);
      }
    });
    return uniqueModals;
  };

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

  const getUniquePassengerCapacities = () => {
    const passengerCapacities: number[] = [];
    allTrips?.forEach((trip: any) => {
      const capacity = trip?.car?.seats;
      if (capacity && !passengerCapacities.includes(capacity)) {
        passengerCapacities.push(capacity);
      }
    });
    return passengerCapacities;
  };

  async function handleBookingSubmit() {
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
      setLoading(true); // Set loading before sending API request

      try {
        const response = await axiosInstance.post("/api/bookings/booking", {
          pickup_address: pickLocation,
          drop_address: dropLocation,
          customer_contact_number: contactNumber,
          pickup_date: pickupDate,
          return_date: returnDate,
          pick_time: pickupTime,
          trip_type: selectedTripValue,
          trip_id: "",
          vendor_id: "",
          booking_status: "pending",
          payment_status: "pending",
          payment_method: "online",
        });

        if (response.status === 201) {
          setBookingId(response.data.id);
          handleClose();
          fetchData();
          setLoading(false); // Set loading before sending API request
        } else {
          alert("No Trips found at the moment, Please try again later");
        }
      } catch (error) {
        console.error(error);
        setLoading(false); // Set loading before sending API request
      }
    }
  }

  async function handleUpdateBookingSubmit() {
    if (_.isEmpty(pickLocation)) {
      alert("Please enter pickup location");
    } else if (_.isEmpty(dropLocation)) {
      alert("Please enter drop location");
    } else if (_.isEmpty(pickupDate)) {
      alert("Please select pickup date");
    } else if (selectedTripValue === "round_trip" && _.isEmpty(returnDate)) {
      alert("Please select return date");
    } else {
      setLoading(true); // Set loading before sending API request
      try {
        const response = await axiosInstance.put(
          `/api/bookings/booking?id=${booking_id}`,
          {
            pickup_address: pickLocation,
            drop_address: dropLocation,
            customer_contact_number: contactNumber,
            pickup_date: pickupDate.toDate(),
            return_date: returnDate.toDate(),
            pick_time: pickupTime,
            trip_type: selectedTripValue,
            trip_id: "",
            vendor_id: "",
            booking_status: "pending",
            payment_status: "pending",
            payment_method: "online",
          }
        );

        if (response.status === 200) {
          handleClose();
          fetchData();
        } else {
          alert("No Trips found at the moment, Please try again later");
        }
      } catch (error) {
        console.error(error);
      }
    }
  }

  return (
    <>
      <Grid container>
        <Grid
          item
          xs={12}
          className="drop-shadow-xl px-2 py-1 rounded bg-white px-5 sm:px-5 md:px-5 lg:px-5 xl:px-44 relative z-[999]  lg:block xl:block"
        >
          <div className="flex flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap xl:flex-nowrap justify-center w-full mt-20">
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
                                selectedTripValue == "round_trip" ? true : false
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
                              checked={selectedTripValue === "airport_transfer"}
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
            <div className="w-full sm:w-w-full md:w-4/12 lg:w-3/12 xl:w-3/12 p-3 main_trip">
              <FormControl fullWidth>
                <label>Trip Type</label>
                <Select
                  fullWidth
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectedTripValue}
                  onChange={triphandleChange}
                  size="small"
                >
                  <MenuItem value="one_way">One Way</MenuItem>
                  <MenuItem value="round_trip">Round Way</MenuItem>
                  <MenuItem value="airport_transfer">
                    Airport Destination
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="w-full sm:w-full md:w-4/12 lg:w-3/12 xl:w-3/12 px-2 py-3 ">
              <FormControl fullWidth>
                <label>From</label>
                {/* <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={getUniquePickLocation()}
                value={pickLocation}
                onChange={(event, newValue) => {
                  setPickLocation(newValue)
                }}
                renderInput={(params) => <TextField {...params}/>}
              /> */}
                <LocationFiled
                  onLocChange={(newValue) => {
                    // console.log(newValue, "<<<<<<<<<<newValue");

                    setPickLocation(newValue);
                  }}
                />
              </FormControl>
            </div>
            <div className="w-full sm:w-full md:w-4/12 lg:w-3/12 xl:w-3/12 px-2 py-3 ">
              <FormControl fullWidth>
                <label>To</label>
                {/* <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={getUniqueDropLocation()}
                value={dropLocation}
                onChange={(event, newValue) => setDropLocation(newValue)}
                renderInput={(params) => <TextField {...params}/>}
              /> */}
                <LocationFiled
                  onLocChange={(newValue) => {
                    setDropLocation(newValue.description);
                  }}
                />
              </FormControl>
            </div>
            <div className="w-full sm:w-w-full md:w-4/12 lg:w-3/12 xl:w-3/12 p-3 ">
              <label>Pick - UP DATE</label>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  value={pickupDate}
                  onChange={(date) => handleDateChange(true, date)}
                />
              </LocalizationProvider>
            </div>
            {selectedTripValue === "round_trip" ? (
              <div className="w-full sm:w-w-full md:w-4/12 lg:w-3/12 xl:w-3/12 p-3 ">
                <label>Return - DATE</label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    value={returnDate}
                    onChange={(date) => handleDateChange(false, date)}
                  />
                </LocalizationProvider>
              </div>
            ) : (
              ""
            )}
            <div className="w-full sm:w-w-full md:w-4/12 lg:w-3/12 xl:w-3/12 p-3">
              <button
                className="rounded bg-[#1c4680] text-white mt-6 py-2 px-4"
                onClick={() => {
                  handleUpdateBookingSubmit();
                  fetchData();
                }}
              >
                {/* {loading ? (
                  <>
                    <CircularProgress />
                    Please Wait....
                  </>
                ) : (
                  <>UPDATE SEARCH</>
                )} */}
                <>UPDATE SEARCH</>
              </button>
            </div>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className="block sm:block md:block lg:hidden xl:hidden">
            {/* <Mainform /> */}
          </div>
        </Grid>
      </Grid>
      <Grid
        container
        className="px-5 sm:px-5 md:px-5 lg:px-5 xl:px-44 mt-10 relative z-[1]"
      >
        <Grid item xs={12} sm={5} md={4} lg={4} xl={4}>
          <Filter
            uniqueCars={getUniqueCarModals()}
            passengerCapacity={getUniquePassengerCapacities()}
          />
        </Grid>

        <Grid item xs={12} sm={7} md={8} lg={8} xl={8}>
          {!_.isEmpty(filteredTrips) ? (
            filteredTrips?.map((item, index) => {
              return (
                <div key={item.id} className="overflow-y-none">
                  <div className="drop-shadow-md bg-white px-8 py-5 sm:mx-0 md:mx-0 lg:mx-10 xl:mx-10 my-5 rounded">
                    <h5 className="text-lg">
                      <span className="font-bold">
                        {!_.isEmpty(selectedTripValue) &&
                        selectedTripValue === "one_way"
                          ? "One-way"
                          : !_.isEmpty(selectedTripValue) &&
                            selectedTripValue === "round_trip"
                          ? "Round-Trip"
                          : !_.isEmpty(selectedTripValue) &&
                            selectedTripValue === "airport_transfer"
                          ? "Airport Transfer"
                          : ""}{" "}
                        trip{" "}
                      </span>
                      | Estimated distance:{" "}
                      <span className="font-bold">
                        {item?.total_distance_km} kms
                      </span>{" "}
                      |
                      {selectedTripValue === "one_ way"
                        ? "1 pickup & 1 drop included"
                        : selectedTripValue === "round_trip"
                        ? "2 pickup & 2 drop included"
                        : "1 pickup & 1 drop included"}
                    </h5>
                  </div>
                  <div className="drop-shadow-md bg-white mx-0 sm:mx-0 md:mx-0 lg:mx-10 xl:mx-10">
                    <div className="drop-shadow-md bg-white px-0 sm:px-0 md:px-8 lg:px-8 xl:px-8 py-5 my-5 rounded block sm:block md:block lg:flex xl:flex">
                      <Grid item sm={6} xs={12} lg={4} xl={4} md={6}>
                        <div>
                          <Image
                            width={100}
                            height={100}
                            className="relative"
                            src={item?.car?.exterior_images[0]}
                            alt="Picture of the author"
                          />
                        </div>
                      </Grid>
                      <ul className="pl-10">
                        <li className="flex">
                          <h4 className="text-xl font-bold">
                            {item?.car?.car_name}
                          </h4>
                          <button className="ml-6 text-xs my-2 px-3 text-white bg-[#56c8f4] rounded-full">
                            Or Similar
                          </button>
                        </li>
                        <li className="block sm:block md:flex lg:flex xl:flex pt-2">
                          <button className=" text-xs my-2 px-3 text-white bg-black rounded-full">
                            {item?.car?.model}
                          </button>
                          <span className="text-xs py-1 px-3 text-[#56c8f4]">
                            <FiberManualRecordIcon />
                          </span>
                          <p className="py-1">AC</p>
                          <span className="py-2 px-3">
                            <Image
                              style={{
                                width: "15px",
                              }}
                              src={Chir}
                              alt="Picture of the author"
                            />
                          </span>
                          <p className="py-1">
                            {item?.car?.seats} Passengers allowed
                          </p>
                        </li>
                      </ul>
                    </div>
                    <Grid container>
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={6}
                        lg={6}
                        xl={6}
                        className="px-8"
                      >
                        <div className=" rounded">
                          <h4 className="text-xl font-bold">
                            Comfortable car with{" "}
                            <span className="text-[#56c8f4]">Tripecca</span>{" "}
                          </h4>
                        </div>
                        <ul className="py-5">
                          <li>
                            <span className="text-[#56c8f4] pr-1 text-xs">
                              <AdjustIcon />
                            </span>
                            {item.total_distance_km} kms included. After that ₹
                            {item?.car?.price}/km
                          </li>
                          <li className="py-3">
                            <span className="text-[#56c8f4] pr-1 text-xs">
                              <AdjustIcon />
                            </span>
                            Free cancellation until 24 hours before
                          </li>
                          <li>
                            <span className="text-[#56c8f4] pr-1 text-xs">
                              <AdjustIcon />
                            </span>
                            Reserve this cab at ₹{item.total_price} only
                          </li>
                        </ul>
                        <div className="flex pb-5">
                          <Image
                            style={{
                              width: "25px",
                            }}
                            src={Fair}
                            alt="Picture of the author"
                          />
                          <p>CNG Car PETROL</p>
                        </div>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={6}
                        lg={6}
                        xl={6}
                        className="px-8"
                      >
                        <ul className="flex justify-between">
                          <li></li>
                          <li className="text-[#54cf68] text-right">
                            Free cancellation until 1 hour before pickup
                          </li>
                        </ul>
                        <div className="text-center md:text-right py-8">
                          <h3 className="text-xl font-bold">
                            {item.pick_location} - {item.drop_location}
                          </h3>
                          <h3 className="text-xl font-bold">
                            ₹{item.total_price}
                          </h3>
                          <p className="font-bold">
                            + State taxes & Toll taxes
                          </p>
                          <button
                            className="text-sm my-5 px-5 py-2 text-white bg-[#56c8f4] font-medium rounded"
                            onClick={() =>
                              router.push(
                                `/payments?tripId=${item?.id}&bookingId=${booking_id}`
                              )
                            }
                          >
                            BOOK NOW
                          </button>
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="bg-[#ebf3fe] text-center m-5 py-5 text-[#6ca8fb]">
              <p>
                <SentimentVeryDissatisfiedIcon />
              </p>
              <p className="text-center pt-3 text-xl text-[#6ca8fb]">
                No Trips found according to your requirments, We will contact
                you with best possible trips for you!
              </p>
            </div>
          )}
        </Grid>
        <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{
            background: "#1c468087",
            backdropFilter: "blur(10px)",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "background.paper",
              p: 4,
            }}
            className="w-[95%] sm:w-[95%] md:w-[95%] lg:w-[40%] xl:w-[40%] rounded-md "
          >
            <p className="text-center pb-5 text-2xl">Book Trip</p>
            <Grid container>
              <Grid item xs={6} lg={6} md={6} sm={12}>
                <div className="w-full p-2">
                  <FormControl fullWidth>
                    <label>Trip Type</label>
                    <Select
                      fullWidth
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={selectedTripValue}
                      onChange={triphandleChange}
                      size="small"
                    >
                      <MenuItem value="one_way">One Way</MenuItem>
                      <MenuItem value="round_trip">Round Way</MenuItem>
                      <MenuItem value="airport_transfer">
                        Airport Destination
                      </MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </Grid>
              <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                <div className="w-full p-2">
                  <FormControl fullWidth>
                    <label>Contact Number</label>
                    <TextField
                      inputProps={{ maxLength: 10 }}
                      size="small"
                      fullWidth
                      id="outlined-basic"
                      name="phone"
                      type="tel"
                      value={contactNumber}
                      placeholder="Phone Number - "
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">+91</InputAdornment>
                        ),
                      }}
                      onKeyDown={(e) => onKeyPress(e)}
                      onChange={(e) => setContactNumber(e.target.value)}
                    />
                  </FormControl>
                </div>
              </Grid>
              <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                <div className="w-full p-2">
                  <FormControl fullWidth>
                    <label>From</label>
                    {/* <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={getUniquePickLocation()}
                    value={pickLocation}
                    onChange={(event, newValue) => {
                      setPickLocation(newValue)
                    }}
                    renderInput={(params) => <TextField {...params}/>}                  
                  /> */}
                    <LocationFiled
                      onLocChange={(newValue) => {
                        setPickLocation(newValue?.description);
                      }}
                    />
                  </FormControl>
                </div>
              </Grid>
              <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                <div className="w-full p-2">
                  <FormControl fullWidth>
                    <label>To</label>
                    {/* <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={getUniqueDropLocation()}
                value={dropLocation}
                onChange={(event, newValue) => setDropLocation(newValue)}
                renderInput={(params) => <TextField {...params}/>}
              /> */}
                    <LocationFiled
                      onLocChange={(newValue) => {
                        setDropLocation(newValue?.description);
                      }}
                    />
                  </FormControl>
                </div>
              </Grid>
              <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                <div className="w-full p-2">
                  <label>Pick - UP DATE</label>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      value={pickupDate}
                      onChange={(date) => handleDateChange(true, date)}
                    />
                  </LocalizationProvider>
                </div>
              </Grid>
              <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                {selectedTripValue === "round_trip" ? (
                  <div className="w-full p-2">
                    <label>Return - DATE</label>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        value={returnDate}
                        onChange={(date) => handleDateChange(false, date)}
                      />
                    </LocalizationProvider>
                  </div>
                ) : (
                  ""
                )}
              </Grid>

              <Grid item xs={12}>
                <div className="p-2 text-center">
                  <Button
                    className="rounded bg-[#1c4680] hover:bg-[#1c4680] text-white mt-6 py-2 px-4 w-full"
                    onClick={() => {
                      handleBookingSubmit();
                    }}
                  >
                    {loading ? (
                      <>
                        <CircularProgress />
                      </>
                    ) : (
                      <>Book Trip</>
                    )}
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Box>
        </Modal>
      </Grid>
    </>
  );
}
