import Header from "../components/header";

const MainLayout = ({dispatch, user, auth, children, appdata}) => {
    return(<>
        <div className="content">
            <Header/>
            <div id="main" className="home">
                {children}
            </div>
        </div>
    </>)
}

export default MainLayout;