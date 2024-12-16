"use client";
import { useEffect, useRef } from "react";
import styles from "./hero.module.css";
import { Lilita_One } from "next/font/google";
import { Iceland } from "next/font/google";

const lilitaOne = Lilita_One({
  subsets: ["latin"],
  weight: "400",
});

const iceland = Iceland({
  subsets: ["latin"],
  weight: "400",
});

const Hero = () => {
  const tridentRef = useRef<SVGSVGElement | null>(null); // Explicitly typed

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const trident = tridentRef.current;

      if (trident) {
        // Get the trident's center coordinates
        const rect = trident.getBoundingClientRect();
        const tridentX = rect.left + rect.width / 2;
        const tridentY = rect.top + rect.height / 2;

        // Calculate angle between the mouse and the trident's center
        const angle = Math.atan2(event.clientY - tridentY, event.clientX - tridentX);
        const rotation = angle * (180 / Math.PI); // Convert radians to degrees

        // Adjust rotation with an offset
        const offset = 90; // Adjust this value based on the trident's orientation
        trident.style.transform = `rotate(${rotation + offset}deg)`;
      }
    };

    // Attach mousemove event listener
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className={styles.centered}>
      <div className={styles.herobox}>
        <div className={styles.description}>
          <h1 className={lilitaOne.className}>Hey there!</h1>
          <h1 className={lilitaOne.className}>This is Ameer Ul Aman,</h1>
          <p className={iceland.className} style={{ marginTop: "15px" }}>
            I am a Generalist Software Engineer with experience in different fields
            related to Software Engineering Principles. With my intriguing nature and
            knowledge across different tools and techniques, I am always eager to
            learn more.
          </p>
          <p className={iceland.className} style={{ marginTop: "15px" }}>
            Looking forward to your journey and experience across my portfolio!
          </p>
        </div>

        <div className={styles.imagesec}>
          <div className={styles.images}>
            <div className={styles.imagem}>
              {/* Inline SVG with ref for rotation */}
              <svg
                ref={tridentRef}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 177.13 248.7"
                width="200"
                height="200"
              >
                <defs>
                  <style>
                    {`.cls-1, .cls-2 {
                      fill: #231f20;
                      stroke: #231f20;
                      stroke-miterlimit: 10;
                    }
                    .cls-2 {
                      stroke-width: 2px;
                    }`}
                  </style>
                </defs>
                <polygon className="cls-1" points="87.29 4.38 65.58 85.64 85.43 58.12 87.29 4.38" />
                <rect className="cls-2" x="86.53" y="62.52" width="4.96" height="173.08" />
                <g>
                  <path
                    className="cls-1"
                    d="M88.28,230.22c12.4-2.15,55.77-3.59,65.14-39.08,11.79-44.66,1.86-104.22-14.27-161.29l35.98,63.9-16.75-15.51s16.12,96.48,6.82,129.03c-8.68,30.4-77.54,40.94-77.54,40.94"
                  />
                  <path
                    className="cls-1"
                    d="M90.63,230.22c-12.4-2.15-55.77-3.59-65.14-39.08-11.79-44.66-1.86-104.22,14.27-161.29L3.79,93.74l16.75-15.51s-16.12,96.48-6.82,129.03c8.68,30.4,77.54,40.94,77.54,40.94"
                  />
                </g>
                <polygon className="cls-1" points="91.19 4.73 112.9 86 93.05 58.47 91.19 4.73" />
              </svg>
            </div>
          </div>

          <button className={styles.hire}>
            <p className={iceland.className}>Hire me!</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
