import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Dougnut2d from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";


ReactFC.fcRoot(FusionCharts, Dougnut2d, FusionTheme);
const Doughnut2D = ({data}) => {
  
 
 const chartConfigs = {
  type: "doughnut2d", // The chart type
  width: "100%", // Width of the chart
  height: "400", // Height of the chart
  dataFormat: "json", // Data type
  dataSource: {
    // Chart Configuration
    chart: {
      
            caption :"Stars Per Language",
            dougnutRadius:"45%",
            // subCaption= "Last year",
            // enableSmartLabels= 0,
            // startingAngle= 0,
            showPercentValues:0,
             decimals: 0,
            // useDataPlotColorForLabels= 1,
             theme: "candy"
        },
        data
      }
    }
        return (<ReactFC {...chartConfigs} />);
      }

export default Doughnut2D



