import React, { useContext } from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { GithubContext } from "../../context/context";

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);
const ChartComponent = () => {
  const {repos}=useContext(GithubContext)
  console.log(repos)
 const chartData=repos.map((item)=> {
  return {
    label:"ali",
    value:"beyda"
  }
 })
const chartConfigs = {
  type: "column2d", // The chart type
  width: "400", // Width of the chart
  height: "400", // Height of the chart
  dataFormat: "json", // Data type
  dataSource: {
    // Chart Configuration
    chart: {
      //Set the chart caption
      caption: "Countries With Most Oil Reserves [2017-18]",
      //Set the chart subcaption
      subCaption: "In MMbbl = One Million barrels",
      //Set the x-axis name
      xAxisName: "Country",
      //Set the y-axis name
      yAxisName: "Reserves (MMbbl)",
      numberSuffix: "K",
      //Set the theme for your chart
      theme: "fusion"
    },
    // Chart Data
    data: chartData
  }
};




  return (<ReactFC {...chartConfigs} />);
}

export default ChartComponent

