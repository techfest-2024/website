import React from "react";
import styles from "./layer3.module.css";
import vviet from "../../images/VVIET (1).png";
import vistara from "../../images/Vistara_black.png";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import InstagramIcon from "@mui/icons-material/Instagram";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";

export default function Layer3() {
  return (
    <>
      <div className={styles.card__container}>
        <div className={styles.head__container}>
          <h2 className={styles.Contact}>GET IN TOUCH</h2>
        </div>
        <div className={styles.main_boxes}>
          <div className={styles.sub__contact}>
            <img src={vviet} style={{ width: "35%", marginTop: "20px" }}></img>
            <img
              src={vistara}
              style={{
                width: "35%",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            ></img>
            {/* <EmailIcon
              className={styles.EmailIcon}
              fontSize="large"
            ></EmailIcon>
            <a className={styles.email__text}>
              www.vidyavikasengineering@gmail.com
            </a> */}
          </div>
          <div className={styles.phone}>
            <PhoneIcon
              fontSize="large"
              className={styles.Icon__Phone}
            ></PhoneIcon>
            <p className={styles.text}>Our Coordinators</p>
            <p className={styles.members}>Affan Baig: +91 81979 39032</p>
            <p className={styles.members}>Hitesh Parmar: +91 97404 90947</p>
            <p className={styles.members}>Sabah Sultana: +91 77957 60684</p>
          </div>
          <div className={styles.socials}>
            <ConnectWithoutContactIcon
              fontSize="large"
              className={styles.Icon__Social}
            ></ConnectWithoutContactIcon>
            <p className={styles.text}>Our Socials</p>
            <InstagramIcon
              fontSize="large"
              className={styles.Icon}
            ></InstagramIcon>
            <p className={styles.members}>Instagram</p>
            <EmailIcon fontSize="large" className={styles.Icon}></EmailIcon>
            <p className={styles.members}>E-Mail</p>
          </div>
        </div>
      </div>
    </>
  );
}
