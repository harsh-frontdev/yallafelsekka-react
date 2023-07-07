import '../assets/css/fontawesome.css';
import '../styles/global.css';
import 'bootstrap/dist/css/bootstrap.css'
import '../assets/css/custom.css';
import '../assets/css/responsive.css';

import AOS from 'aos';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';


export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
  }, []);

  return <Component {...pageProps} /> ;
}


