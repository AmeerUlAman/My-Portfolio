import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./hero/hero";
import Themes from "./themes/themes";
import Projects from "./projects/projects";
import Head from 'next/head';

export default function Home() {
  return (
  <>
        <Head>
        <meta name="cryptomus" content="061e1938" />
      </Head>
  <Themes/>   
  <Hero/>
  <Projects/>
  </>
);
}
