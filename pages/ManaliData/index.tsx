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
import Shimla from "../../public/More Destination/Shimla.png";
import Agra from "../../public/More Destination/Agra.png";
import Manali from "../../public/More Destination/Manali.png";
import Nainital from "../../public/More Destination/Nainital.png";
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
      image: Agra,
      BlogMaintitel: "Agra",
      path: "/AgraData",
      // BlogAuthor: "By Alicia Davis ",
      // BlogDate: "February 23, 2023",
      BlogTitle:
        "  Are you a lowkey romantic person who wishes to take your partne to the most mesmerizing lovely gateway? Well, pack your bags and  book our Taxi service in Agra to visit the epitome ",
    },
    {
      id: "2",
      image: Shimla,
      BlogMaintitel: "Shimla",
      path: "/ShimlaData",
      // BlogAuthor: "By Alicia Davis ",
      // BlogDate: "February 23, 2023",
      BlogTitle:
        "  If the lush evergreen surroundings with the majestic Himala excite you, then Shimla must be your next go-to destination. Once  a dense forest named after the Hindu Goddess",
    },
    {
      id: "3",
      image: Nainital,
      BlogMaintitel: "Nainital",
      BlogTitle:
        " Located in the Kumaun region of Uttrakhand, Nainital is a famous tourist attraction for its picturesque lake, lush hills, colonial architecture. Founded by the British in 1841",
      path: "/NainitalData",
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
              src={Manali}
              alt="Picture of the author"
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className="relative">
          <div className="px-8 py-8">
            {/* <p className="font-bold">30/06/2023</p> */}
            <h1 className="text-5xl leading-[60px]">Manali taxi service</h1>
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
        className="sm:px-0 md:px-0 lg:px-44 py-8  Amritsar_p text-justify"
      >
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          {/* <h2 className='font-bold text-2xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h2> */}
          <p>
            Nestled in the heart of the breathtaking Kullu Valley, Manali has
            earned its reputation as one of the most visited and loved
            attractions of north India in Himachal Pradesh. If we trace its
            history, it was the home of Sage Manu, the creator of the human
            race, after a great flood wiped out the world. The etymology of
            Manali takes its reference from “the abode of Manu”. It is also
            believed that Manali was visited by many Gods and sages, such as
            Lord Shiva, Parshurama, Vashishta, and Arjuna.
          </p>
          <br />
          <p>
            This tourist hotspot with towering mountains attracts millions of
            adventure seekers and travel enthusiasts every year. Yes, you too
            can have the same opportunity by booking our taxi service in Manali
            to explore every untouched corner. There are plenty of snow-capped
            mountains with the best of places to visit like the Rohtang Pass,
            the Solang Valley, Manikaran Gurudwara Sahib, and whatnot. So
            whether you are arriving at the Kullu-Manali Airport or the Manali
            Bus stand, our Manali taxi service is always at your rescue.
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
                    </li> */}
                    {/* <li className="text-xs font-extrabold">{Blog.BlogDate}</li> */}
                    <h3 className="text-xl font-black ">
                      {Blog.BlogMaintitel}
                    </h3>
                  </ul>

                  <span className=" font-black flex justify-content-center text-justify color">
                    {Blog.BlogTitle}
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
