import logo from "../assets/ds-logo.svg";

function Header(){

return(

<div className="header">

<img src={logo} alt="logo" className="logo"/>

<div className="profile">
<img src="https://i.pravatar.cc/40" alt="user"/>
</div>

</div>

)

}

export default Header;