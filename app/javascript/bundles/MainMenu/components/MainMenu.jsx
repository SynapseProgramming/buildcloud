import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import style from "./MainMenu.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { TimeSeries, TimeRange } from "pondjs";
import {
  Charts,
  ChartContainer,
  ChartRow,
  YAxis,
  LineChart,
} from "react-timeseries-charts";

const data = {
  name: "test1",
  columns: ["time", "value"],
  points: [
    [12, 1],
    [13, 3],
  ],
};

const sampleSeries = {
  name: "test1",
  columns: ["time", "value"],
  points: [],
};

let seriesX = JSON.parse(JSON.stringify(sampleSeries));

const series1 = new TimeSeries(data);

const MainMenu = (props) => {
  const [name, setName] = useState(props.name);

  const [mainX, setmainX] = useState(new TimeSeries(data));

  const [isLoading, setLoading] = useState(true);

  // const [incomingData, setin]

  useEffect(() => {
    const url = "api/v1/sensors/read";
    let is_mounted = true;
    if (is_mounted) {
      fetch(url)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Network response was not ok.");
        })
        .then((response) => {
          console.log("ran here!");
          // print out incoming data
          //TODO: create a new series for each x,y,z value
          response.forEach((element) => {
            // console.log("X value" + element.X);
            // console.log("Y value" + element.Y);
            seriesX["points"].push([element.Time, element.X]);
          });
          // console.log(seriesX);
          if (isLoading) {

          console.log(seriesX);
            setmainX(new TimeSeries(seriesX));

          console.log("running");
            setLoading(false);
          }
          // MAIN = new TimeSeries(seriesX);
        })
        .catch(() => console.log("something went wrong!"));
    }
    return () => {
      // setmainX(new TimeSeries(data));

      console.log("finished");

      is_mounted = false;
    };
  },[]);

  if (isLoading) {
    return <p>Loading!</p>;
  }

  return (
    <div>
      {/* <h3>this is a test</h3>
      <p>
      <a href="#" class="btn btn-primary my-1">Main call to action</a>
      <a href="#" class="btn btn-secondary my-1">Secondary action</a>
    </p> */}

      <ChartContainer timeRange={mainX.timerange()} width={800}>
        <ChartRow height="200">
          <YAxis
            id="axis1"
            label="AUD"
            min={-1}
            max={7}
            width="60"
            type="linear"
            format=",.2f"
          />
          <Charts>
            <LineChart axis="axis1" series={mainX} column={["aud"]} />
          </Charts>
        </ChartRow>
      </ChartContainer>
    </div>
  );
};

MainMenu.propTypes = {
  name: PropTypes.string.isRequired, // this is passed from the Rails view
};

export default MainMenu;
