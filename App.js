/*
* Header
* - Logo
* - Navbar
* Body
* - Search
* - RestaurantContainer
* - - RestaurantCard
* Footer
* - Copyright
* - Links
* - Address
* - Contact
*/

const Header = () => {
    return (
        <div className="header">
            {/* Logo
            Navbar */}
            <div className="logo">
                <img src="logo.png" alt="Logo"/>
            </div>
            <div className="navbar">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            {/* RestaurantContainer
            --restaurantCard */}
        </div>
    )
}

const Footer = () => {
    return (
        <div className="footer">
            {/* Copyright
            links
            address
            Contact */}
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)
