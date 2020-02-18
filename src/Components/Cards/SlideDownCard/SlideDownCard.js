import React from "react";
import "./SlideDownCard.css";

const SlideDownCard = props => {
	return (
		<div className='SDC'>
			<div className='container'>
				<div className='card'>
					<div className='face face1'>
						<div className='content'>
							<img src={props.isrc} alt='' />
							<h3>{props.header}</h3>
						</div>
					</div>
					<div className='face face2'>
						<div className='content'>
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
								fugit vero velit, maxime quis illo nulla amet impedit omnis
								officiis optio quo corporis dolorem quod sint odio.
								Perspiciatis, dignissimos optio!
							</p>
							<a href='#'>{props.btnText}</a>
						</div>
					</div>
				</div>
				<div className='card'>
					<div className='face face1'>
						<div className='content'>
							<img src={props.isrc} alt='' />
							<h3>{props.header2}</h3>
						</div>
					</div>
					<div className='face face2'>
						<div className='content'>
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
								fugit vero velit, maxime quis illo nulla amet impedit omnis
								officiis optio quo corporis dolorem quod sint odio.
								Perspiciatis, dignissimos optio!
							</p>
							<a href='#'>{props.btnText}</a>
						</div>
					</div>
				</div>
				<div className='card'>
					<div className='face face1'>
						<div className='content'>
							<img src={props.isrc} alt='' />
							<h3>{props.header3}</h3>
						</div>
					</div>
					<div className='face face2'>
						<div className='content'>
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
								fugit vero velit, maxime quis illo nulla amet impedit omnis
								officiis optio quo corporis dolorem quod sint odio.
								Perspiciatis, dignissimos optio!
							</p>
							<a href='#'>{props.btnText}</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SlideDownCard;
