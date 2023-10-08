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
import Shimla from "../../public/More Destination/Shimla.png";
import Manali from "../../public/More Destination/Manali.png";
import Chandigarh from "../../public/More Destination/Chandigarh.png";
import Jaipur from "../../public/More Destination/Jaipur.png";

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
      BlogUrl: Manali,
      BlogMaintitel:
        "   Nestled in the heart of the breathtaking Kullu Valley, Manali has earned its reputation as one  ",
      Title: "Manali",
      path: "/",
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
      BlogUrl: Shimla,
      BlogMaintitel:
        "  If the lush evergreen surroundings with the majestic Himalayas excite you, then Shimla must .",
      Title: "Shimla",
      path: "/ShimlaData",
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
            Delhi to Jaipur
          </h3>
        </Grid>
      </Grid>
      <Grid container className="sm:px-0 md:px-0 lg:px-44 py-8 text-justify">
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <p>
            If you are looking for a memorable and comfortable road trip from
            Delhi to Jaipur, you have come to the right place. The fastest and
            shortest route is via NH 48, which is about 280 km long and takes
            about 6 hours of driving time. We offer you the best cab booking
            packages for this popular route. You can choose from our wide range
            of vehicles, from sedans to SUVs, depending on your budget and
            preferences.
          </p>
          <br />
          <p>
            Delhi to Jaipur is one of the most scenic and enjoyable routes in
            India, as it passes through some of the most historic and cultural
            landmarks of Rajasthan. You can stop at various places along the way
            to explore the rich heritage and beauty of this state. Some of the
            recommended stops are:
          </p>
          <br />

          <p>
            {" "}
            <b>Neemrana: </b>
            This is a charming town located about 120 km from Delhi, famous for
            its majestic Neemrana Fort Palace, which dates back to the 15th
            century. You can visit this stunning fort, which has been converted
            into a heritage hotel, and enjoy its splendid architecture, gardens,
            pools, and views. You can also indulge in some adventure activities
            like zip-lining, camel riding, and vintage car rides at the fort
            premises.
          </p>
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={5} xl={5} className="relative">
          <div className="py-8 px-5">
            <Image
              width={1000}
              className="relative"
              src={Jaipur}
              alt="Picture of the author"
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={7} lg={7} xl={7} className="relative">
          <div className="py-8 text-justify">
            <p>
              <b>Alwar: </b>This is another historic city located about 150 km
              from Delhi, known for its impressive Alwar Fort, which was built
              in the 16th century by the Rajput rulers. You can admire the
              fort’s ramparts, bastions, temples, and palaces, and also visit
              the nearby City Palace, which houses a museum with rare
              manuscripts, paintings, and weapons. Alwar is also famous for its
              wildlife sanctuary called Sariska Tiger Reserve, where you can
              spot tigers, leopards, deer, and other animals in their natural
              habitat.
            </p>
            <br />
            <p>
              <b>Amer:</b>This is a small town located about 10 km from Jaipur,
              renowned for its magnificent Amber Fort, which is a UNESCO World
              Heritage Site. This fort was built in the 16th century by the
              Rajput kings and is a masterpiece of red sandstone and marble. You
              can explore its four courtyards, which include attractions like
              Diwan-e-Aam (Hall of Public Audience), Diwan-e-Khas (Hall of
              Private Audience), Sheesh Mahal (Mirror Palace) and Sukh Niwas
              (Pleasure Palace). You can also enjoy an elephant ride to the fort
              entrance or watch a light and sound show in the evening.
            </p>
          </div>
        </Grid>

        <p>
          {" "}
          <b>Jaipur</b> The final destination of your road trip is Jaipur, the
          capital city of Rajasthan and one of the most vibrant and colorful
          cities in India. Jaipur is also known as the Pink City of India,
          because of its pink-hued buildings that reflect its royal past. Jaipur
          has many attractions to offer to its visitors, such as:
        </p>
        <br />
        <p>
          <b>City Palace:</b>This is a splendid palace complex that was built in
          the 18th century by the Maharaja of Jaipur. It showcases a blend of
          Rajasthani and Mughal architecture and consists of several buildings,
          courtyards, gardens, and museums. You can admire its exquisite arts
          and crafts work, such as paintings, carpets, costumes, weapons, and
          jewelry.
        </p>
        <br />
        <p>
          <b>Hawa Mahal: </b>
          This is a unique palace that was built in 1799 by Maharaja Sawai
          Pratap Singh. It has a distinctive honeycomb-like structure with 953
          small windows or jharokhas, which were designed to allow the royal
          ladies to observe the street life without being seen. It is also known
          as the Palace of Winds, because of its ventilation system that creates
          a cool breeze inside.
        </p>
        <br />
        <p>
          <b>Jantar Mantar: </b> This is an astronomical observatory that was
          built in 1734 by Maharaja Sawai Jai Singh II. It has a collection of
          19 instruments that measure time, sun position, star movements, and
          other celestial phenomena. It is also a UNESCO World Heritage Site and
          one of the largest and best-preserved observatories in India.
        </p>
        <br />
        <p>
          <b>Jal Mahal: </b>This is a beautiful palace that was built in the
          18th century by Maharaja Madho Singh I. It is situated in the middle
          of Man Sagar Lake and appears to float on water. It has five stories,
          out of which four are submerged underwater. It is surrounded by hills
          and gardens and offers a serene view of the lake.
        </p>
        <br />
        <p>
          These are just some of the highlights of your Delhi to Jaipur road
          trip package. There are many more places to visit and things to do in
          Jaipur, such as shopping at its lively bazaars, tasting its delicious
          cuisine, watching its folk dances and puppet shows, visiting its
          temples and forts, and experiencing its festivals and fairs.
        </p>
        <br />
        <p>
          You can customize your itinerary according to your interests and
          preferences, and we will make sure that you have a wonderful and
          unforgettable trip with us.
        </p>
        <br />
        <h2>Happy JAIPUR!</h2>

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
