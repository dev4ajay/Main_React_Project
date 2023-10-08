import * as React from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Banner from "../../public/blog/banner.jpg";
import Image, { StaticImageData } from "next/image";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/router";
import Head from "next/head";
import Discount from "../../public/More Destination/Amritsar.png";
import Delhi from "../../public/More Destination/Delhi.png";
import Agra from "../../public/More Destination/Agra.png";
import Chandigarh from "../../public/More Destination/Chandigarh.png";
import Jaipur from "../../public/More Destination/Jaipur.png";
import Manali from "../../public/More Destination/Manali.png";
import Mussoorie from "../../public/More Destination/Mussoorie.png";
import Nainital from "../../public/More Destination/Nainital.png";
import Shimla from "../../public/More Destination/Shimla.png";
interface Blog {
  id: string;
  BlogUrl: StaticImageData;
  BlogMaintitel: string;
  Title: string;
  // BlogDate: string;
  path: string;
}

export default function Service() {
  const router = useRouter();
  const [Blog, setBlog] = useState<Blog[]>([
    {
      id: "1",
      BlogUrl: Delhi,
      BlogMaintitel:
        "  Delhi has served as the capital of various powerful dynasties and has always been a focal point ",
      Title: "Delhi",
      path: "/DelhiData",
    },
    {
      id: "2",
      BlogUrl: Agra,
      BlogMaintitel:
        " Are you a lowkey romantic person who wishes to take your partner to the most mesmerizing lovely ",
      Title: "Agra",
      path: "/AgraData",
    },
    {
      id: "3",
      BlogUrl: Chandigarh,
      BlogMaintitel:
        "  Do you know of a city that boasts a planned layout that’s both functional and aesthetic? Well, you guessed ",
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
        "   Nestled in the heart of the breathtaking Kullu Valley, Manali has earned its reputation as one  ",
      Title: "Manali",
      path: "/ManaliData",
    },
    {
      id: "6",
      BlogUrl: Mussoorie,
      BlogMaintitel:
        " Known as the “Queen of the Hills”, Mussoorie hill station offers a  pleasant scenic beauty and climate.",
      Title: "Mussoorie",
      path: "/MussoorieData",
    },
    {
      id: "7",
      BlogUrl: Shimla,
      BlogMaintitel:
        "  If the lush evergreen surroundings with the majestic Himalayas excite you, then Shimla must be your next go-to destination.",
      Title: "Shimla",
      path: "/ShimlaData",
    },
    {
      id: "8",
      BlogUrl: Nainital,
      BlogMaintitel:
        " Located in the Kumaun region of Uttrakhand, Nainital is a famous tourist attraction for its picturesque lake, lush hills,",
      Title: "Nainital",
      path: "/NainitalData",
    },

    {
      id: "9",
      BlogUrl: Discount,
      BlogMaintitel:
        "Founded by the fourth Sikh guru, Guru Ram Das Ji in 1574, Amritsar is the city of nectar, faith, and spirituality. It’s a site",
      Title: "Amritsar",
      path: "/AmritsarData",
    },
  ]);
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
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
              OUR <span className="text-[#67b5fe]">BLOG</span>
            </h1>
          </div>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} className="text-center pt-10">
          <p className="text-lg font-extrabold text-[#ffb300]">OUR BLOG</p>
          <h3 className="text-2xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-4xl uppercase leading-snug font-black py-1">
            Latest News & Blog
          </h3>
        </Grid>
      </Grid>
      <Grid
        container
        className="px-5 sm:px-5 md:px-5 lg:px-5 xl:px-44 justify-center"
      >
        {Blog.map((Blog) => {
          return (
            <Grid
              key={Blog.id}
              item
              xs={12}
              sm={12}
              md={12}
              lg={4}
              xl={4}
              className="relative"
            >
              <div className="rounded-xl bg-white drop-shadow-md p-5 m-4 relative ">
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
                    {/* <li className="text-xs font-extrabold">{Blog.BlogDate}</li>  */}
                  </ul>
                  <span className="font-black flex justify-content-center text-justify color">
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

        {Blog.length === 9 ? (
          <Stack spacing={2} className="py-5">
            <div className="">
              <Pagination count={3} variant="outlined" />
            </div>
          </Stack>
        ) : (
          ""
        )}
      </Grid>
    </>
  );
}
