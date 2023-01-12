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


const sampleSeries = {
  name: "test1",
  columns: ["time", "value"],
  points: [],
};

let seriesX = JSON.parse(JSON.stringify(sampleSeries));


const MainMenu = (props) => {
  const [name, setName] = useState(props.name);
  const [mainX, setmainX] = useState();
  const [isLoading, setLoading] = useState(true);

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
          response.forEach((element) => {
            let timeConvert = new Date(0);
            timeConvert.setUTCSeconds(element.Time);
            // TODO: refactor this line of code
            let test = timeConvert.getTime();
            console.log(timeConvert);
            seriesX["points"].push([test, element.X]);
          });

          if (isLoading) {
            console.log(seriesX);
            setmainX(new TimeSeries(seriesX));

            console.log("running");
            setLoading(false);
          }
        })
        .catch(() => console.log("something went wrong!"));
    }
    return () => {
      is_mounted = false;
    };
  }, []);

  if (isLoading) {
    return <p>Loading!</p>;
  }

  return (
    <div>
      <ChartContainer timeRange={mainX.timerange()} width={800}>
        <ChartRow height="200">
          <YAxis
            id="axis1"
            label="X"
            min={-1}
            max={7}
            width="60"
            type="linear"
            format=",.2f"
          />
          <Charts>
            <LineChart axis="axis1" series={mainX} column={["X"]} />
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
