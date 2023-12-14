import React, { useEffect, useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Chart } from "react-google-charts";

const Dashboard = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {}, []);

  const [ChartGlobalData, setData] = useState([
    ["Category", "Goal", "Raised"],
    ["Medical Care", 1000, 400],
    ["Healthy Food", 1170, 460],
    ["Pure Water", 660, 1120],
    ["Education", 1030, 540],
  ]);
  const [baroptions, setOptions] = useState({
    chart: {
      title: "Empowering Change: Fund Collection Report",
      subtitle: "Transforming Contributions into Impact",
    },
  });
  const [pieOptions, setPieoptions] = useState({
    title: "3D representation of Funds raised",
    is3D: true,
  });

  const [lineOPtions, setLineOptions] = useState({
    title: "Company Performance",
    curveType: "function",
    legend: { position: "bottom" },
  });

  const onChange = (newDate) => {
    setDate(newDate);
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Dashboard</h1>
      <Grid
        templateRows="repeat(2, 1fr)"
        // templateColumns="repeat(2, 1fr)"
        templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)"]}
        gap={4}
      >
        <GridItem
          h="320px"
          colSpan={[1, 1, 1]}
          bg="lightgrey"
          style={{ borderRadius: "10px" }}
        >
          <h6 style={{ textAlign: "center" }}>calender</h6>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Calendar onChange={onChange} value={date} />
          </div>
        </GridItem>

        {/* ================  Bar chart   ========================= */}
        <GridItem
          h="320px"
          colSpan={[1, 1, 1]}
          bg="lightgrey"
          style={{ borderRadius: "10px" }}
        >
          <Chart
            chartType="Bar"
            width="100%"
            height="100%"
            data={ChartGlobalData}
            options={baroptions}
          />

          {/* <h6 style={{ textAlign: "center" }}>Bar</h6> */}
        </GridItem>

        {/* ====================  Pie chart  =============== */}
        <GridItem
          h="320px"
          colSpan={[1, 1, 1]}
          bg="lightgrey"
          style={{ borderRadius: "10px" }}
        >
          <Chart
            chartType="PieChart"
            data={ChartGlobalData}
            options={pieOptions}
            width={"100%"}
            height={"100%"}
          />
          {/* <h6 style={{ textAlign: "center" }}>Pie</h6> */}
        </GridItem>

        {/* ======================  line chart  ============== */}
        <GridItem
          h="320px"
          colSpan={[1, 1, 1]}
          bg="lightgrey"
          style={{ borderRadius: "10px" }}
        >
          <Chart
            chartType="LineChart"
            width="100%"
            height="100%"
            data={ChartGlobalData}
            options={lineOPtions}
          />
          {/* <h6 style={{ textAlign: "center" }}>Line</h6> */}
        </GridItem>
      </Grid>
    </div>
  );
};

export default Dashboard;
