import Router from "next/router";


function Header() {

  /* Set the width of the side navigation to 250px */
const openNav = () => {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 */
const closeNav = () => {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

    return(<>
	<header className="header header--hidden">
		<div className="container">
			<div className="row">
				<div className="col-12">
					<div className="header__content">
						<button className="header__menu" type="button">
							<span></span>
							<span></span>
							<span></span>
						</button>
						<a onClick={()=>{Router.push("/")}} className="header__logo">
							<img src="img/logo.svg"/>
						</a>
						<ul className="header__nav">
							<li className="header__nav-item">
                				<a className="header__nav-link" onClick={()=>{Router.push("/")}}>Home</a>
							</li>
							<li className="header__nav-item">
                				<a className="header__nav-link" onClick={()=>{Router.push("/movies/popular")}}>Movies</a>
							</li>
							<li className="header__nav-item">
							  <a className="header__nav-link" onClick={()=>{Router.push("/shows/popular")}}>Shows</a>
							</li>
							<li className="header__nav-item">
								<a className="header__nav-link" onClick={()=>{Router.push("/help")}}>Help</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</header>
    </>)
  }
  
export default Header