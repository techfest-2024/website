import React from "react";
import themeImg from "../red-black.jpeg";
import { List, ListItem, UnorderedList } from "@chakra-ui/react";
import sideimage from "../components/events/sideimage.jsx";
import styles from "./events.module.css";
import { TriangleDownIcon, TriangleUpIcon, StarIcon } from "@chakra-ui/icons";

export default function Events() {
  return (
    <>
      <div className={styles.grid_container}>
        <div className={styles.grid_item1}>
          <div className={styles.overlay}>
            <h1>Code Roulette</h1>
          </div>
        </div>
        <div className={styles.grid_item2}>
          <div className={styles.timer}>Timer:seconds</div>
        </div>
        <div className={styles.grid_item3}>
          <ul className={styles.list}>
            <li className={styles.rules}>
              <u>DESCRIPTION</u>
            </li>
            <li>
              A thrilling and dynamic coding challenge designed to test your
              adaptability, problem-solving skills, and programming prowess! In
              this dynamic coding contest, participants will code in a
              round-robin format, building upon each other's work. Whether
              you're a seasoned developer or a coding enthusiast, this
              competition promises excitement and opportunities to showcase your
              versatility.
            </li>
            <li></li>
            <li className={styles.rules}>
              <u>DETAILS</u>
            </li>
            <li>
              <TriangleDownIcon /> <b>Rounds:</b> 2 Rounds
            </li>
            <li>
              <TriangleDownIcon /> <b>Team Composition: </b> Each team consists
              of 4 members
            </li>
            <li>
              <TriangleDownIcon /> <b>Registration Fee: </b> Rs.200 ( Rs. 50 per
              head)
            </li>
            <li>
              <TriangleDownIcon /> <b>Coding Freedom: </b>Participants are
              allowed to use any programming languages.
            </li>
            <li>
              <TriangleDownIcon /> <b>Platform: </b>HackerRank
            </li>
            <li>
              <TriangleDownIcon /> <b>Mode: </b>Offline
            </li>
            <li>
              <TriangleDownIcon /> <b>Time Limit: </b>40 minutes
            </li>
            <li>
              <TriangleDownIcon /> <b>How Winners are decided: </b>The ranking
              will be decided based on the correctness of solutions, efficiency
              of code, and completion time.
            </li>
            <li className={styles.rules}>
              <u>COMPETITON FLOW</u>
            </li>
            <li>
              <TriangleDownIcon /> <b>Division into Groups:</b> The team will be
              divided into 2 groups of 2 members each:
              <li> Group A: Responsible for the first part of the solution.</li>
              <li>Group B: Responsible for the second part of the solution.</li>
            </li>
            <li>
              <TriangleDownIcon /> <b>Group A Phase:</b>
              <br />
              <b>Isolation:</b> Group A will work in isolation from Group B.
              <br />
              <b>Solution Development:</b> Group A must solve the initial part
              of the challenge within a specified time limit.
              <br />
              <b>No Communication:</b> Group A cannot communicate with Group B
              about their solution.
            </li>
            <li>
              <TriangleDownIcon /> Group A will have to code a part of the
              solution code
            </li>
            <li>
              <TriangleDownIcon /> The other group has to understand which part
              of the solution the former group has solved and then finish the
              rest of the code withion the specified time limit.
            </li>
            <li className={styles.rules}>
              <u>RULES & REGULATIONS</u>
            </li>
            <li>
              <TriangleUpIcon /> Discussing problems or any aspect of the
              problem with other than your teamates will lead to
              disqualification
            </li>
            <li>
              <TriangleUpIcon /> Use of any electronic gadgets during the event
              will lead to disqualification
            </li>

            <li>
              <TriangleUpIcon /> Group A and Group B are strictly prohibited
              from communicating about the challenge or solution during their
              respective phases.
            </li>
            <li>
              <TriangleUpIcon /> Both groups should adhere to good coding
              practices, including clear variable names, comments, and proper
              indentation, to ensure the code is understandable.
            </li>
            <li>
              <TriangleUpIcon /> Both groups must manage their time efficiently
              to ensure they complete their tasks within the allotted time.
            </li>
            <li>
              <TriangleUpIcon />
              The final solution must be submitted before the overall time limit
              expires.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
