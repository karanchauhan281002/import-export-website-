import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";
import logo8 from './search.jpg'

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h3>LOGO</h3>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">About</a>
				<a href="/#">Pages</a>
				<a href="/#">Services</a>
				<a href="/#">Contact</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
				<div className="empty">

				</div>
				
					<div  className="search" >
										
                    < input  type="text"  placeholder="Search.."/>	
					<img src={logo8} className={logo8} alt=""/>	  
				    </div>
				
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;