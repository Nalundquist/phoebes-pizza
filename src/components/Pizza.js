import React from "react";
import PropTypes from "prop-types";

function Pizza(props){
	
	const pizzaStyle = {
		margin: "3px",
		marginBottom: "3px",
		borderBottom: "1px solid grey",
		padding: "4px"
	}

	return (
		<React.Fragment>
			<div style={pizzaStyle}>
				<h4>{props.size}</h4>
				<ul>
					{props.toppings.map((topping) =>
						<li>{topping}</li>
					)}
				</ul>	
			</div>
		</React.Fragment>
	)
}

export default Pizza;