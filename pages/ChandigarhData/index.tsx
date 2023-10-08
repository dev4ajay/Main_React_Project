import * as React from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Image, { StaticImageData } from "next/image";
import Taxi from "../../public/blog/taxi.png";
import Car from "../../public/blog/car.png";
import Girl from "../../public/blog/girl.png";
import Rectangel from "../../public/blog/Rectangle 45.png";
import Avtar from "../../public/avtar.jpg";
import { useRouter } from "next/router";
import Jaipur from "../../public/More Destination/Jaipur.png";
import Manali from "../../public/More Destination/Manali.png";
import Delhi from "../../public/More Destination/Delhi.png";
import Chandigarh from "../../public/More Destination/Chandigarh.png";
interface Blog {
  id: string;
  image: StaticImageData;
  BlogMaintitel: string;
  // BlogAuthor: string;
  // BlogDate: string;
  BlogTitle: string;
  path: string;
}

export default function Service(){
  const router = useRouter();
  const [Blog, setBlog] = useState<Blog[]>([
    {
      id: "1",
      image: Delhi,
      BlogMaintitel: "Delhi",
      path: "/DelhiData",
      // BlogAuthor: "By Alicia Davis ",
      // BlogDate: "February 23, 2023",
      BlogTitle:
        " Delhi has served as the capital of various powerful dynasties and has always been a focal point in the Indian Independence era. From India Gate - a tribute to the fallen soldiers",
    },
    {
      id: "2",
      image: Manali,
      BlogMaintitel: "Manali",
      path: "/ManaliData",
      // BlogAuthor: "By Alicia Davis ",
      // BlogDate: "February 23, 2023",
      BlogTitle:
        "  If the lush evergreen surroundings with the majestic Himala excite you, then Shimla must be your next go-to destination. Once  a dense forest named after the Hindu Goddess",
    },
    {
      id: "3",
      image: Jaipur,
      BlogMaintitel: "Jaipur",
      path: "/JaipurData",
      // BlogAuthor: "By Alicia Davis ",
      // BlogDate: "February 23, 2023",
      BlogTitle:
        "     Nestled in the heart of the breathtaking Kullu Valley, Manali hasearned its reputation as one of the most visited and loved  attractions of north India in Himachal Pradesh. If we trace",
    },
  ]);
  return (
    <>
      <Grid container className="sm:px-0 md:px-0 lg:px-44 taxi_top">
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className="relative">
          <div>
            <Image
              width={1000}
              className="relative"
              src={Chandigarh}
              alt="Picture of the author"
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className="relative">
          <div className="px-8 py-8">
            {/* <p className="font-bold">30/06/2023</p> */}
            <h1 className="text-5xl leading-[60px]">
              Taxi service in Chandigarh
            </h1>
            <div className="flex py-5">
              <Image
                style={{
                  borderRadius: "50px",
                }}
                width={60}
                className="relative"
                src={Avtar}
                alt="Picture of the author"
              />
              <ul className="py-1 px-3">
                <li className="font-bold mt-5">Tripecca</li>
              </ul>
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid container className="sm:px-0 md:px-0 lg:px-44 py-8 Amritsar_p text-justify"  >
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          {/* <h2 className='font-bold text-2xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h2> */}
          <p>
            Do you know of a city that boasts a planned layout that’s both
            functional and aesthetic? Well, you guessed it right. It’s “The City
            Beautiful - Chandigarh”. The well-organized sectors, with lush green
            parks and open spaces, make it a visual treat. From Sector-17 Plaza
            which is a shopaholic paradise to Sukhna Lake which offers
            tranquility, visiting Chandigarh is always an unforgettable
            experience.
          </p>
          <br />
          <p>
            Not only this, but you can take a ride in our taxi service in
            Chandigarh to have an outing at the Rock Garden and Rose Garden
            which are artistic marvels in themselves. Oh yes please don’t miss
            out on savoring the delectable street food of Sector-15 Market and a
            mandatory “Gedi” with our Chandigarh taxi service (visit) to Panjab
            University which is a renowned dynamic and diverse institution.
            Chandigarh holds so much more in its urban charm. So, yes whether
            you are here for business or for leisure, Chandigarh will never
            disappoint you.
          </p>
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
                    src={Blog.image}
                    alt="Picture of the author"
                  />
                </div>
                <div>
                  <ul className="flex justify-center py-3">
                    {/* <li className="text-xs font-extrabold">
                      {Blog.BlogAuthor}{" "}
                    </li>                    */}
                    {/* <li className="text-xs font-extrabold">{Blog.BlogDate}</li> */}
                    <h3 className="text-xl font-black ">
                    {Blog.BlogMaintitel}
                  </h3>
                  </ul>
                
                  <span className=" font-black flex justify-content-center text-justify color">{Blog.BlogTitle}</span>
                  <button
                    className="rounded-full bg-[#ffd50f] py-1 px-3 my-3 flex justify-center"     style={{ margin: "7px auto" }}
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
