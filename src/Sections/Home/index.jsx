import styles from "./styles.module.css";

function Home() {
  return (
    <section className={styles.home_section} id="home">
      <p className={styles.greet}>Hey, Hi my name is</p>
      <h1 className={styles.heading_1}>Aradhya Srivastava.</h1>
      <h1 className={styles.heading_2}>I analyse data.</h1>
      <p className={styles.desc}>
        I'm a budding software developer who specializes in analysing and visualisations skills.  I create data sets and produce valuable results and conlusions {" "}
      </p>
      <a href="#work">
        <button className={styles.btn}>Check out my work !</button>
      </a>
    </section>
  );
}

export default Home;