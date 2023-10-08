import * as React from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Image, { StaticImageData } from "next/image";
import Banner from "../../public/services/banner.jpg";
import Taxi from "../../public/blog/taxi.png";
import Car from "../../public/blog/car.png";
import Girl from "../../public/blog/girl.png";
import Rectangel from "../../public/blog/Rectangle 45.png";
import Avtar from "../../public/avtar.jpg";
import { useRouter } from "next/router";
import Mussoorie from "../../public/More Destination/Mussoorie.png";
import Delhi from "../../public/More Destination/Delhi.png";
import Chandigarh from "../../public/More Destination/Chandigarh.png";
interface Blog {
  id: string;
  BlogUrl: StaticImageData;
  BlogMaintitel: string;
  // BlogAuthor: string;
  // BlogDate: string;
  Title: string;
  path: string;
}

export default function Service() {
  const router = useRouter();
  const [Blog, setBlog] = useState<Blog[]>([
    {
      id: "1",
      BlogUrl: Delhi,
      BlogMaintitel:
        "  Delhi has served as the capital of various powerful dynasties and has always been a focal ",
      Title: "Delhi",
      path: "/DelhiData",
    },
    {
      id: "2",
      BlogUrl: Mussoorie,
      BlogMaintitel:
        " Known as the “Queen of the Hills”, Mussoorie hill station offers a  pleasant scenic beauty and climate.",
      Title: "Mussoorie",
      path: "/MussoorieData",
    },
    {
      id: "3",
      BlogUrl: Chandigarh,
      BlogMaintitel:
        "  Do you know of a city that boasts a planned layout that’s both functional and aesthetic? Well,  ",
      Title: "Chandigarh",
      path: "/ChandigarhData",
    },
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
          <div className="text-left absolute bottom-32 px-5 sm:px-5 md:px-5 lg:px-5 xl:px-44">
            <h1 className="text-center text-white text-2xl sm:text-2xl md:text-4xl lg:text-6xl xl:text-6xl font-semibold">
              OUR <span className="text-[#67b5fe]">SERVICES</span>
            </h1>
          </div>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} className="text-center py-10">
          <p className="text-lg font-extrabold text-[#ffb300]">Services</p>
          <h3 className="text-xl sm:text-xl md:text-4xl lg:text-4xl xl:text-4xl uppercase leading-snug font-black py-1">
            Delhi to Agra
          </h3>
        </Grid>
      </Grid>
      <Grid container className="sm:px-0 md:px-0 lg:px-44 py-8 text-justify">
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <p>
            Are you seeking a hassle-free and affordable way to travel from
            Delhi to Agra? If yes, then you have come to the right place.
            Tripecca has just the perfect curated ride plans for you. We offer
            you the best cab booking service for your trip, with a variety of
            packages to suit your needs and budget. The distance between Delhi
            and Agra is approximately 233 kilometers. The estimated travel time
            for this route is around 3 hours and 30 minutes. The route from
            Delhi to Agra typically involves traveling on the Yamuna Expressway.
          </p>
          <br />
          <h2 className="text-2xl font-bold">Agra Attractions:</h2>
          <p>
            Agra is a city in Uttar Pradesh, known for its rich historical and
            architectural heritage. Our packages include visits to some of the
            most iconic attractions in Agra:
          </p>
        </Grid>
        <Grid item xs={12} sm={12} md={7} lg={7} xl={7} className="relative">
          <div className="py-8 text-justify">
            <p>
              <b>Taj Mahal: </b>
              One of the Seven Wonders of the World, the Taj Mahal is a
              magnificent white marble mausoleum built by Emperor Shah Jahan in
              memory of his wife, Mumtaz Mahal.
            </p>
            <br />
            <p>
              <b>Agra Fort: </b>A UNESCO World Heritage Site, Agra Fort is a
              massive red sandstone fort that served as the residence of the
              Mughal emperors.
            </p>
            <br />
            <p>
              <b>Fatehpur Sikri:</b>: Located near Agra, Fatehpur Sikri is a
              well-preserved ghost town that was once the capital of the Mughal
              Empire.
            </p>
            <br />
            <p>
              <b>Itmad-ud-Daulah’s Tomb:</b>
              Also known as the Baby Taj, this tomb is often regarded as a draft
              of the Taj Mahal and is known for its intricate marble inlay work.
            </p>
            <br />
            <p>
              Whether you are traveling solo, with your family, or with your
              friends, Tripecca as got your back. You can choose from our
              standard, deluxe, or premium packages, depending on the type of
              car, the number of passengers, and the amenities you want. Our
              standard package is ideal for those who want a basic and
              economical service. You can book a hatchback or a sedan car, with
              a capacity of up to four passengers. The standard package includes
              a driver, toll charges, parking fees, and state taxes. Get in
              touch with us to know more about this exciting trip.
            </p>
            <br />
            <h1>We are waiting for you.</h1>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={5} xl={5} className="relative">
          <div className="py-8 px-5">
            <Image
              width={1000}
              className="relative"
              src={Chandigarh}
              alt="Picture of the author"
            />
          </div>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <h4 className="text-4xl font-bold pt-10 text-center">
            Related Blogs
          </h4>
        </Grid>
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
                    {/* <li className="text-xs font-extrabold">
                      {Blog.BlogAuthor}{" "}
                    </li> */}
                    {/* <li className="text-xs font-extrabold">{Blog.BlogDate}</li> */}
                    <h3 className="text-xl font-black ">{Blog.Title}</h3>
                  </ul>
                  <span className=" font-black flex justify-content-center text-justify color">
                    {Blog.BlogMaintitel}
                  </span>
                  <button
                    className="rounded-full bg-[#ffd50f] py-1 px-3 my-3 flex justify-center "
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
