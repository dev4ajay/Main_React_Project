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
              alt="Picture "
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
            Chandigarh to Amritsar
          </h3>
        </Grid>
      </Grid>
      <Grid container className="sm:px-0 md:px-0 lg:px-44 py-8">
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <h2 className="font-bold text-2xl">
            This route displays one of the most scenic vibes when traveling via
            a car.
          </h2>
          <p>
            The distance between Chandigarh, and Manali, HP is approximately
            306.25 kilometers. Tripecca will ensure a comfortable journey as you
            travel by car. The estimated travel time for this route is around 7
            hours and 25 minutes. The route from Chandigarh to Manali typically
            involves traveling on NH205 and NH3. Our drivers are well-versed
            with this route and will navigate through any mild traffic
            congestion that may occur.
          </p>
          <br />
          <h2 className="text-2xl font-bold">Manali Attractions:</h2>
          <p>
            Manali is a popular tourist destination in Himachal Pradesh, known
            for its breathtaking natural beauty and vibrant atmosphere. Our
            packages include visits to some of the most iconic attractions in
            Manali:
          </p>
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
        <Grid item xs={12} sm={12} md={7} lg={7} xl={7} className="relative">
          <div className="py-8 text-justify">
            <p>
              <b>Old Manali: </b>A charming village known for its scenic beauty
              and vibrant atmosphere
            </p>
            <br />
            <p>
              <b>Solang Valley:</b>A picturesque valley famous for adventure
              sports like paragliding, zorbing, and skiing.
            </p>
            <br />

            <p>
              {" "}
              <b>Jogini Waterfall: </b> A beautiful waterfall located amidst
              lush greenery.
            </p>

            <p>
              <b>Rohtang Pass:</b> A high mountain pass that offers breathtaking
              views of the surrounding landscape.
            </p>

            <p>
              These are just a few examples of the many interesting places that
              you can consider while traveling from Chandigarh to Manali. Each
              route offers its own set of attractions and scenic spots. Our
              packages are designed to provide you with a comprehensive
              experience of the region, allowing you to explore local markets,
              try local cuisine, and enjoy the natural beauty of the area. For
              more information about the Chandigarh to Manali route and our
              packages, please visit our website and feel free to call!
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
                    alt="Picture"
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
                  <span className="flex justify-content-center text-justify font-black color">
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
