import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Tip from "./Components/CSSTooltip/CSSTooltip";

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<Tip />
			</header>
		</div>
	);
}

export default App;
