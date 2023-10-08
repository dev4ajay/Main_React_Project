import * as React from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Image, { StaticImageData } from "next/image";
import Avtar from "../../public/avtar.jpg";
import { useRouter } from "next/router";
import Discount from "../../public/More Destination/Amritsar.png";
import Delhi from "../../public/More Destination/Delhi.png";
import Nainital from "../../public/More Destination/Nainital.png";
import Agra from "../../public/More Destination/Agra.png";

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
      image: Discount,
      BlogMaintitel: "Amritsar",
      // BlogAuthor: "By Alicia Davis ",
      // BlogDate: "February 23, 2023",
      path: "/blogdata",
      BlogTitle:
        " Founded by the fourth Sikh guru, Guru Ram Das Ji in 1574, Amrits is the city of nectar, faith, and spirituality. It’s a site of  many historical events like the Jallianwala Bagh Massacre",
    },
    {
      id: "2",
      image: Agra,
      BlogTitle:
        " Are you a lowkey romantic person who wishes to take your partner to the most mesmerizing lovely gateway? ",
      BlogMaintitel: "Agra",
      path: "/AgraData",
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
              src={Nainital}
              alt="Picture of the author"
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className="relative">
          <div className="px-8 py-8">
            {/* <p className="font-bold">30/06/2023</p> */}
            <h1 className="text-5xl leading-[60px]">Nainital taxi service</h1>
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
      <Grid container className="sm:px-0 md:px-0 lg:px-44 py-8 Amritsar_p text-justify">
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          {/* <h2 className='font-bold text-2xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h2> */}
          <p>
            Known as the “Queen of the Hills”, Mussoorie hill station offers a
            pleasant scenic beauty and climate throughout the year. Mussoorie
            was discovered in 1825 by Captain Young, a British military officer,
            who built a shooting lodge there. Mussoorie has many historical
            places to visit, such as the Landour Cantonment, the Christ Chrish,
            the Happy Valley, and much more.
          </p>
          <br />
          <p>
            If you wish to enjoy the charm of the Himalayas and the legacy of
            the British era, book our Taxi service in Mussoorie now and get
            ready to be enthralled by this attraction. Mussoorie provides an
            array of experiences from trekking to the nearby hills to strolling
            along Camel’s black road. So, get ready to experience an exciting
            adventure by booking our Mussoorie taxi service and enjoy this
            legacy of the British era.
          </p>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <h2 className="font-bold text-2xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <br />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
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
                    <h3 className="text-xl font-black text-center">
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
