import React from "react";

const AdminUsers = () => {
  const chartData = [50, 40, 30, 20];
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    labels: chartData.categories,
    colors: ["#008FFB", "#00E396", "#FEB019", "#FF4560"],
  };
  return <h1>adminusers</h1>;
};

export default AdminUsers;
