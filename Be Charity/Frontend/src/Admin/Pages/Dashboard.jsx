import React, { useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Chart from "react-apexcharts";

const Dashboard = () => {
  const [date, setDate] = useState(new Date());
  const [chartdata, setData] = useState([
    {
      name: "Category",
      data: [38, 30, 20, 5], // Replace with your actual data
    },
  ]);
  const [options, setOptions] = useState({
    chart: {
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: ["Food", "Pure Water", "Education", "Medical Care"],
      labels: {
        style: {
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      title: {
        text: "Amount (Rupees)",
      },
    },
    colors: ["#008FFB", "#169c71", "#fb9700", "#008FFB"], // You can customize the colors
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
            options={options}
            series={chartdata}
            type="bar"
            width="100%"
            height="100%"
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
          <h6 style={{ textAlign: "center" }}>Pie</h6>
        </GridItem>

        {/* ======================  line chart  ============== */}
        <GridItem
          h="320px"
          colSpan={[1, 1, 1]}
          bg="lightgrey"
          style={{ borderRadius: "10px" }}
        >
          <h6 style={{ textAlign: "center" }}>Line</h6>
        </GridItem>
      </Grid>
    </div>
  );
};

export default Dashboard;
