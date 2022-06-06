import React, { Component, useState, useRef, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Card from "react-bootstrap/Card";
// import banner from "./maxresdefault.jpg";
// import regions from "./Lviv_regions.svg";
import * as d3 from "d3";
import rd3 from "react-d3-library";
import { queue } from "d3-queue";
// import { tip } from "d3-tip";
// import { tip as d3tip } from "d3-v6-tip";
import d3Tip from "d3-tip";
import "./covid-statistic.styles.css";
import d3legend from "d3-legend";
// var d3legend = require("d3-legend")(d3);
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      text: "COVID статистика у Львівській області",
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = [
  "Львів",
  "Стрий",
  "Самбір",
  "Червоноград",
  "Золочів",
  "Дрогобич",
  "Яворів",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Cases",
      data: [1825, 140, 179, 212, 138, 233, 66],
      backgroundColor: "rgb(255, 99, 132)",
    },
    {
      label: "Cured",
      data: [108, 26, 59, 36, 17, 15, 34],
      backgroundColor: "rgb(75, 192, 192)",
    },
    {
      label: "Deaths",
      data: [30, 10, 20, 10, 10, 15, 10],
      backgroundColor: "rgb(0, 0, 0)",
    },
  ],
};

export default function CovidStat() {
  return <Bar options={options} data={data} />;
}
