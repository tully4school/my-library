import React, { Component } from "react";
import "./RTSlider.css";
import Swiper from "swiper";

class RTSlider extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount() {
		let swiper = new Swiper(".swiper-container", {
			effect: "cube",
			grabCursor: true,
			cubeEffect: {
				shadow: true,
				slideShadows: true,
				shadowOffset: 20,
				shadowScale: 0.94
			}
		});
	}
	render() {
		let url = "http://www.fillmurray.com/g/500/500";
		return (
			<div className='swiper-container'>
				<div className='swiper-wrapper'>
					<div className='swiper-slide'>
						<div className='imgBx'>
							<img src={url} />
						</div>
						<div className='content'>
							<h2>
								{this.props.name} <br />
								<span>{this.props.description}</span>
							</h2>
						</div>
					</div>
					<div className='swiper-slide'>
						<div className='imgBx'>
							<img src={url} />
						</div>
						<div className='content'>
							<h2>
								{this.props.name} <br />
								<span>{this.props.description}</span>
							</h2>
						</div>
					</div>
					<div className='swiper-slide'>
						<div className='imgBx'>
							<img src={url} />
						</div>
						<div className='content'>
							<h2>
								{this.props.name} <br />
								<span>{this.props.description}</span>
							</h2>
						</div>
					</div>
					<div className='swiper-slide'>
						<div className='imgBx'>
							<img src={url} />
						</div>
						<div className='content'>
							<h2>
								{this.props.name} <br />
								<span>{this.props.description}</span>
							</h2>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default RTSlider;
