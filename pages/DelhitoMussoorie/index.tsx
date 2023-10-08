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
            Delhi to Mussoorie
          </h3>
        </Grid>
      </Grid>
      <Grid container className="sm:px-0 md:px-0 lg:px-44 py-8 text-justify">
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <p>
            Are you looking for a memorable and hassle-free trip from Delhi to
            Mussoorie? If yes, then you have come to the right place. Tripecca
            is your one-stop solution for all your cab booking needs. We offer
            you the best and most affordable packages for your journey, with a
            variety of options to suit your preferences and budget.
          </p>
          <br />

          <p>
            Our deluxe package is perfect for those who want a comfortable and
            convenient service. You can book a SUV or a MUV car, with a capacity
            of up to six passengers. The deluxe package includes everything in
            the standard package, plus exclusive services, water bottles,
            snacks, and a music system.
          </p>
          <br />
          <p>
            The best route from Delhi to Mussoorie is via Upper Ganga Canal
            Road. This route has a smooth highway and covers a distance of 290
            km. It takes approximately 6 hours and 47 minutes to reach from
            Delhi to Mussoorie by this route. Along this route, you can visit
            some interesting places such as Modinagar, Khatauli, Deoband,
            Roorkee, and Dehradun.
          </p>
          <br />
          <p>
            Mussoorie is a beautiful hill station that offers many attractions
            for tourists. Some of the well-known tourist attractions are:
          </p>
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={5} xl={5} className="relative">
          <div className="py-8 px-5">
            <Image
              width={1000}
              className="relative"
              src={Mussoorie}
              alt="Picture of the author"
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={7} lg={7} xl={7} className="relative">
          <div className="py-8 text-justify">
            <p>
              <b>Kempty Falls: </b> A 40 ft high waterfall that is also a
              favorite picnic spot in Mussoorie. You can take a dip in the water
              or enjoy the surrounding nature.
            </p>
            <br />
            <p>
              <b>Lal Tibba:</b>The highest point in Mussoorie that offers
              panoramic views of the Himalayan range. You can also visit the
              British-era telescope tower and the Shedup Choepelling Temple
              here.
            </p>
            <br />

            <p>
              {" "}
              <b>Camel’s Back Road:</b>A 4 km stretch that is shaped like a
              camel’s hump and is popular for trekking and horse-riding. You can
              also get a splendid view of the sunrise and sunset here.
            </p>
            <br />
            <p>
              <b>Lake Mist: </b> A serene lake that is surrounded by lush
              greenery and misty mountains. You can relax by the lake or enjoy
              boating here.
            </p>
            <br />
            <p>
              <b>Mussoorie Heritage Centre:</b>A museum that showcases the rich
              cultural and historical heritage of Mussoorie. You can learn about
              the famous personalities, events, and landmarks of Mussoorie here.
            </p>
            <br />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <p>
            These are just some of the places that you can visit in Mussoorie.
            There are many more places that await your exploration. Mussoorie is
            truly a paradise for nature lovers, adventure seekers, and history
            buffs.
          </p>
          <br />

          <p>
            Our deluxe package is perfect for those who want a comfortable and
            convenient service. You can book a SUV or a MUV car, with a capacity
            of up to six passengers. The deluxe package includes everything in
            the standard package, plus exclusive services, water bottles,
            snacks, and a music system.
          </p>
          <br />
          <p>
            No matter which package you choose, you can rest assured that you
            will get a safe and reliable service. Our drivers are well-trained,
            courteous, and professional. They will pick you up from your
            preferred location in Delhi and drop you off at your desired
            destination in Mussoorie. You can also enjoy the scenic views of the
            Delhi to Mussoorie route along the way.
          </p>
          <br />
          <p>So what are you waiting for?</p>
          <br />
          <p>
            Book your cab today and get ready for an unforgettable trip. You can
            book online through our website or call us at our helpline number.
            We also offer discounts and offers for our regular customers and
            group bookings.
          </p>
          <br />
          <p>We hope to see you soon!</p>
        </Grid>

        <br />
        <h2 className="text-2xl font-bold">
          Tripecca - Your Trusted Travel Partner Where Your Trip is Epic
        </h2>

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
