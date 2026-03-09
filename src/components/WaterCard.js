import drop from "../assets/drop.png";

function WaterCard(){

return(

<div className="card water">

<h3>Water Consumption</h3>

<img src={drop} alt="water drop"/>

<h1>8.42 m³</h1>

<p>↓ 1.2m³ less water used compared to last Tuesday</p>

</div>

)

}

export default WaterCard;