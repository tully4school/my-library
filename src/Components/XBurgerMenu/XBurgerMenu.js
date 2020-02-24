import React, { Component } from "react";
import "./main.css";

class XHamburgerMenu extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount() {
		const menuBtn = document.querySelector(".menu-btn");
		const hamburger = document.querySelector(".menu-btn__burger");
		const nav = document.querySelector(".nav");
		const menuNav = document.querySelector(".menu-nav");
		const navItems = document.querySelectorAll(".menu-nav__item");

		let showMenu = false;

		menuBtn.addEventListener("click", toggleMenu);

		function toggleMenu() {
			if (!showMenu) {
				hamburger.classList.add("open");
				nav.classList.add("open");
				menuNav.classList.add("open");
				navItems.forEach(item => item.classList.add("open"));
				showMenu = true;
			} else {
				hamburger.classList.remove("open");
				nav.classList.remove("open");
				menuNav.classList.remove("open");
				navItems.forEach(item => item.classList.remove("open"));
				showMenu = false;
			}
		}
	}
	render() {
		return (
			<body>
				<header>
					<div className='menu-btn'>
						<span className='menu-btn__burger'></span>
					</div>
					<nav className='nav'>
						<ul className='menu-nav'>
							<li className='menu-nav__item'>
								<a href='#!' className='menu-nav__link'>
									Home
								</a>
							</li>
							<li className='menu-nav__item'>
								<a href='#!' className='menu-nav__link'>
									About
								</a>
							</li>
							<li className='menu-nav__item'>
								<a href='#!' className='menu-nav__link'>
									Projects
								</a>
							</li>
							<li className='menu-nav__item'>
								<a href='#!' className='menu-nav__link'>
									Links
								</a>
							</li>
							<li className='menu-nav__item'>
								<a href='#!' className='menu-nav__link'>
									Contact
								</a>
							</li>
						</ul>
					</nav>
				</header>
			</body>
		);
	}
}
export default XHamburgerMenu;
