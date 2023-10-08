import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import AdminHeader from "components/adminheader";
import { useRouter } from "next/router";
import Header from "components/header";
import Footer from "components/footer";
import { useEffect } from "react";
import createEmotionCache from "lib/createEmotionCache";
import { CacheProvider, EmotionCache } from "@emotion/react";
import _ from "lodash";
import axios, { AxiosInstance } from "axios";
import firebase, { getApp, initializeApp } from "firebase/app";
import "firebase/auth";
import { getStorage } from "firebase/storage";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

export const axiosInstance: AxiosInstance = axios.create({
  // baseURL: 'https://tripecca-git-main-anilkumar7717.vercel.app', // Replace with your API base URL
  baseURL: "/",
  // other default configurations if needed
});

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGs2qDSmbuIUxlt96IKW5xZzmA6LTaYFk",
  authDomain: "tripecca-dd95a.firebaseapp.com",
  projectId: "tripecca-dd95a",
  storageBucket: "tripecca-dd95a.appspot.com",
  messagingSenderId: "947248283505",
  appId: "1:947248283505:web:22485b3c4a0929cfdd40d0",
};

// Check if Firebase is already initialized
// Check if the Firebase app has already been initialized
let app;
try {
  app = getApp();
} catch (error) {
  // Initialize Firebase if the app doesn't exist
  app = initializeApp(firebaseConfig);
}

// Get the Firebase storage instance
const storage = getStorage(app);

export { storage };
export default function App({ Component, pageProps }: MyAppProps) {
  const router = useRouter();
  const { emotionCache = clientSideEmotionCache } = pageProps;

  // Create an Axios instance with default configurations

  // Add an interceptor to modify the request headers
  axiosInstance.interceptors.request.use(
    (config) => {
      const storedUser = localStorage?.getItem("user");
      const { token } = storedUser ? JSON.parse(storedUser) : { token: "" };

      // Add the token to the Authorization header
      config.headers.Authorization = `Bearer ${token}`;

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const WebsiteView = () => {
    return (
      <>
        <Header />
        <Component {...pageProps} />
        <Link
          href="tel:123"
          className="hidden sm:hidden md:hidden lg:block xl:block"
        >
          <div className="fixed bottom-5 right-5 bg-[#e8dd34] w-[50px] h-[50px] rounded-full px-3 py-1 z-[9999] shadow-xl">
            <p className="text-4xl font-bold">
              <PhoneInTalkOutlinedIcon />
            </p>
          </div>
        </Link>
        <Link
          href="tel:123"
          className="block sm:block md:block lg:hidden xl:hidden"
        >
          <div className="text-center fixed bottom-0 right-0 bg-[#e8dd34] w-full h-[50px] px-3 py-1 z-[9999] shadow-xl">
            <p className="text-xl font-bold pt-2">
              <PhoneInTalkOutlinedIcon /> Call Now
            </p>
          </div>
        </Link>
        <Footer />
      </>
    );
  };

  const AdminView = () => {
    return (
      <>
        <Component {...pageProps} />
      </>
    );
  };

  useEffect(() => {
    const storedUser = localStorage?.getItem("user");
    const { token } = storedUser ? JSON.parse(storedUser) : { token: "" };

    if (router.asPath.includes("/admin")) {
      if (_.isEmpty(token)) {
        router.push("/admin");
      }
    }
  }, [router.asPath]);

  return (
    <CacheProvider value={emotionCache}>
      {router.asPath.includes("/admin") ? <AdminView /> : <WebsiteView />}
    </CacheProvider>
  );
}
