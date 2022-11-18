import React from "react";
import PropTypes from "prop-types";
import PizzaList from "./PizzaList";
import Dough from "./Dough";

class PizzaControl extends React.Component{

	// constructor(props){
	// 	super(props);
	// 	this.state = {
	// 		dough: 0,
	// 	}
	// }
	render(){

		const bodyStyle = {
			margin: "10px",
			padding: "5px",
			display: "flex",
			flexDirection: "row"
		}
		return (
			<React.Fragment>
				<div style={bodyStyle}>
					<PizzaList />
					<Dough />
				</div>
			</React.Fragment>
		)
	}
}

export default PizzaControl;