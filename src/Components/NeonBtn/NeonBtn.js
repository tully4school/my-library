import React from "react";
import "./NeonBtn.css";

const NeonBtn = props => {
	return (
		<div className='bodyish'>
			<div className='NeonBtn'>
				<a href=''>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					{props.name}
				</a>
				<a href=''>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					{props.name}
				</a>
				<a href=''>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					{props.name}
				</a>
			</div>
		</div>
	);
};
export default NeonBtn;
