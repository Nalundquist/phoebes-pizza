import React from "react";
import PropTypes from "prop-types";

function Pizza(){
	
	const pizzaStyle = {
		margin: "3px",
		marginBottom: "3px",
		borderBottom: "1px solid grey",
		padding: "4px"
	}

	return (
		<React.Fragment>
			<div style={pizzaStyle}>
				<p>I'm one pizza</p>	
			</div>
		</React.Fragment>
	)
}

export default Pizza;