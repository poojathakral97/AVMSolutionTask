import ReactECharts from "echarts-for-react";

function LightsCard(){

const option = {

series:[
{
type:"gauge",
startAngle:200,
endAngle:-20,
progress:{show:true,width:12},
axisLine:{lineStyle:{width:12}},
pointer:{show:false},
detail:{formatter:"{value}k"},
data:[{value:4300}]
}
]

};

return(

<div className="card">

<h3>Lights</h3>

<ReactECharts option={option} />

</div>

)

}

export default LightsCard;