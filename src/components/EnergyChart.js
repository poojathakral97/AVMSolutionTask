import ReactECharts from "echarts-for-react";

function EnergyChart(){

const option={

xAxis:{
type:"category",
data:["M","T","W","T","F","S","Today"]
},

yAxis:{type:"value"},

series:[
{
data:[40,80,30,95,70,35,50],
type:"bar"
}
]

};

return(

<div className="card chart">

<h3>Energy Consumption</h3>

<ReactECharts option={option}/>

</div>

)

}

export default EnergyChart;