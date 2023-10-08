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
import Shimla from "../../public/More Destination/Shimla.png";
import Manali from "../../public/More Destination/Manali.png";
import Mussoorie from "../../public/More Destination/Mussoorie.png";
import Nainital from "../../public/More Destination/Nainital.png";
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
      BlogUrl: Shimla,
      BlogMaintitel:
        "  If the lush evergreen surroundings with the majestic Himalayas excite you, then Shimla must .",
      Title: "Shimla",
      path: "/ShimlaData",
    },
    {
      id: "3",
      BlogUrl: Nainital,
      BlogMaintitel:
        " Located in the Kumaun region of Uttrakhand, Nainital is a famous tourist attraction for its picturesque lake, lush hills,",
      Title: "Nainital",
      path: "/NainitalData",
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
            Delhi to Nainital
          </h3>
        </Grid>
      </Grid>
      <Grid container className="sm:px-0 md:px-0 lg:px-44 py-8 text-justify">
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <p>
            Explore Nainital hassle-free with our Tripecca packages. From
            Delhi's bustling cityscape to Nainital's serene lakes, we've curated
            the ideal journey. Forget travel worries; we manage it all. Enjoy
            the scenic drive and immerse in Nainital's charm.
          </p>
          <br />

          <p>
            The best route from Delhi to Nainital is via NH 9. This route has a
            smooth highway and covers a distance of 306 km. It takes
            approximately seven hours to reach from Delhi to Nainital by this
            route. Along this route, you can visit some interesting places such
            as:
          </p>
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={5} xl={5} className="relative">
          <div className="py-8 px-5">
            <Image
              width={1000}
              className="relative"
              src={Nainital}
              alt="Picture of the author"
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={7} lg={7} xl={7} className="relative">
          <div className="py-8 text-justify">
            <p>
              <b>Pacific Mall Ghaziabad: </b> A well-lit and spacious shopping
              center that offers a diverse selection of stores and brands.
            </p>
            <br />
            <p>
              <b>Shipra Mall: </b> A great mall with all the brands, a great
              cinematic experience, and a food court.
            </p>
            <br />

            <p>
              {" "}
              <b>Swarna Jayanti Park: </b> A public park and garden that makes
              for a great pit stop to enjoy the clear environment.
            </p>
            <br />
            <p>
              <b>Radha Krishna Temple Mohan Nagar: </b> A Hindu temple dedicated
              to Lord Krishna and his consort Radha.
            </p>
            <br />
            <p>
              Nainital is a beautiful hill station that offers many attractions
              for tourists. Some of the well-known tourist attractions are:
            </p>
            <p>
              <b>Naini Lake: </b>The main attraction of Nainital. It is famous
              for boating and a stroll in the evening.
            </p>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <div className="text-justify">
            <p>
              <b>Tiffin Top:</b>A viewpoint that offers a 360-degree view of
              Nainital. It is also a popular picnic spot.
            </p>
            <p>
              <b>Snow View Point: </b>A place that offers stunning views of the
              Himalayas and Naina Lake. It can be reached by ropeway or
              trekking.
            </p>
            <p>
              <b>Eco Cave Gardens:</b> A recreation park with a series of caves,
              hanging gardens, and a musical fountain. It is a fun place to
              visit with kids.
            </p>
            <p>
              <b>High Altitude Zoo:</b> A zoo that houses several endangered
              species like the Himalayan Bear, Himalayan Civet, Hill Patridge,
              Tibetan Wolf, and other animals.
            </p>
            <p>
              <b>Naina Devi Temple: </b> One of the fifty-one Shakti Peethas. It
              is believed to have been built on the spot where Goddess Sati’s
              eyes fell on Earth.
            </p>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <div className="text-justify">
            <p>
              These are just some of the places that you can visit in Nainital.
              There are many more places that await your exploration. Nainital
              is truly a paradise for nature lovers, adventure seekers, and
              history buffs.
            </p>
            <br />

            <p>
              So what are you waiting for? Book your cab today and get ready for
              an unforgettable trip. You can book online through our website or
              call us at our helpline number. We also offer discounts and offers
              for our regular customers and group bookings.
            </p>

            <p>We hope to see you soon!</p>
            <br />
            <p>Do you wish to know more about the travel plan?</p>
            <br />
            <p>
              Well, go ahead and give us a call or drop the text. Our team will
              get in touch with you.
            </p>
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
                  <span className="flex justify-content-center text-justify font-black  color">
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
