import React from "react";
import SDC from "../Components/Cards/SlideDownCard/SlideDownCard";

export default { title: "Cards" };

export const SlideDownCard = props => (
	<SDC
		header='Bill'
		header2='Murray'
		header3='Rocks!'
		isrc='http://www.fillmurray.com/g/300/150'
		btnText='Read More'
	/>
);
