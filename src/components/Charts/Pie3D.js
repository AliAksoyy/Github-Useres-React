import React, { useContext } from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Pie3d from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { GithubContext } from "../../context/context";

ReactFC.fcRoot(FusionCharts, Pie3d, FusionTheme);
const Pie3D = ({data}) => {
  const {repos}=useContext(GithubContext)
 
 const chartConfigs = {
  type: "pie3d", // The chart type
  width: "400", // Width of the chart
  height: "400", // Height of the chart
  dataFormat: "json", // Data type
  dataSource: {
    // Chart Configuration
    chart: {
      
            caption :"Languages",
            // subCaption= "Last year",
            // enableSmartLabels= 0,
            // startingAngle= 0,
            // showPercentValues=1,
            // decimals= 1,
            // useDataPlotColorForLabels= 1,
            // theme= fusion
        },
        data
      }
    }
        return (<ReactFC {...chartConfigs} />);
      }

export default Pie3D


