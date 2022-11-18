import React from "react";
import PropTypes from "prop-types";

function Dough(){

	const doughStyle = {
		border: "3px solid grey",
		borderRadius: "8px",
		margin: "5px",
		padding: "5px",
		width: "35%"
	}

	return(
		<React.Fragment>
			<div style={doughStyle}>
				<p>Dough here</p>
			</div>
		</React.Fragment>
	)
}

export default Dough;