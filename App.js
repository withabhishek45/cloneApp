import React from 'react';
import ReactDOM from 'react-dom/client';


const Header = () => {
    return (
        <header className="header">
            <div className="logo-container">
                <div 
                    className="logo" >
                    
                   {/* // src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza" 
                    //alt="Swiggy Logo"  */}
                    <h1>SWIGGY</h1>
                </div>
            </div>
            <nav className="nav-items">
                <ul>
                    <li className="nav-item">Home</li>
                    <li className="nav-item">Offers</li>
                    <li className="nav-item">Help</li>
                    <li className="nav-item">Cart</li>
                </ul>
            </nav>
            <div className="search-container">
                <input 
                    type="text" 
                    className="search-input" 
                    placeholder="Search for restaurants or food"
                />
                <button className="search-btn">Search</button>
            </div>
            <div className="user-container">
                <span className="user-name">User</span>
                <div className="user-icon">👤</div>
            </div>
        </header>
        
        
    );
}

const Body = () => {
    return (
        <div>
            <h2>Welcome to my app!</h2>
            <p>This is a simple React application.</p>
        </div>
    );
}
const Footer = () => {
    return (
        <footer>
            <p>&copy; 2023 My React App</p>
        </footer>
    );
}

const App = () => {
    return (
        <>
        <Header />
        <Body />
        <Footer />


        </>
        
    );  
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
