import Router from "next/router";

function Header() {
  const openNav = () => {
    document.getElementById("main").style.marginLeft = "230px";
    document.getElementById("mySidebar").style.width = "230px";
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("openNav").style.display = "none";
  };
  const closeNav = () => {
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("openNav").style.display = "inline-block";
  };

  return (
    <>
      <header className="header header--hidden">
        <div className="container-fluid">
          <div className="row">
            <button className="w3-button w3-teal w3-xlarge" >&#9776;</button>
            <div className="col-12">
              <div className="search__item">
                <input type="text" placeholder="" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="w3-sidebar">
        <button className="w3-bar-item w3-button w3-large"> Close &times;</button>
        <a onClick={()=>{Router.push("/")}} className="header__logo">
          <img src="../assets/images/logo.svg"/>
        </a>
        <ul className="header__nav">
          <li className="header__nav-item">
            <a className="header__nav-link" onClick={()=>{Router.push("/")}}>Home</a>
          </li>
          <li className="header__nav-item">
              <a className="header__nav-link" onClick={()=>{Router.push("/movies/popular")}}>Movies</a>
          </li>
          <li className="header__nav-item">
            <a className="header__nav-link" onClick={()=>{Router.push("/help")}}>Help</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
