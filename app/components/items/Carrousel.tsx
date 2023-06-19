"use client";

import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Box } from "@mui/material";

type ItemProps = {
  item: { name: string; description: string };
};

export default function CarouselSlider() {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
    {
      name: "Random Name #3",
      description: "Hello World!",
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item({ item }: ItemProps) {
  return (
    <>
      <Box display="flex" justifyContent="space-around">
        <Paper elevation={3} style={{ padding: "1rem" }}>
          <Paper>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <Button className="CheckButton">Check it out!</Button>
          </Paper>
        </Paper>
        <Paper elevation={3} style={{ padding: "1rem" }}>
          <Paper>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <Button className="CheckButton">Check it out!</Button>
          </Paper>
        </Paper>
      </Box>{" "}
    </>
  );
}
