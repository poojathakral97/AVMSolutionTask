import ReactECharts from "echarts-for-react";

function FootfallChart(){

const option={

xAxis:{
type:"category",
data:["M","T","W","T","F","S","Today"]
},

yAxis:{type:"value"},

series:[
{
data:[130,120,100,125,110,95,135],
type:"line",
smooth:true
}
]

};

return(

<div className="card chart">

<h3>Footfall</h3>

<ReactECharts option={option}/>

</div>

)

}

export default FootfallChart;