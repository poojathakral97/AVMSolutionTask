import home from "../assets/nav-icons/home.svg";
import pie from "../assets/nav-icons/pie.svg";
import tiles from "../assets/nav-icons/tiles.svg";

function Sidebar(){

return(

<div className="sidebar">

<div className="menu">
<img src={home} alt="home"/>
<p>Home</p>
</div>

<div className="menu active">
<img src={pie} alt="analyse"/>
<p>Analyse</p>
</div>

<div className="menu">
<img src={tiles} alt="control"/>
<p>Control</p>
</div>

</div>

)

}

export default Sidebar;