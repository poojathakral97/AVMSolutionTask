import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import LightsCard from "../components/LightsCard";
import WaterCard from "../components/WaterCard";
import CarbonCard from "../components/CarbonCard";
import EnergyChart from "../components/EnergyChart";
import FootfallChart from "../components/FootfallChart";

function Dashboard(){

return(

<div className="dashboard">

<Sidebar/>

<div className="main">

<Header/>

<div className="cards">

<LightsCard/>
<WaterCard/>
<CarbonCard/>

</div>

<div className="charts">

<EnergyChart/>
<FootfallChart/>

</div>

</div>

</div>

)

}

export default Dashboard;