
import {SciChartSurface} from "scichart/Charting/Visuals/SciChartSurface";
import {NumericAxis} from "scichart/Charting/Visuals/Axis/NumericAxis";
async function initSciChart() {
    
    const {sciChartSurface, wasmContext} = await SciChartSurface.create("scichart-root");
    // Create an X,Y Axis and add to the chart
    const xAxis = new NumericAxis(wasmContext);
    const yAxis = new NumericAxis(wasmContext);
   
    sciChartSurface.xAxes.add(xAxis);
    sciChartSurface.yAxes.add(yAxis);
    // That's it! You just created your first SciChartSurface!
   
}
initSciChart();

                