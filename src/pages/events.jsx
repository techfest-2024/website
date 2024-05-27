import React from "react";
import themeImg from "../red-black.jpeg";
import { List, ListItem, UnorderedList } from "@chakra-ui/react";

export default function Events() {
  return (
    <div className="grid-container">
      <div className="container">
        <h1 className="h1tag">CODE ROULETTE</h1>
        <img className="image" src={themeImg} alt="Theme" />
      </div>
      <div className="RightEle">
        <div className="Timer">
          <h2>Countdown</h2>
          {/* create a box here */}
        </div>
        <div className="lists">
          <UnorderedList className="item3">
            <ListItem>
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Accusamus natus, unde voluptatum sint quia ea
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            </ListItem>
            <ListItem>
              Consectetur adipiscing elit Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Esse blanditiis dolorum, inventore
              quos possimus sed deleniti ex eaque nesciunt neque illum
            </ListItem>
            <ListItem>
              Integer molestie lorem at massa Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Quod tempora laboriosam assumenda
            </ListItem>
            <ListItem>
              Facilisis in pretium nisl aliquet Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Rerum debitis tempora aliquam ipsum
            </ListItem>
          </UnorderedList>
        </div>
      </div>
    </div>
  );
}
