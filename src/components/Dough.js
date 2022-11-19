import React from "react";
import PropTypes from "prop-types";

function Dough(props){

	const doughStyle = {
		border: "3px solid grey",
		borderRadius: "8px",
		margin: "5px",
		padding: "5px",
		width: "35%"
	}

	let doughWarning = null;

	if (props.needDough){
		doughWarning = <p style={{color: "red"}}><strong>Please buy more dough, we do not have enough!</strong></p>
	}

	return(
		<React.Fragment>
			<div style={doughStyle}>
				<p>Dough: {props.doughAmount}</p>
				{doughWarning}
				<button onClick={props.buyMoreDough}>Buy More Dough</button>
			</div>
		</React.Fragment>
	)
}

Dough.propTypes = {
	needDough: PropTypes.bool,
	doughAmount: PropTypes.number,
	buyMoreDough: PropTypes.func
}

export default Dough;