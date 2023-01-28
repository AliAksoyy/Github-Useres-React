import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";


ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);
const Bar3D = ({data}) => {
  
 
 const chartConfigs = {
  type: "bar3d", // The chart type
  width: "100%", // Width of the chart
  height: "400", // Height of the chart
  dataFormat: "json", // Data type
  dataSource: {
    // Chart Configuration
    chart: {
      
            caption :"Most Forked",
            theme: "fusion",
            decimals: 1,
            xAxisName: "Repos",
            xAxisNameFontSize: "16px",
            yAxisNameFontSize: "16px",
            yAxisName: "Forks",
        
        },
        data:data
      }
    }
        return (<ReactFC {...chartConfigs} />);
      }

export default Bar3D



