import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./hero/hero";
import Themes from "./themes/themes";
import Projects from "./projects/projects";

export default function Home() {
  return (
  <>
 <Themes/>   <Hero/>
    <Projects/>
  </>
);
}
