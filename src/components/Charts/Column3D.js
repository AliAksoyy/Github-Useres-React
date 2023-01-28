import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column3d from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";


ReactFC.fcRoot(FusionCharts, Column3d, FusionTheme);
const Column3D = ({data}) => {
  
 
 const chartConfigs = {
  type: "column3d", // The chart type
  width: "100%", // Width of the chart
  height: "400", // Height of the chart
  dataFormat: "json", // Data type
  dataSource: {
    // Chart Configuration
    chart: {
      
            caption :"Most popular",
            // pieRadius:"45%",
            // subCaption: "Last year",
            // enableSmartLabels= 0,
            // startingAngle= 0,
            // showPercentValues=1,
             decimals: 1,
            // useDataPlotColorForLabels= 1,
             theme: "fusion",
            xAxisName: "Repos",
            xAxisNameFontSize: "16px",
            yAxisNameFontSize: "16px",
            yAxisName: "Stars",
        
        },
        data:data
      }
    }
        return (<ReactFC {...chartConfigs} />);
      }

export default Column3D



