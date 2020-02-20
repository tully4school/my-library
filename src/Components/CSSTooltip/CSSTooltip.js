import React from "react";
import "./CSSTooltip.css";

const ToolTip = props => {
	return (
		<div className='tool-tip'>
			<p>
				Lorem ipsum dolor sit amet{" "}
				<a href='#' data-tool-tip='information about the link displayed'>
					consectetur adipisicing elit
				</a>
				. Nemo distinctio blanditiis quasi? Repudiandae, corrupti ad tempora
				esse laboriosam repellat, eveniet voluptatum similique sit optio vel! Ea
				vel amet iusto officia?
			</p>
		</div>
	);
};
export default ToolTip;
