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
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import "./covid-statistic.styles.css";
import d3legend from "d3-legend";
import { Pie } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";

// var d3legend = require("d3-legend")(d3);
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

// export const data1 = {
//   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//   datasets: [
//     {
//       label: "# of Votes",
//       data: [12, 19, 3, 5, 2, 3],
//       backgroundColor: [
//         "rgba(255, 99, 132, 0.2)",
//         "rgba(54, 162, 235, 0.2)",
//         "rgba(255, 206, 86, 0.2)",
//         "rgba(75, 192, 192, 0.2)",
//         "rgba(153, 102, 255, 0.2)",
//         "rgba(255, 159, 64, 0.2)",
//       ],
//       borderColor: [
//         "rgba(255, 99, 132, 1)",
//         "rgba(54, 162, 235, 1)",
//         "rgba(255, 206, 86, 1)",
//         "rgba(75, 192, 192, 1)",
//         "rgba(153, 102, 255, 1)",
//         "rgba(255, 159, 64, 1)",
//       ],
//       borderWidth: 1,
//     },
//   ],
// };

export const data1 = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

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

function csvToJSON(csv) {
  var lines = csv.split("\n");
  var result = [];
  var headers;
  headers = lines[0].split(",");

  for (var i = 1; i < lines.length; i++) {
    var obj = {};

    if (lines[i] == undefined || lines[i].trim() == "") {
      continue;
    }

    var words = lines[i].split(",");
    for (var j = 0; j < words.length; j++) {
      obj[headers[j].trim()] = words[j];
    }

    result.push(obj);
  }
  console.log(result);
}

export default function VacStat() {
  const [value, setValue] = useState(1);

  const handleChange = (val) => setValue(val);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        // width: value === 2 ? 500 : "100%",
        ...(value === 2 && { width: 500 }),
        margin: "auto",
      }}
    >
      {value === 1 && (
        <Bar classname="bardiagram" options={options} data={data} />
      )}
      {value === 2 && (
        <Doughnut
          data={data1}
          // width={"500px"}
          // height={"500px"}
          classname="piechart"
        />
      )}

      <div class="button-group">
        <ToggleButtonGroup
          type="radio"
          name="options"
          defaultValue={1}
          value={value}
          onChange={handleChange}
        >
          <ToggleButton
            variant="outline-primary"
            classnmae="radio-button-st"
            id="tbg-radio-1"
            value={1}
          >
            Bar diagram
          </ToggleButton>
          <ToggleButton
            variant="outline-primary"
            classnmae="radio-button-st"
            id="tbg-radio-2"
            value={2}
          >
            Pie chart
          </ToggleButton>
          {/* <ToggleButton
            variant="outline-primary"
            classnmae="radio-button-st"
            id="tbg-radio-3"
            value={3}
          >
            Radio 3
          </ToggleButton> */}
        </ToggleButtonGroup>
      </div>
    </div>
  );
}
