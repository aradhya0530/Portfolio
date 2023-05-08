import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import styles from "./styles.module.css";

function ContactBar() {
  return (
    <div className={styles.contact_bar_wrapper}>
      <div className={styles.contact_bar}>
        <a
          href="https://www.linkedin.com/in/aradhya-srivastava-31247b209/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.icon}
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://github.com/aradhya0530"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.icon}
        >
          <GitHubIcon />
        </a>
        <a
          href="https://www.instagram.com/sri_vas_tava1234/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.icon}
        >
          <InstagramIcon />
        </a>
        <a
          href="https://twitter.com/Aradhya0504"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.icon}
        >
          <TwitterIcon />
        </a>
        <div className={styles.line}></div>
      </div>
      <div className={styles.contact_bar}>
        <a href="mailto:aradhyasrivastava0504@gmail.com" className={styles.email}>
        aradhyasrivastava0504@gmail.com
        </a>
        <div className={styles.line}></div>
      </div>
    </div>
  );
}

export default ContactBar;
