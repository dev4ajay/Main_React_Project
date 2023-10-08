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
import Agra from "../../public/More Destination/Agra.png";
import Manali from "../../public/More Destination/Manali.png";
import Shimla from "../../public/More Destination/Shimla.png";

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
      id: "1",
      image: Mussoorie,
      path: "/MussoorieData",
      BlogMaintitel: "Mussoorie",
      // BlogAuthor: "By Alicia Davis ",
      // BlogDate: "February 23, 2023",
      BlogTitle:
        "   Known as the “Queen of the Hills”, Mussoorie hill station offers pleasant scenic beauty and climate",
    },
    {
      id: "2",
      image: Agra,
      path: "/AgraData",
      BlogMaintitel: "Agra",
      // BlogAuthor: "By Alicia Davis ",
      // BlogDate: "February 23, 2023",
      BlogTitle:
        " Are you a lowkey romantic person who wishes to take your partner   ",
    },
    {
      id: "3",
      image: Manali,
      path: "/ManaliData",
      BlogMaintitel: "Manali",
      // BlogAuthor: "By Alicia Davis ",
      // BlogDate: "February 23, 2023",
      BlogTitle:
        "Nestled in the heart of the breathtaking Kullu Valley, Manali has earned its reputation as one  ",
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
              src={Shimla}
              alt="Picture of the author"
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className="relative">
          <div className="px-8 py-8">
            {/* <p className="font-bold">30/06/2023</p> */}
            <h1 className="text-5xl leading-[60px]">Taxi service in Shimla</h1>
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
      <Grid
        container
        className="sm:px-0 md:px-0 lg:px-44 py-8 Amritsar_p text-justify"
      >
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          {/* <h2 className='font-bold text-2xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h2> */}
          <p>
            If the lush evergreen surroundings with the majestic Himalayas
            excite you, then Shimla must be your next go-to destination. Once a
            dense forest named after the Hindu Goddess Shamala Devi, it became a
            British outpost after the Gurkha War of 1814-16. Later on, it was
            recognized as the summer capital of the British from 1865 to 1939.
            There are many historical places to visit here. Our taxi service in
            Shimla is smooth enough to book online or call.
          </p>
          <br />
          <p>
            So, if you want to visit the Jakhu Temple, the Christ Church, the
            Mall Road, the Ridge, or the Kufri station, our Shimla taxi service
            will fulfill all your travel needs. We offer hassle-free rides to
            explore the city’s attractions. So, get ready to explore the
            panoramic Vistas of Shimla with ease and comfort.
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
                    </li>
                    <li className="text-xs font-extrabold">{Blog.BlogDate}</li> */}
                    <h3 className="text-xl font-black">{Blog.BlogMaintitel}</h3>
                  </ul>

                  <span className="flex justify-content-center text-justify font-black color">
                    {Blog.BlogTitle}
                  </span>
                  <button
                    className="rounded-full bg-[#ffd50f] py-1 px-3 my-3 flex  justify-center"
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
