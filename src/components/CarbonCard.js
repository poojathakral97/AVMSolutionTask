import ReactECharts from "echarts-for-react";

function CarbonCard(){

const option={

series:[
{
type:"pie",

radius:["60%","80%"],

data:[
{value:30,name:"Coal"},
{value:20,name:"Hydro"},
{value:20,name:"Nuclear"},
{value:15,name:"Wind"},
{value:15,name:"Solar"}
]
}

]

};

return(

<div className="card">

<h3>Carbon Intensity</h3>

<ReactECharts option={option}/>

</div>

)

}

export default CarbonCard;