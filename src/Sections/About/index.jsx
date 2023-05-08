// import { StickyNote2Sharp } from "@mui/icons-material";
import Heading from "../../Components/Heading";
import styles from "./styles.module.css";

function About() {
  return (
    <section id="about">
      <Heading index="01" heading="About Me" />
      <div className={styles.container}>
        <div className={styles.left}>
          <p className={styles.desc}>
            Hey, I'm Aradhya and I am a Data Analyst. {""}



            An aspiring Data Analyst with skills of identifying efficiencies and problem areas within data streams, while communicating needs for projects. 
            Adept at receiving and monitoring data from multiple data streams, including Python , SQL, Excel data sources  & using ML libraries to bring out valuable results and conclusions through data visualisations & techniques.
          </p>
          <p className={styles.desc}>
            Currently I'm a third year student pursuing B.Tech in Computer
            Science at{" "}
            <a href="https://lnct.ac.in/" className={styles.color1}>
              {" "}
              Vellore Institute Of Technology Bhopal,India.
            </a>{" "}
            {/* <br></br>I have built accessible, inclusive products at start-ups
            like{" "}
            <a href="https://ravenapp.dev/" className={styles.color1}>
              Raven
            </a>{" "}
            &{" "}
            <a href="##" className={styles.color1}>
              DS Dairy Systems.
            </a>{" "}
            Also a community evangelist currently leading the local{" "}
            <a
              href="https://gdsc.community.dev/lakshmi-narain-college-of-technology-lnct-bhopal/"
              className={styles.color1}
            >
              GDSC (Google Developers Club)
            </a>{" "}
            chapter at my university with over 1K+ community members. */}
          </p>
        </div>

        <div className={styles.right}>
          <img
            src="./images/self.jpg"
            alt="profile"
            className={styles.profile_img}
          />
          <div className={styles.img_border}></div>
        </div>
      </div>
    </section>
  );
}

export default About;