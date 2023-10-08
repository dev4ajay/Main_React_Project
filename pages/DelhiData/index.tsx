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
import Mussoorie from "../../public/More Destination/Mussoorie.png";
import Delhi from "../../public/More Destination/Delhi.png";
import Shimla from "../../public/More Destination/Shimla.png";
import Discount from "../../public/More Destination/Amritsar.png";

interface Blog {
  id: string;
  image: StaticImageData;
  BlogMaintitel: string;
  // BlogAuthor: string;
  // BlogDate: string;
  BlogTitle: string;
  path: string;
}

export default function Service() {
  const router = useRouter();
  const [Blog, setBlog] = useState<Blog[]>([
    {
      id: "6",
      image: Mussoorie,
      BlogTitle:
        " Known as the “Queen of the Hills”, Mussoorie hill station offers a  pleasant scenic beauty and climate.",
      BlogMaintitel: "Mussoorie",
      path: "/MussoorieData",
    },
    {
      id: "2",
      image: Shimla,
      path: "/ShimlaData",
      BlogTitle:
        "  If the lush evergreen surroundings with the majestic Himala excite you, then Shimla must be your next go",
      BlogMaintitel: "Shimla",
      // BlogAuthor: "By Alicia Davis ",
      // BlogDate: "February 23, 2023",
    },
    {
      id: "9",
      image: Discount,
      BlogTitle:
        "Founded by the fourth Sikh guru, Guru Ram Das Ji in 1574, Amritsar is the city of nectar, faith, and spirituality. It’s a site",
      BlogMaintitel: "Amritsar",
      path: "/AmritsarData",
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
              src={Delhi}
              alt="Picture of the author"
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className="relative">
          <div className="px-8 py-8">
            {/* <p className="font-bold">30/06/2023</p> */}
            <h1 className="text-5xl leading-[60px]">Delhi taxi service</h1>
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
                <li className="font-bold mt-3">Tripecca</li>
              </ul>
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid container className="sm:px-0 md:px-0 lg:px-44 py-8  Amritsar_p text-justify">
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          {/* <h2 className='font-bold text-2xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h2> */}
          <p>
            Delhi has served as the capital of various powerful dynasties and
            has always been a focal point in the Indian Independence era. From
            India Gate - a tribute to the fallen soldiers to Qutub Minar, Delhi
            is a mix of history, culture, and modernity. You can explore every
            nook and cranny of this iconic city by booking our Delhi taxi
            service.
          </p>
          <br />
          <p>
            Not only this, there are various historical monuments in Delhi like
            the Red Fort, Jama, and masjid, that mark the significance of the
            Mughal reign. Besides these historical monuments, you should surely
            avail of our taxi service in Delhi to explore other mesmerizing
            monuments like the Akshardham Temple, Lotus Temple, Rashtraptai
            Bhavan, Shri Bangla Sahib, etc.
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
                    {/* <li className="text-xs font-extrabold"> */}
                    {/* {Blog.BlogAuthor}{" "} */}
                    {/* </li> */}
                    {/* <li className="text-xs font-extrabold">{Blog.BlogDate}</li> */}{" "}
                    <h3 className="text-xl font-black ">
                      {Blog.BlogMaintitel}
                    </h3>
                  </ul>

                  <span className=" font-black flex justify-content-center text-justify color">{Blog.BlogTitle}</span>
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
